import About from './About/About'
import './App.css'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'

function App() {

  return (
    <div className='text-[1.35rem]'>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

function Footer() {
  return (
    <footer className="px-4 text-[.6rem] md:text-[.75rem] py-3 flex content-center justify-between opacity-80">
      <span className="logo">
        <a href="#home">Itu Mokoena</a>
      </span>
      <span className="copyright">copyright &copy; {new Date().getFullYear()}</span>
      <span className="socials space-x-2">
        <span><a target="_blank" href="#">twitter</a></span>
        <span><a target="_blank" href="https://github.com/">github</a></span>
        <span><a target="_blank" href="https://www.linkedin.com/">linkedin</a></span>
        <span><a target="_blank" href="mailto:youremail@gmail.com">mail</a></span>
      </span>
    </footer>
  )
}

export default App
