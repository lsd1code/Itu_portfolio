import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose, faDownload } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Home = () => {  
  return (
    <section id="home" className="p-[16px] md:px-[80px] text-[#181823] h-dvh">
      <Navbar/>

      <div className="md:h-full text-center md:text-justify flex md:flex-row flex-col-reverse md:flex md:justify-between gap-6 justify-start m-0 md:items-center">
        <div className="md:basis-1/2">
          <h1 className="md:text-6xl">Hello, I'm <span className="font-bold text-shadow-[#181823] text-shadow-sm">Itumeleng Mokoena</span></h1>
          <h1 className="md:text-5xl">Data <span className="text-white font-bold text-shadow-[#181823] text-shadow-md">Analyst</span></h1>
          <p className="text-[.9rem] md:text-[1rem] mb-5">Based in Pretoria.</p>

          <p className="mb-7">Short catchy phrase about yourself</p>

          <div className="flex justify-around md:justify-start md:gap-10">
            <a href="https://x.com/IiMokoena" className="rounded-sm bg-[#181823] text-white transition-colors duration-300 hover:bg-blue-500 px-[16px] py-1 text-sm" target="_blank">
              twitter/x
            </a>
            <a href="https://www.linkedin.com/in/itumeleng-innocent-mokoena-229a72263/" className="rounded-sm bg-[#181823] text-white transition-colors duration-300 hover:bg-blue-300 px-[16px] py-1 text-sm" target="_blank">linkedin</a>
            <a href="https://github.com/ItumelengMokoena99" className="rounded-sm bg-[#181823] text-white transition-all duration-300 hover:opacity-80 px-[16px] py-1 text-sm" target="_blank">github</a>
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
        <span>Itu Mokoena</span>
      </div>

      <div className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faClose}/>}
      </div>

      <ul className="hidden md:flex gap-6">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
          <a href="https://drive.google.com/file/d/1UZs1Bg0_h_uNtD45XMDHgqJz60rEJWKZ/view?usp=drive_link" className="text-white text-[1.1rem] bg-[#181823] px-[18px] py-1 rounded-sm cursor-pointer space-x-2 flex items-center" target="_blank">
          <span>Resume</span>
          <FontAwesomeIcon icon={faDownload} style={{fontSize: "14px"}}/>
        </a>
        </li>
      </ul>

      <div className="hidden md:block">
        <a href="https://drive.google.com/file/d/1UZs1Bg0_h_uNtD45XMDHgqJz60rEJWKZ/view?usp=drive_link" className="text-white text-[1.1rem] bg-[#181823] px-[18px] py-1 rounded-sm cursor-pointer space-x-2 flex items-center" target="_blank">
          <span>Resume</span>
          <FontAwesomeIcon icon={faDownload} style={{fontSize: "14px"}}/>
        </a>
      </div>
    </nav>
  )
}

export default Home