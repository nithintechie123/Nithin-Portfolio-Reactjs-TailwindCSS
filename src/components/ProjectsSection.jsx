import { ArrowRight, ExternalLink, Github, Search, Filter, Layers, Eye } from "lucide-react";
import React, { useState, useMemo } from "react";
import cn from "../lib/utils";

export const projects = [
  {
    id: 1,
    title: "AI Recipe Generator",
    description:
      "A full-stack web application built on the MERN stack. Users upload photos of ingredients, which the app automatically detects, updates the lists, filters by dietary preferences, and outputs AI-structured recipes.",
    longDescription:
      "Powered by Groq SDK and high-performance LLMs, this application turns photos or fridge ingredient lists into delicious step-by-step recipes, calculated nutritional estimates, and custom cook times.",
    image: "/projects/Ai-Recipe-Thumbnail.png",
    tags: ["React", "Node.js", "MongoDB", "Groq SDK"],
    features: [
      "AI Ingredient Recognition via Groq SDK & LLMs",
      "Dietary Restriction & Allergen Filters (Vegan, Keto, GF)",
      "Saved Recipe Bookmarks with MongoDB storage",
      "Interactive Step-by-Step Cooking Timers",
    ],
    challenges:
      "Optimized LLM prompt chaining and JSON structured outputs to guarantee 100% valid schema generation without hallucinations.",
    demoUrl: "https://ai-recipe-generator-eta.vercel.app/",
    githubUrl: "https://github.com/nithintechie123/ai-recipe-generator",
  },
  {
    id: 2,
    title: "Spotify Clone Application",
    description:
      "A beautiful music streaming UI and landing page app built with React and Tailwind CSS featuring a fluid responsive UI, interactive playback layout, and audio player controls.",
    longDescription:
      "A pixel-perfect, highly responsive clone of Spotify's desktop web player interface. Features customized music playlist views, dynamic search bars, responsive grid album art, and sleek dark mode glassmorphism.",
    image: "/projects/spotify landing page.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    features: [
      "Custom Player Controls & Dynamic Progress Bar",
      "Responsive Sidebar Navigation & Category Browsing",
      "Curated Playlist & Album Layout Cards",
      "Modern Dark Theme Glassmorphism UI",
    ],
    challenges:
      "Achieved fluid CSS animations and 60fps scrolling on mobile devices without layout thrashing.",
    demoUrl: "https://nithinspotifyclone.netlify.app",
    githubUrl: "https://github.com/nithintechie123/Spotify-Clone",
  },
];

const ProjectsSection = ({ onSelectProject }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Extract all unique tags dynamically
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  // Filter projects by both search query and active category/tag
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTag =
        selectedTag === "All" || project.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <section id="projects" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-2xl md:text-3xl font-display uppercase tracking-widest mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent production-ready and full-stack projects. Each project was carefully engineered with attention to clean code, architecture, and user experience.
        </p>

        {/* Search and Filters Container */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search by title, tech stack (e.g. 'Node.js', 'React', 'MySQL')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-card/60 backdrop-blur-md focus:outline-hidden focus:ring-2 focus:ring-primary text-sm text-foreground text-left"
            />
          </div>

          {/* Quick Info / Results count */}
          <div className="text-sm text-muted-foreground font-medium md:text-right font-mono">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-start">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={cn(
                "px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer",
                selectedTag === tag
                  ? "bg-primary text-primary-foreground border-primary shadow-xs"
                  : "bg-card text-foreground/80 border-border hover:border-primary/50 hover:bg-secondary/40"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card/70 backdrop-blur-md border border-border/70 hover:border-primary/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:scale-[1.01] animate-fade-in text-left relative"
              >
                <div>
                  <div className="h-52 sm:h-56 overflow-hidden relative cursor-pointer" onClick={() => onSelectProject?.(project)}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                    {/* Quick case study trigger pill on image */}
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-border/80 px-3 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 text-foreground opacity-90 group-hover:opacity-100 transition-opacity shadow-md">
                      <Eye size={12} /> Case Study
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-full bg-primary/10 text-primary border border-primary/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3
                      className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors cursor-pointer"
                      onClick={() => onSelectProject?.(project)}
                    >
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-border/30 flex flex-wrap items-center justify-between gap-3 mt-auto">
                  <button
                    onClick={() => onSelectProject?.(project)}
                    className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <Layers size={14} /> Architecture & Details
                  </button>

                  <div className="flex space-x-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-semibold"
                      >
                        <ExternalLink size={15} /> Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-semibold"
                      >
                        <Github size={15} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-3xl border border-dashed border-border p-6 bg-card/20">
            <Filter className="mx-auto h-12 w-12 text-muted-foreground/60 mb-3" />
            <h3 className="text-lg font-semibold text-foreground">
              No projects found
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Try adjusting your search query or tag selection.
            </p>
          </div>
        )}

        <div className="text-center mt-16">
          <a
            href="https://github.com/nithintechie123"
            target="_blank"
            rel="noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check All Repositories on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
