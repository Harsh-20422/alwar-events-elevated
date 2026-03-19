import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}. ${form.message} (Phone: ${form.phone}, Email: ${form.email})`;
    window.open(`https://api.whatsapp.com/send?phone=918905746395&text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "Redirecting to WhatsApp!", description: "We'll get back to you soon." });
  };

  return (
    <div className="pt-20">
      <section className="section-padding bg-foreground text-card text-center">
        <div className="container-luxury">
          <p className="text-secondary uppercase tracking-widest text-sm mb-4">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-card/70">Call now to plan your event</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-luxury grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <SectionHeading title="Let's Connect" centered={false} />
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+918905746395" className="text-muted-foreground hover:text-primary transition-colors block">+91 8905746395 (Primary)</a>
                  <a href="tel:+916375456851" className="text-muted-foreground hover:text-primary transition-colors block">+91 6375456851</a>
                  <a href="tel:+917891744065" className="text-muted-foreground hover:text-primary transition-colors block">+91 7891744065</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:alwareventplanner@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">alwareventplanner@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Locations</p>
                  <p className="text-muted-foreground">Alwar | Jaipur | Delhi</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="tel:+918905746395">
                <Button className="rounded-full bg-primary text-primary-foreground px-6">
                  <Phone size={16} className="mr-2" /> Call Now
                </Button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=918905746395&text=Hi" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6">
                  <MessageCircle size={16} className="mr-2" /> WhatsApp
                </Button>
              </a>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113960.12345!2d76.6!3d27.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397283441f05796d%3A0x3a1cb6c7b47e1bc7!2sAlwar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Alwar Location"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-background rounded-xl p-8 md:p-10 shadow-card">
            <h3 className="font-heading text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-1 block">Your Name</label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Phone Number</label>
                <Input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Message</label>
                <Textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your event..."
                  rows={4}
                  className="rounded-lg"
                />
              </div>
              <Button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-6 text-base">
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
