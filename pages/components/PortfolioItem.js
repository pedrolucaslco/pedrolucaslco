import Image from "next/image";
import React, { useState } from "react";
import UI_Badge from "./UI_Badge";

const PortfolioItem = ({ title, description, image, href, tags }) => {
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
      className="flex flex-col overflow-hidden border relative self-stretch rounded-lg border-neutral-700 
      hover:transition-all hover:border-neutral-500"
    >
      <div className="relative transition-all">
        <Image src={image} className="" />
        {showText && (
          <>
            <span className="bg-black opacity-50 absolute top-0 left-0 w-full h-full"></span>
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              Acessar
            </span>
          </>
        )}
      </div>

      <div className="p-4 flex flex-col gap-4">
        <span className="text-lg">{title}</span>
        <span className="text-neutral-500 text-sm">{description}</span>
      </div>

      <div className="mt-auto p-4 w-full">
        <div className="flex gap-1 mt-auto">
          {tags.map((item, index) => (
            <UI_Badge title={item} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default PortfolioItem;


