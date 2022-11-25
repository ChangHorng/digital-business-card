import React from "react"
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="footer">
            <FaTwitterSquare className="footer-twitter"/>
            <FaFacebookSquare className="footer-facebook"/>
            <FaInstagramSquare className="footer-instagram"/>
            <FaGithubSquare className="footer-github"/>
        </footer>
    )
}