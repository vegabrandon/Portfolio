import './App.css';
import {motion} from 'framer-motion'
import ProjectList from './ProjectList';

function App() {
  const navbarLinkClasses = `
  text-white p-2 border-[1px] border-b-white/[.3] border-r-[transparent] border-t-[transparent] border-l-[transparent]
  hover:background-white hover:cursor-pointer hover:bg-slate-300/[.2] hover:rounded-t-lg ease-in duration-100 text-xl`
  return (
    <div className="App overflow-x-hidden">
      <div className="flex flex-row justify-between sticky m-auto w-[100vw] h-[30px] items-center top-5  max-w-[100vw]">
        <div className='w-[22vw]'>Logo</div>
        <div className='flex flex-row w-[50vw] justify-evenly'>
          <h3
            className={navbarLinkClasses}
          >About</h3>
          <h3
            className={navbarLinkClasses}
          >Projects</h3>
          <h3
            className={navbarLinkClasses}
          >Contact</h3>
          <h3
            className={navbarLinkClasses}
          >Resume</h3>
        </div>
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
          
          <p className='text-white text-lg w-[30vw]'>I'm a full stack software engineer specializing in delivering sophisticated and functional web applications. To view some of my work or contact information, click one of the following buttons</p>
        </div>
      </div>
      <div className='h-[50vh]'></div>

      <ProjectList />
    </div>

  );
}

export default App;
