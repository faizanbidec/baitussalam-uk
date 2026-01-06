// "use client";
// import Image from "next/image";

// export default function TrustSection() {
//   return (
//     <section className="bg-white py-19 text-center lg:max-w-[100vw]">
//       {/* Heading */}
//       <div className="mb-10 ">
//         <p className="text-[#BC153F] uppercase text-sm tracking-wide border-b-2 border-[#BC153F] inline-block pb-1 mb-2">
//           Trust & Transparency
//         </p>

//         <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2">
//           Your Trust Matters Donate with Confidence Today
//         </h2>
//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-xs leading-relaxed">
//           Donate with confidence knowing Baitussalam UK is fully transparent, secure, and ensures every penny reaches those in need.
//         </p>
//       </div>

//       {/* Cards Grid */}
//      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
//   {/* Card 1 */}
//   <div className="flex items-center bg-gray-50 rounded-lg shadow-sm overflow-hidden h-[90px] mb-6">
//     <div className="bg-[#BC153F] flex items-center justify-center px-6 h-full ">
//       <Image
//         src="/ribbon.png"
//         alt="Registered Charity"
//         width={70}
//         height={70}
//         className="object-contain invert brightness-0"
//       />
//     </div>
//     <div className="text-left p-4">
//       <h3 className="font-semibold text-gray-900 text-base">
//         Registered Charity
//       </h3>
//       <p className="text-[#5C5C5C] text-xs mt-1 leading-snug font-semibold">
//  Trusted organization dedicated to serving humanity.
// </p>

//     </div>
//   </div>

//   {/* Card 2 */}
//   <div className="flex items-center bg-gray-50 rounded-lg shadow-sm overflow-hidden h-[90px]">
//     <div className="bg-[#BC153F] flex items-center justify-center px-6 h-full">
//       <Image
//         src="/process.png"
//         alt="Regular Updates"
//         width={70}
//         height={70}
//         className="object-contain invert brightness-0"
//       />
//     </div>
//     <div className="text-left p-4">
//       <h3 className="font-semibold text-gray-900 text-base">
//         100% Zakat Policy
//       </h3>
//       <p className="text-[#5C5C5C] text-xs mt-1 leading-snug font-semibold">
//  Every penny of your Zakat reaches those in need.
// </p>
//     </div>
//   </div>

//   {/* Card 3 */}
//   <div className="flex items-center bg-gray-50 rounded-lg shadow-sm overflow-hidden h-[90px]">
//     <div className="bg-[#BC153F] flex items-center justify-center px-6 h-full">
//       <Image
//         src="/process.png"
//         alt="Regular Updates"
//         width={70}
//         height={70}
//         className="object-contain invert brightness-0"
//       />
//     </div>
//     <div className="text-left p-4">
//       <h3 className="font-semibold text-gray-900 text-base">
//         Regular Updates
//       </h3>
//       <p className="text-[#5C5C5C] text-xs mt-1 leading-snug font-semibold">
//  Stay informed with reports on every donation’s impact.
// </p>
//     </div>
//   </div>

//   {/* Card 4 */}
//   <div className="flex items-center bg-gray-50 rounded-lg shadow-sm overflow-hidden h-[90px]">
//     <div className="bg-[#BC153F] flex items-center justify-center px-6 h-full">
//       <Image
//         src="/key.png"
//         alt="Secure Giving"
//         width={70}
//         height={70}
//         className="object-contain invert brightness-0"
//       />
//     </div>
//     <div className="text-left p-4">
//       <h3 className="font-semibold text-gray-900 text-base">Secure Giving</h3>
//       <p className="text-[#5C5C5C] text-xs mt-1 leading-snug font-semibold">
//  Your donations are protected with safe, verified systems.
// </p>
//     </div>
//   </div>
// </div>

      
//     </section>
//   );
// }
"use client";
import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="bg-white py-16 px-4 lg:px-20 text-center w-full">
      {/* Heading */}
      <div className="mb-12">
        <p className="text-[#BC153F] uppercase text-xs sm:text-sm tracking-wide border-b-2 border-[#BC153F] inline-block pb-1 mb-2">
          Trust & Transparency
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
          Your Trust Matters — Donate with Confidence Today
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
          Donate with confidence knowing Baitussalam UK is fully transparent,
          secure, and ensures every penny reaches those in need.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[2900px] grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Card Component */}
        {[
          {
            img: "/ribbon.png",
            title: "Registered Charity",
            desc: "Trusted organization dedicated to serving humanity.",
          },
          {
            img: "/process.png",
            title: "100% Zakat Policy",
            desc: "Every penny of your Zakat reaches those in need.",
          },
          {
            img: "/process.png",
            title: "Regular Updates",
            desc: "Stay informed with reports on every donation’s impact.",
          },
          {
            img: "/key.png",
            title: "Secure Giving",
            desc: "Your donations are protected with safe, verified systems.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-50 rounded-lg shadow-sm overflow-hidden h-[100px] sm:h-[110px] md:h-[120px]"
          >
            <div className="bg-[#BC153F] flex items-center justify-center px-6 h-full min-w-[100px]">
              <Image
                src={item.img}
                alt={item.title}
                width={65}
                height={65}
                className="object-contain invert brightness-0"
              />
            </div>

            <div className="text-left p-4">
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-[#5C5C5C] text-xs sm:text-sm mt-1 leading-snug font-medium">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
