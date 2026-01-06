"use client";

import Image from "next/image";
import LearnMoreButton from "./ui/learnmore";

export default function HeroSection() {
  return (
    <section
      className="relative flex justify-center items-center text-center text-white overflow-hidden 
                 h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[75vh] px-4 sm:px-8 lg:px-16"
    >
      {/* Background image */}
      <div className="absolute inset-0 ">
        <Image
          src="/Collagecb.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          aria-hidden="true"
          
        />
      </div>

      {/* Dark overlay behind text */}
      <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-full lg:w-1/2 bg-gradient-to-r from-black/70 to-transparent z-0"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-full md:max-w-[1900px] mx-auto md:ml-0 text-center md:text-left ">
        {/* Tagline */}
        <p className="text-red-600 text-xs sm:text-sm uppercase tracking-wide mb-2 inline-block border-b-2 border-[#BC153F] pb-1 lg:text-[2vh] ">
          Together in Faith & Giving
        </p>

        {/* Heading */}
        <h1
          id="hero-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-rubik font-bold leading-snug sm:leading-snug md:leading-tight lg:leading-tight mb-4 lg:text-[6vh] "
        >
          Join Hands with Baitussalam
        </h1>

        {/* Description */}
        <p className="mb-6 text-sm sm:text-sm md:text-sm lg:text-lg font-rubik text-gray-100 lg:text-[2.5vh] max-w-[540px]">
          Baitussalam UK is a trusted Islamic charity dedicated to using your online donations for education, healthcare, and sustainable welfare.
        </p>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <LearnMoreButton
            label="Learn About Our Work"
            bgColor="#E40D11"
            textColor="#F5F5F5"
            navigateTo="/about"
          />
        </div>
      </div>
    </section>
  );
}
