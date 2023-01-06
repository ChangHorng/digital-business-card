import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-[#1A1B21] rounded-[10px]">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}