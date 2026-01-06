// "use client";
// import React from "react";
// import Link from "next/link";

// const Hero2Section = ({
//   backgroundImage = "/Homehero.jpg",
//   subtitle,
//   title,
//   description,
//   buttonText, // optional
  
//   topLeftLabel, // optional label text
// }) => {
//   return (
//     <section
//       className="relative flex justify-center items-center text-center text-white overflow-hidden 
//                  h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[75vh] px-4 sm:px-8 lg:px-16"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/50 to-transparent"></div>

//       {/* Top-left label */}
//       {topLeftLabel && (
//         <span className="absolute top-4 left-4 z-20 text-gray-300 text-xs sm:text-sm md:text-base  ">
//           {topLeftLabel}
//         </span>
//       )}

//       {/* Content */}
//       <div className="relative z-20 max-w-5xl px-2 sm:px-4 md:px-6">
//         {subtitle && (
//           <p className="text-[#E40D11] underline decoration-[#BC153F] decoration-2 underline-offset-4 
//                uppercase tracking-widest mb-3 text-[10px] sm:text-xs md:text-sm">
//   {subtitle}
// </p>

//         )}

//         {title && (
//           <h1 className="text-lg sm:text-3xl md:text-4xl md:text-[50px]  lg:text-[45px] font-bold mb-2 font-rubik leading-tight">
//             {title}
//           </h1>
//         )}

//         {description && (
//           <p className="text-[11px] sm:text-sm md:text-base lg:text-sm text-gray-200 leading-relaxed mb-4 font-calibri l:px-29">
//             {description}
//           </p>
//         )}

//         {buttonText && buttonLink && (
//           <Link href={buttonLink}>
//             <button className="bg-[#E40D11] hover:bg-[#b50b0f] text-white py-2 sm:py-3 px-5 sm:px-7 
//                                rounded-full text-xs sm:text-sm md:text-base font-medium mt-2 sm:mt-4 
//                                transition-colors duration-300">
//               {buttonText}
//             </button>
//           </Link>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Hero2Section;
"use client";
import React, { useState } from "react";
import DonationModal from "../components/Donationform"; // ensure path correct ho
import Link from "next/link";
const Hero2Section = ({
  backgroundImage = "/Homehero.jpg",
  subtitle,
  title,
  description,
  buttonText,   // optional
  topLeftLabel, // optional
  causesData = [], // optional, for modal
}) => {
  const [showDonateForm, setShowDonateForm] = useState(false);

  return (
    <section
      className="relative flex justify-center items-center text-center text-white overflow-hidden 
                 h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[75vh] px-4 sm:px-8 lg:px-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/50 to-transparent"></div>

      {/* Top-left label */}
      {topLeftLabel && topLeftLabel.show && (
  <div className="absolute top-4 left-4 z-20 text-gray-300 text-xs sm:text-sm md:text-base flex gap-1">
    {topLeftLabel.links?.map((item, index) => (
      <React.Fragment key={index}>
        <Link href={item.href} className="hover:underline">
          {item.label}
        </Link>
        {index < topLeftLabel.links.length - 1 && <span>/</span>}
      </React.Fragment>
    ))}
  </div>
)}


      {/* Content */}
      <div className="relative z-20 max-w-5xl px-2 sm:px-4 md:px-6">
        {subtitle && (
          <p className="text-[#E40D11] underline decoration-[#BC153F] decoration-2 underline-offset-4 uppercase tracking-widest mb-3 text-[10px] sm:text-xs md:text-sm">
            {subtitle}
          </p>
        )}

        {title && (
          <h1 className="text-lg sm:text-3xl md:text-4xl md:text-[50px] lg:text-[45px] font-bold mb-2 font-rubik leading-tight">
            {title}
          </h1>
        )}

        {description && (
          <p className="text-[11px] sm:text-sm md:text-base lg:text-sm text-gray-200 leading-relaxed mb-4 font-calibri">
            {description}
          </p>
        )}

        {/* Button: Only show if buttonText exists */}
        {buttonText && (
          <button
            onClick={() => setShowDonateForm(true)}
            className="bg-[#E40D11] hover:bg-[#b50b0f] text-white py-2 sm:py-3 px-5 sm:px-7 rounded-full text-xs sm:text-sm md:text-base font-medium mt-2 sm:mt-4 transition-colors duration-300"
          >
            {buttonText}
          </button>
        )}
      </div>

      {/* Donation Form Modal */}
      {showDonateForm && (
        <DonationModal
          open={showDonateForm}
          setOpen={setShowDonateForm}
          causesData={causesData}
        />
      )}
    </section>
  );
};

export default Hero2Section;
