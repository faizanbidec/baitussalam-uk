"use client";
import { useState } from "react";
import Image from "next/image";
import DonationModal from "../components/Donationform";
import LearnMoreButton from "./ui/learnmore";
import { causesData } from "../causes/causesData";

export default function SuccessStories() {
  const [showDonateForm, setShowDonateForm] = useState(false);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center gap-10 py-20 bg-white" aria-labelledby="success-stories-heading">
      {/* Left Overlapping Image */}
      <div className="w-full lg:w-auto lg:absolute lg:left-[8%] lg:top-1/2 lg:-translate-y-1/2 z-10 flex justify-center">
        <div className="relative w-[520px] max-w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/Pic.png"
            alt="Success Stories"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 520px"
            priority
          />
        </div>
      </div>

      {/* Blue Background Block (Right Side) */}
      <div
        className="
          relative w-full flex-1 
          bg-[#0a1d3c8a] 
          rounded-tl-[40px] sm:rounded-tl-[60px] 
          rounded-bl-[40px] sm:rounded-bl-[60px] 
          p-6 sm:p-10 
          text-white 
          overflow-hidden 
          lg:ml-[28rem]
        "
      >
        <div className="absolute inset-0">
          <Image
            src="/map.png"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1094px) 100vw, 50vw"
            aria-hidden="true"
          />
        </div>
        {/* Light Blue Overlay */}
        <div className="absolute inset-0 bg-[rgba(10,29,60,0.8)] rounded-tl-[40px] sm:rounded-tl-[60px] rounded-bl-[40px] sm:rounded-bl-[60px] z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 pt-8 lg:ml-12 sm:pt-11 pb-8 sm:pb-10  lg:text-left px-2 sm:px-40 ">
          <p className="text-[12px] sm:text-[14px] tracking-wider uppercase text-white mb-3 inline-block border-b-2 border-white pb-1">
            Our Impact in Action
          </p>

          <h2 id="success-stories-heading" className="text-[20px] sm:text-[24px] md:text-[27px] font-bold mb-4 sm:mb-5 leading-[1.3] mr-19">
            Success Stories of Hope and Change
          </h2>

          <p className="text-[12px] sm:text-[13px] leading-6 text-[#D7D6D6] mb-4 sm:mb-5 max-w-[580px] mx-auto lg:mx-0">
          Behind every donation to our trusted Islamic charity UK is a real story of transformation. Families who once struggled to meet basic needs are now rebuilding their lives with dignity. Children are attending school, receiving regular meals, and dreaming of a brighter future thanks to supporters who donate online in the UK.
          </p>

          <p className="text-[12px] sm:text-[13px] leading-6 text-[#D7D6D6] mb-6 sm:mb-8 max-w-[580px] mx-auto lg:mx-0">
            Every sadqah donation and contribution to our Islamic charity services creates lasting change. From funding education and healthcare to empowering families, your support through online donations UK transforms lives and builds hope for a brighter future.
          </p>

          {/* Donate Button */}
          <div className="flex justify-center lg:justify-start">
            <LearnMoreButton
              label="Donate"
              bgColor="#E40D11"
              textColor="white"
              hoverColor="#b50b0f"
              onClickAction={() => setShowDonateForm(true)}
              className="px-4 py-2 text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal
        open={showDonateForm}
        setOpen={setShowDonateForm}
        causesData={causesData}
        
      />
    </section>
  );
}
