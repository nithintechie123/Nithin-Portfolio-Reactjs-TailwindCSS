import React from "react";
import { Github, GitPullRequest, GitFork, Star, Code2, Sparkles } from "lucide-react";

const GitHubStats = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card/70 backdrop-blur-md border border-border/80 rounded-3xl p-8 shadow-xl relative overflow-hidden text-left">
          {/* Subtle cosmic background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            {/* Left Column: Heading & Description */}
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
                <Github size={14} /> Open Source & Activity
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Continuous Learning & GitHub Highlights
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I actively build full-stack web applications, write modular clean code, and explore modern frameworks. Check out my repositories, commit history, and active branches.
              </p>
              <div className="pt-2">
                <a
                  href="https://github.com/nithintechie123"
                  target="_blank"
                  rel="noreferrer"
                  className="cosmic-button inline-flex items-center gap-2"
                >
                  <Github size={16} />
                  Explore @nithintechie123
                </a>
              </div>
            </div>

            {/* Right Column: Dynamic Stats Cards */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
              <div className="p-4 rounded-2xl bg-secondary/40 border border-border flex flex-col justify-center">
                <div className="flex items-center justify-between text-primary mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    Public Repos
                  </span>
                  <Code2 size={18} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  12+
                </div>
                <span className="text-[10px] text-muted-foreground mt-1">
                  Full Stack & Frontend
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/40 border border-border flex flex-col justify-center">
                <div className="flex items-center justify-between text-primary mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    Top Languages
                  </span>
                  <Sparkles size={18} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  JS / Java
                </div>
                <span className="text-[10px] text-muted-foreground mt-1">
                  React, Node, SQL
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/40 border border-border flex flex-col justify-center">
                <div className="flex items-center justify-between text-primary mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    Internships
                  </span>
                  <GitPullRequest size={18} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  2 Completed
                </div>
                <span className="text-[10px] text-muted-foreground mt-1">
                  Infosys & CSIB
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/40 border border-border flex flex-col justify-center">
                <div className="flex items-center justify-between text-primary mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    Code Quality
                  </span>
                  <Star size={18} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  100%
                </div>
                <span className="text-[10px] text-muted-foreground mt-1">
                  Modular & Responsive
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
