import React from "react"
import profile_pic from "../images/Chang Horng.png"
import { FaEnvelope, FaLinkedin } from "react-icons/fa"

export default function Info() {
  return (
    <div>
      <img src={profile_pic} className="h-[317px] w-[317px] rounded-t-[10px]" />
      <h1 className="mt-[26px] mb-0 text-center text-extra-big font-bold text-white">
        Lee Chang Horng
      </h1>
      <h3 className="mt-1 mb-0 text-center text-medium font-normal text-light-orange">
        Frontend Developer
      </h3>
      <p className="mt-[9px] mb-0 text-center text-small font-normal text-milk-white">
        github.com/ChangHorng
      </p>
      <div className="mt-4 flex">
        <button className="ml-[35px] mr-[17px] box-border flex h-[34px] w-[115px] items-center justify-center gap-2 rounded-md border-[1px] border-solid border-[#D1D5DB] bg-white py-[9px] pl-[11px] pr-[13px] text-button font-medium shadow-button">
          <FaEnvelope />
          Email
        </button>
        <button className="flex h-[34px] w-[115px] items-center justify-center gap-2 rounded-md border-[1px] border-[#5093E2] bg-[#5093E2] py-[9px] pl-[11px] pr-[13px] text-button font-medium text-white shadow-button">
          <FaLinkedin />
          LinkedIn
        </button>
      </div>
    </div>
  )
}
