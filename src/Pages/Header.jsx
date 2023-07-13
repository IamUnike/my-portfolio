import { useState } from 'react';
import avatar from '../assets/avatar.jpg'
import MobileNav from './MobileNav';

import { AnimatePresence } from 'framer-motion'

const Header = () => {
    const [mobileNav, setMobileNav] = useState(false)

    return (
        <div className="pt-3.5 fixed w-full z-50"> 
            <header className="flex justify-between items-center w-5/6 mx-auto py-1 px-2 text-sm rounded-md text-secondary-100 bg-secondary-200 bg-opacity-90" data-aos='zoom-out' data-aos-duration='500' data-aos-delay='600'>

                <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <img src={avatar} alt="profile avatar" className='object-contain w-full h-full' />
                </div> 
                
                <div>
                    <i className='fa fa-bars text-xl cursor-pointer' onClick={ () => setMobileNav(!mobileNav)}></i>
                </div>
            </header>:

            <AnimatePresence>
                {mobileNav && <MobileNav setMobileNav={setMobileNav} mobileNav={mobileNav} />} 
            </AnimatePresence>

        </div>
     );
}
 
export default Header;
