"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-4 px-6 lg:px-16">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-16 border-b border-gray-700 pb-10">
        {/* Logo + About */}
        <div className="sm:w-[300px]">
          <Image
            src="/Baitussalam UK logo-02.png"
  alt="Baitussalam UK"
  width={180}
  height={60}
  className="object-contain mb-4 "
/>

          <p className="text-gray-200 text-sm leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy.
          </p>

          <h4 className="font-semibold mb-2">Social Links</h4>
          <div className="flex items-center gap-4 text-gray-300 text-lg">
  <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </Link>
  <Link href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp />
  </Link>
  <Link href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </Link>
  <Link href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
    <FaEnvelope />
  </Link>
</div>

        </div>

        {/* Quick Links */}
        <div className="sm:w-[140px] ">
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="text-sm text-white space-y-2">
            {["Home", "About", "Services", "Campaigns", "Contact", "Blog"].map((link, i) => {
  let href = `/${link.toLowerCase().replace(/\s+/g, '-')}`;
  if (link === "Home") href = "/"; // Home ke liye sirf /

  return (
    <li key={i}>
      <Link href={href} className="hover:underline">
        {link}
      </Link>
    </li>
  );
})}

          </ul>
        </div>

        {/* Our Services */}
<div className="sm:w-[250px]">
  <h4 className="text-lg font-semibold mb-3">Our Services</h4>
  <ul className="text-sm text-white space-y-2">
    {[
      { name: "Healthcare", href: "/causes/healthcare" },
      { name: "Food Security", href: "/causes/food-security" },
      { name: "Education", href: "/causes/education" },
      { name: "Orphan Care", href: "/causes/orphan" },
      { name: "Emergency Relief", href: "/causes/emergency" },
    ].map((service, i) => (
      <li key={i}>
        <Link href={service.href} className="hover:underline">
          {service.name}
        </Link>
      </li>
    ))}
  </ul>
</div>


        {/* Contact Info */}
        <div className="sm:w-[250px]">
          <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
          <p className="text-sm mb-1">
            <span className="font-semibold">Address: </span>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Phone: </span>+92–21–111–298–111
          </p>
          <p className="text-sm">
            <span className="font-semibold">Email: </span>info@baitussalam.org
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-gray-400 text-xs border-t border-gray-800 pt-3">
        <p>Copyright 2025 © BAITUSSALAM USA</p>
        <p className="mt-2 sm:mt-0">
          <Link href="#" className="hover:underline mr-3">Terms & Conditions</Link>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}
