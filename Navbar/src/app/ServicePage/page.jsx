import Link from "next/link";
import NavBar from "../NavBar/page";
import FooterPage from "../FooterPage/page";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen font-sans">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 backdrop-blur-md shadow-lg">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="relative text-center py-24 px-6">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg mb-8">
          Our Premium Services
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Elevating businesses with innovation, design, and strategy — crafted
          for those who demand excellence.
        </p>
        <Link
          href="/"
          className="inline-block mt-10 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white font-semibold rounded-full px-8 py-4 shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
        >
          Discover More
        </Link>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              title: "Web Development",
              desc: "Luxury websites built with precision, performance, and elegance.",
            },
            {
              title: "Mobile Apps",
              desc: "Seamless cross-platform apps with premium user experiences.",
            },
            {
              title: "Digital Marketing",
              desc: "Elite strategies to amplify your brand presence globally.",
            },
            {
              title: "Cloud Solutions",
              desc: "Scalable, secure, and future-ready cloud infrastructure.",
            },
            {
              title: "AI & Machine Learning",
              desc: "Intelligent solutions powered by cutting-edge AI models.",
            },
            {
              title: "Cybersecurity",
              desc: "Enterprise-grade protection with modern defense systems.",
            },
            {
              title: "UI/UX Design",
              desc: "Elegant, user-centered designs with luxury aesthetics.",
            },
            {
              title: "E-commerce Solutions",
              desc: "Premium online stores with flawless shopping experiences.",
            },
            {
              title: "Data Analytics",
              desc: "Transforming raw data into powerful business insights.",
            },
            {
              title: "DevOps",
              desc: "Streamlined workflows with automation and CI/CD pipelines.",
            },
            {
              title: "Blockchain",
              desc: "Secure, decentralized solutions for modern innovation.",
            },
            {
              title: "IoT",
              desc: "Smart ecosystems connecting devices with sophistication.",
            },
            {
              title: "AR/VR",
              desc: "Immersive experiences blending reality with digital luxury.",
            },
            {
              title: "SEO Services",
              desc: "Boost visibility with elite SEO strategies.",
            },
            {
              title: "Custom Software Development",
              desc: "Tailored solutions crafted for unique business excellence.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 border border-gray-200"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{service.desc}</p>
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



// import Link from "next/link";
// import NavBar from "../NavBar/page";

// export default function Page() {
//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
//       {/* Sticky Navbar */}
//       <div className="sticky top-0 z-50 shadow-md">
//         <NavBar />
//       </div>

//       {/* Hero Section */}
//       <section className="text-center py-16 px-6">
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
//           Our Premium Services
//         </h1>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Empowering businesses with cutting-edge technology, design, and
//           strategy to thrive in the digital era.
//         </p>
//         <Link
//           href="/"
//           className="inline-block mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform"
//         >
//           Explore More
//         </Link>
//       </section>

//       {/* Services Grid */}
//       <section className="container mx-auto px-6 pb-20">
//         <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
//           {[
//             {
//               title: "Web Development",
//               desc: "Responsive, modern websites built with Next.js, React, and Tailwind CSS.",
//             },
//             {
//               title: "Mobile Apps",
//               desc: "Cross-platform mobile applications with smooth performance and intuitive design.",
//             },
//             {
//               title: "Digital Marketing",
//               desc: "Grow online with SEO, social media campaigns, and targeted advertising.",
//             },
//             {
//               title: "Cloud Solutions",
//               desc: "Scalable and secure cloud infrastructure tailored to your business needs.",
//             },
//             {
//               title: "AI & Machine Learning",
//               desc: "Smart solutions powered by advanced AI models and ML algorithms.",
//             },
//             {
//               title: "Cybersecurity",
//               desc: "Protect your digital assets with enterprise-grade security solutions.",
//             },
//             {
//               title: "UI/UX Design",
//               desc: "Elegant, user-centered designs that enhance engagement and usability.",
//             },
//             {
//               title: "E-commerce Solutions",
//               desc: "Robust online stores with seamless shopping experiences.",
//             },
//             {
//               title: "Data Analytics",
//               desc: "Transform raw data into actionable insights for smarter decisions.",
//             },
//             {
//               title: "DevOps",
//               desc: "Streamlined workflows with CI/CD pipelines and automation.",
//             },
//             {
//               title: "Blockchain",
//               desc: "Decentralized solutions for secure transactions and innovation.",
//             },
//             {
//               title: "IoT",
//               desc: "Smart devices and connected ecosystems for modern living.",
//             },
//             {
//               title: "AR/VR",
//               desc: "Immersive experiences blending reality with digital innovation.",
//             },
//             {
//               title: "SEO Services",
//               desc: "Boost visibility and rankings with expert SEO strategies.",
//             },
//             {
//               title: "Custom Software Development",
//               desc: "Tailored solutions designed to meet unique business challenges.",
//             },
//           ].map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
//             >
//               <h2 className="text-xl font-bold text-indigo-700 mb-3">
//                 {service.title}
//               </h2>
//               <p className="text-gray-600">{service.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



// import next from "next";
// import Link from "next/link";
// import NavBar from "../NavBar/page";

// export default function page() {
//     return(
//         <div>
//           <div className=" sticky top-0 z-50">
//             <NavBar/>
//           </div>
//           <div className="m-4">
//             <a href="/" className="bg-red-600 text-white font-bold rounded-2xl text-center px-4 py-2">
//               X 
//             </a>
//             </div>
//         {/* Services Grid */}
//           <div className="grid gap-8 md:grid-cols-3">
//             {/* Service Card 1 */}
//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 Web Development
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             {/* Service Card 2 */}
//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 Mobile Apps
//               </h2>
//               <p className="text-gray-600">
//                 Our team creates cross-platform mobile applications with smooth
//                 performance and intuitive design.
//               </p>
//             </div>

//             {/* Service Card 3 */}
//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 Digital Marketing
//               </h2>
//               <p className="text-gray-600">
//                 We help businesses grow online with SEO, social media campaigns,
//                 and targeted advertising.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 Cloud Solutions
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 AI & Machine Learning
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 Cybersecurity
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 UI/UX Design
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 E-commerce Solutions
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 Data Analytics
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 DevOps
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 Blockchain
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 IOT
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 AR/VR
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 SEO Services
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//                 Custom Software Development
//               </h2>
//               <p className="text-gray-600">
//                 We build responsive, modern websites using the latest
//                 technologies like Next.js, React, and Tailwind CSS.
//               </p>
//             </div>
//           </div>
//           </div>
//   );
// }
