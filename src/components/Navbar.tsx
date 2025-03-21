
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative py-4 bg-[#280049]/[0.40]">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 flex justify-between items-center">
        <div className="flex items-center md:w-full w-full lg:w-auto gap-4">
          <div className="flex-1 lg:flex-initial flex justify-start">
        <Link to="/" className="flex items-center gap-2">
          <svg width="163" height="40" viewBox="0 0 163 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="white" />
            <path d="M11.4941 13.4795V22.0795C11.4941 26.7408 15.3395 30.5195 20.0008 30.5195C24.6621 30.5195 28.5075 26.7408 28.5075 22.0795V13.4795H23.0808V18.9995C23.0808 20.6998 21.703 22.0783 20.003 22.0795C22.3295 22.0843 24.2141 23.9718 24.2141 26.2995C24.2141 28.6301 22.3248 30.5195 19.9941 30.5195C17.6635 30.5195 15.7741 28.6301 15.7741 26.2995C15.7741 23.9692 17.6629 22.0801 19.993 22.0795C18.2956 22.0753 16.9208 20.6979 16.9208 18.9995V13.4795H11.4941Z" fill="#7103FD" />
            <path d="M53.385 26.68C52.525 26.68 51.76 26.5 51.09 26.14C50.43 25.78 49.91 25.285 49.53 24.655C49.15 24.025 48.96 23.31 48.96 22.51V15.325H51V22.405C51 22.865 51.1 23.28 51.3 23.65C51.51 24.02 51.795 24.31 52.155 24.52C52.515 24.72 52.925 24.82 53.385 24.82C53.855 24.82 54.265 24.72 54.615 24.52C54.975 24.31 55.255 24.02 55.455 23.65C55.665 23.28 55.77 22.865 55.77 22.405V15.325H57.81V22.51C57.81 23.31 57.62 24.025 57.24 24.655C56.86 25.285 56.335 25.78 55.665 26.14C55.005 26.5 54.245 26.68 53.385 26.68ZM59.8466 26.5V15.325H61.8866V26.5H59.8466ZM63.1211 26.5L66.7811 20.875L63.1511 15.325H65.4911L68.4611 19.87H67.3811L70.3361 15.325H72.6761L69.0611 20.875L72.7061 26.5H70.3661L67.3811 21.895H68.4611L65.4611 26.5H63.1211ZM73.953 26.5V15.325H78.123C78.883 15.325 79.553 15.465 80.133 15.745C80.723 16.015 81.183 16.415 81.513 16.945C81.843 17.465 82.008 18.1 82.008 18.85C82.008 19.59 81.838 20.225 81.498 20.755C81.168 21.275 80.713 21.675 80.133 21.955C79.553 22.235 78.883 22.375 78.123 22.375H75.993V26.5H73.953ZM75.993 20.575H78.153C78.523 20.575 78.843 20.505 79.113 20.365C79.383 20.215 79.593 20.01 79.743 19.75C79.893 19.49 79.968 19.19 79.968 18.85C79.968 18.5 79.893 18.2 79.743 17.95C79.593 17.69 79.383 17.49 79.113 17.35C78.843 17.2 78.523 17.125 78.153 17.125H75.993V20.575ZM83.6796 26.5V15.325H91.1046V17.125H85.7196V19.99H90.8046V21.79H85.7196V24.7H91.1046V26.5H83.6796ZM92.6005 26.5V15.325H96.7555C97.5155 15.325 98.1855 15.465 98.7655 15.745C99.3555 16.015 99.8155 16.415 100.146 16.945C100.476 17.465 100.641 18.1 100.641 18.85C100.641 19.62 100.456 20.275 100.086 20.815C99.7255 21.355 99.2355 21.755 98.6155 22.015L101.181 26.5H98.8705L96.1255 21.595L97.4455 22.375H94.6405V26.5H92.6005ZM94.6405 20.575H96.7855C97.1555 20.575 97.4755 20.505 97.7455 20.365C98.0155 20.215 98.2255 20.01 98.3755 19.75C98.5255 19.49 98.6005 19.19 98.6005 18.85C98.6005 18.5 98.5255 18.2 98.3755 17.95C98.2255 17.69 98.0155 17.49 97.7455 17.35C97.4755 17.2 97.1555 17.125 96.7855 17.125H94.6405V20.575ZM102.518 26.5V15.325H104.558V26.5H102.518ZM106.707 26.5V15.325H114.132V17.125H108.747V19.99H113.832V21.79H108.747V24.7H114.132V26.5H106.707ZM115.628 26.5V15.325H117.218L123.368 23.605L122.543 23.77V15.325H124.583V26.5H122.978L116.918 18.16L117.668 17.995V26.5H115.628ZM131.996 26.68C131.196 26.68 130.456 26.535 129.776 26.245C129.106 25.955 128.516 25.55 128.006 25.03C127.506 24.51 127.116 23.9 126.836 23.2C126.556 22.5 126.416 21.735 126.416 20.905C126.416 20.075 126.551 19.31 126.821 18.61C127.101 17.9 127.491 17.29 127.991 16.78C128.501 16.26 129.096 15.86 129.776 15.58C130.456 15.29 131.196 15.145 131.996 15.145C132.796 15.145 133.511 15.28 134.141 15.55C134.781 15.82 135.321 16.18 135.761 16.63C136.201 17.07 136.516 17.555 136.706 18.085L134.876 18.94C134.666 18.38 134.311 17.92 133.811 17.56C133.311 17.19 132.706 17.005 131.996 17.005C131.296 17.005 130.676 17.17 130.136 17.5C129.606 17.83 129.191 18.285 128.891 18.865C128.601 19.445 128.456 20.125 128.456 20.905C128.456 21.685 128.601 22.37 128.891 22.96C129.191 23.54 129.606 23.995 130.136 24.325C130.676 24.655 131.296 24.82 131.996 24.82C132.706 24.82 133.311 24.64 133.811 24.28C134.311 23.91 134.666 23.445 134.876 22.885L136.706 23.74C136.516 24.27 136.201 24.76 135.761 25.21C135.321 25.65 134.781 26.005 134.141 26.275C133.511 26.545 132.796 26.68 131.996 26.68ZM138.362 26.5V15.325H145.787V17.125H140.402V19.99H145.487V21.79H140.402V24.7H145.787V26.5H138.362Z" fill="white" />
          </svg>
        </Link>
          </div>
          <div className="flex items-center gap-4">
            <button
        className="lg:hidden p-2 hover:bg-purple-600/20 rounded-lg transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </button>

          </div>
        </div>
        <div className={`${
        isOpen ? 'flex' : 'hidden'
      } lg:flex flex-col lg:flex-row justify-end gap-8 w-full absolute lg:static top-full left-0 right-0 bg-[#280049]/[0.95] lg:bg-transparent px-6 lg:px-0 z-50 border-t lg:border-t-0 border-purple-600/20`}>
        <div className="w-full lg:w-full flex flex-col lg:flex-row items-center justify-end gap-6">
          <Link to="/products" className="text-white hover:text-white/80 transition-colors font-medium w-full lg:w-auto text-center py-3 lg:py-0">
            Products
          </Link>
          <Link to="/live-class" className="text-white hover:text-white/80 transition-colors font-medium w-full lg:w-auto text-center py-3 lg:py-0">
            Live Class
          </Link>
          <Link to="/webinars" className="text-white hover:text-white/80 transition-colors font-medium w-full lg:w-auto text-center py-3 lg:py-0">
            Webinars
          </Link>
          <Link to="/community" className="text-white hover:text-white/80 transition-colors font-medium w-full lg:w-auto text-center py-3 lg:py-0">
            Community
          </Link>
          <Button variant="outline" className="text-white border-purple-600 bg-agency-purple-light rounded-[10px] w-full lg:w-auto my-2 lg:my-0">
            <span>🔥 Flash Sale</span>
          </Button>
       
          <div className="relative">
            <Button variant="ghost" className="p-3 bg-[#F1E6FF] text-white hover:bg-[#F1E6FF]/90 rounded-full">
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.49145 6C1.57221 6 0.146549 7.77725 0.562891 9.65079L3.32597 22.0847C3.83435 24.3723 5.86341 26 8.20691 26H19.7895C22.133 26 24.1621 24.3723 24.6705 22.0847L27.4335 9.65079C27.8499 7.77725 26.4242 6 24.505 6H3.49145ZM19.9985 13H7.99854V15H19.9985V13ZM17.9985 17H9.99854V19H17.9985V17Z" fill="#7103FD" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9116 1.40603L6.91161 10.406L5.08398 9.59375L9.08398 0.59375L10.9116 1.40603ZM18.9116 0.59375L22.9116 9.59375L21.084 10.406L17.084 1.40603L18.9116 0.59375Z" fill="#7103FD" />
              </svg>
            </Button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">5</span>
          </div>
          <div className='svg-line hidden lg:block'>
            <svg width="2" height="34" viewBox="0 0 2 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0V34" stroke="white"/>
            </svg>
          </div>
          <div className="block">
            <Button className="flex flex-row justify-center items-center px-6 py-2 w-full lg:w-[100px] h-12 bg-[#7103FD] border border-white shadow-[0px_0px_11px_#AE70FC] rounded-[10px] mt-4 lg:mt-0">
              Sign in
            </Button>
          </div>
      </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
