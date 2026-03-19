import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Camera, Heart, Video, Navigation, SunMedium, Focus } from "lucide-react";
import weddingPhoto from "@/assets/wedding-photo-1.jpg";

const services = [
  { title: "Wedding Photography", icon: Camera, description: "Complete coverage of your wedding ceremonies, from mehendi to vidaai, captured with an artistic eye for detail and emotion." },
  { title: "Couple Shoots", icon: Heart, description: "Romantic pre-wedding and post-wedding couple photography sessions at stunning locations across Rajasthan." },
  { title: "Cinematic Videography", icon: Video, description: "Hollywood-style wedding films with professional cinema cameras, color grading, and emotional storytelling." },
  { title: "Drone Shots", icon: Navigation, description: "Breathtaking aerial photography and videography that captures the grandeur of your venue and celebrations from above." },
  { title: "Pre-Wedding Shoots", icon: SunMedium, description: "Create beautiful memories before the big day with creative themed shoots at heritage locations and natural landscapes." },
  { title: "Candid Photography", icon: Focus, description: "Natural, unposed moments captured throughout your celebration — the real laughs, tears, and joy." },
];

const Photography = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 bg-foreground text-card text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={weddingPhoto} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-luxury">
          <p className="text-secondary uppercase tracking-widest text-sm mb-4">Premium Photography</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Capturing Your Love Story</h1>
          <p className="text-card/70 max-w-2xl mx-auto">Every frame tells a story. We capture the emotions, the joy, and the magic of your special day.</p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <SectionHeading title="Our Photography Services" subtitle="Complete visual coverage for your celebration" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((svc) => (
              <div key={svc.title} className="group bg-background rounded-2xl p-8 text-center shadow-soft hover-lift cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <svc.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-luxury">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Book Your Photography Package</h2>
          <p className="text-primary-foreground/80 mb-8">Let us capture your most precious moments</p>
          <Link to="/plan-your-event">
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90 rounded-full px-10">
              Get Quote <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Photography;
