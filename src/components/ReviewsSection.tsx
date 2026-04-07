import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  {
    name: "Jacques Goffinon de Silhouette",
    date: "Février 2026",
    rating: 2,
    title: "Petit bar brasserie avec un accueil sympa et un ca",
    text: "Petit bar brasserie avec un accueil sympa et un cadre plus que rustique. Des plats de \"famille\" simples pour manger rapidement. Une clientèle de fidèles .",
  },
  {
    name: "Dominique Elie",
    date: "Septembre 2025",
    rating: 5,
    title: "Endroit sympathique, les patrons très souriants, c",
    text: "Endroit sympathique, les patrons très souriants, cuisine traditionnelle très très bonnes je recommande",
  },
  {
    name: "Jean-Philippe NICOLAS",
    date: "Février 2023",
    rating: 5,
    title: "On y mange très très bien ! Un rapport qualité pri",
    text: "On y mange très très bien ! Un rapport qualité prix parfait. Tout est fait maison par le patron et la patronne. Cette dernière qui se dedouble au service avec un sourire éclatant quelque soit le monde à servir. Certes des fois le patron donne la main au service aussi. Lieu à connaître avec des plats du jour qui sortent souvent de l'ordinaire.",
  },
  {
    name: "jerome BERLUTI",
    date: "Septembre 2024",
    rating: 5,
    title: "Établissement simple",
    text: "Établissement simple. On mange des plats simple très bon. Je  peux que recommander ce lieu avec un accueil agréable .",
  },
  {
    name: "Ben Ringuer",
    date: "Avril 2018",
    rating: 5,
    title: "Bon acceuil, serveur sympa avec qui l'on peut disc",
    text: "Bon acceuil, serveur sympa avec qui l'on peut discuter. On peut manger presque à toute heure. Une fois, fini le boulot à 14h20 et j'ai pu y manger encore en semaine ! Et  l\"aïoli, c'est une tuerie ! Excellente et en quantité.  Mais ça, il faut pas le dire au patron 😊",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 fill-accent" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewCard = ({ review, index }: { review: typeof reviews[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`border border-border p-8 hover:border-primary/30 hover:-translate-y-1 hover:shadow-md transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <h3 className="font-heading text-lg text-foreground mb-2">{review.title}</h3>
      <p className="text-muted-foreground font-light leading-relaxed mb-6 text-sm">
        « {review.text} »
      </p>
      <div className="flex items-baseline justify-between">
        <span className="font-body font-medium text-foreground text-sm">{review.name}</span>
        <span className="text-muted-foreground text-xs">{review.date}</span>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Témoignages
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Avis de nos clients
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Ce que nos clients disent de nous
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
