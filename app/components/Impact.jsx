// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { servicesAPI } from "../api/serviceAPI";

// const Impact = () => {
//   const [impact, setImpact] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchImpact = async () => {
//       try {
//         const res = await servicesAPI.getAll();
//         const impactData = res.data.data
//           .find((item) => item.title === "Education")
//           ?.details.find((detail) => detail.title === "Impact");

//         console.log("impactData", impactData);
//         setImpact(impactData);
//       } catch (err) {
//         console.error("Error fetching impact:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImpact();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (!impact)
//     return <p className="text-center mt-10 text-red-600">Impact not found</p>;

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//       <div>
//         <h5 className="text-[#dc2626] underline underline-offset-4 decoration-[#dc2626] text-xs sm:text-sm uppercase mb-2 tracking-wide">
//           {impact.title}
//         </h5>
//         <h2 className="text-2xl sm:text-3xl md:text-[33px] font-semibold text-black leading-snug mb-4">
//           {impact.heading}
//         </h2>

//         {/* ✅ Corrected description */}
//         <div
//           className="text-[#5C5C5C] text-sm sm:text-base mb-3 leading-relaxed"
//           dangerouslySetInnerHTML={{ __html: impact.description }}
//         ></div>
//       </div>

//       <div className="flex justify-center relative w-full aspect-[4/3] max-w-md md:max-w-full">
//         <Image
//           src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${impact?.images?.[0]?.image_path}`}
//           alt={impact.heading || "Impact section image"}
//           fill
//           className="object-cover rounded-md"
//           sizes="(max-width: 768px) 100vw, 50vw"
//         />
//       </div>
//     </section>
//   );
// };

// export default Impact;


"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { servicesAPI } from "../api/serviceAPI";

const Impact = () => {
  const { slug } = useParams();
  const [impact, setImpact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImpact = async () => {
      try {
        const res = await servicesAPI.getAll();
        const allData = res.data.data;

        // Find the service based on slug
        const selectedService = allData.find((item) => item.slug === slug);

        // Find the "Impact" detail
       const impactData = selectedService?.details?.[1]; // first detail


        console.log("Fetched impactData:", impactData);
        setImpact(impactData);
      } catch (err) {
        console.error("Error fetching impact:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchImpact();
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!impact)
    return (
      <p className="text-center mt-10 text-red-600">
        Impact section not found for slug: {slug}
      </p>
    );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-16">
      <div>
        <h5 className="text-[#dc2626] underline underline-offset-4 decoration-[#dc2626] text-xs sm:text-sm uppercase mb-2 tracking-wide">
          {impact.title}
        </h5>
        <h2 className="text-2xl sm:text-3xl md:text-[33px] font-semibold text-black leading-snug mb-4">
          {impact.heading}
        </h2>

        <div
          className="text-[#5C5C5C] text-sm xs:text-base  mb-3 "
          dangerouslySetInnerHTML={{ __html: impact.description }}
        ></div>
      </div>

      <div className="flex justify-center relative w-full aspect-[4/3] max-w-md md:max-w-full">
  <Image
    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${impact?.images?.[0]?.image_path}`}
    alt={impact.heading || "Impact section image"}
    fill
    className="object-contain rounded-md"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>

    </section>
  );
};

export default Impact;
