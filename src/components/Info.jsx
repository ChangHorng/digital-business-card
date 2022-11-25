import React from "react"
import profile_pic from "../images/Chang Horng.png"
import { FaEnvelope, FaLinkedin } from "react-icons/fa"

export default function Info() {
    return (
        <div>
            <img src={profile_pic} className="info-photo" />
            <h1 className="info-name">Lee Chang Horng</h1>
            <h3 className="info-job">Frontend Developer</h3>
            <p className="info-link">github.com/ChangHorng</p>
            <div className="button">
                <button className="button-email">
                    <FaEnvelope />  
                    Email
                </button>
                <button className="button-linkedin">
                    <FaLinkedin />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}