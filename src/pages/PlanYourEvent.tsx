import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { Calendar, MapPin, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroWedding from "@/assets/hero-wedding.jpg";

const eventTypes = ["Wedding", "Engagement", "Reception", "Birthday", "Corporate Event", "Other"];
const serviceOptions = ["DJ on Wheels", "Venue Decor", "Lighting", "Catering", "Photography", "Videography", "Full Event Management"];
const cities = ["Alwar", "Jaipur", "Delhi"];
const budgetRanges = ["Under ₹2 Lakh", "₹2-5 Lakh", "₹5-10 Lakh", "₹10-25 Lakh", "₹25 Lakh+"];

const PlanYourEvent = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", eventType: "", date: "", city: "", guests: "", budget: "", services: [] as string[], message: "",
  });

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s) ? prev.services.filter((x) => x !== s) : [...prev.services, s],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'd like to plan an event.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nEvent: ${form.eventType}\nDate: ${form.date}\nCity: ${form.city}\nGuests: ${form.guests}\nBudget: ${form.budget}\nServices: ${form.services.join(", ")}\n\nMessage: ${form.message}`;
    window.open(`https://api.whatsapp.com/send?phone=918905746395&text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "Redirecting to WhatsApp!", description: "We'll get back to you shortly." });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroWedding} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container-luxury text-center text-card">
          <p className="text-secondary uppercase tracking-widest text-sm mb-4">Get Started</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Plan Your Event</h1>
          <p className="text-card/70 max-w-2xl mx-auto">Tell us about your dream celebration and we'll make it happen</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-luxury max-w-4xl">
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-card">
            <SectionHeading title="Event Details" subtitle="Fill in the details and we'll get back to you with a custom quote" />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1 block">Your Name *</label>
                  <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone Number *</label>
                  <Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="rounded-lg" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="rounded-lg" />
              </div>

              {/* Event Type */}
              <div>
                <label className="text-sm font-medium mb-2 block">Event Type *</label>
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm({ ...form, eventType: t })}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        form.eventType === t ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-primary/10"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1 block flex items-center gap-1"><Calendar size={14} /> Event Date</label>
                  <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block flex items-center gap-1"><MapPin size={14} /> City *</label>
                  <div className="flex gap-2">
                    {cities.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setForm({ ...form, city: c })}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex-1 ${
                          form.city === c ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-primary/10"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1 block">Expected Guests</label>
                  <Input value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} placeholder="e.g. 200-300" className="rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Budget Range</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          form.budget === b ? "bg-secondary text-secondary-foreground" : "bg-card text-muted-foreground hover:bg-secondary/10"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <label className="text-sm font-medium mb-2 block">Services Needed</label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        form.services.includes(s) ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-primary/10"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Additional Details</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us more about your dream event..." rows={4} className="rounded-lg" />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full bg-primary text-primary-foreground py-6 text-base font-semibold">
                <MessageCircle size={18} className="mr-2" /> Send via WhatsApp
              </Button>

              <p className="text-center text-muted-foreground text-sm">
                Or call us directly:{" "}
                <a href="tel:+918905746395" className="text-primary font-medium hover:underline">
                  <Phone size={12} className="inline mr-1" />+91 8905746395
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanYourEvent;
