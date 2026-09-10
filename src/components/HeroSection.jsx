import React, { useState, useEffect } from "react";
import { ArrowDown, FileText, Sparkles, Command, Zap, Bot } from "lucide-react";

const roles = [
  "Full Stack Web Developer",
  "React.js & Node.js Developer",
  "Scalable Web & RESTful APIs",
  "MCA Graduate & System Architect",
];

const HeroSection = ({ onOpenCommandPalette }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeState(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-3 sm:px-4 pt-28 pb-16 md:py-0 overflow-x-hidden"
    >
      <div className="container max-w-6xl mx-auto z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column: Hero Intro */}
          <div className="md:col-span-7 text-left space-y-5 sm:space-y-6 order-2 md:order-1">
            {/* Live Status Pill */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 dark:text-blue-400 text-[10px] sm:text-xs font-mono font-semibold shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="uppercase tracking-wider">
                  Full Stack Developer • Available for Roles ⚡
                </span>
              </div>

              {onOpenCommandPalette && (
                <button
                  onClick={onOpenCommandPalette}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/80 hover:bg-secondary border border-border/80 text-[11px] font-mono text-muted-foreground hover:text-foreground transition-all cursor-pointer hover:border-primary/40"
                >
                  <Command size={12} className="text-primary" />
                  <span>Ctrl + K</span>
                </button>
              )}
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-tight sm:leading-tight">
              <span className="opacity-0 animate-fade-in block sm:inline">Engineering</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1 block sm:inline font-bold">
                {" "}
                Full Stack
              </span>
              <span className="text-gradient opacity-0 animate-fade-in-delay-2 block">
                Applications.
              </span>
            </h1>

            {/* Dynamic Terminal Typer */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-card/85 backdrop-blur-md border border-border/80 max-w-xl shadow-inner font-mono text-xs sm:text-sm md:text-base flex items-center gap-2">
              <span className="text-primary font-bold">&gt;</span>
              <span className="text-muted-foreground text-[10px] sm:text-xs uppercase font-semibold tracking-wider shrink-0">
                STATUS:
              </span>
              <span
                className={`transition-all duration-300 truncate ${
                  fadeState
                    ? "opacity-100 translate-y-0 text-foreground font-semibold"
                    : "opacity-0 -translate-y-1 text-primary"
                }`}
              >
                {roles[currentRoleIndex]}
              </span>
              <span className="animate-pulse text-primary font-bold shrink-0">_</span>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3 leading-relaxed">
              Hi, I'm <strong>Nithin Gorintala</strong> — an MCA graduate and Full Stack Developer. I build rapid-prototyped modern web apps, responsive React interfaces, and robust RESTful backends using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MySQL</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 opacity-0 animate-fade-in-delay-4 flex flex-wrap gap-2.5 sm:gap-3.5 items-center">
              <a href="#projects" className="cosmic-button flex items-center gap-2 shadow-lg shadow-blue-500/25 text-xs">
                <Zap size={14} className="animate-pulse" /> View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full border border-border/80 hover:border-primary/60 bg-card/60 hover:bg-secondary/60 text-foreground text-xs font-display uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1WWkE7GCxTfqfa23S2_mzfkiNl9fZd6w0/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-full border border-primary/30 hover:border-primary text-primary hover:bg-primary/10 text-xs font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all duration-300"
              >
                <FileText size={13} /> Resume
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border/60">
              <div className="p-2.5 rounded-xl bg-card/40 border border-border/40 text-center sm:text-left">
                <div className="text-lg sm:text-xl font-bold font-mono text-primary">100%</div>
                <div className="text-[11px] text-muted-foreground">MCA Graduate</div>
              </div>
              <div className="p-2.5 rounded-xl bg-card/40 border border-border/40 text-center sm:text-left">
                <div className="text-lg sm:text-xl font-bold font-mono text-blue-400">10+</div>
                <div className="text-[11px] text-muted-foreground">Projects Built</div>
              </div>
              <div className="p-2.5 rounded-xl bg-card/40 border border-border/40 text-center sm:text-left">
                <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">Infosys</div>
                <div className="text-[11px] text-muted-foreground">Certified Springboard</div>
              </div>
              <div className="p-2.5 rounded-xl bg-card/40 border border-border/40 text-center sm:text-left">
                <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">Full-Stack</div>
                <div className="text-[11px] text-muted-foreground">React • Node • MySQL</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 group">
              {/* Outer Glowing Cyber Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-primary rounded-[28px] blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-300 animate-pulse-subtle"></div>

              {/* Card Container */}
              <div className="relative w-full h-full rounded-[24px] bg-card p-2 border border-border/80 shadow-2xl flex flex-col justify-between overflow-hidden">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-muted flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>

                  <img
                    src="/projects/Linkedin profile com.png"
                    alt="Nithin Gorintala"
                    className="w-full h-full object-cover rounded-[22px] transition-all duration-700 ease-out group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                </div>
              </div>

              {/* Floating glass badge 1: Bottom-Right */}
              <div className="absolute -bottom-2 right-0 sm:-right-2 bg-card/95 backdrop-blur-md border border-blue-500/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-xl shadow-blue-500/10 flex items-center gap-1.5 z-20 transition-transform duration-300 hover:scale-105">
                <span className="text-xs sm:text-sm">⚡</span>
                <span className="text-[11px] sm:text-xs font-semibold font-mono tracking-wide text-foreground">
                  Full Stack Dev
                </span>
              </div>

              {/* Floating glass badge 2: Top-Right */}
              <div className="absolute top-8 right-0 sm:-right-3 bg-card/95 backdrop-blur-md border border-cyan-500/30 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl shadow-xl shadow-cyan-500/10 flex items-center gap-1.5 z-20 transition-transform duration-300 hover:scale-105">
                <span className="text-xs sm:text-sm">💡</span>
                <span className="text-[10px] sm:text-xs font-semibold font-mono tracking-wide text-foreground">
                  Ideas ➔ Code
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
        <span className="text-[10px] text-muted-foreground mb-1 font-mono uppercase tracking-wider">
          Explore Tracks
        </span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
