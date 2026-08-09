import { ArrowRight, ExternalLink, Github, Search, Filter } from "lucide-react";
import React, { useState, useMemo } from "react";
import cn from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "Spotify Clone Application",
    description: "A beautiful landing page app using React and Tailwind CSS featuring a fluid responsive UI and interactive layout.",
    image: "/projects/spotify landing page.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://nithinspotifyclone.netlify.app",
    githubUrl: "https://github.com/nithintechie123/Spotify-Clone",
  },
  {
    id: 2,
    title: "AI Recipe Generator",
    description:
      "A full-stack web application built on the MERN stack. Users upload photos of ingredients, which the app automatically detects, updates the lists, filters by dietary preferences, and outputs AI-structured recipes.",
    image: "/projects/Ai-Recipe-Thumbnail.png",
    tags: ["React", "Node.js", "MongoDB", "Groq SDK"],
    demoUrl: "https://ai-recipe-generator-eta.vercel.app/",
    githubUrl: "https://github.com/nithintechie123/ai-recipe-generator",
  },
  {
    id: 3,
    title: "E-Commerce Backend API",
    description:
      "A robust RESTful API built to power e-commerce services. Includes user authentication, session security, shopping cart logic, SQLite schema designs, and automated checkout validation.",
    image: "/projects/project3.png",
    tags: ["Node.js", "Express", "SQLite"],
    demoUrl: "https://github.com/nithintechie123",
    githubUrl: "https://github.com/nithintechie123",
  },
];

const ProjectsSection = () => {
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
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = selectedTag === "All" || project.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <section id="projects" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        {/* Search and Filters Container */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search projects by name or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-card/60 backdrop-blur-md focus:outline-hidden focus:ring-2 focus:ring-primary text-sm text-foreground text-left"
            />
          </div>

          {/* Quick Info / Results count */}
          <div className="text-sm text-muted-foreground font-medium md:text-right">
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
                "px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card/60 backdrop-blur-md border border-border/60 hover:border-primary/30 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg hover:scale-[1.02] animate-fade-in text-left"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-border/20 flex items-center justify-between mt-auto">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/75 hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/75 hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-2xl border border-dashed border-border p-6 bg-card/20">
            <Filter className="mx-auto h-12 w-12 text-muted-foreground/60 mb-3" />
            <h3 className="text-lg font-semibold text-foreground">No projects found</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Try adjusting your search query or tag selection.
            </p>
          </div>
        )}

        <div className="text-center mt-16">
          <a
            href="https://github.com/nithinTechie123"
            target="_blank"
            rel="noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
