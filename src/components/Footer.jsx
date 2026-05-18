import { ArrowUp, Github, Linkedin, Instagram, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card/40 relative border-t border-border mt-12 flex flex-col justify-center items-center gap-6 text-center">
      {/* Brand & Tagline */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-foreground tracking-wide">Nithin Gorintala</h3>
        <p className="text-xs text-muted-foreground max-w-xs mx-auto">
          Crafting premium web experiences from concept to clean, scalable code. 💡
        </p>
      </div>

      {/* Quick Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
        <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors duration-300">Home</a>
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About</a>
        <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300">Skills</a>
        <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">Projects</a>
        <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a>
      </div>

      {/* Social Icons Row */}
      <div className="flex items-center gap-4">
        <a 
          href="https://www.linkedin.com/in/nithin-gorintala" 
          target="_blank" 
          rel="noreferrer"
          className="p-2.5 rounded-full bg-secondary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a 
          href="https://github.com/nithintechie123" 
          target="_blank" 
          rel="noreferrer"
          className="p-2.5 rounded-full bg-secondary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a 
          href="https://www.instagram.com/nithin______8790?igsh=MWIwYnF6ZnlreXZ6bQ==" 
          target="_blank" 
          rel="noreferrer"
          className="p-2.5 rounded-full bg-secondary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>
        <a 
          href="mailto:gorintalanithin@gmail.com" 
          className="p-2.5 rounded-full bg-secondary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>

      {/* Divider */}
      <div className="w-16 h-[1px] bg-border" />

      {/* Copyright */}
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} nithintechie.netlify.app. All rights reserved.
        </p>
        <p className="text-[10px] text-muted-foreground/60">
          Designed & Engineered with 💜
        </p>
      </div>

      {/* Floating Scroll to Top button */}
      <a 
        href="#hero" 
        className="mt-2 p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 active:scale-95 shadow-md shadow-primary/5 cursor-pointer flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18}/>
      </a>
    </footer>
  );
};

export default Footer;
