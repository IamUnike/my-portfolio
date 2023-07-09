const Projects = ({projects}) => {
    return ( 
        <div id="projects">
            <section className="w-5/6 min-h-screen mx-auto mt-10 grid grid-cols-1 md:grid-col md:grid-cols-3 gap-4">
                
                {projects.map((project, index) => (
                    <div key={index} className="border border-secondary-200 flex flex-col justify-center gap-6  h-72 rounded-lg bg-secondary-200 overflow-hidden bg-opacity-30 text-white" data-aos='slide-right' data-aos-duration='700'>
                        
                        <div className="h-32 w-4/5  rounded-md mx-auto overflow-hidden" data-aos='zoom-out' data-aos-duration='700' data-aos-delay='300'>
                            <img src={project.image} loading='lazy' alt="jobar cv project" className='w-full h-full object-contain' />
                        </div>

                        <div className="mx-6 ">
                            <a href={project.website} className="cursor-pointer"><h3 className="font-bold text-purple-600 font-poppins"> {project.title} </h3></a>

                            <p className="text-xs"> {project.description} </p>

                            <div className='mt-2'>
                                <a href={project.github}>
                                    <i className='fa fa-github mr-3'></i>
                                </a>
                               <a href={project.website}>
                                    <i className='fa fa-globe'></i>
                                </a> 
                            </div>
                        </div>

                    </div>

                ))}
                    
                   
            </section>
        </div>
     );
}
 
export default Projects;
