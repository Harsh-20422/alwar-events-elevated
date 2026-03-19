import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";
import wedding7 from "@/assets/wedding-7.jpg";
import weddingPhoto1 from "@/assets/wedding-photo-1.jpg";
import lighting from "@/assets/lighting.jpg";
import lighting2 from "@/assets/lighting-2.jpg";
import djWheels from "@/assets/dj-wheels.jpg";
import haldi1 from "@/assets/haldi-1.jpg";
import haldi2 from "@/assets/haldi-2.jpg";
import haldi3 from "@/assets/haldi-3.jpg";
import haldi4 from "@/assets/haldi-4.jpg";
import haldi5 from "@/assets/haldi-5.jpg";
import haldi6 from "@/assets/haldi-6.jpg";
import haldi7 from "@/assets/haldi-7.jpg";
import haldi8 from "@/assets/haldi-8.webp";
import sangeetCouple from "@/assets/sangeet-couple.jpg";
import sangeetNight from "@/assets/sangeet-night.jpg";
import sangeet3 from "@/assets/sangeet-3.jpg";
import sangeet4 from "@/assets/sangeet-4.jpg";
import sangeet5 from "@/assets/sangeet-5.jpg";
import sangeet6 from "@/assets/sangeet-6.jpg";

const categories = ["All", "Weddings", "Haldi", "Mehendi", "Lighting", "Sangeet Night"];

const images = [
  { src: wedding1, cat: "Weddings" },
  { src: wedding2, cat: "Weddings" },
  { src: wedding3, cat: "Weddings" },
  { src: wedding4, cat: "Weddings" },
  { src: wedding5, cat: "Weddings" },
  { src: wedding6, cat: "Weddings" },
  { src: wedding7, cat: "Weddings" },
  { src: weddingPhoto1, cat: "Weddings" },
  { src: haldi1, cat: "Haldi" },
  { src: haldi2, cat: "Haldi" },
  { src: haldi3, cat: "Haldi" },
  { src: haldi4, cat: "Haldi" },
  { src: haldi5, cat: "Haldi" },
  { src: haldi6, cat: "Haldi" },
  { src: haldi7, cat: "Haldi" },
  { src: haldi8, cat: "Haldi" },
  { src: lighting, cat: "Lighting" },
  { src: lighting2, cat: "Lighting" },
  { src: djWheels, cat: "Mehendi" },
  { src: sangeetCouple, cat: "Sangeet Night" },
  { src: sangeetNight, cat: "Sangeet Night" },
  { src: sangeet3, cat: "Sangeet Night" },
  { src: sangeet4, cat: "Sangeet Night" },
  { src: sangeet5, cat: "Sangeet Night" },
  { src: sangeet6, cat: "Sangeet Night" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.cat === active);

  return (
    <div className="pt-20">
      <section className="section-padding bg-foreground text-card text-center">
        <div className="container-luxury">
          <p className="text-secondary uppercase tracking-widest text-sm mb-4">Our Work</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-card/70">A glimpse into the magic we create</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-lg overflow-hidden cursor-pointer break-inside-avoid"
                onClick={() => setLightbox(img.src)}
              >
                <img src={img.src} alt={img.cat} className="w-full transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Preview" className="max-w-full max-h-[90vh] rounded-lg shadow-elevated animate-scale-in" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
