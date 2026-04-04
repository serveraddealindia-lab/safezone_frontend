import Header from './Header';
import Footer from './Footer';

export default function SiteLayout({ children, mainClassName = '' }) {
  return (
    <div className="sz-public min-h-screen bg-[var(--sz-surface)] text-[var(--sz-ink)]">
      <Header />
      <main className={`pt-20 ${mainClassName}`.trim()}>{children}</main>
      <Footer />
    </div>
  );
}

