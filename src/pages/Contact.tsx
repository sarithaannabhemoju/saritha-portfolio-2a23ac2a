
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Here we'd normally send the form data to a backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-portfolio-beige py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">Get in Touch</h1>
          <p className="text-lg text-portfolio-gray max-w-3xl mx-auto text-center">
            I'd love to hear from you about opportunities, collaborations, or any questions you might have.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-portfolio-beige p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold mb-8 text-portfolio-dark-brown">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-brown flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-portfolio-dark-brown">Phone</h3>
                    <p className="text-portfolio-gray">+91 95509 07029</p>
                    <p className="text-sm text-portfolio-gray mt-1">Available weekdays 9 AM - 6 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-brown flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-portfolio-dark-brown">Email</h3>
                    <p className="text-portfolio-gray">sarithaannabhemoju@gmail.com</p>
                    <p className="text-sm text-portfolio-gray mt-1">For professional inquiries and opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-brown flex items-center justify-center shrink-0">
                    <Linkedin size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-portfolio-dark-brown">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/saritha-annabhemoju-51b46a325" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-portfolio-brown hover:text-portfolio-dark-brown transition-colors"
                    >
                      Saritha Annabhemoju
                    </a>
                    <p className="text-sm text-portfolio-gray mt-1">Connect with me professionally</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4 text-portfolio-dark-brown">Availability</h3>
                <p className="text-portfolio-gray mb-4">
                  Currently seeking opportunities in Business Analytics, Data Analysis, and related fields. 
                  I'm available for full-time positions, project collaborations, and consultations.
                </p>
                <p className="text-portfolio-gray">
                  Response Time: Usually within 24 hours
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-portfolio-dark-brown">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-portfolio-dark-brown mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-brown/20 focus:outline-none focus:ring-2 focus:ring-portfolio-brown"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-portfolio-dark-brown mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-brown/20 focus:outline-none focus:ring-2 focus:ring-portfolio-brown"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-portfolio-dark-brown mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-brown/20 focus:outline-none focus:ring-2 focus:ring-portfolio-brown"
                    placeholder="Job Opportunity"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-portfolio-dark-brown mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-brown/20 focus:outline-none focus:ring-2 focus:ring-portfolio-brown"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="bg-portfolio-brown hover:bg-portfolio-dark-brown text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                  >
                    Send Message <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-portfolio-beige">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Location</h2>
          
          <div className="text-center mb-8">
            <p className="text-lg text-portfolio-dark-brown mb-2">Hyderabad, Telangana, India</p>
            <p className="text-portfolio-gray">Available for remote work and relocation opportunities</p>
          </div>
          
          <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-full bg-portfolio-light-brown/20 flex items-center justify-center">
              <p className="text-portfolio-gray">Map placeholder - Hyderabad, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
