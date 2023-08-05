//component imports
import Header from "./components/header/Header";
import MainSection from "./components/mainsection/MainSection";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Cta from "./components/cta/Cta";

//projects data hook
import useProjectData from "./components/projects/useProjectData";

const Home = () => {
    const { projects } = useProjectData()

    return ( 
            <div className="bg-primary text-secondary ">
                <Header />
                <MainSection />
                <About />
                <Projects projects={projects} />
                <Cta />
            </div>
     );
}
 
export default Home;