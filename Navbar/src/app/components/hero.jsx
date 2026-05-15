import next from "next";
import Animation from "./animation";

export default function Hero() {
    return(
        <div>
            <div className="relative h-fit">
  <div className="absolute inset-0">
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-purple-400 via-white to-indigo-500 animate-gradient-x bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_30%,#63e_50%)] overflow-hidden"> </div>
  </div>
  

  <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:flex-row w-full">
    <div className="max-w-3xl text-center m-6">
      <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900 ">
        Innovative IT Solutions <br/>
        <span className="text-blue-800"> For your Business <span>& Project's</span></span>
      </h1>
      <p className="mx-auto mb-8 max-w-full text-lg text-blue-950 flex font-semibold font-sans">
        "Whether you're looking to build a new website, mobile app, or enhance your online presence with digital marketing, Zuptrix will be your partner in IT & Web solutions"
      </p>
      <div className="flex flex-row sm:flex-row flex-wrap justify-center items-center gap-4 w-full px-4">
        <a href="https://forms.gle/pLvtWoEw4zDTMAd48">
        <button className="rounded-lg px-6 py-3  font-medium bg-white text-blue-900 hover:bg-sky-800 hover:text-white">
          <a  href="https://forms.gle/pLvtWoEw4zDTMAd48">Get Solution</a>
        </button>
        </a>
        <a href="/OurWork">
        <button className="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-blue-900 hover:bg-slate-50">
          Our Work
        </button>
        </a>
      </div>
    </div> 
  </div> 
</div>  
        </div>
    )
};