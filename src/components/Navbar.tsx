
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Flame, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 lg:px-20 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-agency-purple font-bold text-lg">U</span>
          </div>
          <span className="font-bold text-white text-xl">UIXPERIENCE</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link to="/products" className="text-white hover:text-white/80 transition-colors font-medium">
          Products
        </Link>
        <Link to="/live-class" className="text-white hover:text-white/80 transition-colors font-medium">
          Live Class
        </Link>
        <Link to="/webinars" className="text-white hover:text-white/80 transition-colors font-medium">
          Webinars
        </Link>
        <Link to="/community" className="text-white hover:text-white/80 transition-colors font-medium">
          Community
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" className="text-white border-purple-600 bg-agency-purple-light hover:bg-agency-purple rounded-full">
          <Flame className="mr-2 h-4 w-4" />
          <span>Flash Sale</span>
        </Button>
        
        <div className="relative">
          <Button variant="ghost" className="p-2 text-white hover:bg-white/10 rounded-full">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">5</span>
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
