"use client";

export default function VisionSection({
  smallButtonText = "Campaign Specific",
  subTitle = "Vision",
  title = "Our Vision",
  paragraphs = [
    "Baitussalam UK envisions a United Kingdom where every individual has the opportunity to learn, be healthy, and live with dignity. Education, health, and social well-being are fundamental rights, and we aim to ensure that no one is left behind due to poverty, marginalization, or lack of resources.",
    "We strive to create a society where children can access quality education, families can receive proper healthcare, and communities are empowered to thrive. By addressing immediate needs and building sustainable programs, we work to eliminate barriers that prevent individuals from reaching their full potential.",
    "Through our initiatives in education, healthcare, welfare, and community support, Baitussalam UK seeks to foster hope, equality, and opportunity. Our vision is a future where every person, regardless of background, can grow, contribute, and live a life of dignity and fulfillment."
  ],
  largeImage = "/aCollag.png",
}) {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-white overflow-hidden px-6 sm:px-12 lg:px-[120px] py-12 sm:py-16 lg:py-[100px]">
      
      {/* LEFT SIDE - TEXT */}
      <div className="flex-1 max-w-full lg:max-w-[700px]">
        

        <p className="text-red-600 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 inline-block border-b-2 border-[#BC153F] pb-1">
          {subTitle}
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-gray-900 leading-snug sm:leading-tight mb-4 sm:mb-6">
          {title}
        </h2>

        {paragraphs.map((para, idx) => (
          <p key={idx} className="text-[11px] sm:text-sm text-gray-600  sm:mb-4 last:mb-6">
            {para}
          </p>
        ))}
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex-1 relative flex justify-center items-center mt-8 lg:mt-0 lg:ml-[80px]">
  <div className="relative w-full lg:max-w-[650px] sm:max-w-[900px] h-auto flex justify-center items-center">
    <img
      src={largeImage}
      alt="Vision"
      className="w-full h-auto object-cover rounded-lg"
    />
  </div>
</div>


    </section>
  );
}
