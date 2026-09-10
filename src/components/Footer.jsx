import { ArrowUp, Github, Linkedin, Instagram, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 md:px-8 bg-card/40 relative border-t border-border mt-12 flex flex-col justify-center items-center gap-6 text-center overflow-x-hidden">
      {/* Brand & Tagline */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-mono text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          AI & FULL STACK DEVELOPER
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-wide">Nithin Gorintala</h3>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto">
          AI & Full Stack Builder // Turning complex ideas into high-performance web products.
        </p>
      </div>

      {/* Quick Navigation Links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
        <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors duration-300">Home</a>
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About</a>
        <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300">Skills</a>
        <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">Builds</a>
        <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors duration-300">Journey</a>
        <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a>
      </div>

      {/* Social Icons Row */}
      <div className="flex items-center gap-3 sm:gap-4">
        <a 
          href="https://www.linkedin.com/in/nithin-gorintala" 
          target="_blank" 
          rel="noreferrer"
          className="p-2.5 rounded-full bg-secondary/40 hover:bg-blue-500/20 text-muted-foreground hover:text-blue-400 border border-border/40 hover:border-blue-500/40 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a 
          href="https://github.com/nithintechie123" 
          target="_blank" 
          rel="noreferrer"
          className="p-2.5 rounded-full bg-secondary/40 hover:bg-blue-500/20 text-muted-foreground hover:text-blue-400 border border-border/40 hover:border-blue-500/40 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a 
          href="https://www.instagram.com/nithin______8790?igsh=MWIwYnF6ZnlreXZ6bQ==" 
          target="_blank" 
          rel="noreferrer"
          className="p-2.5 rounded-full bg-secondary/40 hover:bg-blue-500/20 text-muted-foreground hover:text-blue-400 border border-border/40 hover:border-blue-500/40 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>
        <a 
          href="mailto:gorintalanithin@gmail.com" 
          className="p-2.5 rounded-full bg-secondary/40 hover:bg-blue-500/20 text-muted-foreground hover:text-blue-400 border border-border/40 hover:border-blue-500/40 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
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
          &copy; {new Date().getFullYear()} Nithin Gorintala. All rights reserved.
        </p>
        <p className="text-[10px] text-muted-foreground/60 font-mono">
          Engineered for performance & responsiveness
        </p>
      </div>

      {/* Floating Scroll to Top button */}
      <a 
        href="#hero" 
        className="mt-2 p-2.5 rounded-full bg-blue-500/10 hover:bg-blue-500/25 text-blue-400 border border-blue-500/30 transition-all duration-300 hover:scale-110 active:scale-95 shadow-md shadow-blue-500/10 cursor-pointer flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18}/>
      </a>
    </footer>
  );
};

export default Footer;
