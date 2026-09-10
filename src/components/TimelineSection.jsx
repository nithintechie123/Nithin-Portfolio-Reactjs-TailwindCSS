import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, Briefcase, Calendar, Award, Code2, BookOpen } from "lucide-react";

// Intersection Observer Scroll Fade-In Component
const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    let observer;
    const currentElement = domRef.current;

    // Delay observer creation to let layout settle
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              if (observer && currentElement) {
                observer.unobserve(currentElement);
              }
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: "0px 0px -60px 0px" // Trigger transition when element is scrolled 60px into view
        }
      );

      if (currentElement) {
        observer.observe(currentElement);
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      if (observer && currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const educationData = [
  {
    id: 1,
    role: "Master of Computer Applications",
    institution: "Jawaharlal Nehru Technological University (JNTU), Hyderabad",
    duration: "2025 - Present",
    description: "Focusing on core Computer Science subjects including Data Structures, Algorithms, Database Management Systems, and Software Engineering. Actively participating in coding contests and tech workshops.",
    icon: GraduationCap,
  },
  {
    id: 2,
    role: "Bachelor of Computer Science",
    institution: "Dr B R Ambedkar Open University",
    duration: "2021 - 2024",
    description: "Focusing on core Computer Science subjects including Data Structures, Algorithms, Database Management Systems, and Software Engineering. Actively participating in coding contests and tech workshops.",
    icon: BookOpen,
  },
];

const experienceData = [
  {
    id: 1,
    role: "Java Full Stack Intern",
    institution: "Infosys Springboard",
    duration: "June 2026 - August 2026",
    description: (
      <>
        Completed an <strong>Infosys Springboard internship</strong>, developing <strong>ShopStack, a multi-vendor e-commerce marketplace</strong> using React.js, Node.js, Express.js, MySQL, JWT authentication, and Razorpay, with role-based dashboards, secure checkout, inventory management, order fulfillment, returns, and analytics.
      </>
    ),
    icon: Briefcase,
  },
  {
    id: 2,
    role: "Web Development Intern",
    institution: "Cyber Solutions & Information Board",
    duration: "March 2026 - April 2026",
    description: (
      <>
        Completed a CSIB internship where I developed a <strong>service-based booking platform using HTML, CSS, PHP, and MySQL</strong>, featuring worker booking management, job status tracking, earnings/history dashboards, and category-based service browsing.
      </>
    ),
    icon: Code2,
  },
];

// Reusable Timeline Track Component
const TimelineTrack = ({ data }) => {
  return (
    <div className="relative ml-4 sm:ml-10 md:ml-20 space-y-8 sm:space-y-10">
      {/* Vertical line with gradient fade */}
      <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary/80 via-primary/40 to-border/20" />

      {data.map((item, index) => {
        const Icon = item.icon;
        const isCurrent = item.duration.toLowerCase().includes("present");

        return (
          <FadeInSection key={item.id} delay={index * 100}>
            <div className="relative pl-6 sm:pl-10 md:pl-14 group text-left">
              {/* Node icon with pulsing outer ring on hover */}
              <span className="absolute -left-3.5 sm:-left-5 md:-left-[22px] top-1.5 flex h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-card border-2 border-primary/40 text-primary shadow-md shadow-primary/5 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 z-10">
                <Icon size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </span>

              {/* Main Card Content */}
              <div className="relative overflow-hidden p-4 sm:p-6 md:p-8 bg-card/65 hover:bg-card/85 backdrop-blur-md rounded-2xl border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group/card">
                {/* Subtle top accent gradient */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500" />

                {/* Card Header: Title + Duration */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 font-display">
                      {item.role}
                    </h3>
                    <h4 className="text-xs sm:text-sm font-semibold text-foreground/80 font-mono">
                      {item.institution}
                    </h4>
                  </div>

                  {/* Duration Badge */}
                  <div className="flex items-center gap-1.5 self-start sm:self-center text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shrink-0">
                    <Calendar size={12} className="text-primary/80" />
                    <span>{item.duration}</span>
                    {isCurrent && (
                      <span className="relative flex h-2 w-2 ml-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeInSection>
        );
      })}
    </div>
  );
};

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 sm:py-24 px-3 sm:px-4 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Briefcase size={13} /> Engineering Journey
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-widest text-foreground font-bold">
            Experience & <span className="text-primary">Academic Track</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A comprehensive look at my software engineering internships, academic foundation, and project sprints.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16 sm:mb-20">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6 ml-4 sm:ml-10 md:ml-20">
              <div className="p-2 bg-primary/10 text-primary border border-primary/20 rounded-xl">
                <Briefcase size={18} />
              </div>
              <h3 className="text-base sm:text-lg font-display uppercase tracking-wider text-foreground font-bold">
                Experience & Internships
              </h3>
            </div>
          </FadeInSection>
          <TimelineTrack data={experienceData} />
        </div>

        {/* Education Section */}
        <div>
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6 ml-4 sm:ml-10 md:ml-20">
              <div className="p-2 bg-primary/10 text-primary border border-primary/20 rounded-xl">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-base sm:text-lg font-display uppercase tracking-wider text-foreground font-bold">
                Academic Foundation
              </h3>
            </div>
          </FadeInSection>
          <TimelineTrack data={educationData} />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
