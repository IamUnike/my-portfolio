import reactImg from '../assets/reactImg.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import firebase from '../assets/firebase.png'
import git from '../assets/git.png'
import tailwind from '../assets/tailwind.png'
import resume from '../assets/gideon-resume.pdf'

import { motion } from "framer-motion"

const MobileNav = ({mobileNav, setMobileNav}) => {
    return ( 
        <motion.nav 
            className='text-white h-screen w-full top-0 z-80 fixed bg-black flex flex-col items-center justify-between pb-8 pt-3.5'
            initial={{scale: 0}} animate={{scale: [0, 1.5, 1]}} transition={{duration: 1, ease:'easeIn'}}  exit={{scale: 0, opacity:0}} >
                
                <div className='bg-secondary-200 rounded-md p-2 flex justify-between w-5/6  items-center'>
                    <p className='text-xs font-poppins'> Gideon Cyril </p>
                    
                    <i className='fa fa-close text-red-600 text-xl cursor-pointer' onClick={ () => setMobileNav(!mobileNav)}></i>
                </div>

                <div className='p-4 w-5/6 flex justify-center items-center gap-4'>
                   <a href={resume} download className='bg-purple-700 text-white text-sm rounded-md p-2 hover:bg-transparent border-2 border-purple-700 font-poppins duration-300 cursor-pointer'> My Resume </a>

                  <a href='mailto:gideontech21@gmail.com' className='bg-white text-sm text-purple-700 rounded-md p-2 hover:bg-transparent border-2 border-white font-poppins duration-300'> Contact Me </a> 
                </div>

                <div className='rounded-md p-4 w-5/6 flex justify-center items-center gap-3 overflow-auto bg-secondary-200 bg-opacity-50 mb-4'>
                    <p className='text-xs font-poppins transform rotate-90'> Skillset  </p>
                    
                    <img src={reactImg} alt="react" className='skill-img' loading='lazy' />
                    
                    <img src={html} alt="html" className='skill-img' loading='lazy'  />

                    <img src={css} alt="css" className='skill-img' loading='lazy' />

                    <img src={js} alt="javascript" className='skill-img' loading='lazy' />

                    <img src={tailwind} alt="tailwind" className='skill-img' loading='lazy' />

                    <img src={git} alt="git" className='skill-img' loading='lazy' />

                    <img src={firebase} alt="firebase" className='skill-img' loading='lazy' />
                
                </div>
                
            </motion.nav>
     );
}
 
export default MobileNav;