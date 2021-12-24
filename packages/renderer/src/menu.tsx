import type { FC } from "react";
import React from "react";
import './menu.css'

const Menu: FC = () => {
  return <div className="menu">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="22"
      fill="none"
      viewBox="0 0 19 22"
    >
      <path
        fill="#fff"
        d="M3.52 5l1.52-1.52h8.08l5.44 5.36v11.12l-1.52 1.52h-12l-1.52-1.52V5zm13.52 4.48L12.56 5H5.04v14.96h12V9.48zM2 .52L.56 1.96V17L2 18.52V1.96h9.68L10.16.52H2z"
        opacity="0.4"
      ></path>
    </svg>
  </div>
}

export default Menu
