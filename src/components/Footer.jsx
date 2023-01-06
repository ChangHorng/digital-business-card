import React from "react";
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="mt-10 flex gap-6 rounded-b-[10px] bg-[#161619] pt-[19px] pb-5 pl-[73px] text-[#918E9B]">
      <FaTwitterSquare className="h-[25px] w-[25px]" />
      <FaFacebookSquare className="h-[25px] w-[25px]" />
      <FaInstagramSquare className="h-[25px] w-[25px]" />
      <FaGithubSquare className="h-[25px] w-[25px]" />
    </footer>
  )
}
