import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className={`font-heading text-xl tracking-wide transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          Bar les Acacias
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["carte", "avis", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={`font-body text-xs tracking-[0.2em] uppercase transition-colors ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {s === "carte" ? "La Carte" : s === "avis" ? "Avis" : "Contact"}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className={`hidden md:inline-block font-body text-xs tracking-[0.15em] uppercase border px-4 py-2 transition-colors ${
            scrolled
              ? "border-foreground/20 text-foreground hover:bg-foreground/5"
              : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          }`}
        >
          Réserver
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border px-6 py-6 space-y-4">
          {["carte", "avis", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={() => setMenuOpen(false)}
              className="block font-body text-sm tracking-[0.15em] uppercase text-foreground"
            >
              {s === "carte" ? "La Carte" : s === "avis" ? "Avis" : "Contact"}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block font-body text-sm tracking-[0.15em] uppercase text-terracotta">
            Réserver
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
