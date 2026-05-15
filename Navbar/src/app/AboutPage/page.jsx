import next from "next";
import Link from "next/link";
import NavBar from "../NavBar/page";
import FooterPage from "../FooterPage/page"

export default function About() {
  return (
    <div>
        <div className=" sticky top-0 z-50">
                    <NavBar/>
                  </div>
      <main className="bg-gradient-to-br from-blue-100 to-indigo-200 min-h-screen py-12 px-6 font-sans">
        <div className="container mx-auto text-center">
          {/* Hero Section */}
          <h1 className="text-5xl font-bold text-blue-700 mb-4 -m-10 font-sans">
            About Us
          </h1>
          <p className="text-xl text-gray-600 mb-12 font-sans">
            Zuptrix - Innovative Web Solution
          </p>

                    {/* Company Overview */}
          <section className="max-w-4xl mx-auto mb-16">
            <p className="text-gray-700 leading-relaxed text-lg ">
              At <span className="font-semibold text-blue-600">Zuptrix</span>, we specialize in crafting modern, scalable, and user‑friendly web solutions. 
              Our mission is to empower businesses with innovative digital tools that drive growth, 
              enhance customer engagement, and deliver measurable results. 
              With a passion for design and technology, we blend creativity with technical expertise 
              to build solutions that truly stand out.
            </p>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Example Team Member */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full mb-4">
                    <img src="/PranitRay1.jpeg" alt="Company Owner" className="w-full h-full object-cover rounded-full"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Pranit Rai</h3>
                <p className="text-gray-600">Digital Marketing Executive</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full mb-4">
                    <img src="/CEOYuvraj.jpeg" alt="Company Owner" className="w-full h-full object-cover rounded-full"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Yuvraj Shah</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
                            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full mb-4">
                    <img src="/LogisticManager.jpeg" alt="Company Owner" className="w-full h-full object-cover rounded-full"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Hariom Yadav</h3>
                <p className="text-gray-600">Logistic Manager</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full mb-4">
                    <img src="/TeamLead.jpeg" alt="Company Owner" className="w-full h-full object-cover rounded-full"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Vivek Chauddhary</h3>
                <p className="text-gray-600">Team Lead</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full mb-4">
                    <img src="/SponsorshipCoordinator.jpeg" alt="Company Owner" className="w-full h-full object-cover rounded-full"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Saroj Yadav</h3>
                <p className="text-gray-600">Sponsorship Coordinator</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full mb-4">
                    <img src="/Backend.jpg" alt="Company Owner" className="w-full h-full object-cover rounded-full"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Md Nawaj Sarif</h3>
                <p className="text-gray-600">Backend Developer</p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700">
                To deliver cutting-edge web applications and digital experiences that help businesses 
                thrive in the ever-evolving online landscape.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700">
                To become a trusted global leader in innovative web solutions, 
                recognized for creativity, reliability, and excellence.
              </p>
            </div>
          </section>


          {/* Call to Action */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Let’s Build Something Great Together
            </h2>
            <p className="text-gray-700 mb-6">
              Ready to take your business to the next level? 
              Partner with Zuptrix and experience innovative web solutions tailored to your needs.
            </p>
            <a
              href="/ContactPage"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </section>
        </div>
      </main>
      <div>
        <FooterPage/>
      </div>
    </div>
  );
}
