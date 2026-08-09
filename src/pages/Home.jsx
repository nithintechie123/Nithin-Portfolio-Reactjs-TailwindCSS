import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import TimelineSection from '../components/TimelineSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <section id="blog" className="w-full py-24 px-4 text-left bg-secondary/15 border-y border-border/10">
          <div className="container mx-auto max-w-4xl rounded-3xl border border-border/70 bg-card/80 p-8 shadow-lg">
            <p className="text-[10px] font-display uppercase tracking-[0.35em] text-primary">Blog</p>
            <h2 className="mt-3 text-3xl font-semibold">Share articles and thought pieces with your audience</h2>
            <p className="mt-4 max-w-2xl text-foreground/70">
              Add a blog section to your portfolio and publish new posts instantly. Visitors can browse your latest writing and read full articles.
            </p>
            <Link to="/blog" className="cosmic-button mt-6 inline-flex">Open blog</Link>
          </div>
        </section>
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home