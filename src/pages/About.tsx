
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-montserrat">About Us</h1>
          <div className="prose prose-lg">
            <p className="mb-4 font-montserrat">
              LUQO is dedicated to providing accessible shopping experiences for everyone.
              Our platform connects users with stores that prioritize accessibility and
              inclusive environments.
            </p>
            <p className="mb-4 font-montserrat">
              Founded in 2023, our mission is to ensure that every person, regardless
              of ability, can enjoy a seamless and dignified shopping experience.
            </p>
            <p className="font-montserrat">
              We partner with retailers who are committed to accessibility standards
              and continually work to improve their services for all customers.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
