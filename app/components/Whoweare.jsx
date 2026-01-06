import React from 'react'

const Whoweare = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-[8%] py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
  {/* Left Text */}
  <div className="text-center lg:text-left">
    <p className="text-red-600 text-xs sm:text-sm  uppercase mb-2 sm:mb-3 underline decoration-[#BC153F] decoration-2 underline-offset-2 tracking-wide">
      Who We Are
    </p>  

    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-snug">
      Driven by Compassion, Guided by Accountability
    </h2>

    <p className="text-gray-500 text-xs sm:text-base md:text-sm  mb-1 sm:mb-2 md:mb-3">
    Baitussalam UK is committed to turning generosity into lasting change. We serve vulnerable families, orphans, and communities across the UK and beyond.
    </p>

    <p className="text-gray-500 text-xs sm:text-base md:text-sm  mb-1 sm:mb-2 md:mb-3">
      Our mission is simple: to provide dignity, opportunity, and relief where it’s needed most. Every project we run reflects our belief that care and support are rights, not privileges.
    </p>

    <p className="text-gray-500 text-xs sm:text-base md:text-sm ">
    Through partnerships, volunteers, and your support, we continue to deliver hope to thousands of lives every year.
    </p>
  </div>

  {/* Right Image */}
  <div className="relative w-full mx-auto flex justify-center items-center mt-6 lg:mt-0">
  <div className="w-[85%] sm:w-[90%] md:w-[95%] lg:w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-full h-auto">
    <img
      src="/Collage (1).png"
      alt="Building"
      className="w-full h-auto object-cover rounded-lg"
    />
  </div>
</div>

</section>

  )
}

export default Whoweare