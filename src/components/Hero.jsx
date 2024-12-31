import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="flex flex-col items-center justify-center hero mt-40 space-y-40 w-4/6">
        <div className="hero-heading space-y-10">
          <div className="space-y-4">
            <h1 className="text-6xl font-black">
              Delivering reliable digital solutions without breaking the bank.
            </h1>
            <p className="text-lg font-medium">
              From designing stunning websites to managing your social media, we
              handle it all.
            </p>
          </div>

          <button className="mt-10 bg-white py-2 px-7 text-black font-medium text-sm rounded-lg transition-all duration-300 ease-in-out hover:px-10 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            Get in touch now!
          </button>
        </div>

        <img
          className="rounded-lg"
          src="../../public/images/hero.png"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
