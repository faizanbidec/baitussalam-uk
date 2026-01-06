import Hero2Section from "../components/hero2"
import InsideSection from "../components/InsideSection"
import CampaignSection from "../components/Ongoingcampaign"
import Ongoingcampaign from "../components/Ongoingcampaign"
import Partofchange from "../components/Partofchange"
import PastWorkSection from "../components/slider"
import SmileSection from "../components/SmileSection"
import Upcomingevent from "../components/Upcomingevent"
export const metadata = {
  title: " Baitussalam Events and Charity Programs",
  description:
    " Explore Baitussalam’s impactful charity events and community programs. Join hands to support education, orphan care, and humanitarian relief initiatives worldwide.",
};

const page = () => {
    const campaignsData = [
  {
    img: "/charity1.png",
    title: "Charity Drive",
    desc: "Providing quality learning opportunities",
    date: "June 2025",
  },
  {
    img: "/ramadan2.png",
    title: "Community Iftar",
    desc: "Serving meals to underprivileged families",
    date: "April 2025",
  },
  {
    img: "/ramadan2.png",
    title: "Community Iftar",
    desc: "Serving meals to underprivileged families",
    date: "April 2025",
  },
  {
    img: "/ramadan2.png",
    title: "Community Iftar",
    desc: "Serving meals to underprivileged families",
    date: "April 2025",
  },
];
  return (
    <div>

<Hero2Section
  subtitle="Events & Campaigns"
  title="Join hands to create change that lasts."
  description="Discover ongoing events and campaigns that bring communities together for a better future."
  buttonText="Donate Now"
  
  topLeftLabel={{
    show: true,
    links: [
      { label: "Home", href: "/" },
      { label: "Campaign", href: "/campaigns" }
    ]
  }}
/>

{/* INTRODUCTION */}
<section className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-10 px-4 sm:px-6 lg:px-20 mt-12 lg:mt-22">
  
  {/* Left Side - Image */}
  <div className="flex justify-center lg:justify-end flex-1 bg-white rounded-lg overflow-hidden p-2 sm:p-4">
    <img
      src="/Collage.png"
      alt="Mobile hospital"
      className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[450px] h-auto object-contain mx-auto"
    />
  </div>

  {/* Right Side - Text */}
  <div className="flex-1 flex flex-col justify-between bg-white rounded-lg p-4 sm:p-6 lg:p-8 mt-8 lg:mt-0">
    <div>
      <p className="text-[#E40D11] uppercase tracking-wide text-[13px] font-semibold mb-2 underline decoration-[#BC153F] decoration-2 underline-offset-[6px]">
        INTRODUCTION
      </p>

      <h2 className="text-black font-bold text-xl sm:text-2xl lg:text-3xl mb-4">
        Why Our Campaigns Matter
      </h2>

      <p className="text-gray-600 mb-4 leading-relaxed  sm:mb-6  text-xs sm:text-sm">
        Every campaign at Baitussalam UK is built around urgent needs and meaningful impact. From Ramadan food drives and Qurbani programs to emergency relief during crises, these initiatives respond directly to the struggles faced by vulnerable families.
      </p>

      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
        Campaigns are more than short-term solutions, they are opportunities for people like you to be part of life-changing moments. Whether it is putting food on a family’s table, helping a child return to school, or providing emergency aid when disaster strikes, your contribution ensures that compassion is transformed into real, measurable change.
      </p>
    </div>
  </div>

</section>


<CampaignSection
          sectionLabel="Ongoing Campaigns"
          title="Current Campaigns You Can Support"
          subtitle="Your support helps us reach the most vulnerable through impactful projects."
          campaigns={campaignsData}
          buttonText="Donate Now"
        />


<PastWorkSection/>


<Upcomingevent/>


  <SmileSection
  title="Be Part of the Change"
  description="Your support makes everything possible. Whether you donate, volunteer, or partner with us, together we can create lasting impact."
 
  
/>


<InsideSection/>
    </div>
  )
}

export default page