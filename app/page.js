import Image from "next/image";
import HeroSection from "./components/herosec";
import {
  FaUtensils,
  FaChild,
  FaProjectDiagram,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import { FaBook, FaHeartbeat, FaLeaf, FaHandsHelping } from "react-icons/fa";
import InsideSection from "./components/InsideSection";
import SmileSection from "./components/SmileSection";
import Ongoingcampaign from "./components/Ongoingcampaign";

import CausesSection from "./components/CausesSection";
import LearnMoreButton from "./components/ui/learnmore";
import FeaturedCampaign from "./components/Fooddrive";
import CampaignSection from "./components/Ongoingcampaign";
import TransformingSection from "./components/TransformingSection";
import VideoSection from "./components/VideoSection";
import SuccessStories from "./components/SuccessStories";
import Humanitysection from "./components/Humanitysection";
export const metadata = {
  title: "Islamic Charity & Online Donation Welfare | Baitussalam UK",
  description:
    "Baitussalam is a trusted Islamic charity foundation in UK dedicated to making a real impact. Your online donation in the UK supports families in need.",
};
export default function HomePage() {
  //    const campaignsData = [
  //   {
  //     img: "/charity1.png",
  //     title: "Charity Drive",
  //     desc: "Providing quality learning opportunities",
  //     date: "June 2025",
  //   },
  //   {
  //     img: "/ramadan2.png",
  //     title: "Community Iftar",
  //     desc: "Serving meals to underprivileged families",
  //     date: "April 2025",
  //   },
  //   {
  //     img: "/ramadan2.png",
  //     title: "Volunteering Orientation",
  //     desc: "Serving meals to underprivileged families",
  //     date: "April 2025",
  //   },
  //   {
  //     img: "/ramadan2.png",
  //     title: "Iftar Serve ",
  //     desc: "Serving meals to underprivileged families",
  //     date: "April 2025",
  //   },
  // ];

  return (
    <div className="bg-white text-gray-900">
      <HeroSection />

      <>
        {/* <TransformingSection /> */}

        <Humanitysection />

        {/* section4  */}

        <CausesSection />

        {/* section */}
        <SuccessStories />

        {/* section */}
        <FeaturedCampaign />

        <VideoSection />

        {/* section */}

        <section className="my-16 mb-40 ">
          {/* 🔹 IMPACT SECTION */}
          <div className="bg-[#22305B] lg:max-w-[90vw] text-white rounded-tr-[100px] rounded-tl-0 py-16 px-5 text-center mx-auto w-[90%] max-w-[1200px] lg:h-[350px]">
            {/* Top Text */}
            <p className="text-[#E40D11] uppercase underline underline-offset-4 decoration-[#BC153F] tracking-wide font-medium mb-2">
              Real Change, Real Lives
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              The Difference Your Support Makes
            </h2>

            <p className="text-[#B1B1B1] max-w-xl mx-auto mb-12 text-sm sm:text-base">
              Thousands of lives have been touched through the efforts of our donors and volunteers.
            </p>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center lg:ml-8 lg:max-w-[80vw] gap-6 lg:justify-between">
              {[
                { img: "/Vector.png", title: "50+ Water Projects", desc: "Providing clean and safe water to communities in need across the region.", },
                { img: "/cap.png", title: "200+ Children Sponsored", desc: "Supporting education and well-being for over 200 children and their families." },
                { img: "/child.png", title: "50+ Community Projects", desc: " Implementing sustainable projects that uplift and strengthen local communities." },
                { img: "/family.png", title: "10+ Volunteers", desc: "Engaging over 10 volunteers in meaningful service and community support." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FBFBFB] text-black rounded-[20px] p-3 sm:p-5 flex-1 min-w-[200px] max-w-[240px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-center border-[5px] border-white h-auto sm:h-[250px] flex flex-col justify-start"
                >
                  {/* Pink Circle with Image */}
                  <div className=" sm:w-21 sm:h-20 bg-[#BC153F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={50} // image ka natural size bigger rakho
                      height={50}
                      className="object-contain"
                      sizes="(max-width: 640px) 40px, 44px"
                    />
                  </div>

                  <h3 className="text-[15px] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11.5px] text-[#666] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CampaignSection
          sectionLabel="Join Us"
          title="Ongoing Campaigns"
          subtitle="Stay updated on our latest programs, community projects, and donation initiatives. Join us in supporting those in need and spreading hope across the world. Every update brings us closer to creating lasting change together.
Visit our trusted islamic charity platform to explore how you can donate now, make an online donation uk, and be part of our mission to serve humanity
"
          buttonText="Donate Now"
        />

        <SmileSection />

        <InsideSection />
      </>
    </div>
  );
}
