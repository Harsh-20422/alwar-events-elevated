import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Star, Award, Users, MapPin, Calendar, Music, Lightbulb, UtensilsCrossed, Building, Camera, ArrowRight, Phone, MessageCircle, Heart } from "lucide-react";
import heroImg from "@/assets/hero-wedding.jpg";
import venueDecor from "@/assets/venue-decor.jpg";
import weddingPhoto from "@/assets/wedding-photo-1.jpg";
import coupleShoot from "@/assets/couple-shoot.jpg";
import cinematicVideo from "@/assets/cinematic-video.jpg";
import droneShot from "@/assets/drone-shot.jpg";
import djWheels from "@/assets/dj-wheels.jpg";
import lighting from "@/assets/lighting.jpg";
import catering from "@/assets/catering.jpg";
import weddingVenue from "@/assets/wedding-venue.jpg";
import photographyService from "@/assets/photography-service.jpg";

const Index = () => {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury Wedding" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-secondary font-heading text-lg md:text-xl mb-4 tracking-widest uppercase">Alwar Events Planner</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-6 leading-tight">
            Crafting Unforgettable Wedding Experiences
          </h1>
          <p className="text-card/80 text-lg md:text-xl mb-2">Elegant planning, stunning decor, and timeless memories</p>
          <p className="text-secondary text-sm md:text-base mb-10 tracking-wide">Now serving Alwar, Jaipur & Delhi</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plan-your-event">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-base font-semibold">
                Plan Your Event
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-card text-card bg-card/10 hover:bg-card/20 rounded-full px-10 py-6 text-base font-semibold backdrop-blur-sm">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding bg-card">
        <div className="container-luxury grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <SectionHeading title="Your Dream Wedding, Our Expertise" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 7 years of experience, we specialize in creating unforgettable weddings and events.
              From luxurious decorations to high-energy DJ on Wheels and premium photography, we bring your
              vision to life with perfection and creativity.
            </p>
            <Link to="/about">
              <Button variant="outline" className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img src={venueDecor} alt="Wedding Decor" className="rounded-lg shadow-card w-full" />
            <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground rounded-lg p-4 shadow-elevated">
              <p className="font-heading text-2xl font-bold">7+</p>
              <p className="text-xs uppercase tracking-wide">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeading title="Why Choose Us" subtitle="Trusted by hundreds of happy couples across Rajasthan" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "7+ Years Experience", value: "7+" },
              { icon: Users, label: "100+ Happy Clients", value: "100+" },
              { icon: Calendar, label: "End-to-End Management", value: "Full" },
              { icon: MapPin, label: "Multi-City Service", value: "3 Cities" },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-6 text-center shadow-soft hover-lift">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <item.icon className="text-secondary" size={24} />
                </div>
                <p className="font-heading text-2xl font-bold text-foreground mb-1">{item.value}</p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <SectionHeading title="Our Premium Services" subtitle="Everything you need for a perfect celebration" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Music, title: "DJ on Wheels", desc: "High-energy music experience with our premium mobile DJ setup for unforgettable celebrations.", img: djWheels },
              { icon: Heart, title: "Venue Decor", desc: "Transform any venue into a dreamland with our luxurious floral and thematic decorations.", img: venueDecor },
              { icon: Lightbulb, title: "Lighting", desc: "Create magical ambiance with our professional lighting setups, from fairy lights to grand chandeliers.", img: lighting },
              { icon: UtensilsCrossed, title: "Catering", desc: "Exquisite multi-cuisine catering that delights every palate with authentic flavors.", img: catering },
              { icon: Building, title: "Wedding Venues", desc: "Access to the finest palace venues and banquet halls across Alwar, Jaipur and Delhi.", img: weddingVenue },
              { icon: Camera, title: "Photography & Video", desc: "Cinematic coverage capturing every emotion and moment of your special day.", img: photographyService },
            ].map((s) => (
              <div key={s.title} className="group bg-background rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover-lift">
                <div className="overflow-hidden h-48">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <s.icon className="text-primary" size={18} />
                    </div>
                    <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <Link to="/services" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY PREVIEW */}
      <section className="section-padding bg-foreground text-card">
        <div className="container-luxury">
          <SectionHeading title="Captured Moments" subtitle="Premium photography that tells your love story" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: weddingPhoto, label: "Wedding Photography" },
              { img: coupleShoot, label: "Couple Shoots" },
              { img: cinematicVideo, label: "Cinematic Videos" },
              { img: droneShot, label: "Drone Shots" },
            ].map((p) => (
              <Link to="/photography" key={p.label} className="group relative rounded-lg overflow-hidden aspect-[3/4]">
                <img src={p.img} alt={p.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/50 transition-colors flex items-end p-4">
                  <p className="text-card font-heading text-sm md:text-base font-medium">{p.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <SectionHeading title="Wedding Packages" subtitle="Choose the perfect package for your celebration" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Silver",
                features: ["Basic Decoration", "Lighting Setup", "Event Coordination"],
                highlighted: false,
              },
              {
                name: "Gold",
                features: ["Premium Decoration", "Lighting Setup", "DJ on Wheels", "Grand Entry Setup", "Event Coordination"],
                highlighted: true,
              },
              {
                name: "Royal",
                features: ["Luxury Full Setup", "Premium Photography", "Cinematic Videography", "DJ on Wheels", "Premium Decor", "Full Event Management"],
                highlighted: false,
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl p-8 text-center transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-primary text-primary-foreground shadow-elevated scale-105 relative"
                    : "bg-background shadow-soft hover-lift"
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl font-bold mb-6">{pkg.name} Package</h3>
                <ul className="space-y-3 mb-8 text-sm">
                  {pkg.features.map((f) => (
                    <li key={f} className={`${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      ✓ {f}
                    </li>
                  ))}
                </ul>
                <Link to="/plan-your-event">
                  <Button
                    className={`rounded-full px-8 ${
                      pkg.highlighted
                        ? "bg-card text-foreground hover:bg-card/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeading title="What Our Clients Say" subtitle="Real stories from real couples" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Priya & Rajat", text: "Alwar Events made our wedding absolutely magical! Every detail was perfect, from the decor to the DJ. Highly recommend!", rating: 5 },
              { name: "Sneha & Vikram", text: "The photography team captured every emotion beautifully. The cinematic video still brings tears to our eyes. Thank you!", rating: 5 },
              { name: "Anita & Deepak", text: "Professional, creative, and incredibly organized. They handled everything flawlessly across two cities. Worth every penny!", rating: 5 },
              { name: "Meera & Arjun", text: "The Royal Package exceeded all our expectations. The drone shots of our venue were breathtaking. Truly premium service!", rating: 5 },
            ].map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-8 shadow-soft hover-lift">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MULTI-CITY */}
      <section className="section-padding bg-secondary/10">
        <div className="container-luxury text-center">
          <SectionHeading title="Our Presence" subtitle="We proudly offer services across Alwar, Jaipur, and Delhi, delivering premium event experiences across multiple cities." />
          <div className="flex flex-wrap justify-center gap-8">
            {["Alwar", "Jaipur", "Delhi"].map((city) => (
              <div key={city} className="bg-card rounded-xl px-12 py-8 shadow-soft hover-lift">
                <MapPin className="text-primary mx-auto mb-3" size={28} />
                <p className="font-heading text-xl font-semibold">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section-padding bg-card">
        <div className="container-luxury text-center">
          <SectionHeading title="Follow Our Journey" subtitle="See our latest work on Instagram" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[weddingPhoto, venueDecor, coupleShoot, lighting].map((img, i) => (
              <div key={i} className="group rounded-lg overflow-hidden aspect-square">
                <img src={img} alt="Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
          </div>
          <a
            href="https://www.instagram.com/alwar_events_planner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              Follow Us on Instagram
            </Button>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Ready to Plan Your Dream Event?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">Let's create something unforgettable together</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918905746395">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 rounded-full px-8">
                <Phone size={18} className="mr-2" /> Call Now
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=918905746395&text=Hi" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8">
                <MessageCircle size={18} className="mr-2" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
