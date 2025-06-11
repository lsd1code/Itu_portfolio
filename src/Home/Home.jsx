import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  return (
    <section className="md:px-[80px] text-[#181823] h-dvh">
      <Navbar/>

      <div className="h-full text-justify md:flex justify-between gap-6 items-center">
        <div className="md:basis-2/3">
          <h1 className="md:text-6xl">Hello, I'm <span className="font-bold text-shadow-[#181823] text-shadow-sm">Itumeleng Mokoena</span></h1>
          <h1 className="md:text-5xl">Data <span className="text-white font-bold text-shadow-[#181823] text-shadow-md">Analyst</span></h1>
          <p className="mb-5 opacity-80">Based in Pretoria.</p>

          <p className="mb-7">Short catchy phrase about yourself</p>

          <div className="space-x-4">
            <a href="#" className="rounded-sm bg-[#181823] text-white transition-colors duration-300 hover:bg-blue-500 px-[16px] py-1 text-sm">
              twitter/x
            </a>
            <a href="#" className="rounded-sm bg-[#181823] text-white transition-colors duration-300 hover:bg-blue-400 px-[16px] py-1 text-sm">linkedin</a>
            <a href="#" className="rounded-sm bg-[#181823] text-white transition-all duration-300 hover:opacity-80 px-[16px] py-1 text-sm">github</a>
          </div>
        </div>

        <div className="md:basis-1/3">  
          professional photo here
        </div>
      </div>
    </section>
  )
}

const Navbar = () => {
  return (
    <nav className="md:flex justify-between items-center md:py-[24px]">
      <div>
        <span>Itumeleng</span>
      </div>

      <ul className="md:flex gap-6">
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

      <div>
        <button className="text-white bg-[#181823] px-[25px] rounded-sm cursor-pointer">Resume</button>
      </div>
    </nav>
  )
}

export default Home