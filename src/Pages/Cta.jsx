import Form from "./Form";

const Cta = () => {
    return ( 
        <div className="bg-secondary-200 bg-opacity-40">
            
            <section className="w-5/6 pb-4 mx-auto mt-8 text-white pt-4" >
                
                <h3 className="font-bold font-poppins text-purple-600 my-2" data-aos-duration='500' > Cool Projects Yeah? </h3> 

                <p className="font-poppins mt-3 py-2 text-sm">Well, thanks for stopping by. I'm currently looking for new opportunities and collaborations. So if you think we're a good fit for each other, just send me a message, let's build together!</p>

               <Form />

                <div className="mt-8">
                    <p className="font-poppins text-purple-600 font-bold">And hey, you don't have to be a stranger!</p>
                    <p className="text-sm"> Connect with me online </p
                    >

                    <div className="bg-secondary-200 bg-opacity-50 p-2 w-2/5 mx-auto mt-4  rounded-lg flex items-center justify-center gap-4 border border-secondary-200">
                        <a href="https://twitter.com/only1_Gideon"  className="socialBtn animate-bounce  bg-blue-600">
                            <i className="fa fa-twitter text-sm text-white "></i> 
                        </a>

                        <a href="https://www.linkedin.com/in/gideon-cyril-987829227" className="socialBtn animate-bounce bg-blue-800"> 
                            <i className="fa fa-linkedin text-sm text-white"> </i> 
                        </a>
                        
                        <a href="https://github.com/IamUnike" className="socialBtn animate-bounce bg-primary"> 
                            <i className="fa fa-github text-sm text-white"></i>
                        </a>
                    </div>
                </div>

                <div className="border-t mt-6">
                    <p className="text-sm pt-2 text-right"> &copy; Gideon Cyril 2023</p>
                </div>

            </section>
        </div>
     );
}
 
export default Cta;
