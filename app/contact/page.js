import React from 'react'
import Image from 'next/image'
import SmileSection from '../components/SmileSection'
import InsideSection from '../components/InsideSection'
import ContactForm from '../components/Contactform'
import Hero2Section from '../components/hero2'
export const metadata = {
  title: "Contact Us | Get in Touch for Donations & Support",
  description:
    "Reach out to Baitussalam for donation inquiries, partnership opportunities, or program details. Connect with our team to support humanitarian and community initiatives.",
};
const page = () => {
  return (
    <div>

        <Hero2Section
  subtitle="Contact Us "
  title="Connecting People, Offering Support"
  description="Reach out to Baitussalam UK for inquiries, support, or partnership opportunities. We are here to listen, guide, and help you make a meaningful impact."
  topLeftLabel={{
    show: true,
    links: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact" }
    ]
  }}
/>


   <section className="relative bg-white text-center overflow-hidden py-16 sm:py-20 px-4 sm:px-12 font-sans">

  {/* Left Blue Background */}
   {/* Left Blue Background — hidden on small screens */}
<div className="hidden sm:block md:block absolute top-[50%] left-0 transform -translate-y-1/2 w-32 sm:w-40 h-22 sm:h-40 bg-[#22305B] lg:w-[25vw] rounded-tr-[60px] rounded-br-[60px] z-0"></div>

  {/* Right Blue Background — hidden on small screens */}
  <div className="hidden sm:block md:block absolute top-[50%] right-0 transform -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 lg:w-[25vw] bg-[#22305B] rounded-tl-[60px] rounded-bl-[60px] z-0"></div>

  {/* Headings */}
  

  {/* Cards */}
  <div className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
    {[
      { img: "/location.png", title: "Address", text: "Baitussalam UK, [Insert Office Address]" },
      { img: "/call1.png", title: "Phone", text: "+44 123 456 789" },
      { img: "/email1.png", title: "Email", text: "info@baitussalam.org.uk" },
      { img: "/accounts.png", title: "Office Hours", text: "Monday – Friday | 9:00 AM – 5:00 PM" }
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#FBFBFB] shadow-md rounded-[15px] w-52 sm:w-56 md:w-60 h-48 sm:h-52 md:h-52 p-4 sm:p-6 text-center flex flex-col items-center justify-center border-8 border-white"

      >
        <div className="bg-[#b2173f] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          <Image src={item.img} alt={item.title} width={32} height={32} className="object-contain" sizes="(max-width: 640px) 28px, 32px" />
        </div>

        <div className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</div>
        <div className="text-[10px] sm:text-[12px] text-[#5C5C5C]">{item.text}</div>
      </div>
    ))}
  </div>
</section>


<section className="bg-white font-rubik py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 ">
  <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-10 lg:max-w-[140vw]">

    {/* Left side — Form */}
    <div className="flex-1 w-full max-w-[900px] bg-white p-6 sm:p-8 rounded-lg shadow-md">
      <h2 className="text-black text-2xl sm:text-3xl font-bold mb-3">
        Get in Touch With Us
      </h2>

      <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
        We’re here to answer your questions, support your journey, and work together 
        in making a difference. We’re here to answer your questions, support your 
        journey, and work together in making a difference.
      </p>

      {/* Contact Form */}
      <ContactForm />
    </div>

    {/* Right side — Google Map */}
    <div className="flex-1 w-full max-w-[900px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0394393065326!2d67.05778807426402!3d24.862502545177858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fc4330000d7%3A0x392be2a6cc28669b!2sBidec%20Solution's%20(pvt)%20Ltd!5e0!3m2!1sen!2s!4v1760956168148!5m2!1sen!2s"
        className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    
  </div>
</section>



<SmileSection/>


<InsideSection/>
    </div>
  )
}

export default page