import {
  GitBranch,
  GitCompareIcon,
  GithubIcon,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  CheckCircle2,
  Loader2
} from "lucide-react";
import React, { useState } from "react";
import cn from "../lib/utils";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
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
          },
          publicKey
        )
        .then(() => {
          setStatus({ submitting: false, success: true, error: null });
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          console.error("EmailJS sending failed:", err);
          // Auto fallback to local mailto
          const subject = `Message from ${formData.name}`;
          const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
          const mailtoUrl = `mailto:gorintalanithin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.location.href = mailtoUrl;

          setStatus({ submitting: false, success: true, error: null });
          setFormData({ name: "", email: "", message: "" });
        });
    } else {
      // Simulate API network latency for a premium experience
      setStatus({ submitting: true, success: false, error: null });
      setTimeout(() => {
        const subject = `Message from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoUrl = `mailto:gorintalanithin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;

        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: "", email: "", message: "" });
      }, 1200);
    }
  };

  const resetForm = () => {
    setStatus({ submitting: false, success: false, error: null });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex flex-items space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:gorintalanithin@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    gorintalanithin@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-items space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+91-8956234563"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-8790474590
                  </a>
                </div>
              </div>
              <div className="flex flex-items space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    JNTU, Kukatpally, Hyderabad.
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/nithin-gorintala" target="_blank" rel="noreferrer">
                  <Linkedin />
                </a>
                <a href="https://github.com/nithintechie123" target="_blank" rel="noreferrer">
                  <GithubIcon />
                </a>
                <a href="https://www.instagram.com/nithin______8790?igsh=MWIwYnF6ZnlreXZ6bQ==" target="_blank" rel="noreferrer">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs relative overflow-hidden">
            {status.success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 relative z-10 animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you so much! I have received your message and will get back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="px-6 py-2 rounded-full border border-border hover:border-primary/50 text-foreground transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-small font-medium mb-2 text-left"
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
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary text-left text-foreground"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-small font-medium mb-2 text-left"
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
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary text-left text-foreground"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-small font-medium mb-2 text-left"
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
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none text-left text-foreground"
                      placeholder="Hello, I'd like to talk about..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={status.submitting}
                    className={cn(
                      "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
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
                        <Send size={16} />
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
