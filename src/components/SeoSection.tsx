import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  "7+ Years Experience",
  "100+ Events Completed",
  "Available in Alwar, Jaipur & Delhi",
];

const SeoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ backgroundColor: "hsl(30 33% 96%)" }}
    >
      <div className="container-luxury max-w-4xl text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Best Wedding Planner in Alwar, Jaipur &amp; Delhi
          </h2>

          <div className="flex justify-center mb-4">
            <div className="w-20 h-0.5 bg-secondary rounded-full" />
          </div>

          <p className="text-secondary font-heading text-base md:text-lg mb-8 tracking-wide">
            Creating unforgettable weddings with elegance and perfection
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base max-w-3xl mx-auto mb-10">
            <p>
              Alwar Events Planner is a leading wedding planner in Alwar,
              Jaipur, and Delhi, offering premium event planning services
              including wedding decoration, DJ on Wheels, lighting, catering,
              and photography.
            </p>
            <p>
              With over 7+ years of experience, we specialize in creating
              unforgettable weddings, Haldi, Mehendi, and Sangeet events with
              elegant designs and flawless execution.
            </p>
            <p>
              If you are looking for a professional wedding planner in Alwar or
              Jaipur, we ensure a stress-free and memorable experience for your
              special day.
            </p>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-[400ms] ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://api.whatsapp.com/send?phone=918905746395&text=Hi%2C%20I%20want%20to%20plan%20my%20event."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-base font-semibold mb-10"
            >
              <MessageCircle size={18} className="mr-2" />
              Plan Your Event Now
            </Button>
          </a>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-2 text-sm text-foreground/80 font-medium"
              >
                <CheckCircle2 size={16} className="text-secondary" />
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
