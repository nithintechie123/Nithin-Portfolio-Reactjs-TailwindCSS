import {
  GithubIcon,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Loader2,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import React, { useState } from "react";
import cn from "../lib/utils";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const hasCredentials =
      serviceId &&
      serviceId !== "your_service_id" &&
      templateId &&
      templateId !== "your_template_id" &&
      publicKey &&
      publicKey !== "your_public_key";

    if (hasCredentials) {
      setStatus({ submitting: true, success: false, error: null });

      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
            to_email: "gorintalanithin@gmail.com",
          },
          {
            publicKey: publicKey,
          }
        )
        .then(() => {
          setStatus({ submitting: false, success: true, error: null });
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          console.error("EmailJS sending failed:", err);
          const errorMsg =
            err?.text ||
            err?.message ||
            JSON.stringify(err) ||
            "Failed to send message.";
          setStatus({
            submitting: false,
            success: false,
            error: `${errorMsg}. Please verify your credentials in .env.`,
          });
        });
    } else {
      // Direct mailto link fallback with smooth delay
      setStatus({ submitting: true, success: false, error: null });
      setTimeout(() => {
        const subject = `Portfolio Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoUrl = `mailto:gorintalanithin@gmail.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;

        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
    }
  };

  const resetForm = () => {
    setStatus({ submitting: false, success: false, error: null });
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-card/25 border-t border-border/10"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-2xl md:text-3xl font-display uppercase tracking-widest mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have an opportunity, project in mind, or want to discuss full-stack engineering? Feel free to drop a message or connect directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details Left Side */}
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground text-sm">
              I am based in Hyderabad, India and available for on-site, hybrid, and remote opportunities.
            </p>

            <div className="space-y-4">
              {/* Email Card with Copy Button */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/70 flex items-center justify-between gap-3 group hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[10px] font-mono font-semibold text-muted-foreground uppercase">Email</h4>
                    <a
                      href="mailto:gorintalanithin@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors break-all block"
                    >
                      gorintalanithin@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy("gorintalanithin@gmail.com", "email")}
                  className="p-2 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all text-muted-foreground cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedItem === "email" ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/70 flex items-center justify-between gap-3 group hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-semibold text-muted-foreground uppercase">Phone / WhatsApp</h4>
                    <a
                      href="tel:+918790474590"
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      +91 8790474590
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy("+918790474590", "phone")}
                  className="p-2 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all text-muted-foreground cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedItem === "phone" ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/70 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-semibold text-muted-foreground uppercase">Location</h4>
                  <p className="text-sm font-semibold text-foreground">
                    JNTU, Kukatpally, Hyderabad, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connects */}
            <div className="pt-4">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Social Profiles & Networks
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/nithin-gorintala"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-secondary/60 hover:bg-primary/10 border border-border hover:border-primary/40 text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/nithintechie123"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-secondary/60 hover:bg-primary/10 border border-border hover:border-primary/40 text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://www.instagram.com/nithin______8790?igsh=MWIwYnF6ZnlreXZ6bQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-secondary/60 hover:bg-primary/10 border border-border hover:border-primary/40 text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-card/80 backdrop-blur-md p-8 rounded-3xl border border-border/80 shadow-xl relative overflow-hidden text-left">
            {status.success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 relative z-10 animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground max-w-sm text-sm">
                    Thank you so much! I have received your message and will get back to you promptly.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="cosmic-button mt-4 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2">Send a Direct Message</h3>
                <p className="text-xs text-muted-foreground mb-6">
                  Fill out the form below to initiate contact directly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-semibold uppercase text-muted-foreground mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/60 focus:outline-hidden focus:ring-2 focus:ring-primary text-sm text-foreground"
                      placeholder="e.g. Alex Johnson"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-semibold uppercase text-muted-foreground mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/60 focus:outline-hidden focus:ring-2 focus:ring-primary text-sm text-foreground"
                      placeholder="alex@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-semibold uppercase text-muted-foreground mb-1.5"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/60 focus:outline-hidden focus:ring-2 focus:ring-primary resize-none text-sm text-foreground"
                      placeholder="Hi Nithin, let's discuss an engineering opportunity..."
                    />
                  </div>

                  {status.error && (
                    <div className="p-3 text-xs text-red-500 bg-red-500/10 border border-red-500/20 rounded-xl leading-relaxed">
                      <strong>Submission notice:</strong> {status.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className={cn(
                      "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-2"
                    )}
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
