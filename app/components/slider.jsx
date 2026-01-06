// "use client";
// import React, { useState, useEffect } from "react";

// const PastWorkSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleSlides, setVisibleSlides] = useState(4);

//   const slides = [
//     {
//       title: "Ramadan Food Drive 2024",
//       desc: "Join our annual Ramadan campaign to provide food parcels and warm meals to families.",
//       img: "/image1.png",
//     },
//     {
//       title: "Winter Relief 2024",
//       desc: "Providing blankets, jackets, and food parcels to families in need.",
//       img: "/image2.png",
//     },
//     {
//       title: "Education Support 2024",
//       desc: "Helping children access quality education and school supplies.",
//       img: "/image3.png",
//     },
//     {
//       title: "Medical Aid 2024",
//       desc: "Delivering essential medical support and free health camps.",
//       img: "/image2.png",
//     },
//   ];

//   // Determine slides per view based on screen size
//   useEffect(() => {
//     const updateSlides = () => {
//       if (window.innerWidth >= 1024) setVisibleSlides(4);
//       else if (window.innerWidth >= 768) setVisibleSlides(2);
//       else setVisibleSlides(1);
//     };
//     updateSlides();
//     window.addEventListener("resize", updateSlides);
//     return () => window.removeEventListener("resize", updateSlides);
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Determine which slides to show based on visibleSlides
//   const displayedSlides = slides
//     .slice(currentIndex, currentIndex + visibleSlides)
//     .concat(
//       slides.slice(0, Math.max(0, currentIndex + visibleSlides - slides.length))
//     );

//   return (
//     <section className="bg-[#22305B] text-white py-16 px-4 lg:px-20 font-sans relative">
//       {/* Header + Arrows */}
//       <div className="flex flex-wrap lg:flex-nowrap items-center justify-between mb-8">
//         <div className="max-w-xl">
//           <p className="text-red-600 underline decoration-[#BC153F] decoration-2 underline-offset-6 tracking-wide text-sm">
//             PAST IMPACT
//           </p>
//           <h2 className="text-3xl font-bold mt-2 mb-2">Our Past Work</h2>
//           <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
//             This section reflects the campaigns we have completed bringing
//             relief, hope, and change to thousands of lives. Each initiative
//             highlights not only the immediate.
//           </p>
//         </div>

//         {/* Arrows */}
//         <div className="flex gap-3 mt-4 lg:mt-0">
//           <button
//             onClick={prevSlide}
//             className="w-10 h-10 flex items-center justify-center text-white text-2xl rounded-full hover:bg-white/20 transition"
//           >
//             ‹
//           </button>
//           <button
//             onClick={nextSlide}
//             className="w-10 h-10 flex items-center justify-center text-white text-2xl rounded-full hover:bg-white/20 transition"
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       {/* Slider */}
//       <div className="flex gap-5 transition-transform duration-500 ease-in-out">
//         {displayedSlides.map((slide, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 h-[270px] transition-transform"
//           >
//             <img
//               src={slide.img}
//               alt={slide.title}
//               className="w-full h-[200px] object-cover rounded-md"
//             />
//             <div className="p-4">
//               <h4 className="text-white text-base font-semibold mb-2">
//                 {slide.title}
//               </h4>
//               <p className="text-xs text-white leading-snug">{slide.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PastWorkSection;
"use client";
import React, { useState, useEffect } from "react";

const PastWorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);

  const slides = [
    {
      title: "Ramadan Food Drive 2024",
      desc: "Join our annual Ramadan campaign to provide food parcels and warm meals to families.",
      img: "/Ramadan.png",
    },
    {
      title: "Winter Relief 2024",
      desc: "Providing blankets, jackets, and food parcels to families in need.",
      img: "/Winter.png",
    },
    {
      title: "Education Support 2024",
      desc: "Helping children access quality education and school supplies.",
      img: "/education6.png",
    },
    {
      title: "Medical Aid 2024",
      desc: "Delivering essential medical support and free health camps.",
      img: "/Medical.png",
    },
    {
      title: "Medical Aid 2024",
      desc: "Delivering essential medical support and free health camps.",
      img: "/Medical.png",
    },
  ];

  // ✅ Update visible slides based on screen width
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) setVisibleSlides(4); // large screens
      else if (window.innerWidth >= 768) setVisibleSlides(2); // medium screens
      else setVisibleSlides(1); // small screens
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // ✅ Arrow Navigation (Fixed logic)
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      (prev + visibleSlides) % slides.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      (prev - visibleSlides + slides.length) % slides.length
    );
  };

  // ✅ Determine which slides are visible
  const displayedSlides = [];
  for (let i = 0; i < visibleSlides; i++) {
    displayedSlides.push(slides[(currentIndex + i) % slides.length]);
  }

  return (
    <section className="bg-[#22305B] text-white py-16 px-4 sm:px-8 lg:px-20 font-sans relative">
      {/* Header + Arrows */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between mb-8">
        <div className="max-w-xl">
          <p className="text-red-600 underline decoration-[#BC153F] decoration-2 underline-offset-4 tracking-wide text-sm">
            Our Past Work
          </p>
          <h2 className="text-3xl font-bold mt-2 mb-2">Relief Today, Impact for Tomorrow</h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
           Our completed campaigns reflect relief, hope, and change, creating lasting impact beyond immediate support in the communities we serve.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 mt-4 lg:mt-0">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center text-white text-2xl rounded-full hover:bg-white/20 transition"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center text-white text-2xl rounded-full hover:bg-white/20 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* ✅ Responsive Slider */}
      <div className="flex justify-center gap-5 flex-wrap transition-transform duration-500 ease-in-out">
        {displayedSlides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 ${
              visibleSlides === 1
                ? "w-full"
                : visibleSlides === 2
                ? "w-[48%]"
                : "w-[23%]"
            } bg-[#22305B] overflow-hidden  hover:scale-[1.02] transition-transform duration-300`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover"
            />
            <div className="p-4">
              <h4 className="text-white text-base font-semibold mb-2">
                {slide.title}
              </h4>
              <p className="text-xs text-gray-300 leading-snug">{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastWorkSection;
