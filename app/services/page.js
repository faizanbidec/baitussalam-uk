import React from 'react'
import Image from 'next/image'
import CausesSection from '../components/CausesSection'
import InsideSection from '../components/InsideSection'
import Partofchange from '../components/Partofchange'
import Storiessection from '../components/StoriesSection'
import Ourworksupport from '../components/Ourworksupport'
import Hero2Section from '../components/hero2'
import StaticOurWorkSupport from '../components/OurWorkstatic'
import SmileSection from '../components/SmileSection'
export const metadata = {
  title: "Baitussalam UK Charity Programs | Education, Orphan & Welfare Support",
  description:
    "Support Baitussalam UK’s Islamic charity programs empowering lives through education, orphan care, food aid, and welfare initiatives across the UK and beyond.",
};
const myCustomStory = {
  title: "Journeys of Hope",              // Appears above the heading
  heading: "Lives Changed Every Day", // Main heading
  description: `
  
    <p className="mb-2">
    Every story reflects the real impact of support and compassion. Children who once had no access to education now step into classrooms with excitement and curiosity, eager to learn. Families that struggled to meet basic needs are beginning to rebuild their lives with dignity, hope, and confidence.
    </p><br/>
    <p>
Through healthcare initiatives, children and adults receive essential medical care that was previously out of reach, giving them a chance to grow and thrive. These journeys of hope demonstrate how each contribution creates meaningful change, transforming challenges into opportunities for a brighter future.
    </p><br/>
    <p>Every story is a testament to the power of collective action. Your support fuels these journeys, inspiring hope and creating lasting impact for generations to come.”</p>
  `,                                
  images: [
    {
      image_path: "/Collag2.png"  // Image shown on the left
    }
  ]
};

const page = () => {
  return (
    <div>
        <Hero2Section
                subtitle="OUR PROGRAM"
                title=" Serving Humanity, Inspiring Hope "
                description="Our initiatives focus on empowering communities, supporting children, and transforming lives through sustainable programs."
                t topLeftLabel={{
    show: true,
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" }
    ]
  }}
                
              />




   <section className="flex  flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-12 px-4 sm:px-12 py-14 mt-13">

  {/* Left Side - Image */}
 <div className="flex-1 flex items-center justify-center bg-white overflow-hidden relative aspect-[4/3]">
  <Image
    src="/ourwork.png"
    alt="Mobile hospital"
    fill
    className="object-contain"
    sizes="(max-width: 1024px) 100vw, 50vw"
  />
</div>

  {/* Right Side - Text */}
  <div className="flex-1 flex flex-col justify-between bg-white rounded-lg p-4 sm:p-6 lg:p-8">
    <div>
      <p className="text-red-600 text-sm sm:text-[14px] uppercase tracking-wide mb-2 inline-block border-b-2 border-[#BC153F] pb-0.5">
          About Us

        </p>

      <h2 className="text-[#000000] font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6">
        Baitussalam Charity Program UK
      </h2>

      <p className="text-gray-600 text-[12px] sm:text-sm leading-relaxed mb-4 sm:mb-6">
        Baitussalam UK’s Islamic charity programs  turn compassion into meaningful action. Every effort creates visible impact, a child joining school with excitement through our  education and orphan support, a family receiving food with dignity, or a patient gaining access to much-needed healthcare.
      </p>

      <p className="text-gray-600 text-[12px] sm:text-sm leading-relaxed mb-6 sm:mb-8">
        Through each charity program in the UK, your generosity fuels hope and restores dignity. Every donation strengthens  welfare and relief programs , helps support orphan care programs, and builds lasting opportunities for vulnerable families to lead secure, dignified lives.
      </p>

      {/* Bullet Points with Image in Blue Circle */}
      <div className="space-y-4 mb-8">
  {[
    {
      img: "/tick.png",
      title: " Building Trust",
      desc: "Ensuring transparency and accountability in every action we take.",
    },
    {
      img: "/tick.png",
      title: "Providing Hope",
      desc: "Delivering support to families and individuals in need worldwide.",
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className="flex items-center justify-start gap-3 sm:gap-4"
    >
      {/* Blue Circle */}
      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#22305B] flex items-center justify-center flex-shrink-0">
        <Image
          src={item.img}
          alt="Icon"
          width={16}
          height={16}
          className="object-contain filter invert"
          sizes="(max-width: 640px) 12px, 16px"
        />
      </div>

      {/* Title */}
      <p className="text-[#22305B] font-semibold text-[13px] sm:text-sm md:text-base min-w-[140px]">
        {item.title}
      </p>

      {/* Description */}
      <p className="text-gray-600 text-[11px] sm:text-sm leading-snug">
        {item.desc}
      </p>
    </div>
  ))}
</div>

    </div>

    {/* Footer Info */}
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <div className="flex items-center border border-[#E40D11] rounded-lg px-3 py-2 gap-4">
        <p className="text-
         text-2xl font-bold">08</p>
        <p className="text-sm text-black">years of <br/> Experience</p>
      </div>

      <div className="relative w-32 sm:w-36 aspect-[4/3]">
        <Image src="/logo2.png" alt="Baitussalam Logo" fill className="object-contain" sizes="(max-width: 640px) 128px, 144px" />
      </div>
    </div>
  </div>
</section>








     <CausesSection
        sectionTitle="FOCUS AREAS"
        mainHeading="Where We Make a Difference"
        description="Your support helps us reach the most vulnerable through impactful projects."
      />

   <Storiessection story={myCustomStory} />

<StaticOurWorkSupport/>

    <SmileSection
  title="Be Part of the Change"
  description="Your support makes everything possible. Whether you donate, volunteer, or partner with us, together we can create lasting impact."
 
  
/>


<InsideSection/>
    </div>
  )
}

export default page