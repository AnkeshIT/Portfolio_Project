import { HeroSection } from "../components/UI/HeroSection";
import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </>
    )
};
