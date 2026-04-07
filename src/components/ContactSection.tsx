import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const schedule = [
  { day: "Lundi", hours: "Fermé" },
  { day: "Mardi", hours: "Fermé" },
  { day: "Mercredi", hours: "Fermé" },
  { day: "Jeudi", hours: "Fermé" },
  { day: "Vendredi", hours: "Fermé" },
  { day: "Samedi", hours: "Fermé" },
  { day: "Dimanche", hours: "Fermé" },
];

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=place_id:ChIJ57uz4aIbyRIRvrJkvNYqnWU&output=embed";

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal();
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            INFORMATION
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-card-foreground">
            Nous trouver
          </h2>
        </div>

        <div
          ref={mapRef}
          className={`mb-16 transition-all duration-700 ${mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Restaurant"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div
            ref={leftRef}
            className={`space-y-8 transition-all duration-700 ${leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div>
              <h3 className="font-heading text-lg text-card-foreground mb-3">Adresse</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                88 Bd Gassendi<br />
                83000 Toulon
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg text-card-foreground mb-3">Téléphone</h3>
              <a
                href="tel:+33787381492"
                className="text-primary font-body tracking-wide hover:text-terracotta hover:tracking-wider transition-all duration-300"
              >
                +33 7 87 38 14 92
              </a>
            </div>
            <div>
              <h3 className="font-heading text-lg text-card-foreground mb-3">Email</h3>
              <a
                href="mailto:contact@88-bd-gassendi.fr"
                className="text-primary font-body tracking-wide hover:text-terracotta hover:tracking-wider transition-all duration-300"
              >
                contact@88-bd-gassendi.fr
              </a>
            </div>
          </div>
          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-200 ${rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h3 className="font-heading text-lg text-card-foreground mb-4">Horaires</h3>
            <div className="space-y-3">
              {schedule.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline border-b border-border pb-2 hover:border-primary/30 transition-colors duration-300"
                >
                  <span className="font-body text-sm text-card-foreground">{s.day}</span>
                  <span className={`font-body text-sm font-light ${s.hours === "Fermé" ? "text-primary" : "text-muted-foreground"}`}>
                    {s.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
