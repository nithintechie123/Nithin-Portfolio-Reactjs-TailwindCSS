import React, { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import SpotlightEffect from "../components/SpotlightEffect";
import CommandPalette from "../components/CommandPalette";
import ProjectModal from "../components/ProjectModal";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TimelineSection from "../components/TimelineSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificationsSection from "../components/CertificationsSection";
import GitHubStats from "../components/GitHubStats";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";

const Home = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Global keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative selection:bg-primary/30 selection:text-primary">
      {/* Subtle Mouse Follower Spotlight */}
      <SpotlightEffect />

      {/* Background Star & Meteor Canvas */}
      <StarBackground />

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectProject={(project) => {
          setSelectedProject(project);
          setIsCommandPaletteOpen(false);
        }}
      />

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Navigation Bar */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Sections */}
      <main>
        <HeroSection onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <CertificationsSection />
        <GitHubStats />

        {/* Blog Teaser Section */}
        <section
          id="blog"
          className="w-full py-24 px-4 text-left bg-secondary/15 border-y border-border/10"
        >
          <div className="container mx-auto max-w-5xl rounded-3xl border border-border/70 bg-card/80 p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
                  <BookOpen size={13} /> Engineering Insights & Blog
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Read, Share & Discuss Software Engineering
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Browse technical articles, architecture teardowns, and development journals. You can also publish new articles directly.
                </p>
              </div>

              <Link
                to="/blog"
                className="cosmic-button shrink-0 inline-flex items-center gap-2 self-start md:self-center"
              >
                Explore Blog Articles <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;