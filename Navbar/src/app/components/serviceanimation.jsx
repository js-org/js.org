// --- Tech Stack Marquee ---
const ServiceAnimation = () => {
  const techs = ["Web Development", "Mobile Apps", "Cloud Solutions", "AI & ML", "Cybersecurity", "UI/UX Design", "E-commerce", "Data Analytics", "DevOps", "Blockchain", "IoT", "AR/VR", "Digital Marketing", "SEO Services", "Custom Software"];
  
  return (
    <div>
    <section id="tech" className="py-16 border-y border-white/5 bg-white/[0.02] overflow-hidden bg-gradient-to-r from-purple-300 to-purple-500 relative rounded-2xl">
      <div className="max-w-full mx-auto px-4 sm:px-full lg:px-8 mb-8 text-center">
        <p className="text-sm font-bold tracking-wider text-white uppercase">We Offer You </p>
      </div>
      <div className="relative flex overflow-x-hidden group max-w-full">
        <div className="animate-marquees flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <span key={index} className="mx-8 text-2xl md:text-4xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};
export default ServiceAnimation;