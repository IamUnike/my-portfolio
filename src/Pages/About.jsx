const About = () => {
    return ( 
        <div>
            <section className="w-4/5 h-fit mx-auto mt-6 ">

                <div className=" text-white">
                    <p className="p-4 text-sm" data-aos='slide-up' data-aos-duration='500'> Before you trail the vigours of my masterpieces, you should know that: </p>

                    <li className="li" data-aos='slide-up' data-aos-duration='500'> I have keen interest in <span className="bg-purple-800"> building secure, fast and reliable web applications and sites </span> by employing best practices</li>

                    <li className="li" data-aos='slide-up' data-aos-duration='500'> I use my knowledge of <span className="bg-purple-800"> Data structure and Algorithms </span> to help me build the website you've modelled in your mind </li>

                    <li className="li" data-aos='slide-up' data-aos-duration='500'> As I write codes, I also consider the inter-twined relationship between users and web interfaces. Hence, my expertise in <span className="bg-purple-800"> Human Computer Interactions(HCI) </span> </li>
                </div>

                <div className="text-center text-white p-2 border-l border-l-secondary-200 mt-8 py-3" data-aos='zoom-out' data-aos-duration='700' data-aos-delay='200'>
                    <h3 className="font-bold text-white inline-block my-2 mr-2"> a little secret </h3> 
                    <i className="fa fa-lightbulb-o text-yellow-500"></i>

                    <p className="text-xs text-right"> Sometimes I feel like the "Da Vinci" of web Development, and other times, I encounter roadblocks that require me to consult my trusted library of resources. But that's what keeps the journey exciting and my skills sharpened, because I get to discover something new! </p>

                    <p className="text-sm mt-8 italic ">yaks, enough with the boring talks, check out some of my projects </p>
                </div>

            </section>
        </div>
     );
}
 
export default About;