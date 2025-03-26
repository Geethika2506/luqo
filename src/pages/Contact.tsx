
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted');
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-montserrat">Contact Us</h1>
          <p className="mb-6 font-montserrat">We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-montserrat">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-montserrat">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-montserrat">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>
            <Button 
              type="submit"
              className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white font-montserrat"
            >
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
