import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-montserrat">About Us</h1>
          <div className="prose prose-lg">
            <p className="mb-4 font-montserrat">LUQO is dedicated to providing accessible shopping experiences for everyone. Our platform connects users with stores that prioritize accessibility and inclusive environments.Luqo is a platform designed to help small businesses in Spain connect with new customers while building a supportive business community. Our mission is simple: to create an ecosystem where local businesses collaborate, share customer bases, and grow together.




How It Works

We make it easy for businesses to attract and engage customers through unique experiences—workshops, tastings, giveaways, and more. These experiences are accessed via QR codes, bringing customers into the Luqo ecosystem where they can discover other local businesses and exciting opportunities.




Why Join Luqo?

Expand Your Reach – Gain exposure to new customers by tapping into other businesses’ audiences.




Engage Your Community – Offer exclusive experiences that bring people through your doors.




Grow Together – Become part of a network that supports and uplifts local businesses.




Whether you're a café offering a tasting session, a boutique hosting a styling workshop, or an artisanal brand running a giveaway, Luqo helps you attract, engage, and retain customers—while strengthening the local business community.




Join Luqo today and be part of a smarter, more connected way to grow!

add this the about section</p>
            <p className="mb-4 font-montserrat">
          </p>
            <p className="font-montserrat">
          </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default About;