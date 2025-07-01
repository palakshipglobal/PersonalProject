import Navbar from "@/components/elements/Navbar"
import { useRef } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "@/pages/Home"

function App() {
  const heroSectionRef = useRef(null)
  const featuresRef = useRef(null)
  const benefitsRef = useRef(null)

  const refs = {
    heroSectionRef,
    featuresRef,
    benefitsRef,
  }

  const isOwner = useLocation().pathname.includes("owner")

  return (
    <div>
      {!isOwner && <Navbar refs={refs} />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
