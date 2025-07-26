import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Contact } from "lucide-react";

const Overview: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Overview