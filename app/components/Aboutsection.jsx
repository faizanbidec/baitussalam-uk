"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { servicesAPI } from "../api/serviceAPI";

const Aboutsection = () => {
  const { slug } = useParams();
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await servicesAPI.getAll();
        const allData = res.data.data;

        const selectedService = allData.find((item) => item.slug === slug);
        const aboutData = selectedService?.details?.[0]; // first detail

        setAbout(aboutData);
      } catch (err) {
        console.error("Error fetching about section:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchAbout();
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!about)
    return (
      <p className="text-center mt-10 text-red-600">
        About section not found for slug: {slug}
      </p>
    );

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full px-6 sm:px-10 lg:px-20 py-16 gap-10 mt-33">
      {/* Left: Image */}
      <div className="flex-1 flex justify-center lg:max-w-[800px]">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${about?.images?.[0]?.image_path}`}
          alt={about.heading}
          className="object-cover rounded-lg w-full max-w-md lg:max-w-full h-auto"
        />
      </div>

      {/* Right: Text */}
      <div className="flex-1 max-w-full lg:max-w-[800px] text-center lg:text-left">
        <h5 className="text-[#dc2626] underline underline-offset-4 decoration-[#dc2626] text-xs sm:text-sm uppercase mb-2 tracking-wide">
          {about.title}
        </h5>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-snug mb-4">
          {about.heading}
        </h2>
        <div
          className="text-[#5C5C5C] text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: about.description }}
        ></div>
      </div>
    </section>
  );
};

export default Aboutsection;
