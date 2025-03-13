
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame } from 'lucide-react';

const Hero = () => {
  return <div className="w-full px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-20 md:pb-32 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-3xl mr-[100px]">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6">
          Premium Agency<br />for Creatives.
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
          We specialize in crafting unique digital presence that help businesses grow and stand out in their industries.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="text-white border-purple-600 bg-agency-purple-light hover:bg-agency-purple h-auto rounded-[10px] py-[12px] px-[48px]">
            <span className="text-base">Flash Sale</span>
          </Button>
          
          <Button className="bg-white text-agency-purple-dark hover:bg-white/90 h-auto rounded-[10px] px-[48px] py-[12px]">
            <span className="text-base mr-2">Connect with us</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="mt-16 md:mt-0 w-full max-w-md lg:max-w-lg xl:max-w-xl">
        <svg width="370px" height="350px" viewBox="0 0 373 351" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M244.949 346.999C316.615 333.641 371.842 271.534 373.144 196.516H245.077C275.22 208.193 296.594 237.467 296.594 271.733C296.594 306.047 275.16 335.356 244.949 346.999Z" fill="white" fillOpacity="0.1"/>
          <path d="M186.735 346.908C115.305 333.362 60.3218 271.365 59.0235 196.516H186.842C156.699 208.193 135.325 237.467 135.325 271.733C135.325 305.959 156.649 335.204 186.735 346.908Z" fill="white" fillOpacity="0.1"/>
          <path d="M373.168 193.807V139.641H272.959V136.932C272.959 162.277 256.382 183.749 233.478 191.098H373.167L373.168 193.807Z" fill="white" fillOpacity="0.1"/>
          <path d="M198.69 191.098C175.787 183.749 159.209 162.277 159.209 136.932V139.641H59.0008V191.098H198.69Z" fill="white" fillOpacity="0.1"/>
          <path d="M59.0004 194.173C59.0001 194.051 59 193.928 59 193.806L59.0004 194.173Z" fill="white" fillOpacity="0.1"/>
          <path d="M59.0008 134.224H159.209V35H59.0008V134.224Z" fill="white" fillOpacity="0.1"/>
          <path d="M272.959 134.224H373.168V35H272.959V134.224Z" fill="white" fillOpacity="0.1"/>
          <path d="M140.742 271.733C140.742 230.318 174.213 196.72 215.58 196.516H216.339C257.706 196.72 291.177 230.318 291.177 271.733C291.177 313.274 257.501 346.951 215.959 346.951C174.418 346.951 140.742 313.274 140.742 271.733Z" fill="white" fillOpacity="0.1"/>
          <path d="M349.003 113.91V176.91H175.002M349.003 113.91H238.002M349.003 113.91V1H238.002V113.91M175.002 176.91C209.796 176.91 238.002 148.704 238.002 113.91M175.002 176.91H1.00084V113.91M175.002 176.91C140.208 176.91 112.002 148.704 112.002 113.91M1.00084 113.91H112.002M1.00084 113.91V1H112.002V113.91M349.002 176.909H1C1 272.254 79.6561 349.547 175.001 349.547C270.346 349.547 349.002 272.254 349.002 176.909ZM261.182 263.228C261.182 310.9 222.536 349.547 174.864 349.547C127.191 349.547 88.5449 310.9 88.5449 263.228C88.5449 215.555 127.191 176.909 174.864 176.909C222.536 176.909 261.182 215.555 261.182 263.228Z" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
    </div>;
};
export default Hero;
