import './App.css';
import {motion} from 'framer-motion'
import ProjectList from './ProjectList';
import {useRef} from 'react'

function App() {
  const projectRef = useRef();
  const navbarLinkClasses = `
  text-white p-2 border-[1px] border-b-white/[.3] border-r-[transparent] border-t-[transparent] border-l-[transparent]
  hover:background-white hover:cursor-pointer hover:bg-slate-300/[.2] hover:rounded-t-lg ease-in duration-100 text-xl `
  return (
    <div className="App overflow-x-hidden">
        <div className=" flex flex-row justify-between fixed mx-auto w-[100vw] h-[5rem] overflow-hidden items-center top-0 background-nav">
          <div className='w-[22vw] text-center text-[2rem]'>Logo</div>
          <div className='hidden md:flex-row md:w-[50vw] md:justify-evenly md:visible md:flex md:flex-row'>
            <h3
              className={navbarLinkClasses}
            >About</h3>
            <h3
              className={navbarLinkClasses}
              onClick={() => projectRef.current.scrollIntoView()}
            >Projects</h3>
            <h3
              className={navbarLinkClasses}
            >Contact</h3>
            <h3
              className={navbarLinkClasses}
            >Resume</h3>
          </div>
          <div className='md:hidden text-white w-[22vw] text-[3rem]'><button><i class="fa-solid fa-bars"></i></button></div>

        </div>
          <div className="flex flex-row justify-center mt-[10rem]">
            <div className='flex flex-col w-[60vw] h-[45vh] text-left justify-center'>
              <div>
                <motion.p 
                  className='text-white text-2xl'
                  initial={{opacity: '0'}}
                  transition={{duration: 2}}
                  animate={{opacity:1}}
                >
                  Welcome, my name is
                </motion.p>
                <h1 className='text-white ml-[-17px] text-[8rem]'>Brandon Vega.</h1>
              </div>
              
              <p className='text-white text-lg w-[30vw]'>I'm a full stack software engineer specializing in delivering sophisticated and functional web applications.</p>
            </div>
          </div>
          <div className='h-[50vh]'></div>

          <ProjectList ref={projectRef} />
          <div className='m-auto'>
            <h1 className='text-white text-[6rem] h-[10rem]'>Resume</h1>
          </div>
    </div>

  );
}

export default App;
