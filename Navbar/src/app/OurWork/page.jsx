import NavBar from "../NavBar/page";
import FooterPage from "../FooterPage/page";

export default function OurWork() {
  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-red-400 via-blue-600 to-red-400"></div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 backdrop-blur-md shadow-lg">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="relative text-center py-6 px-6 text-white">
        <h1 className="text-6xl font-extrabold drop-shadow-lg mb-8">
          Our Work
        </h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
          A showcase of premium projects — crafted with innovation, precision,
          and luxury aesthetics to empower businesses and institutions.
        </p>
      </section>

      {/* Work Showcase */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "E-commerce Platform",
              desc: "Luxury online shopping experiences with seamless navigation, secure payments, and elegant UI.",
            },
            {
              title: "School Management System",
              desc: "Smart digital solutions for schools — managing students, staff, and academics with ease.",
            },
            {
              title: "Portfolio Website",
              desc: "Sleek, responsive portfolios designed to highlight creativity and professionalism.",
            },
            {
              title: "Blog Website",
              desc: "Modern blogging platforms with rich content layouts and engaging user experiences.",
            },
            {
              title: "Admin Panel",
              desc: "Intuitive admin interfaces with powerful controls and analytics dashboards.",
            },
            {
              title: "Dashboard",
              desc: "Luxury dashboards with real-time insights, data visualization, and smooth UX.",
            },
            {
              title: "Educational Platform",
              desc: "Interactive learning platforms with video courses, quizzes, and progress tracking.",
            },
            {
              title: "B2B Solutions",
              desc: "Enterprise-grade platforms connecting businesses with efficiency and innovation.",
            },
            {
              title: "And Many More",
              desc: "From custom software to futuristic AR/VR experiences — we craft solutions for every vision.",
            },
          ].map((work, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border border-white/30"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {work.title}
              </h2>
              <p className="text-gray-100 leading-relaxed">{work.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div>
        <FooterPage/>
      </div>
    </div>
  );
}
