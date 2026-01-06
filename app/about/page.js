import React from "react";
import Image from "next/image";
import CausesSection from "../components/CausesSection";
import SmileSection from "../components/SmileSection";
import InsideSection from "../components/InsideSection";
import VisionSection from "../components/Visionsection";
import Hero2Section from "../components/hero2";
import Whoweare from "../components/Whoweare";
export const metadata = {
  title: "About Us | Trusted Islamic Charity in UK",
  description:
    "Baitussalam UK is a trusted Islamic charity empowering lives through education, healthcare, food aid, and community support.",
};
const Page = () => {
  return (
     <div className="bg-white text-gray-900">
    <Hero2Section
                subtitle="ABOUT US"
                title="Hope, Help, and Human Dignity"
                description="Baitussalam UK (Charity No. 1208852) is dedicated to turning compassion into action by empowering vulnerable communities through education, healthcare, food security, and long-term support."
                 topLeftLabel={{
    show: true,
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/aboutz" }
    ]
  }}
                
              />


  <Whoweare/>



{/* mission section */}

<section className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-12 px-6 sm:px-12 lg:px-[8%] py-10  bg-white md:mt-19  ">
  {/* Gray background box */}
  <div className="absolute z-0 bg-gray-100 rounded-l-[20px] 
      top-24 lg:bottom-10 right-0 
      left-0 lg:left-1/4 sm:top-8 base:top-16 sm:bottom-2
      lg:top-23 md:top-8 md:bottom-2 ">
  </div>

  {/* Left Images */}
  <div className="relative z-10 flex justify-center lg:justify-start mt-9 lg:mt-0">
    <div className="relative w-[90%] max-w-[400px] lg:ml-6 lg:w-full lg:max-w-[490px] aspect-[490/460] mx-auto lg:mx-0 rounded-[20px] overflow-hidden">
      <Image
        src="/Picc.png"
        alt="Building"
        fill
        className=" rounded-[20px]"
        sizes="(max-width: 1024px) 90vw, 420px"
      />

      
     
    </div>
  </div>

  {/* Right Text */}
  <div className="relative z-10 text-center lg:text-left mt-8 lg:mt-0">
    <p className="text-red-600 text-xs sm:text-sm uppercase mb-1 sm:mb-2 underline decoration-[#BC153F] decoration-2 underline-offset-2 tracking-wide pt-16 lg:pt-19   ">
      Mission
    </p>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
      Our Mission
    </h2>

    <p className="text-gray-500 text-[12px] sm:text-xs leading-relaxed mb-3 font-rubik">
      Baitussalam UK’s mission is to transform compassion into meaningful action by serving humanity with dignity, integrity, and accountability. We are dedicated to addressing the urgent needs of vulnerable individuals and families through holistic programs in education, healthcare, food security, and community empowerment.
    </p>

    <p className="text-gray-500 text-[12px] sm:text-xs leading-relaxed font-rubik lg:pb-11">
     We believe true change is not just about providing temporary relief but about creating sustainable opportunities that allow people to thrive. From offering orphans a safe and nurturing environment to supporting widows and vulnerable families with long-term assistance, every initiative we take is designed to restore hope and build a pathway toward self-reliance.

    </p>
  </div>
</section>


  


<VisionSection/>


{/* our vallues  */}

<section className="relative bg-white text-center overflow-hidden py-16 sm:py-20 px-4 sm:px-12 font-sans">

  {/* Left Blue Background — hidden on small screens */}
  <div className="hidden sm:block md:block absolute top-[65%] left-0 transform -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-[#22305B] lg:w-[25vw] rounded-tr-[60px] rounded-br-[60px] z-0"></div>

  {/* Right Blue Background — hidden on small screens */}
  <div className="hidden sm:block md:block absolute top-[65%] right-0 transform -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 lg:w-[25vw] bg-[#22305B] rounded-tl-[60px] rounded-bl-[60px] z-0"></div>

  {/* Headings */}
  <div className="text-[#E40D11] uppercase text-[12px] sm:text-[14px] tracking-wide mb-2 sm:mb-3 underline decoration-[#BC153F] decoration-2 underline-offset-2">
    OUR VALUES
  </div>

  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-2">
    The Principles We Live By
  </h2>

  <p className="text-[12px] sm:text-sm text-black mb-12 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto">
    Our work is built on principles that ensure trust, fairness, and meaningful impact.
  </p>

  {/* Cards */}
  <div className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-[170vw]">
    {[
      { img: "/icon1.png", title: "Compassion", text: "Serving with empathy and care." },
      { img: "/icon2.png", title: "Transparency", text: "Using every donation responsibly." },
      { img: "/icon3.png", title: "Inclusivity", text: "Every individual deserves dignity." },
      { img: "/icon4.png", title: "Accountability", text: "Creating measurable, lasting impact." },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#FBFBFB] shadow-md rounded-[15px] w-52 sm:w-56 md:w-60 h-48 sm:h-52 md:h-52 p-4 sm:p-6 text-center flex flex-col items-center justify-center"
      >
        <div className="bg-[#b2173f] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          <Image src={item.img} alt={item.title} width={32} height={32} className="object-contain" sizes="(max-width: 640px) 20px, 32px" />
        </div>
        <div className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</div>
        <div className="text-[10px] sm:text-[12px] text-gray-500">{item.text}</div>
      </div>
    ))}
  </div>
</section>




<CausesSection/>

<SmileSection/>

<InsideSection/>
    </div>


    
  );
};

export default Page;
