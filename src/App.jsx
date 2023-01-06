import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="rounded-[10px] bg-[#1A1B21]">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}
