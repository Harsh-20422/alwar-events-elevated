import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Alwar Events Planner" className="h-16 w-auto mb-4 brightness-200" />
            <p className="text-card/60 text-sm leading-relaxed">
              Crafting unforgettable wedding experiences with elegance, creativity, and 7+ years of expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-secondary">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "Services", "Photography", "Gallery", "About", "Contact"].map((l) => (
                <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-card/60 text-sm hover:text-secondary transition-colors">
                  {l}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-secondary">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-card/60">
              <a href="tel:+918905746395" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone size={14} /> +91 8905746395
              </a>
              <a href="tel:+916375456851" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone size={14} /> +91 6375456851
              </a>
              <a href="tel:+917891744065" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone size={14} /> +91 7891744065
              </a>
              <a href="mailto:alwareventplanner@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail size={14} /> alwareventplanner@gmail.com
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-secondary">Our Locations</h4>
            <div className="flex flex-col gap-2 text-sm text-card/60">
              {["Alwar", "Jaipur", "Delhi"].map((city) => (
                <span key={city} className="flex items-center gap-2">
                  <MapPin size={14} /> {city}
                </span>
              ))}
            </div>
            <a
              href="https://www.instagram.com/alwar_events_planner/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 text-secondary hover:text-secondary/80 transition-colors"
            >
              <Instagram size={18} /> Follow Us
            </a>
          </div>
        </div>

        <div className="border-t border-card/10 mt-12 pt-8 text-center text-card/40 text-sm">
          © {new Date().getFullYear()} Alwar Events Planner. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
