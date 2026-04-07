import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import gallery1 from "@/assets/gallery/photo1.jpg";
import gallery2 from "@/assets/gallery/photo2.jpg";
import gallery3 from "@/assets/gallery/photo3.jpg";
import gallery4 from "@/assets/gallery/photo4.jpg";
import gallery5 from "@/assets/gallery/photo5.jpg";
import gallery6 from "@/assets/gallery/photo6.jpg";

const galleryImages = [
  { src: gallery1, label: "Nos plats" },
  { src: gallery2, label: "Nos plats" },
  { src: gallery3, label: "Nos plats" },
  { src: gallery4, label: "Nos plats" },
  { src: gallery5, label: "Nos plats" },
  { src: gallery6, label: "Nos plats" },
];

const GallerySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Galerie
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-card-foreground">
            Un avant-goût de l'expérience
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ item, index }: { item: typeof galleryImages[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden aspect-square cursor-pointer
        transition-all duration-700 hover:shadow-lg ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img
        src={item.src}
        alt={item.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-4">
        <span className="font-body text-sm text-transparent group-hover:text-white tracking-wide transition-all duration-300">
          {item.label}
        </span>
      </div>
    </div>
  );
};

export default GallerySection;
