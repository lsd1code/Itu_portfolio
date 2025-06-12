import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose, faDownload } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Home = () => {  
  return (
    <section className="p-[16px] md:px-[80px] text-[#181823] h-dvh">
      <Navbar/>

      <div className="md:h-full text-center md:text-justify flex md:flex-row flex-col-reverse md:flex md:justify-between gap-6 justify-start m-0 md:items-center">
        <div className="md:basis-1/2">
          <h1 className="md:text-6xl">Hello, I'm <span className="font-bold text-shadow-[#181823] text-shadow-sm">Itumeleng Mokoena</span></h1>
          <h1 className="md:text-5xl">Data <span className="text-white font-bold text-shadow-[#181823] text-shadow-md">Analyst</span></h1>
          <p className="text-[.9rem] md:text-[1rem] mb-5">Based in Pretoria.</p>

          <p className="mb-7">Short catchy phrase about yourself</p>

          <div className="flex justify-around md:justify-start md:gap-10">
            <a href="#" className="rounded-sm bg-[#181823] text-white transition-colors duration-300 hover:bg-blue-500 px-[16px] py-1 text-sm">
              twitter/x
            </a>
            <a href="#" className="rounded-sm bg-[#181823] text-white transition-colors duration-300 hover:bg-blue-400 px-[16px] py-1 text-sm">linkedin</a>
            <a href="#" className="rounded-sm bg-[#181823] text-white transition-all duration-300 hover:opacity-80 px-[16px] py-1 text-sm">github</a>
          </div>
        </div>

        <div className="md:basis-1/2 text-center">  
          professional photo here
        </div>
      </div>
    </section>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="flex justify-between items-center md:py-[24px]">
      <div>
        <span>Itumeleng</span>
      </div>

      <div className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faClose}/>}
      </div>

      <ul className="hidden md:flex gap-6">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#home">About</a>
        </li>
        <li>
          <a href="#home">Portfolio</a>
        </li>
        <li>
          <a href="#home">Contact</a>
        </li>
      </ul>

      <ul className={`md:hidden absolute top-0 ${!isOpen ? "left-[-700px]" : "left-0"} h-dvh w-[60%] bg-gray-500 px-10 py-6 space-y-6`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#home">About</a>
        </li>
        <li>
          <a href="#home">Portfolio</a>
        </li>
        <li>
          <a href="#home">Contact</a>
        </li>

        <li className="">
          <a className="text-white bg-[#181823] px-[28px] py-2 rounded-sm cursor-pointer">Resume</a>
        </li>
      </ul>

      <div className="hidden md:block">
        <button className="text-white text-[1.1rem] bg-[#181823] px-[18px] py-1 rounded-sm cursor-pointer space-x-2 flex items-center">
          <span>Resume</span>
          <FontAwesomeIcon icon={faDownload} style={{fontSize: "14px"}}/>
        </button>
      </div>
    </nav>
  )
}

export default Home