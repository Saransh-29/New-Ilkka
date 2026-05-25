import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function MolecularScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const W = mount.clientWidth || 600;
    const H = mount.clientHeight || 500;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, W / H, 0.1, 200);
    camera.position.set(0, 0, 22);

    scene.add(new THREE.AmbientLight(0xd8ece3, 1.6));
    const dir = new THREE.DirectionalLight(0xffffff, 2.0);
    dir.position.set(10, 20, 15);
    scene.add(dir);
    const back = new THREE.DirectionalLight(0xa8c8b6, 0.9);
    back.position.set(-15, -10, -10);
    scene.add(back);
    const pt = new THREE.PointLight(0x6f9a84, 3, 60);
    pt.position.set(0, 5, 8);
    scene.add(pt);

    const palette = [0x2d5a42, 0x6f9a84, 0xa8c8b6, 0x152b1f, 0xd8ece3];

    // ── Particles ──
    interface P { mesh: THREE.Mesh; vx: number; vy: number; vz: number; phase: number; sp: number }
    const particles: P[] = [];
    for (let i = 0; i < 24; i++) {
      const r = Math.random() * 0.38 + 0.1;
      const mat = new THREE.MeshPhysicalMaterial({
        color: palette[i % palette.length],
        roughness: 0.18, metalness: 0.08,
        transmission: i % 4 === 0 ? 0.6 : 0,
        transparent: i % 4 === 0, opacity: 0.72,
      });
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 24), mat);
      mesh.position.set(Math.random() * 12 + 3, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 6);
      scene.add(mesh);
      particles.push({ mesh, vx: (Math.random() - 0.5) * 0.014, vy: (Math.random() - 0.5) * 0.014, vz: (Math.random() - 0.5) * 0.006, phase: Math.random() * Math.PI * 2, sp: Math.random() * 0.8 + 0.4 });
    }

    // ── Connection lines ──
    const lineGroup = new THREE.Group();
    scene.add(lineGroup);
    let lineTick = 0;
    const rebuildLines = () => {
      lineGroup.clear();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = particles[i].mesh.position.distanceTo(particles[j].mesh.position);
          if (d < 7) {
            const geo = new THREE.BufferGeometry().setFromPoints([particles[i].mesh.position.clone(), particles[j].mesh.position.clone()]);
            const mat = new THREE.LineBasicMaterial({ color: 0x6f9a84, transparent: true, opacity: (1 - d / 7) * 0.22 });
            lineGroup.add(new THREE.Line(geo, mat));
          }
        }
      }
    };

    // ── DNA Helix ──
    const helix = new THREE.Group();
    helix.position.set(8, 0, -4);
    scene.add(helix);
    const hm0 = new THREE.MeshPhysicalMaterial({ color: 0x2d5a42, roughness: 0.3, metalness: 0.12 });
    const hm1 = new THREE.MeshPhysicalMaterial({ color: 0xa8c8b6, roughness: 0.3, metalness: 0.08 });
    const rm  = new THREE.MeshPhysicalMaterial({ color: 0x6f9a84, roughness: 0.5, transparent: true, opacity: 0.55 });
    for (let i = 0; i < 44; i++) {
      const t = i / 44, ang = t * Math.PI * 6, y = (t - 0.5) * 13, rad = 1.3;
      const s0 = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 12), hm0.clone());
      s0.position.set(Math.cos(ang) * rad, y, Math.sin(ang) * rad);
      const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 12), hm1.clone());
      s1.position.set(Math.cos(ang + Math.PI) * rad, y, Math.sin(ang + Math.PI) * rad);
      helix.add(s0, s1);
      if (i % 5 === 0) {
        const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, rad * 2, 8), rm.clone());
        rung.position.set(0, y, 0); rung.rotation.z = Math.PI / 2; rung.rotation.y = ang;
        helix.add(rung);
      }
    }

    // ── Capsules ──
    interface Cap { group: THREE.Group; vx: number; vy: number; rx: number; ry: number; rz: number }
    const caps: Cap[] = [];
    const capColors = [0x2d5a42, 0x6f9a84, 0xa8c8b6, 0x1e3d2c, 0xeef6f1];
    for (let i = 0; i < 7; i++) {
      const g = new THREE.Group();
      const c = capColors[i % capColors.length];
      const m = new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.1, metalness: 0.04, transmission: 0.5, transparent: true, opacity: 0.75 });
      const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.6, 32), m);
      const top = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 12), m.clone());
      top.position.y = 0.3;
      const bot = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 12), m.clone());
      bot.position.y = -0.3;
      g.add(cyl, top, bot);
      g.scale.setScalar(Math.random() * 1.2 + 1.2);
      g.position.set(Math.random() * 10 + 4, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 5);
      g.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      scene.add(g);
      caps.push({ group: g, vx: (Math.random() - 0.5) * 0.009, vy: (Math.random() - 0.5) * 0.009, rx: (Math.random() - 0.5) * 0.005, ry: (Math.random() - 0.5) * 0.005, rz: (Math.random() - 0.5) * 0.003 });
    }

    // ── Large glass sphere ──
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(3, 64, 64),
      new THREE.MeshPhysicalMaterial({ color: 0xd8ece3, roughness: 0, metalness: 0, transmission: 0.96, thickness: 5, transparent: true, opacity: 0.28 })
    );
    sphere.position.set(5, 1, -3);
    scene.add(sphere);

    // ── Mouse ──
    let mx2 = 0, my2 = 0;
    const onMouse = (e: MouseEvent) => { mx2 = (e.clientX / window.innerWidth - 0.5) * 2; my2 = (e.clientY / window.innerHeight - 0.5) * 2; };
    window.addEventListener('mousemove', onMouse);

    // ── Resize ──
    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    let t = 0, rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.012;
      camera.position.x += (mx2 * 2.5 - camera.position.x) * 0.04;
      camera.position.y += (-my2 * 1.5 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      particles.forEach(p => {
        p.mesh.position.x += p.vx; p.mesh.position.y += p.vy + Math.sin(t * p.sp + p.phase) * 0.004; p.mesh.position.z += p.vz;
        if (p.mesh.position.x < 1 || p.mesh.position.x > 14) p.vx *= -1;
        if (Math.abs(p.mesh.position.y) > 9)  p.vy *= -1;
        if (Math.abs(p.mesh.position.z) > 5)  p.vz *= -1;
      });

      lineTick++;
      if (lineTick % 3 === 0) rebuildLines();

      caps.forEach(c => {
        c.group.position.x += c.vx; c.group.position.y += c.vy + Math.sin(t * 0.4) * 0.003;
        c.group.rotation.x += c.rx; c.group.rotation.y += c.ry; c.group.rotation.z += c.rz;
        if (c.group.position.x < 2 || c.group.position.x > 12) c.vx *= -1;
        if (Math.abs(c.group.position.y) > 9)  c.vy *= -1;
      });

      helix.rotation.y = t * 0.16;
      sphere.scale.setScalar(1 + Math.sin(t * 0.65) * 0.035);
      pt.position.x = Math.sin(t * 0.5) * 9;
      pt.position.z = Math.cos(t * 0.5) * 9;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} />;
}