import { useMemo, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { CATEGORIES, PRODUCTS } from '../lib/data';
import type { Product } from '../types';
import './Products.css';

export default function Products() {
  const { ref: r1, visible: v1 } = useReveal();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchCat = category === 'All' || p.category === category;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <main className="page">
      <div className="page-hero">
        <div className="container">
          <div className="tag">Product Portfolio</div>
          <h1 className="display">
            Therapies That
            <br />
            <em>Transform Lives</em>
          </h1>
          <p className="lead">
            High-quality, affordable formulations in Gynaecology and Infertility — from the ILKKA 2026 portfolio of tablets,
            capsules, syrups, sachets, and more for the domestic Indian market.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div ref={r1} className={`reveal ${v1 ? 'visible' : ''}`}>
            <div className="products-toolbar">
              <div className="search-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="search"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="products-count">{filtered.length} products</div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`btn ${category === cat ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setCategory(cat)}
                  style={{ padding: '8px 18px', fontSize: '0.75rem' }}
                >
                  <span>
                    {cat === 'All' ? 'All' : cat === 'gynaecology' ? 'Gynaecology' : 'Infertility'}
                  </span>
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <p>No products match your search.</p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setQuery('');
                    setCategory('All');
                  }}
                >
                  <span>Clear filters</span>
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filtered.map((p, i) => (
                  <div
                    key={p.id}
                    role="button"
                    tabIndex={0}
                    className={`card product-full-card reveal d${(i % 3) + 1} ${v1 ? 'visible' : ''}`}
                    onClick={() => setSelected(p)}
                    onKeyDown={(e) => e.key === 'Enter' && setSelected(p)}
                  >
                    <div className="pfc-img" style={{ background: p.color }}>
                      {p.image ? (
                        <img src={p.image} alt={p.name} className="pfc-photo" />
                      ) : (
                        <div className="pfc-circle" />
                      )}
                    </div>
                    <div className="pfc-body">
                      <div className="pfc-name">{p.name}</div>
                      <div className="pfc-comp">
                        {p.form ? `${p.form} · ` : ''}
                        {p.composition}
                      </div>
                      <p className="pfc-desc">{p.description}</p>
                      <div className="pfc-footer">
                        <span className="pfc-ind">{p.indication}</span>
                        <span className="pfc-btn">Details →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)} role="presentation">
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >
            <button type="button" className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
              ✕
            </button>
            <div className="modal-header" style={{ background: selected.color }}>
              {selected.image && <img src={selected.image} alt="" className="modal-product-img" />}
            </div>
            <div className="modal-body">
              <div className="tag">{selected.tag}</div>
              <h2 id="product-modal-title" className="modal-title">
                {selected.name}
              </h2>
              <p className="modal-desc">{selected.description}</p>
              <div className="modal-info">
                {selected.form && (
                  <div>
                    <span>Dosage Form</span>
                    <p>{selected.form}</p>
                  </div>
                )}
                <div>
                  <span>Composition</span>
                  <p>{selected.composition}</p>
                </div>
                <div>
                  <span>Indication</span>
                  <p>{selected.indication}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
