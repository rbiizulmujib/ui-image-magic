
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen bg-agency-gradient overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Index;
