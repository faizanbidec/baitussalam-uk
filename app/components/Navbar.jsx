"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DonationModal from "../components/Donationform";
import LearnMoreButton from "./ui/learnmore";
import { FaBars, FaTimes } from "react-icons/fa";
import { causesData } from "../causes/causesData";
import { Calculator } from "lucide-react";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();


  const navLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Services", "/services"],
    ["Campaigns", "/campaigns"],
    ["Contact Us", "/contact"],
    ["Blog", "/blog"],
     ["Zakat Calculator", "/donation"],
    
  ];

  return (
    <nav className="relative bg-white">
      {/* Full Height Vertical Line (hide on small screens) */}
      <div className="absolute right-[190px] top-0 bottom-0 w-[1.5px] bg-gray-400 hidden lg:block"></div>

      {/* Top Bar */}
      <div className="relative flex justify-between items-center px-4 sm:px-6 md:px-10 min-h-[50px] sm:min-h-[57px] py-2">
        {/* Logo */}
        <div className="flex-1 flex justify-center lg:justify-start items-center z-10 h-full">
          <Link href="/">
          <Image
            src="/Baitussalam UK logo-02.png"
            alt="Baitussalam UK"
            width={190}
            height={300}
            className="
      object-contain
      h-[24px] xs:h-[28px] sm:h-[36px] md:h-[50px] lg:h-[65px] xl:h-[80px]
      mb-[-10px] sm:mb-[-14px] md:mb-[-18px] lg:mb-[-20px]
      transition-all duration-300
    "
          /></Link>
        </div>

        {/* Hamburger Menu (visible only on mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-[#22305B] z-40"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Right Section (hidden on mobile) */}
        <div className="hidden lg:flex items-end ml-auto gap-6">
          {/* Contact Info */}
          <div className="flex gap-8 items-center mb-[10.5px]">
            {/* Call */}
            <div className="flex items-center gap-2 text-gray-600 text-[0.875rem]">
              <div className="bg-[#BC153F] text-white rounded-full p-2 flex items-center justify-center m-2 text-[0.75rem]">
                <Image
                  src="/call.png"
                  alt="Call Icon"
                  width={14}
                  height={14}
                  className="invert brightness-0"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#1F2937] leading-[1.2] text-[0.75rem]">
                  Call Us
                </p>
                <p className="text-[0.65rem] text-black font-semibold">
                  123-456-9034
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-gray-600 text-[0.875rem] mr-8">
              <div className="bg-blue-900 text-white rounded-full p-2 flex items-center justify-center text-[0.75rem]">
                <Image
                  src="/email.png"
                  alt="Mail Icon"
                  width={14}
                  height={14}
                  className="invert brightness-0"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#1F2937] leading-[1.2] text-[0.75rem]">
                  Email Us
                </p>
                <p className="text-[0.65rem] font-semibold text-black">
                  Baitussalam@mail.com
                </p>
              </div>
            </div>
          </div>

          {/* Donate Button */}
          <LearnMoreButton
            label="Donate Now"
            bgColor="#22305B"
            textColor="white"
            hoverColor="#1a2447"
            onClickAction={() => setShowDonateForm(true)}
          />
        </div>

        {/* Horizontal Gradient Line (only for large screens) */}

        <div className="absolute z-0 left-[200px] right-[190px] bottom-[19px] h-[1.5px] bg-gradient-to-r from-transparent via-gray-400 via-[80%] to-gray-600 hidden lg:block"></div>
      </div>
      {/* Bottom Navigation Menu for Large Screens */}
      <div className="hidden lg:flex justify-end items-center mb-2 gap-10 -mt-2 text-[#1F2937] font-medium text-sm mr-[210px]">
        {navLinks.map(([label, href], index) => (
  <Link
    key={href}
    href={href}
    onMouseEnter={() => setHoveredLink(index)}
    onMouseLeave={() => setHoveredLink(null)}
    className={`relative cursor-pointer transition-colors duration-300 ${
      hoveredLink === index ? "text-[#111827]" : "text-[#1F2937]"
    }`}
  >
    {label}
    <span
      className={`absolute left-0 bottom-[-1px] h-[2px] bg-red-600 transition-all duration-300 ${
        hoveredLink === index || pathname === href ? "w-full" : "w-0"
      }`}
    ></span>
  </Link>
))}

      </div>

      {/* Overlay background when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Dropdown Menu (Slide-in from Right) */}
      {/* Mobile Dropdown Menu (Slide-in from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-white shadow-2xl z-40 transform transition-transform duration-500 ease-in-out overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-2xl text-[#22305B] z-50"
        >
          <FaTimes />
        </button>

        {/* Menu Content */}
        <div className="flex flex-col items-center pt-20 px-6 gap-2">
          {/* Nav Links */}
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-semibold text-[#BC153F] transition"
            >
              {label}
            </Link>
          ))}

          {/* Donate Button */}
          <div>
            <LearnMoreButton
              label="Donate Now"
              bgColor="#22305B"
              cursor="pointer"
              onClickAction={() => setShowDonateForm(true)}
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 w-full mt-6">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-900 text-white rounded-full p-2 flex items-center justify-center text-[0.75rem]">
                <Image
                  src="/email.png"
                  alt="Mail Icon"
                  width={16}
                  height={16}
                  className="invert brightness-0"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#1F2937] leading-[1.2] text-[0.75rem]">
                  Email Us
                </p>
                <p className="text-[0.65rem] font-semibold text-black">
                  Baitussalam@mail.com
                </p>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-center gap-3">
              <div className="bg-[#BC153F] text-white rounded-full p-2 flex items-center justify-center text-[0.75rem]">
                <Image
                  src="/call.png"
                  alt="Call Icon"
                  width={16}
                  height={16}
                  className="invert brightness-0"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#1F2937] leading-[1.2] text-[0.75rem]">
                  Call Us
                </p>
                <p className="text-[0.65rem] text-black font-semibold">
                  123-456-9034
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donate Modal */}
      {showDonateForm && (
        <div
          onClick={() => setShowDonateForm(false)}
          // className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-[90%] max-w-[800px] max-h-[90vh] overflow-y-auto p-5 relative shadow-xl"
          >
            <button
              onClick={() => setShowDonateForm(false)}
              className="absolute right-10 top-8 text-2xl text-gray-800 cursor-pointer bg-none border-none"
            >
              ✕
            </button>
            <DonationModal
              open={showDonateForm}
              setOpen={setShowDonateForm}
              
            />
          </div>
        </div>
      )}
    </nav>
  );
}
