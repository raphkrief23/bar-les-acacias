const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">Bar les Acacias</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          88 Bd Gassendi, 83000 Toulon
        </p>
        <a href="tel:+33787381492" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 7 87 38 14 92
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} Bar les Acacias. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
