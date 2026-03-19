import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Award, Users, Calendar, MapPin, Heart, Star } from "lucide-react";
import venueDecor from "@/assets/venue-decor.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroWedding} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container-luxury text-center text-card">
          <p className="text-secondary uppercase tracking-widest text-sm mb-4">About Us</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-card/70 max-w-2xl mx-auto">7+ years of creating magical moments across Rajasthan and beyond</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-card">
        <div className="container-luxury grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Your Dream Wedding, Our Expertise" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 7 years of experience, Alwar Events Planner has been at the forefront of luxury wedding and event planning in Rajasthan. What started as a passion for creating beautiful celebrations has grown into a full-service event management company trusted by hundreds of families.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From luxurious decorations and high-energy DJ on Wheels to premium photography and cinematic videography, we bring your vision to life with perfection and creativity. Our team of dedicated professionals ensures every detail is meticulously planned and flawlessly executed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe every love story is unique, and your celebration should reflect that. Whether it's an intimate ceremony or a grand royal wedding, we pour our heart into making it extraordinary.
            </p>
            <Link to="/plan-your-event">
              <Button className="rounded-full bg-primary text-primary-foreground px-8">
                Plan Your Event
              </Button>
            </Link>
          </div>
          <div>
            <img src={venueDecor} alt="Our Work" className="rounded-xl shadow-card" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, value: "7+", label: "Years Experience" },
              { icon: Users, value: "100+", label: "Happy Clients" },
              { icon: Calendar, value: "500+", label: "Events Managed" },
              { icon: MapPin, value: "3", label: "Cities Served" },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-8 text-center shadow-soft hover-lift">
                <s.icon className="text-secondary mx-auto mb-3" size={28} />
                <p className="font-heading text-3xl font-bold text-foreground mb-1">{s.value}</p>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <SectionHeading title="What Drives Us" subtitle="Our core values that define every event we create" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Passion", desc: "Every event is crafted with love and dedication. We treat your celebration as if it were our own." },
              { icon: Star, title: "Excellence", desc: "We settle for nothing less than perfection. Every detail, every moment is carefully curated." },
              { icon: Users, title: "Trust", desc: "Built on years of delivering exceptional experiences. Our clients are our family." },
            ].map((v) => (
              <div key={v.title} className="text-center p-8 bg-background rounded-xl shadow-soft hover-lift">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <v.icon className="text-secondary" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
