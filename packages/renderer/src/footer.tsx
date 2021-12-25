import type { FC } from "react";
import React from 'react'
import './footer.css'

interface FooterProps {
  cursorPosition: string;
}
const Footer: FC<FooterProps> = ({cursorPosition}: FooterProps) => {
  return <div className="footer">{cursorPosition}</div>
}
export default Footer
