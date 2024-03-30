import Image from "next/image";
import React, { useState } from "react";
import UI_Badge from "./UI_Badge";

const PortfolioItem = ({ title, description, image, href, tags, category }) => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col overflow-hidden  relative self-stretch rounded-lg 
      hover:transition-all hover:border-neutral-500"
    >
      <div className="relative transition-all rounded-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={image} alt='' className="rounded-lg"  />
        {showText && (
          <>
            <span className="bg-black opacity-50 absolute top-0 left-0 w-full h-full"></span>
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <span className="underline">Show</span> ↗
            </span>
          </>
        )}
      </div>

      <div className="py-4 flex flex-col">
        <span className="text-xs text-neutral-800">{category}</span>
        <span className="text-lg text-neutral-800">{title}</span>
      </div>
    </a>
  );
};

export default PortfolioItem;


