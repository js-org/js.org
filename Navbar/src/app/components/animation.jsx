// --- Tech Stack Marquee ---
import ServiceAnimation from "./serviceanimation";  
import grid from "../GridPage/page";

const Animation = () => {
  const techs = ["React", "Next.js", "Tailwind CSS", "Node.js", "JavaScript", "AWS", "Docker", "Firebase", "GraphQL", "PostgreSQL", "Python", "Django", "Adobe", "Canva", "Figma"];
  
  return (
    <div>
    <section id="tech" className="py-16 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-full mb-8 text-center">
        <p className="text-sm font-semibold tracking-wider text-white uppercase">Powered by Industry-Leading Technologies</p>
      </div>
      <div className="relative flex overflow-x-hidden group max-w-full">
        <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <span key={index} className="mx-8 text-2xl md:text-4xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 cursor-default">
              {tech}
            </span>
          ))}
        </div>  
      </div>
    </section>
    {/* <div className="m-4">
    <ServiceAnimation/> 
    </div> */}
    </div>
  );
};
export default Animation;