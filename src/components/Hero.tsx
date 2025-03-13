
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame } from 'lucide-react';

const Hero = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-20 md:pb-32 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6">
          Premium Agency<br />for Creatives.
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
          We specialize in crafting unique digital presence that help businesses grow and stand out in their industries.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="text-white border-purple-600 bg-agency-purple-light hover:bg-agency-purple px-6 py-6 h-auto rounded-full">
            <Flame className="mr-2 h-5 w-5" />
            <span className="text-base">Flash Sale</span>
          </Button>
          
          <Button className="bg-white text-agency-purple-dark hover:bg-white/90 px-6 py-6 h-auto rounded-full">
            <span className="text-base mr-2">Connect with us</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="hidden lg:block relative mt-10 md:mt-0">
        <div className="w-80 h-80 relative">
          <div className="border-2 border-white/30 absolute top-0 left-0 w-40 h-40 rounded-tl-xl"></div>
          <div className="border-2 border-white/30 absolute top-0 right-0 w-40 h-40 rounded-tr-xl"></div>
          <div className="border-2 border-white/30 absolute top-40 left-0 right-0 h-40 rounded-bl-xl rounded-br-xl"></div>
          <div className="border-2 border-white/30 absolute bottom-0 left-20 right-20 w-40 h-40 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
