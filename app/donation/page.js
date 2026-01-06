import React from 'react'
import Hero2Section from '../components/hero2'
import ZakatCalculatorSection from '../components/Zakatcalculator'
import InsideSection from '../components/InsideSection'
import Ongoingcampaign from '../components/Ongoingcampaign'
import CampaignSection from '../components/Ongoingcampaign'
export const metadata = {
  title: " Online Zakat Calculator | Calculate Your Zakat Accurately",
  description:
    "  Easily calculate your Zakat on gold, cash, savings, and investments. Use Baitussalam’s online Zakat calculator for accurate, Sharia-compliant results.",
};
const page = () => {

    const campaignsData = [
  {
    img: "/charity1.png",
    title: "Charity Drive",
    desc: "Providing quality learning opportunities",
    date: "June 2025",
  },
  {
    img: "/ramadan2.png",
    title: "Community Iftar",
    desc: "Serving meals to underprivileged families",
    date: "April 2025",
  },
  {
    img: "/ramadan2.png",
    title: "Community Iftar",
    desc: "Serving meals to underprivileged families",
    date: "April 2025",
  },
  {
    img: "/ramadan2.png",
    title: "Community Iftar",
    desc: "Serving meals to underprivileged families",
    date: "April 2025",
  },
];


    
  return (
    <div>

        <Hero2Section
                
                title="Online Zakat Calculator"
                description="Easily calculate your Zakat in minutes, ensure accurate giving, and fulfill your obligation with confidence."
                
                
              />

              <ZakatCalculatorSection/>

              <CampaignSection
      sectionLabel="Ongoing Events"
      title="Support a Cause That Matters"
      subtitle="Choose from our active campaigns and directly impact lives in nee."
      campaigns={campaignsData}
      buttonText="Donate Now"
    />

              <InsideSection/>
    </div>
  )
}

export default page