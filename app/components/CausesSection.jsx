"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LearnMoreButton from "./ui/learnmore";
import DonationModal from "./Donationform";
import useCausesStore from "../stores/useCausesStore";

const CausesSection = React.memo(({
  sectionTitle = "Our Causes",
  mainHeading = "Join Hands to Serve Humanity with a Trusted Islamic Charity",
  description = "Baitussalam UK stands for causes that uplift humanity, education, healthcare, food aid, and emergency relief.",
}) => {
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const router = useRouter();
  
  const { causes, loading, error, fetchCauses } = useCausesStore();
  const activeCauses = useMemo(
  () => causes.filter(item => item.status === 1),
  [causes]
);

  useEffect(() => {
    if (causes.length === 0) {
      fetchCauses();
    }
  }, [causes.length, fetchCauses]);

  const handleDonateClick = useCallback((campaignTitle) => {
    setSelectedCampaign(campaignTitle);
    setShowDonateForm(true);
  }, []);

  const handleLearnMore = useCallback((slug) => {
    router.push(`/causes/${slug}`);
  }, [router]);

  const getOverlayColor = useCallback((slug) => {
    switch (slug) {
      case "emergency":
        return "rgba(14, 35, 100, 0.74)";
      case "orphan":
        return "rgba(152, 148, 136, 0.37)";
      case "women empowerment":
        return "rgba(81, 136, 4, 0.69)";
      case "healthcare":
        return "rgba(241, 42, 32, 0.69)";
      case "education":
        return "rgba(14, 35, 100, 0.74)";
      default:
        return "rgba(0,0,0,0.4)";
    }
  }, []);

 const topCauses = useMemo(() => activeCauses.slice(0, 3), [activeCauses]);
const bottomCauses = useMemo(() => activeCauses.slice(3, 5), [activeCauses]);



  if (loading) return <p className="text-center mt-10 text-gray-500" aria-live="polite">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500" role="alert">Error: {error}</p>;

  return (
    <section className="pt-20 pb-20 px-6 md:px-10 lg:px-12 bg-white text-center">
      <div className="max-w-[1650px] mx-auto">
        {/* Dynamic Headings */}
        <h5 className="text-[#dc2626] uppercase mb-2 tracking-wide font-medium font-tahoma underline decoration-[#BC153F] decoration-2 underline-offset-4">
          {sectionTitle}
        </h5>

        <h2 className="text-3xl md:text-3xl font-bold mb-3 text-black">
          {mainHeading}
        </h2>

        <p className="text-[#5C5C5C] mb-15 font-semibold text-xs md:text-sm">
          {description}
        </p>

        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {topCauses.map((cause) => (
            <article
              key={cause.slug}
              className="relative rounded-xl overflow-hidden shadow-lg h-[320px] flex flex-col justify-end text-left group"
            >
              <div className="absolute inset-0">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${cause.service_image_link}`}
                  alt={cause.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  priority={cause.slug === topCauses[0]?.slug}
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: getOverlayColor(cause.slug) }}
                  aria-hidden="true"
                />
              </div>

              <div className="relative p-6 text-left z-10">
                <h3 className="text-xl md:text-2xl mb-2 text-white font-semibold">
                  {cause.title}
                </h3>
                <p className="text-white text-sm md:text-base mb-4 font-medium font-Nunito">
                  {cause.description}
                </p>
                <div className="flex flex-row gap-1">
                  <LearnMoreButton
                    label="Learn More"
                    bgColor="#E40D11"
                    textColor="#F5F5F5"
                    onClickAction={() => handleLearnMore(cause.slug)}
                  />
                  <LearnMoreButton
                    label="Donate Now"
                    borderColor="white"
                    bgColor="none"
                    onClickAction={() => handleDonateClick(cause.title)}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Second Row: 2 Big Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bottomCauses.map((cause) => (
            <article
              key={cause.slug}
              className="relative rounded-xl overflow-hidden shadow-lg min-h-[340px] flex flex-col justify-end text-left group"
            >
              <div className="absolute inset-0">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${cause.service_image_link}`}
                  alt={cause.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: getOverlayColor(cause.slug) }}
                  aria-hidden="true"
                />
              </div>

              <div className="relative p-6 text-left z-10">
                <h3 className="text-xl md:text-2xl mb-2 text-white font-semibold">
                  {cause.title}
                </h3>
                <p className="text-white text-sm md:text-base mb-4 font-medium font-rubik">
                  {cause.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <LearnMoreButton
                    label="Learn More"
                    bgColor="#E40D11"
                    textColor="#F5F5F5"
                    onClickAction={() => handleLearnMore(cause.slug)}
                  />
                  <LearnMoreButton
                    label="Donate Now"
                    borderColor="white"
                    bgColor="none"
                    onClickAction={() => handleDonateClick(cause.title)}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Donate Modal */}
      {showDonateForm && (
        <DonationModal
          open={showDonateForm}
          setOpen={setShowDonateForm}
          selectedService={selectedCampaign}
          causesData={causes}
        />
      )}
    </section>
  );
});

CausesSection.displayName = "CausesSection";

export default CausesSection;
