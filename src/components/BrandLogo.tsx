import '../styles/brand-logo.css';

type BrandLogoProps = {
  className?: string;
};

export default function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <img
      src="/ilkka-logo.png"
      alt="ILKKA Healthcare Private Limited"
      className={`brand-logo ${className}`.trim()}
    />
  );
}
