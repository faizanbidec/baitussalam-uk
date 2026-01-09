

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { servicesAPI } from "../api/serviceAPI";

const Storiessection = ({
  story: storyProp = null,
  slug: slugProp = null,
  serviceTitle = "Education",
}) => {
  const { slug: slugFromUrl } = useParams();
  const slug = slugProp || slugFromUrl;

  const [story, setStory] = useState(storyProp);
  const [loading, setLoading] = useState(!storyProp);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch story from API only if no static story is provided
    if (storyProp) return;

    const fetchStory = async () => {
      try {
        const res = await servicesAPI.getAll();
        const allData = res.data.data;

        // Find service by slug or title
        const selectedService =
          allData.find((item) => item.slug === slug) ||
          allData.find((item) => item.title === serviceTitle);

        const storyData = selectedService?.details?.[2]; // first detail

        if (!storyData) {
          setError("Story not found");
        } else {
          setStory(storyData);
        }
      } catch (err) {
        console.error("Error fetching story:", err);
        setError("Error fetching story");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchStory();
  }, [slug, storyProp, serviceTitle]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-600" role="alert">
        {error}
      </p>
    );
  if (!story) return null;

  // Determine image URL
  const imageUrl =
    storyProp || story?.images?.[0]?.image_path?.startsWith("/")
      ? story.images[0]?.image_path // static / public folder image
      : story?.images?.[0]?.image_path.startsWith("http")
      ? story.images[0]?.image_path // full URL from API
      : `${(process.env.NEXT_PUBLIC_BASE_IMAGE_URL || "").replace(
          /\/$/,
          ""
        )}/${story.images[0]?.image_path}`; // relative path from API

  return (
    <section
  className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 mt-12 sm:mt-16 bg-white"
  aria-labelledby="stories-heading"
>
      {/* Gray background behind image */}
     <div
    className="absolute top-[80px] sm:top-[100px] md:top-[13vh] bottom-[50px] sm:bottom-[55px] right-0 left-1/3 bg-[#F8F8F8] rounded-l-[20px] z-0 hidden lg:block pt-15"
    aria-hidden="true"
  ></div>

      {/* Left Image */}
     <div className="relative z-10 flex justify-center lg:justify-start w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[480px] ">
        {imageUrl && (
           <div className="relative w-full h-full rounded-[40px] sm:rounded-[50px] lg:rounded-[55px] overflow-hidden shadow-md">
            <Image
              src={imageUrl}
              alt={story.heading || "Success story image"}
              fill
              className="object-cover"
              sizes="(max-width: 1094px) 100vw, 490px"
              unoptimized={true}
              onError={(e) =>
                console.error("Image failed to load:", e.target.src)
              }
            />
          </div>
        )}
      </div>

      {/* Right Text */}
      <div className="relative z-10">
    <p className="text-red-600 text-[10px] sm:text-sm md:text-[14px] uppercase tracking-wide mb-2 inline-block border-b-2 border-[#BC153F] pt-4 sm:pt-6">
      {story.title}
    </p>

         <h2
      id="stories-heading"
      className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8"
    >
      {story.heading}
    </h2>

        <div
          className="text-[#5C5C5C] leading-[1.1] mb-4 text-[12.5px] sm:text-sm font-rubik"
          dangerouslySetInnerHTML={{ __html: story.description }}
        ></div>
      </div>
    </section>
  );
};

export default Storiessection;
