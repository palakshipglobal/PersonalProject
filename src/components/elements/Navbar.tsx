import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, Search } from "lucide-react"
import logo from "@/assets/logo.svg"
import { Button } from "../ui/button"

const Navbar = ({ refs }: { refs: any }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const navigationItems = [
    { name: "Home", path: "/", ref: refs.heroSectionRef },
    { name: "Hotels", path: "/rooms", ref: refs.featuresRef },
    { name: "Experience", path: "/", ref: refs.benefitsRef },
    { name: "About Us", path: "/about-us" },
    { name: "Dashboard", path: "/dashboard" },
  ]

  const navigate = useNavigate()

  const handleClick = (item: any) => {
    if (item.path) {
      navigate(item.path)
    }
    if (item.ref) {
      item.ref.current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed z-50 flex items-center justify-between w-full px-6 py-3 md:px-12 lg:px-16 ">
      <Link to="#" className="flex items-start gap-2 cursor-pointer">
        <img src={logo} alt="Logo" />
        {/* <p className="font-medium md:text-xl text-md">
          Quick<span className="text-blue-700">Stay</span>
        </p> */}
      </Link>
      <div className="hidden md:flex md:gap-7">
        {navigationItems.map((item, index) => (
          <p key={index} onClick={() => handleClick(item)} className="flex flex-col cursor-pointer group">
            <span className="text-base text-white duration-100 cursor-pointer hover:text-blue-200 hover:scale-105">
              {item.name}
            </span>
            <span className="w-0 h-0.5 bg-blue-200 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </p>
        ))}
      </div>
      <div className="md:hidden">
        <Menu onClick={handleIsOpen} />
      </div>
      <div className="items-center hidden gap-4 md:flex">
        <Search className="h-5 text-white transition-all" />
        <Button className="text-white rounded-lg">Login</Button>
      </div>
      {isOpen && (
        <div className="fixed flex flex-col w-32 gap-4 py-2 pl-2 text-white rounded-lg shadow-md md:hidden mt-44 right-5">
          {navigationItems.map((item, index) => (
            <p key={index} onClick={() => handleClick(item)} className="flex flex-col cursor-pointer group">
              <span className="pl-5 text-base duration-100 hover:scale-105">{item.name}</span>
              <span className="w-0 h-0.5 bg-blue-200 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
