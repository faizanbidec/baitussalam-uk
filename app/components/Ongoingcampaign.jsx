
// "use client";
// import React, { useState, useEffect, useMemo, useCallback } from "react";
// import Image from "next/image";
// import LearnMoreButton from "./ui/learnmore";
// import DonationModal from "./Donationform";
// import useCampaignsStore from "../stores/useCampaignsStore";
// import useCausesStore from "../stores/useCausesStore";

// const CampaignSection = React.memo(({
//   title = "Current Campaigns You Can Support",
//   subtitle = "Your support helps us reach the most vulnerable through impactful projects.",
//   sectionLabel = "Ongoing Campaigns",
//   buttonText = "Donate Now",
// }) => {
//   const [visibleCount, setVisibleCount] = useState(3);
//   const [showDonateForm, setShowDonateForm] = useState(false);
//   const [selectedCampaignItem, setSelectedCampaignItem] = useState(null);
  
//   const { campaigns, loading, error, fetchCampaigns } = useCampaignsStore();
//   const { causes } = useCausesStore();

//   // Compute ongoing campaigns directly from campaigns array to ensure re-render when campaigns change
//   const ongoingCampaigns = useMemo(() => {
//     return campaigns.filter((item) => item.campain_status === "On-Going");
//   }, [campaigns]);
  
//   const visibleCampaigns = useMemo(() => ongoingCampaigns.slice(0, visibleCount), [ongoingCampaigns, visibleCount]);

//   useEffect(() => {
//     if (campaigns.length === 0) {
//       fetchCampaigns();
//     }
//   }, [campaigns.length, fetchCampaigns]);

//   const handleLoadMore = useCallback(() => {
//     setVisibleCount((prev) => prev + 3);
//   }, []);

//   const handleDonateClick = useCallback((item) => {
//     setSelectedCampaignItem(item);
//     setShowDonateForm(true);
//   }, []);

//   const IMAGE_BASE = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;

//   if (loading) return <p className="text-center mt-10 text-gray-500" aria-live="polite">Loading...</p>;
//   if (error) return <p className="text-center mt-10 text-red-500" role="alert">Error: {error}</p>;

//   return (
//     <section className="mb-10 px-5 md:px-10 lg:px-20 bg-white py-10 sm:py-16 md:py-20 lg:py-24" aria-labelledby="campaigns-heading">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <p className="text-[#E40D11] uppercase tracking-wide text-sm underline underline-offset-4 decoration-[#BC153F] mb-2 mx-6">
//           {sectionLabel}
//         </p>

//         <div className="items-start md:items-center gap-1 mb-10 mx-6">
//           <h2 id="campaigns-heading" className="text-xl sm:text-3xl md:text-3xl font-bold text-gray-900">
//             {title}
//           </h2>
//           <p className="text-xs sm:text-sm text-gray-600 leading-snug font-medium mt-6">
//             {subtitle}
//           </p>
//         </div>

//         {/* Cards Section */}
//         <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-16" role="list">
//           {visibleCampaigns.map((item, index) => (
//             <article
//               key={item.id || index}
//               className="w-[90%] sm:w-[300px] bg-transparent rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
//               role="listitem"
//             >
//               <div className="relative w-full h-48">
//                 <Image
//                   src={`${IMAGE_BASE}${item.image}`}
//                   alt={item.title || "Campaign image"}
//                   fill
//                   unoptimized={true}
//                   className="object-cover rounded-t-xl"
//                   sizes="(max-width: 640px) 90vw, 300px"
//                 />
//               </div>
//               <div className="bg-white border border-gray-400 border-t-0 rounded-b-xl p-5">
//                 <h3 className="text-lg font-Rubik mb-2 text-gray-800 font-semibold">
//                   {item.title}
//                 </h3>

//                 {item.desc && (
//                   <p className="text-xs font-semibold text-gray-600 mb-1">
//                     {item.desc}
//                   </p>
//                 )}
//                 {item.date && (
//                   <p className="text-xs font-semibold text-gray-500 mb-4">
//                     Date: {item.date}
//                   </p>
//                 )}

//                 <LearnMoreButton
//                   label={buttonText}
//                   bgColor="#22305B"
//                   textColor="white"
//                   onClickAction={() => handleDonateClick(item)}
//                 />
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Load More Button */}
//         {visibleCount < ongoingCampaigns.length && (
//           <div className="text-center mt-10">
//             <button
//               onClick={handleLoadMore}
//               className="bg-[#BC153F] text-white px-8 py-2 rounded-lg text-sm hover:bg-[#a11236] transition-colors"
//               aria-label="Load more campaigns"
//             >
//               Load More
//             </button>
//           </div>
//         )}

//       </div>

//       {/* Donation Modal */}
//       {showDonateForm && (
//         <div
//           onClick={() => setShowDonateForm(false)}
//           className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="relative bg-white rounded-2xl w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg p-5 md:p-8"
//           >
//             <button
//               onClick={() => setShowDonateForm(false)}
//               className="absolute top-4 right-6 text-2xl text-gray-600 hover:text-black transition-colors"
//               aria-label="Close donation modal"
//               type="button"
//             >
//               ✕
//             </button>
//             <DonationModal
//               open={showDonateForm}
//               setOpen={setShowDonateForm}
//               selectedCampaign={selectedCampaignItem?.title || null}
//               causesData={causes}
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// });

// CampaignSection.displayName = "CampaignSection";

// export default CampaignSection;


"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import useCampaignsStore from "../stores/useCampaignsStore";
import useCausesStore from "../stores/useCausesStore";

// Donation modal (SSR fix)
const DonationModal = dynamic(() => import("./Donationform"), {
  ssr: false,
});

export default function OngoingCampaignSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const { campaigns, fetchCampaigns } = useCampaignsStore();
  const { causes } = useCausesStore();

  const IMAGE_BASE = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;

  // Fetch campaigns once
  useEffect(() => {
    if (campaigns.length === 0) {
      fetchCampaigns();
    }
  }, []);

  // Filter ongoing
const ongoingCampaigns = campaigns.filter(
  (item) =>
    item.campain_status === "On-Going" &&
    item.status === 1
);



  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleDonateClick = (title) => {
    setSelectedCampaign(title);
    setShowDonateForm(true);
  };

  return (
    <section className="py-10 px-5 md:px-10 max-w-[120vw] mx-auto">
      {/* Heading */}
      <div className="text-center px-13 mb-10">
        <p className="text-[#E40D11] uppercase tracking-wide text-[13px] font-semibold mb-2 underline decoration-[#BC153F] decoration-2 underline-offset-[6px]">
          Ongoing Campaigns
        </p>
        <h2 className="text-[28px] font-bold mb-2">
          Current Campaigns You Can Support
        </h2>
        <p className=" text-[13px] text-[#555] font-semibold">
          Your support helps us reach the most vulnerable through impactful projects.
        </p>
      </div>

      {/* Campaign Cards */}
     <div className="grid gap-6 px-2 sm:px-4 md:px-6 
                grid-cols-[repeat(auto-fit,minmax(280px,1fr))] 
                max-w-[1400px] mx-auto justify-items-center">

        {ongoingCampaigns.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[300px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={`${IMAGE_BASE}${item.image}`}
              alt={item.title}
              className="w-full h-[200px] sm:h-[180px] object-cover"
            />

            <div className="p-5 ">
              <h3 className="text-[20px] sm:text-[23px] mb-1">{item.title}</h3>

              {item.desc && (
                <p className="text-[13px] text-[#555] mb-3">{item.desc}</p>
              )}

              {item.date && (
                <p className="text-[11px] text-[#666] font-semibold">
                  Date: {item.date}
                </p>
              )}
            </div>

<div className=" flex ml-6 pt-3 pb-4">
  <button
    onClick={() => handleDonateClick(item.title)}
    className="bg-[#22305B] text-white px-8 py-3 text-[14px] rounded-full hover:opacity-90 transition"
  >
    Donate Now
  </button>
</div>


          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < ongoingCampaigns.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-[#BC153F] text-white px-8 py-2 rounded-lg text-sm hover:bg-[#a11236] transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Donation Modal */}
      {showDonateForm && (
        <DonationModal
          open={showDonateForm}
          setOpen={setShowDonateForm}
          selectedCampaign={selectedCampaign}
          causesData={causes}
        />
      )}
    </section>
  );
}
