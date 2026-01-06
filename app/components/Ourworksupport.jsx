// "use client"

// import React,{useState,useEffect} from "react";
// import Image from "next/image";
// import { servicesAPI } from "../api/serviceAPI";

// const Ourworksupport = (
  


// ) => {
//    const [work, setWork] = useState(null);
//     const [loading, setLoading] = useState(true);

//       useEffect(() => {
//         const fetchWork = async () => {
//           try {
//             const res = await servicesAPI.getAll();
//             const workData = res.data.data
//               .find((item) => item.title === "Education")
//               ?.details.find((detail) => detail.title === "Our Work");
    
//             console.log("workData", workData);
//             setWork(workData);
//           } catch (err) {
//             console.error("Error fetching impact:", err);
//           } finally {
//             setLoading(false);
//           }
//         };
    
//         fetchWork();
//       }, []);
    
//       if (loading) return <p className="text-center mt-10">Loading...</p>;
//       if (!work)
//         return <p className="text-center mt-10 text-red-600">Work not found</p>;
  
//   return (
//     <section className="flex flex-col lg:flex-row items-center justify-between bg-white px-6 sm:px-8 lg:px-20 py-16 gap-3 font-sans">
//       {/* Left Content */}
//       <div className="flex-1 lg:pr-20">
//         <p className="text-red-600 text-sm uppercase tracking-wide mb-1.5 underline decoration-[#BC153F] decoration-2 underline-offset-4 pt-8 sm:pt-16">
//   {work.title}
// </p>

//         <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-black mb-2">
//           {work.heading}
//         </h2>
//         <p
//   className="text-gray-600 text-[13px] sm:text-[14px] leading-[1.5] mb-6"
//   dangerouslySetInnerHTML={{ __html: work.description }}
// ></p>


//         {/* Stats List */}
//         <div className="flex flex-col gap-2 mr-5">
//           {work?.bullets.map((bullet, index) => (
//             <div key={index} className="flex items-start gap-2">
               
//               <div
//                 className="
//                   bg-[#BC153F]
//                   text-white
//                   rounded-full
//                   flex
//                   items-center
//                   justify-center
//                   flex-shrink-0
//                   w-9 h-9
//                   sm:w-10 sm:h-10
//                   md:w-12 md:h-12
//                   transition-transform
//                   duration-300
//                   hover:scale-105
//                 "
//               >
//                  {bullet.icon && (
//         <Image
//           src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${bullet.icon}`}
//           alt={bullet.title || "Icon"}
//           width={32}
//           height={32}
//           className="object-contain"
//         />
//       )}
//               </div>

//               <div>
//                 <h4 className="text-black font-semibold text-[13px] sm:text-[14px] mb-1">
//                   {bullet.title}
//                 </h4>
//                 <p className="text-gray-500 text-[11px] sm:text-[12px] leading-[1.4]">
//                   {bullet.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Image (Larger now) */}
//       <div className="flex-1 flex items-center justify-center w-full">
//   <div className="relative w-full max-w-[800px] sm:max-w-[850px] md:max-w-[900px] aspect-[4/3] overflow-hidden rounded-2xl">
//     <Image
//       src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${work?.images?.[0]?.image_path}`}
//       alt={work.heading || "Our work image"}
//       fill
//       className="object-contain rounded-2xl"
//       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 850px, 900px"
//     />
//   </div>
// </div>

//     </section>
//   );
// };

// export default Ourworksupport;


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { servicesAPI } from "../api/serviceAPI";

const Ourworksupport = () => {
  const { slug } = useParams();
  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const res = await servicesAPI.getAll();
        const allData = res.data.data;

        // Find the service based on slug
        const selectedService = allData.find((item) => item.slug === slug);

        // Get the "Our Work" detail
       const workData = selectedService?.details?.[3]; 

        if (!workData) {
          setError("Work section not found");
        } else {
          setWork(workData);
        }
      } catch (err) {
        console.error("Error fetching work:", err);
        setError("Error fetching work");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchWork();
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-600" role="alert">
        {error}
      </p>
    );
  if (!work) return null;

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white px-6 sm:px-8 lg:px-20   font-sans">
      {/* Left Content */}
      <div className="flex-1 lg:pr-20">
        <p className="text-red-600 text-sm uppercase tracking-wide mb-1.5 underline decoration-[#BC153F] decoration-2 underline-offset-4 pt-8 sm:pt-16">
          {work.title}
        </p>

        <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-black mb-2">
          {work.heading}
        </h2>
        <p
          className="text-gray-600 text-[13px] sm:text-[14px] leading-[1.5] mb-6"
          dangerouslySetInnerHTML={{ __html: work.description }}
        ></p>

        {/* Stats List */}
        <div className="flex flex-col gap-1 mr-5">
          {work?.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-2">
              <div
                className="
                  bg-[#BC153F]
                  text-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-9 h-9
                  sm:w-10 sm:h-10
                  md:w-12 md:h-12
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              >
                {bullet.icon && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${bullet.icon}`}
                    alt={bullet.title || "Icon"}
                    width={32}
                    height={32}
                    className="object-contain invert brightness-0"
                  />
                )}
              </div>

              <div className="pt-2.5">
                <h4 className="text-black font-semibold text-[13px] sm:text-[14px] ">
                  {bullet.title}
                </h4>
                <p className="text-gray-700 text-[11px] sm:text-[12px] ">
                  {bullet.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex items-center justify-center w-full">
  <div className="relative w-full max-w-[940px] h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden rounded-2xl">
    <Image
      src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${work?.images?.[0]?.image_path}`}
      alt={work.heading || "Our work image"}
      fill
      className="object-contain rounded-2xl"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 900px, 900px"
    />
  </div>
</div>

    </section>
  );
};

export default Ourworksupport;
