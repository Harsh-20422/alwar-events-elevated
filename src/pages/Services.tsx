import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Music, Heart, Lightbulb, UtensilsCrossed, Building, Camera, ArrowRight } from "lucide-react";
import djWheels from "@/assets/dj-wheels.jpg";
import venueDecor from "@/assets/venue-decor.jpg";
import lighting from "@/assets/lighting.jpg";
import catering from "@/assets/catering.jpg";
import weddingVenue from "@/assets/wedding-venue.jpg";
import photographyService from "@/assets/photography-service.jpg";

const services = [
  {
    icon: Music, title: "DJ on Wheels", img: djWheels,
    desc: "Transform your baraat and sangeet with our high-energy DJ on Wheels setup. Featuring premium sound systems, LED screens, and professional DJs who know exactly how to keep the party going. Our mobile DJ trucks come fully equipped with state-of-the-art equipment for an unforgettable experience.",
  },
  {
    icon: Heart, title: "Venue Decor", img: venueDecor,
    desc: "From royal Rajasthani themes to modern minimalist setups, our decoration team transforms venues into breathtaking dreamscapes. We work with premium flowers, drapes, lighting, and custom installations to create a setting that reflects your unique love story.",
  },
  {
    icon: Lightbulb, title: "Lighting", img: lighting,
    desc: "Create magical ambiance with our professional lighting solutions. From fairy light canopies and crystal chandeliers to LED uplighting and spotlight effects, we design lighting that sets the perfect mood for every moment of your celebration.",
  },
  {
    icon: UtensilsCrossed, title: "Catering", img: catering,
    desc: "Delight your guests with our exquisite multi-cuisine catering. Our expert chefs prepare authentic Rajasthani, North Indian, and international cuisines with premium ingredients. From elaborate buffets to live counters, we create a culinary experience to remember.",
  },
  {
    icon: Building, title: "Wedding Venues", img: weddingVenue,
    desc: "Access the finest palaces, heritage havelis, luxury resorts, and banquet halls across Alwar, Jaipur, and Delhi. We help you find the perfect venue that matches your vision, guest count, and budget, handling all venue coordination and logistics.",
  },
  {
    icon: Camera, title: "Photography & Videography", img: photographyService,
    desc: "Our award-winning photography and videography team captures every emotion, every laugh, and every tear. From candid moments to cinematic wedding films, drone coverage, and same-day edits, we preserve your memories in stunning detail.",
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-foreground text-card text-center">
        <div className="container-luxury">
          <p className="text-secondary uppercase tracking-widest text-sm mb-4">What We Offer</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Our Premium Services</h1>
          <p className="text-card/70 max-w-2xl mx-auto">End-to-end event management with attention to every detail</p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-luxury space-y-20">
          {services.map((s, i) => (
            <div key={s.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="overflow-hidden rounded-xl shadow-card">
                  <img src={s.img} alt={s.title} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <s.icon className="text-primary" size={22} />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <Link to="/plan-your-event">
                  <Button className="rounded-full bg-primary text-primary-foreground px-8">
                    Get Quote <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-luxury">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Let's Create Something Beautiful</h2>
          <p className="text-primary-foreground/80 mb-8">Tell us your vision and we'll make it happen</p>
          <Link to="/plan-your-event">
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90 rounded-full px-10">
              Plan Your Event
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
