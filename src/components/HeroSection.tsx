import heroChef from "@/assets/hero-chef.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroChef}
        alt="Bar les Acacias"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-body text-primary-foreground/80 tracking-[0.4em] uppercase text-sm mb-6 animate-[fadeSlideUp_1s_0.3s_both]">
          Ristorante Italiano
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-medium mb-6 leading-tight animate-[fadeSlideUp_1s_0.6s_both]">
          Bar les Acacias
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mb-6 animate-[growWidth_0.8s_1s_both]" />
        <a
          href="#contact"
          className="inline-block px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-body text-sm tracking-[0.2em] uppercase hover:bg-primary-foreground/10 hover:tracking-[0.3em] transition-all duration-500 animate-[fadeSlideUp_1s_1.5s_both]"
        >
          Réserver
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 bg-primary-foreground/40" />
      </div>
    </section>
  );
};

export default HeroSection;
