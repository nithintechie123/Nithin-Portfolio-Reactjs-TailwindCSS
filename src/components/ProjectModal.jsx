import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle, Layers, Server, ShieldCheck, Sparkles, Bot, Zap } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-background/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl my-auto max-h-[92vh] flex flex-col bg-card border border-border shadow-2xl rounded-3xl overflow-hidden text-left relative group animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-md border border-border text-foreground hover:bg-secondary transition-all duration-200 cursor-pointer shadow-md"
          aria-label="Close Case Study"
        >
          <X size={18} />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Project Hero Banner */}
          <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden bg-secondary/30">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

            {/* Banner Overlaid Info */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold bg-primary/20 text-primary border border-primary/30 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground font-display">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
            {/* Summary */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5 font-bold">
                <Zap size={14} /> Overview & Objective
              </h4>
              <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Architecture & Engineering Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-primary mb-2.5 flex items-center gap-1.5 font-bold">
                  <Layers size={14} /> Key Architecture & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="p-3 sm:p-3.5 rounded-2xl bg-secondary/30 border border-border/60 flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-foreground/85 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Highlights / Challenges Solved */}
            {project.challenges && (
              <div className="p-3.5 sm:p-4 rounded-2xl bg-primary/5 border border-primary/15">
                <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-primary mb-1.5 flex items-center gap-1.5 font-bold">
                  <ShieldCheck size={14} /> Technical Highlights & Problem Solving
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Links Footer CTA */}
            <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2.5 sm:gap-3 w-full sm:w-auto">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cosmic-button flex items-center justify-center gap-2 text-xs flex-1 sm:flex-initial"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full border border-border hover:border-primary/50 text-foreground transition-all duration-300 hover:scale-105 active:scale-95 text-xs font-semibold uppercase font-display tracking-wider flex items-center justify-center gap-2 flex-1 sm:flex-initial"
                  >
                    <Github size={15} /> Source Code
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs font-mono text-muted-foreground hover:text-foreground cursor-pointer ml-auto"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
