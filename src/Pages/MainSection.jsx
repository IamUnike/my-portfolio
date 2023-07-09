import reactImg from '../assets/reactImg.png'
import dots from '../assets/dots.png'

const MainSection = () => {
    return ( 
        <main>
            <section className="w-5/6 h-screen bg-primary flex flex-col justify-center items-center gap-4 m-auto relative">

                <img src={reactImg} alt="react logo" loading="lazy" className='w-6 h-4 absolute top-20 right-0 opacity-40' />

                <img src={dots} alt="dots logo" loading="lazy" className='w-20 h-8 opacity-50 absolute top-52' />

                <div>
                    <p className="text-white text-xs mb-4 font-poppins" data-aos='slide-down' data-aos-duration='500'>Hello, I'm Gideon Cyril,  <br /> A Frontend Developer with passion for </p>

                    <h1 className="font-bold text-2xl text-complement text-white font-poppins" data-aos='zoom-out' data-aos-duration='700' data-aos-delay='300'> turning your ideas into <span className="text-purple-600 animate-pulse"> creative </span> realities</h1>

                   <a href="#projects"> <button className="text-white mt-12 border-b font-poppins border-b-secondary-200 text-xs animate-bounce"> My Projects <i className="fa fa-arrow-right text-white mx-2 "></i> </button></a>
                </div>

                 
                    <div className=" h-12 w-28 flex items-center justify-center gap-3 absolute bottom-5 right-0" data-aos='zoom-out' data-aos-duration='500' data-aos-delay='600'>
                        <a href="https://twitter.com/only1_Gideon" className="socialBtn  bg-blue-600"> 
                            <i className="fa fa-twitter text-sm text-white"></i> 
                        </a>

                        <a href='https://www.linkedin.com/in/gideon-cyril-987829227' className="socialBtn bg-blue-800"> 
                            <i className="fa fa-linkedin text-sm text-white"> </i> 
                        </a>
                        
                        <a href="https://github.com/IamUnike" className="socialBtn bg-primary"> 
                            <i className="fa fa-github text-sm text-white"></i>
                        </a>
                    </div>

                                
            </section>
        </main>
     );
}
 
export default MainSection;