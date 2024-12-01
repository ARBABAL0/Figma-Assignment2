import React from "react";
import Image from "next/image";



export const Hero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-16 gap-8 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="text-center lg:text-left w-full max-w-lg space-y-6">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Learn new skills <br /> online with ease
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button
            className="bg-black text-white px-6 py-3 rounded-md"
            aria-label="Start learning now"
          >
            Start learning now
          </button>
          <button
            className="border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-200"
            aria-label="Explore Courses"
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="max-w-xs sm:max-w-sm lg:max-w-md flex items-center">
        <Image
          src="/figma-2.jpeg"
          alt="An illustration depicting online learning"
          width={640}
          height={900}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;