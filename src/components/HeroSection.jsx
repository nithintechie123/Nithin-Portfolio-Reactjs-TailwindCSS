import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-0"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Summary */}
          <div className="md:col-span-7 text-left space-y-6 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              <span className="opacity-0 animate-fade-in block sm:inline">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1 block sm:inline">
                {" "}
                Nithin
              </span>
              <span className="text-gradient opacity-0 animate-fade-in-delay-2 block sm:inline ml-0 sm:ml-2">
                {" "}
                Gorintala
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3 leading-relaxed">
              I am an aspiring Full Stack Developer with a strong foundation in
              Computer Science and hands-on experience in building responsive web
              applications using React.js, Node.js, Express.js, and SQLite. I
              enjoy solving problems, learning new technologies, and developing
              scalable, user-friendly solutions.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-wrap gap-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-border hover:border-primary/50 text-foreground transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Beautiful Profile Photo with Soft Glowing Effect */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2 opacity-0 animate-fade-in-delay-1">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:max-w-[350px] aspect-square animate-float">
              {/* Outer soft glowing aura - larger blur, extremely light color */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/15 via-violet-500/5 to-transparent blur-3xl opacity-60 dark:opacity-85 dark:from-primary/25 dark:via-violet-500/10 animate-pulse-subtle" />

              {/* Sparkle decorative element in top-left */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-card border border-primary/20 flex items-center justify-center shadow-md shadow-primary/5 dark:shadow-primary/20 z-20 animate-pulse-subtle">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                </svg>
              </div>

              {/* Main Photo Card Container with extremely soft light violet shadow, neon glow in dark mode */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 via-violet-500/20 to-primary/10 p-[1.5px] shadow-[0_20px_40px_rgba(139,92,246,0.12)] dark:shadow-[0_20px_40px_rgba(139,92,246,0.22)] hover:shadow-[0_25px_50px_rgba(139,92,246,0.18)] dark:hover:shadow-[0_25px_50px_rgba(139,92,246,0.35)] transition-all duration-500">
                {/* Photo container */}
                <div className="w-full h-full rounded-[22px] bg-card overflow-hidden relative group">
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  <img
                    src="/projects/Linkedin profile com.png"
                    alt="Nithin Gorintala"
                    className="w-full h-full object-cover rounded-[22px] transition-all duration-900 ease-out group-hover:scale-115 group-hover:rotate-1"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                </div>
              </div>

              {/* Floating glass badge 1: Bottom-Right (Impact/Action Statement) */}
              <div className="absolute -bottom-2 -right-2 bg-card/90 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-2xl shadow-lg shadow-primary/5 flex items-center gap-2 z-20 transition-transform duration-300 hover:scale-105">
                <span className="text-sm">💡</span>
                <span className="text-xs font-semibold tracking-wide text-foreground">
                  Ideas ➔ Code
                </span>
              </div>

              {/* Floating glass badge 2: Top-Right (Engineering Mindset) */}
              <div className="absolute top-12 -right-6 bg-card/90 backdrop-blur-md border border-primary/20 px-3 py-1.5 rounded-xl shadow-lg shadow-primary/5 flex items-center gap-1.5 z-20 transition-transform duration-300 hover:scale-105">
                <span className="text-sm">🧠</span>
                <span className="text-xs font-semibold tracking-wide text-foreground">
                  Problem Solver
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;

