import React from "react"
import profile_pic from "../images/Chang Horng.png"
import { FaEnvelope, FaLinkedin } from "react-icons/fa"

export default function Info() {
    return (
        <div>
            <img src={profile_pic} className="w-[317px] h-[317px] rounded-t-[10px]" />
            <h1 className="mt-6 mb-0 font-bold text-big text-center text-white">Lee Chang Horng</h1>
            <h3 className="mt-1 mb-0 font-normal text-medium text-center text-light-orange">Frontend Developer</h3>
            <p className="mt-[9px] mb-0 font-normal text-small text-center text-milk-white">github.com/ChangHorng</p>
            <div className="flex mt-4">
                <button className="ml-[35px] mr-[17px] box-border flex justify-center items-center py-[9px] pl-[11px] pr-[13px] gap-2 w-[115px] h-[34px] bg-white border-[1px] border-solid border-[#D1D5DB] shadow-button rounded-md font-medium text-button">
                    <FaEnvelope />  
                    Email
                </button>
                <button className="flex justify-center items-center py-[9px] pl-[11px] pr-[13px] gap-2 w-[115px] h-[34px] text-white bg-[#5093E2] border-[1px] border-[#5093E2] shadow-button rounded-md font-medium text-button">
                    <FaLinkedin />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}