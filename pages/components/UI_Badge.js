import Image from "next/image";
import React, { useState } from "react";

const UI_Badge = ({ title, type }) => {
  var typeClass;

  switch (type) {
    case "danger":
      typeClass = 'bg-red-900 text-neutral-200';
      break;

    default:
        typeClass = 'border border-neutral-800 text-neutral-200';
      break;
  }

  const baseClass = 'inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium';
  const fullClass = baseClass + ' ' + typeClass;
  return (
    <span className={fullClass}>
      {title}
    </span>
  );
};

export default UI_Badge;
