"use client";

import { useState, FormEvent } from "react";
import FormInput from "@/components/ui/FormInput";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // This is important
    console.log('Starting submission...');
    setIsSubmitting(true);
    setSubmitStatus("idle");

    console.log('Sending data:', formData);

    try {
      const response = await fetch("http://localhost:3001/api/contact-submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // console.log('Response:', response);

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitStatus("success");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
      <FormInput
        label="Full Name"
        id="name"
        name="name"
        type="text"
        required
        disabled={isSubmitting}
        value={formData.name}
        onChange={handleChange}
      />

      <FormInput
        label="Email Address"
        id="email"
        name="email"
        type="email"
        required
        disabled={isSubmitting}
        value={formData.email}
        onChange={handleChange}
      />

      <FormInput
        label="Subject"
        id="subject"
        name="subject"
        type="text"
        required
        disabled={isSubmitting}
        value={formData.subject}
        onChange={handleChange}
      />

      <FormInput
        label="Message"
        id="message"
        name="message"
        isTextarea
        rows={6}
        required
        disabled={isSubmitting}
        value={formData.message}
        onChange={handleChange}
      />

      {submitStatus === "success" && (
        <div className="text-green-500">Message sent successfully!</div>
      )}

      {submitStatus === "error" && (
        <div className="text-red-500">Failed to send message. Please try again.</div>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`rounded-md bg-greek-blue px-8 py-3 font-sans text-sm font-medium uppercase tracking-wider text-greek-white transition-colors hover:bg-greek-gold ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}