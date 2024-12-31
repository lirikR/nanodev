import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-[90vh] mt-40">
      <div className="w-4/6 flex flex-col items-start justify-center space-y-4">
        <h1 className="text-8xl text-zinc-300 font-medium">
          Get in touch now.
        </h1>
        <span className="border border-zinc-800 py-1 px-1 rounded-lg relative">
          <button
            className="bg-white text-black font-medium py-2.5 px-8 text-sm rounded-md
            transition-all duration-500 ease-in-out hover:px-10 relative
            after:absolute after:content-[''] after:bg-gradient-to-r 
            after:from-purple-500/75 after:via-pink-500/75 after:to-orange-500/75
            after:w-[calc(100%+8px)] after:h-[calc(100%+8px)] after:blur-md 
            after:opacity-0 hover:after:opacity-100 after:transition-opacity 
            after:duration-500 after:-z-10 after:top-1/2 after:left-1/2
            after:-translate-x-1/2 after:-translate-y-1/2"
          >
            Contact us
          </button>
        </span>
      </div>
    </div>
  );
};

export default Footer;
