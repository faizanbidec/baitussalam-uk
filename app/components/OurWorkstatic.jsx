"use client";

import React from "react";
import Image from "next/image";

const StaticOurWorkSupport = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white px-6 sm:px-8 lg:px-16 py-12 lg:py-16 font-sans gap-8 lg:gap-16">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-red-600 text-xs sm:text-sm uppercase tracking-wide mb-1.5 underline decoration-[#BC153F] decoration-2 underline-offset-4 pt-2 sm:pt-4">
          Our Impact in Numbers
        </p>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 leading-snug">
         Spreading Hope Across Communities
        </h2>

        <p className="text-gray-600 text-[12px] sm:text-sm md:text-[14px] lg:text-[14px]  mb-6">
         Thousands of lives have been touched through the efforts of our donors and volunteers.
        </p>

        {/* Stats / Highlights */}
        <div className="flex flex-col gap-3">
          {[
            { icon: "/drop.png", title: "405+ Institutions", text: "Empowering communities through education, care, and social uplift." },
            { icon: "/cap.png", title: "1.8M+ Qurbani Beneficiaries", text: "Delivering Qurbani meat to millions, spreading joy and nourishment." },
            { icon: "/community.png", title: "800K+ Healthcare Recipients", text: "Providing accessible healthcare for those in need across communities." },
            { icon: "/family.png", title: "Rs 1.6B+ Spent on Food Aid", text: "Feeding families nationwide through sustainable food distribution.." },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="bg-[#BC153F] text-white rounded-full flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12">
                <Image src={item.icon} alt={item.title} width={28} height={28} className="object-contain" />
              </div>
              <div>
                <h4 className="text-black font-semibold text-xs sm:text-sm md:text-[14px] mb-1">{item.title}</h4>
                <p className="text-gray-500 text-[10px] sm:text-[11px] md:text-[12px] leading-[1.4]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="relative w-full max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/Piic.png"
            alt="Our Work Support"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 900px"
          />
        </div>
      </div>
    </section>
  );
};

export default StaticOurWorkSupport;
