"use client"

import React, { useState, useRef } from "react";

const PlanSlider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = React.Children.count(children);

  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = startX.current - endX.current;
    if (delta > 50 && activeIndex < total - 1) {
      setActiveIndex((prev) => prev + 1); // swipe left → next
    } else if (delta < -50 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1); // swipe right → prev
    }
  };

  return (
    <div className="md:hidden w-full flex flex-col justify-center items-center">
      {/* Dots */}
      <div className="flex space-x-2 mb-4">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Slider */}
      <div
        className="relative w-full overflow-hidden max-w-md"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${total * 100}%`,
          }}
        >
          {React.Children.map(children, (child) => (
            <div className="w-full shrink-0 flex justify-center px-4">
              <div className="w-full">{child}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanSlider;
