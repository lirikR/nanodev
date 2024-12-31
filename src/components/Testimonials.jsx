import React from "react";
import { reviewColumns as columns } from "../data/reviewData";

const Testimonials = () => {
  return (
    <div className="w-screen mt-40">
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="text-4xl font-medium mt-10 mb-1">
          {`<We let our work, do the talking for us/>`}
        </h1>
        <h1 className="text-zinc-300 text-lg font-medium mb-12">
          Companies all over the world trust us with their projects.
        </h1>
        <div className="grid grid-cols-5 gap-4 h-screen w-full px-8 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="carousel-column">
              <div className="scroll-content">
                {[...column, ...column].map((review, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="card bg-black-950 p-8 rounded-lg mb-4 border border-zinc-700 text-white min-h-[200px] flex flex-col"
                  >
                    <p className="text-sm mb-4 text-left">{review.text}</p>
                    <div className="w-full mt-auto text-left">
                      <p className="text-sm font-medium">{review.name}</p>
                      <p className="text-xs text-zinc-400">{review.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
