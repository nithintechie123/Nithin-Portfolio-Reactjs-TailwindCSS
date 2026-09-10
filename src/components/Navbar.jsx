import React, { useEffect, useState } from "react";
import cn from "../lib/utils";
import { Menu, X, Search, FileText, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Journey", href: "#timeline", id: "timeline" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Certs", href: "#certifications", id: "certifications" },
  { name: "Blog", href: "/blog", id: "blog" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navbar = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = ["hero", "about", "timeline", "skills", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full top-0 left-0 z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/85 backdrop-blur-md shadow-md border-b border-border/50"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="text-base sm:text-lg font-display uppercase tracking-widest text-primary flex items-center gap-1 cursor-pointer group"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            <span className="text-glow text-foreground group-hover:text-primary transition-colors">
              Nithin
            </span>
            <span className="text-primary font-bold">.dev</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-1 p-1 rounded-full bg-card/60 backdrop-blur-md border border-border/60">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-[11px] font-display uppercase tracking-wider transition-all duration-300",
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                      : "text-foreground/75 hover:text-primary hover:bg-secondary/40"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Quick Command Palette Button */}
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border transition-all cursor-pointer flex items-center gap-1.5 text-xs"
              title="Search & Quick Actions (Ctrl + K)"
            >
              <Search size={15} />
              <kbd className="hidden xl:inline text-[9px] font-mono px-1 py-0.2 rounded bg-card border border-border">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Resume Quick CTA */}
          <a
            href="https://drive.google.com/file/d/1WWkE7GCxTfqfa23S2_mzfkiNl9fZd6w0/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 rounded-full border border-primary/40 hover:border-primary text-primary hover:bg-primary/10 text-xs font-semibold uppercase font-display tracking-wider flex items-center gap-1.5 transition-all duration-300"
          >
            <FileText size={13} /> Resume
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="p-2 text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          )}
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50 cursor-pointer"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu modal */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center p-6",
            "transition-all duration-300 lg:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-center w-full max-w-xs">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-display uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors duration-300 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a
                href="https://drive.google.com/file/d/1WWkE7GCxTfqfa23S2_mzfkiNl9fZd6w0/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="cosmic-button flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText size={15} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
