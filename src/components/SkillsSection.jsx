import React, { useState } from "react";
import cn from "../lib/utils";
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  Layers,
  Cpu,
  Terminal,
  CheckCircle,
} from "lucide-react";

const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    level: "Advanced",
    iconColor: "#61DAFB",
    description: "Hooks, Context API, React Router, Vite, Component Architecture",
    tags: ["Frontend", "UI"],
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: "Advanced",
    iconColor: "#F7DF1E",
    description: "Async/Await, Closures, DOM Manipulation, Modules, Event Loop",
    tags: ["Core", "Language"],
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Advanced",
    iconColor: "#38BDF8",
    description: "Responsive layouts, Dark Mode, Custom Themes, Animation Utilities",
    tags: ["CSS", "Design"],
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    level: "Advanced",
    iconColor: "#E34F26",
    description: "Semantic Markup, Flexbox, Grid, CSS Variables, Animations",
    tags: ["Frontend"],
  },

  // Backend & Databases
  {
    name: "Node.js & Express.js",
    category: "backend",
    level: "Advanced",
    iconColor: "#339933",
    description: "RESTful APIs, Middleware, Server Routing, JWT Authentication, Error Handling",
    tags: ["Backend", "Runtime"],
  },
  {
    name: "REST API Architecture",
    category: "backend",
    level: "Advanced",
    iconColor: "#6DB33F",
    description: "Endpoint Design, JSON Payloads, HTTP Status Codes, Security & Validation",
    tags: ["Backend", "Architecture"],
  },
  {
    name: "MySQL & Relational DBs",
    category: "backend",
    level: "Proficient",
    iconColor: "#4169E1",
    description: "Relational Modeling, Indexing, Complex Joins, Transactions, Queries",
    tags: ["Database", "SQL"],
  },
  {
    name: "SQLite & MongoDB",
    category: "backend",
    level: "Proficient",
    iconColor: "#47A248",
    description: "Embedded databases, Document stores, CRUD operations",
    tags: ["Database", "NoSQL"],
  },

  // Languages & Core
  {
    name: "Java (OOPs & Core)",
    category: "core",
    level: "Proficient",
    iconColor: "#ED8B00",
    description: "Object-Oriented Programming, Collections, Exception Handling, Streams",
    tags: ["Core", "Language"],
  },
  {
    name: "Data Structures & Algos",
    category: "core",
    level: "Proficient",
    iconColor: "#A855F7",
    description: "Arrays, Linked Lists, Trees, Sorting, Searching, Complexity Analysis",
    tags: ["Computer Science"],
  },

  // Tools & DevOps
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Advanced",
    iconColor: "#F05032",
    description: "Version control, Branching workflows, Pull Requests, Code Reviews",
    tags: ["Version Control"],
  },
  {
    name: "Postman API Tooling",
    category: "tools",
    level: "Advanced",
    iconColor: "#FF6C37",
    description: "API testing, Environment configs, Endpoint validation, Mocking",
    tags: ["API Testing"],
  },
  {
    name: "VS Code & Modern IDEs",
    category: "tools",
    level: "Advanced",
    iconColor: "#007ACC",
    description: "Extensions, Debugging, Linting, Productivity Workflows",
    tags: ["Productivity"],
  },
  {
    name: "Payment Gateways (Razorpay)",
    category: "tools",
    level: "Working Knowledge",
    iconColor: "#0C2340",
    description: "Webhook processing, Checkout integration, Transaction flows",
    tags: ["Fintech", "Integration"],
  },
];

const categories = [
  { id: "all", label: "All Skills", icon: Layers },
  { id: "frontend", label: "Frontend", icon: Layout },
  { id: "backend", label: "Backend & DB", icon: Server },
  { id: "core", label: "Languages & CS", icon: Cpu },
  { id: "tools", label: "Tools & APIs", icon: Wrench },
];

const SkillsSection = ({ onSkillFilter }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/25 border-y border-border/10"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-2xl md:text-3xl font-display uppercase tracking-widest mb-4 text-center">
          Technical <span className="text-primary">Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A balanced tech stack honed through full-stack projects, real-world internships, and Computer Science coursework.
        </p>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300 font-display uppercase tracking-wider text-xs flex items-center gap-2 cursor-pointer border",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-105"
                    : "bg-card text-foreground/80 border-border hover:border-primary/50 hover:bg-secondary/40"
                )}
              >
                <Icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group bg-card/80 backdrop-blur-md p-6 rounded-2xl border border-border/70 hover:border-primary/40 transition-all duration-300 shadow-xs hover:shadow-xl hover:scale-[1.02] text-left flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/15 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>

                  <span
                    className={cn(
                      "text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border shrink-0",
                      skill.level === "Advanced"
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                        : "bg-primary/10 text-primary border-primary/20"
                    )}
                  >
                    {skill.level}
                  </span>
                </div>

                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
