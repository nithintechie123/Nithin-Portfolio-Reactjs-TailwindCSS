import React from "react";
import { Award, ExternalLink, CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Infosys Springboard",
    date: "2026",
    description:
      "Comprehensive training covering Full Stack Development, React.js, Node.js, Express.js, MySQL, REST APIs, and modern web application architecture.",
    skills: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "JWT"],
    icon: ShieldCheck,
    link: "https://infyspringboard.onwingspan.com/",
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "Cyber Solutions & Information Board (CSIB)",
    date: "2026",
    description:
      "Hands-on internship credential in relational database design, backend services, user authentication, and responsive interfaces.",
    skills: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Backend Integration"],
    icon: Award,
    link: "#timeline",
  },
  {
    id: 3,
    title: "Master of Computer Applications (MCA)",
    issuer: "Jawaharlal Nehru Technological University (JNTU), Hyderabad",
    date: "2025 - Present",
    description:
      "Advanced coursework in Advanced Data Structures, Algorithms, Distributed Database Systems, and Object-Oriented Software Engineering.",
    skills: ["Algorithms", "DBMS", "Software Engineering", "OOPs"],
    icon: FileCheck,
    link: "#timeline",
  },
];

const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-4 relative bg-secondary/20 border-b border-border/10"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-2xl md:text-3xl font-display uppercase tracking-widest mb-4 text-center">
          Certifications & <span className="text-primary">Achievements</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Verified credentials, industry training, and academic milestones backing my software engineering foundation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.id}
                className="group bg-card/70 backdrop-blur-md border border-border/70 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:scale-[1.02] text-left relative overflow-hidden"
              >
                {/* Decorative background glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-secondary text-foreground/75 border border-border">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-primary/90 mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-muted-foreground text-xs leading-relaxed mb-5">
                    {cert.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary/80 text-foreground/70 border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target={cert.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5 inline-flex"
                    >
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      View Details / Verification
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
