import React from "react";

const NavItem = ({ href, type, text, target }) => {

    const baseClass = '';
    const buttonClass = 'bg-neutral-50 text-neutral-900 py-2 px-4 rounded hover:transition-all duration-1000 hover:bg-sky-700 hover:text-sky-100';
    const linkClass = 'text-neutral-400 hover:text-neutral-50';
    var fullClass; 
    switch (type) {
        case 'button':
        fullClass = baseClass + ' ' + buttonClass;
        break;

        case 'link':
        fullClass = baseClass + ' ' + linkClass;
        break;
        
        default:
            fullClass = baseClass;
    }

  return (
    <li>
      <a className={fullClass} href={href} target={target}>
        {text}
      </a>
    </li>
  );
};

export default NavItem;
