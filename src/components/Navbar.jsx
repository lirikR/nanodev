import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-5">
      <nav
        className={`w-[85%] backdrop-blur-sm rounded-lg transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-black border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            : "bg-white border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
        }`}
      >
        <div className="flex flex-row justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <h1
              className={`text-xl font-semibold transition-colors duration-500 ease-in-out ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              nano.dev
            </h1>
          </div>
          <div className="flex items-center space-x-10">
            {["Home", "Projects", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-500 ease-in-out ${
                  isScrolled ? "text-white" : "text-black"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <div>
            <button
              className={`py-1.5 px-6 text-sm rounded-lg transition-colors duration-500 ease-in-out ${
                isScrolled ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Contact us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
