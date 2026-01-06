"use client";
import { useState } from "react";

const InsideSection = () => {
  const blogs = [
    {
      id: 1,
      image: "/Collages.png",
      title: "Empowering Communities Through Education",
      date: "June 2025",
      description:
        "We are dedicated to creating educational opportunities that empower youth to shape a brighter future.",
    },
    {
      id: 2,
      image: "/image2.png",
      title: "Providing Food Aid Across Regions",
      date: "July 2025",
      description:
        "Our team ensures timely delivery of food packs to vulnerable families across different regions.",
    },
    {
      id: 3,
      image: "/image3.png",
      title: "Sustainable Water Projects Initiative",
      date: "August 2025",
      description:
        "We focus on providing clean and accessible water to rural communities, ensuring long-term sustainability.",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 mb-12">
          {/* Headings */}
          <div className="flex-1 text-left">
            <h5 className="text-[#E40D11] font-semibold uppercase mb-2 tracking-wider border-b-2 border-[#BC153F] inline-block pb-1">
              Insights & Updates
            </h5>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Stay Informed, Stay Inspired
            </h2>
            <p className="flex-1 text-gray-600 text-sm leading-relaxed mt-4 md:mt-0 max-w-md text-left">
            Explore stories, articles, and updates from our community. Learn more
            about our causes, discover impact highlights, and get inspired by the
            voices of change.
          </p>
          </div>

          {/* Description */}
          
        </div>

        {/* Blog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Blog List */}
          <div className="flex flex-col gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                  selectedBlog.id === blog.id
                    ? "border-[#E40D11] shadow-lg shadow-red-200"
                    : "border-gray-200 hover:shadow-md"
                }`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-xs uppercase font-semibold text-[#727479] mb-1">
                    Date: {blog.date}
                  </p>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                    {blog.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="w-full flex justify-center lg:justify-center">
            <img
              src={selectedBlog.image}
              alt="Selected Blog"
              className="w-full h-64 md:h-80 lg:h-[450px] rounded-xl object-cover transition-all duration-500"
            />
          </div>

          {/* Right Blog Details */}
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 mt-16">
              {selectedBlog.title}
            </h3>
            <p className="text-gray-700 mb-4 text-sm  leading-relaxed font-[Tahoma]">
              {selectedBlog.description}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold">
              Date: {selectedBlog.date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideSection;
