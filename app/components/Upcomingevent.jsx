"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { causesData } from "../causes/causesData";
import { upcomingEvents } from "../../data/allCampaigns";
import { campaignsAPI } from "../api/campaignAPI";


// Dynamically import the DonationModal (to avoid SSR issues)
const DonationModal = dynamic(() => import("../components/Donationform"), {
  ssr: false,
});

export default function Upcomingevent() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  
const upcomingCampaigns = campaigns.filter(
  (item) =>
    item.campain_status === "Upcoming" &&
    item.status === 1
);

  // const campaigns = [
  //   {
  //     img: "/charity1.png",
  //     title: "Charity Drive",
  //     desc: "Free medical check-ups, medicine distribution, and health awareness sessions for underprivileged communities. Help us extend healthcare access to those who need it most.",
  //     location: "Karachi",
  //     locationDesc: "Helping local communities in need.",
  //     date: "June 2025",
  //     dateDesc: "12th June, 2025",
  //   },
  //   {
  //     img: "/ramadan2.png",
  //     title: "Community Iftar",
  //     desc: "Join our community iftar to feed the needy and bring people together this Ramadan season.",
  //     location: "Lahore",
  //     locationDesc: "Downtown Iftar arrangements.",
  //     date: "April 2025",
  //     dateDesc: "Evening of 15th April, 2025",
  //   },
  //   {
  //     img: "/charity2.png",
  //     title: "Volunteer Orientation",
  //     desc: "Orientation session for new volunteers to join hands in social welfare and community service.",
  //     location: "Islamabad",
  //     locationDesc: "Orientation session for new volunteers.",
  //     date: "May 2025",
  //     dateDesc: "22nd May, 2025",
  //   },
  //   {
  //     img: "/education.png",
  //     title: "Education Support",
  //     desc: "Help children receive quality education by donating books and supplies for the upcoming school year.",
  //     location: "Hyderabad",
  //     locationDesc: "School supplies distribution event.",
  //     date: "July 2025",
  //     dateDesc: "5th July, 2025",
  //   },
  // ];
  
     useEffect(() => {
      campaignsAPI.getAll()
        .then(res => setCampaigns(res.data.data)) // backend se data set
        .catch(err => console.error(err));
    }, []);
  

const handleLoadMore = () => setVisibleCount((prev) => prev + 3);


  const handleDonateClick = (campaignTitle) => {
    setSelectedCampaign(campaignTitle);
    setShowDonateForm(true);
  };

    const IMAGE_BASE = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;

  return (
    <section className="py-10 px-5 md:px-10 max-w-[1200px] mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <p className="text-[#E40D11] uppercase tracking-wide text-[13px] font-semibold mb-2 underline decoration-[#BC153F] decoration-2 underline-offset-[6px]">
          Upcoming Events
        </p>
        <h2 className="text-[28px] font-bold mb-2">Join Our Upcoming Events</h2>
        <p className="max-w-[420px] text-[13px] text-[#555] mx-auto font-semibold">
          Your support helps us reach the most vulnerable through impactful projects.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 px-2 sm:px-4 md:px-6 
                grid-cols-[repeat(auto-fit,minmax(280px,1fr))] 
                max-w-[1400px] mx-auto justify-items-center">

  {upcomingCampaigns
  .filter((item) => item.campain_status === "Upcoming")
  .slice(0, visibleCount).map((item, index) => (
    <div
      key={index}
      className="w-[90%] sm:w-[300px] bg-white rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] overflow-hidden flex flex-col justify-between text-left shadow-md hover:shadow-lg transition"
    >
      {/* Image */}
      <img
        src={`${IMAGE_BASE}${item.image}`} 
        alt={item.title}
        className="w-full h-[200px] sm:h-[180px] object-cover"
      />

      {/* Content */}
      <div className="p-5 bg-[#F9F9F9] flex-1">
        <h3 className="text-[20px] sm:text-[23px] mb-1">{item.title}</h3>
        <p className="text-[16px] sm:text-[12.5px] text-[#555] mb-3 ">
          {item.description}
        </p>

        {/* Location & Date */}
        <div className="flex justify-between items-start mb-1">
          <div>
            <h5 className="text-[12px] sm:text-[11px] font-semibold text-[#5C5C5C] mb-[3px]">
              {item.location}
            </h5>
            <p className="text-[11px] text-[#5C5C5C] m-0">{item.locationDesc}</p>
          </div>
          <div className="text-left">
            <h5 className="text-[12px] sm:text-[11px] font-semibold text-[#5C5C5C] mb-[3px]">
              {item.date}
            </h5>
            <p className="text-[11px] text-[#666] m-0">{item.dateDesc}</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="bg-[#F9F9F9] flex justify-start">
        <button
          onClick={() => handleDonateClick(item.title)}
          className="bg-[#22305B] text-white px-[26px] py-[8px] text-[14px] rounded-tr-[8px] rounded-br-[8px] hover:opacity-90 transition"
        >
          Donate Now
        </button>
      </div>
    </div>
  ))}
</div>


      {/* Load More Button */}
      {visibleCount < upcomingCampaigns.length && (
  <div className="text-center mt-10">
    <button
      onClick={handleLoadMore}
      className="bg-[#BC153F] text-white px-8 py-2 rounded-lg text-sm hover:bg-[#a11236] transition"
    >
      Load More
    </button>
  </div>
)}


      {/* ✅ Donation Modal */}
      {showDonateForm && (
        <DonationModal
          open={showDonateForm}
          setOpen={setShowDonateForm}
         selectedCampaign={selectedCampaign} 
          causesData={causesData}
          
        />
      )}
    </section>
  );
}
