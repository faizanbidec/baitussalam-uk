"use client";

import { useRouter } from "next/navigation";

export default function LearnMoreButton({
  label = "Learn More",            // Default text
  bgColor = "transparent",         // Background color
  textColor = "white",             // Text color
  hoverColor,                      // Hover background
  navigateTo,                      // Route
  onClickAction,                   // Custom action
  borderColor = "transparent",     // Border color
  borderWidth = "1px",             // Border thickness
  borderStyle = "solid",           // Border type
}) {
  const router = useRouter();

  const handleClick = () => {
    if (onClickAction) {
      onClickAction();
    } else if (navigateTo) {
      router.push(navigateTo);
    } else {
      console.warn("⚠️ No action defined for LearnMoreButton");
    }
  };

  return (
   
  <button
    onClick={handleClick}
    className={`
      text-[10px] sm:text-[11.5px] md:text-[13px]
      px-4 sm:px-6 md:px-8
      py-2 sm:py-[9px] md:py-3
      font-[500]
      rounded-full
      transition-all duration-300
      hover:opacity-90
    `}
    style={{
      backgroundColor: bgColor,
      color: textColor,
      border: `${borderWidth} ${borderStyle} ${borderColor}`,
      fontFamily: "Rubik, sans-serif",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = hoverColor || bgColor;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = bgColor;
    }}
  >
    {label}
  </button>
);

}
