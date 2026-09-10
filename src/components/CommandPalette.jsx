import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Search,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sun,
  Moon,
  Home,
  User,
  Clock,
  Code2,
  FolderGit2,
  Award,
  BookOpen,
  Phone,
  Copy,
  Check,
  X,
  Command,
} from "lucide-react";
import cn from "../lib/utils";

const CommandPalette = ({ isOpen, onClose, onSelectProject }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedText, setCopiedText] = useState(null);
  const inputRef = useRef(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    onClose();
  };

  const actions = useMemo(() => {
    return [
      // Navigation
      {
        id: "nav-home",
        title: "Go to Home / Hero",
        category: "Navigation",
        icon: Home,
        perform: () => {
          document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-about",
        title: "About Me & Philosophy",
        category: "Navigation",
        icon: User,
        perform: () => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-timeline",
        title: "Experience & Education Timeline",
        category: "Navigation",
        icon: Clock,
        perform: () => {
          document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-skills",
        title: "Technical Skills & Tools",
        category: "Navigation",
        icon: Code2,
        perform: () => {
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-projects",
        title: "Featured Projects Portfolio",
        category: "Navigation",
        icon: FolderGit2,
        perform: () => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-certs",
        title: "Certifications & Achievements",
        category: "Navigation",
        icon: Award,
        perform: () => {
          document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-blog",
        title: "Articles & Blog Posts",
        category: "Navigation",
        icon: BookOpen,
        perform: () => {
          window.location.href = "/blog";
          onClose();
        },
      },
      {
        id: "nav-contact",
        title: "Contact & Get in Touch",
        category: "Navigation",
        icon: Mail,
        perform: () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },

      // Quick Actions
      {
        id: "act-resume",
        title: "Download Resume / CV (PDF)",
        category: "Quick Actions",
        icon: FileText,
        badge: "PDF",
        perform: () => {
          window.open(
            "https://drive.google.com/file/d/1WWkE7GCxTfqfa23S2_mzfkiNl9fZd6w0/view?usp=drive_link",
            "_blank"
          );
          onClose();
        },
      },
      {
        id: "act-copy-email",
        title: "Copy Email: gorintalanithin@gmail.com",
        category: "Quick Actions",
        icon: Mail,
        badge: copiedText === "email" ? "Copied!" : "Copy",
        perform: () => handleCopy("gorintalanithin@gmail.com", "email"),
      },
      {
        id: "act-copy-phone",
        title: "Copy Phone: +91-8790474590",
        category: "Quick Actions",
        icon: Phone,
        badge: copiedText === "phone" ? "Copied!" : "Copy",
        perform: () => handleCopy("+918790474590", "phone"),
      },
      {
        id: "act-theme",
        title: "Toggle Light / Dark Mode",
        category: "Quick Actions",
        icon: Sun,
        perform: toggleTheme,
      },

      // Socials
      {
        id: "soc-github",
        title: "GitHub Profile (@nithintechie123)",
        category: "Socials",
        icon: Github,
        perform: () => {
          window.open("https://github.com/nithintechie123", "_blank");
          onClose();
        },
      },
      {
        id: "soc-linkedin",
        title: "LinkedIn Profile (nithin-gorintala)",
        category: "Socials",
        icon: Linkedin,
        perform: () => {
          window.open("https://www.linkedin.com/in/nithin-gorintala", "_blank");
          onClose();
        },
      },
    ];
  }, [copiedText, onClose]);

  const filteredActions = useMemo(() => {
    if (!query.trim()) return actions;
    const lower = query.toLowerCase();
    return actions.filter(
      (action) =>
        action.title.toLowerCase().includes(lower) ||
        action.category.toLowerCase().includes(lower)
    );
  }, [actions, query]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? filteredActions.length - 1 : prev - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].perform();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-24 px-3 sm:px-4 bg-background/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] bg-card border border-border shadow-2xl rounded-2xl overflow-hidden animate-scale-in flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-border gap-3">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, section, or action (e.g. 'resume', 'skills', 'github')..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 bg-transparent border-none outline-hidden text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-1 bg-secondary text-muted-foreground rounded-md border border-border">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground sm:hidden cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredActions.length > 0 ? (
            filteredActions.map((action, idx) => {
              const Icon = action.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={action.id}
                  onClick={action.perform}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={cn(
                    "w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-all duration-150 cursor-pointer",
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-foreground/80 hover:bg-secondary/60 hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "p-1.5 rounded-lg border",
                        isSelected
                          ? "bg-primary-foreground/15 border-primary-foreground/20 text-primary-foreground"
                          : "bg-secondary text-muted-foreground border-border"
                      )}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="font-medium">{action.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {action.badge && (
                      <span
                        className={cn(
                          "text-[10px] uppercase font-mono px-2 py-0.5 rounded-full font-semibold",
                          isSelected
                            ? "bg-primary-foreground/20 text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        )}
                      >
                        {action.badge}
                      </span>
                    )}
                    <span
                      className={cn(
                        "text-xs font-mono hidden sm:inline-block",
                        isSelected
                          ? "text-primary-foreground/75"
                          : "text-muted-foreground/60"
                      )}
                    >
                      {action.category}
                    </span>
                  </div>
                </button>
              );
            })
          ) : (
            <div className="py-10 text-center text-muted-foreground text-sm">
              No matching commands or actions found for "{query}"
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-secondary/30 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-card border border-border rounded text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-card border border-border rounded text-[10px]">↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-card border border-border rounded text-[10px]">↵</kbd> Select
            </span>
          </div>
          <span className="hidden sm:inline">Nithin Portfolio Quick Switcher</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
