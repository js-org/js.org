export default function Grid() {
  return (
    <section className="relative py-16 px-6 rounded-2xl overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-white to-indigo-500 animate-gradient-x"></div>
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Our Services</h2>
        <p className="text-lg text-blue-900 mb-12">
          Explore some of the professional services we proudly deliver.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Example Service Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-500 rounded-xl transform group-hover:scale-105 transition duration-300"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h3>
              <p className="text-sm uppercase text-indigo-500 font-medium mb-3">Professional Solutions</p>
              <p className="text-gray-600">
                Build modern, scalable applications with responsive design and seamless user experience.
              </p>
            </div>
          </div>
          {/* Add other service cards here... */}
          <div className="relative group h-fit">
            <div className="absolute inset-0 bg-indigo-500 rounded-xl transform group-hover:scale-105 transition duration-300"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Marketing</h3>
              <p className="text-sm uppercase text-indigo-500 font-medium mb-3">Growth Strategies</p>
              <p className="text-gray-600">
                 Enhance your brand presence with data-driven campaigns and creative storytelling.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-500 rounded-xl transform group-hover:scale-105 transition duration-300"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Audit</h3>
              <p className="text-sm uppercase text-indigo-500 font-medium mb-3">Quality Assurance</p>
              <p className="text-gray-600">
                 Comprehensive reviews to ensure your projects meet industry standards and best practices.
              </p>
            </div>
          </div>

          <div className="relative group h-fit">
            <div className="absolute inset-0 bg-indigo-500 rounded-xl transform group-hover:scale-105 transition duration-300"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cloud Solutions</h3>
              <p className="text-sm uppercase text-indigo-500 font-medium mb-3">Scalable Infrastructure</p>
              <p className="text-gray-600">
                Secure and efficient cloud-based systems tailored to your business needs.
                </p>
            </div>
          </div>

          <div className="relative group h-fit">
            <div className="absolute inset-0 bg-indigo-500 rounded-xl transform group-hover:scale-105 transition duration-300"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bot/Script Development</h3>
              <p className="text-sm uppercase text-indigo-500 font-medium mb-3">Automation Tools</p>
              <p className="text-gray-600">
                Custom bots and scripts to streamline workflows and boost productivity.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-500 rounded-xl transform group-hover:scale-105 transition duration-300"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-500">
              <img src="ServiceLogo.png"></img>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



// export default function Grid() {
//   return (
//     <section className="bg-gradient-to-r from-purple-300 to-purple-600 py-16 px-6 rounded-2xl">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
//         <p className="text-lg text-gray-700 mb-12">
//           Explore some of the professional services we proudly deliver.
//         </p>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {/* Service Card */}
//           <div className="relative group">
//             <div className="absolute inset-0 bg-indigo-500 rounded-xl transform group-hover:scale-105 transition duration-300"></div>
//             <div className="relative bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-500">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h3>
//               <p className="text-sm uppercase text-indigo-500 font-medium mb-3">Professional Solutions</p>
//               <p className="text-gray-600">
//                 Build modern, scalable applications with responsive design and seamless user experience.
//               </p>
//             </div>
//           </div>

//           <div className="relative group">
//             <div className="absolute inset-0 bg-purple-500 rounded-xl transform group-hover:scale-105 transition duration-300"></div>
//             <div className="relative bg-white rounded-xl shadow-lg p-6 border-2 border-purple-500">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Marketing</h3>
//               <p className="text-sm uppercase text-purple-500 font-medium mb-3">Growth Strategies</p>
//               <p className="text-gray-600">
//                 Enhance your brand presence with data-driven campaigns and creative storytelling.
//               </p>
//             </div>
//           </div>

//           <div className="relative group">
//             <div className="absolute inset-0 bg-blue-400 rounded-xl transform group-hover:scale-105 transition duration-300"></div>
//             <div className="relative bg-white rounded-xl shadow-lg p-6 border-2 border-blue-400">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Audit</h3>
//               <p className="text-sm uppercase text-blue-400 font-medium mb-3">Quality Assurance</p>
//               <p className="text-gray-600">
//                 Comprehensive reviews to ensure your projects meet industry standards and best practices.
//               </p>
//             </div>
//           </div>

//           <div className="relative group">
//             <div className="absolute inset-0 bg-yellow-400 rounded-xl transform group-hover:scale-105 transition duration-300"></div>
//             <div className="relative bg-white rounded-xl shadow-lg p-6 border-2 border-yellow-400">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Cloud Solutions</h3>
//               <p className="text-sm uppercase text-yellow-400 font-medium mb-3">Scalable Infrastructure</p>
//               <p className="text-gray-600">
//                 Secure and efficient cloud-based systems tailored to your business needs.
//               </p>
//             </div>
//           </div>

//           <div className="relative group">
//             <div className="absolute inset-0 bg-green-500 rounded-xl transform group-hover:scale-105 transition duration-300"></div>
//             <div className="relative bg-white rounded-xl shadow-lg p-6 border-2 border-green-500">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Bot/Script Development</h3>
//               <p className="text-sm uppercase text-green-500 font-medium mb-3">Automation Tools</p>
//               <p className="text-gray-600">
//                 Custom bots and scripts to streamline workflows and boost productivity.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import next from "next";

// export default function grid(){
//     return(
//         <div>
//         <div className="bg-gradient-to-r from-purple-300 to-purple-600 relative rounded-2xl"> 
//         <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
//     <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
//     <p class="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
//     <div class="w-full">
//         <div class="flex flex-col w-full mb-10 sm:flex-row">
//             <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
//                 <div class="relative h-full ml-0 mr-0 sm:mr-10">
//                     <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
//                     <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
//                         <div class="flex items-center -mt-1">
//                             <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Web Development</h3>
//                         </div>
//                         <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
//                         <p class="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
//                             decentralized network that combines a smart contract and a frontend user interface.</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="w-full sm:w-1/2">
//                 <div class="relative h-full ml-0 md:mr-10">
//                     <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
//                     <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
//                         <div class="flex items-center -mt-1">
//                             <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Digital Marketing</h3>
//                         </div>
//                         <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
//                         <p class="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
//                             focus on understanding and analyzing data to provide a semantic web.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="flex flex-col w-full mb-5 sm:flex-row">
//             <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
//                 <div class="relative h-full ml-0 mr-0 sm:mr-10">
//                     <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
//                     <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
//                         <div class="flex items-center -mt-1">
//                             <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
//                         </div>
//                         <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
//                         <p class="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
//                             to assess the extent up to which project management standards are being upheld.</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
//                 <div class="relative h-full ml-0 mr-0 sm:mr-10">
//                     <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
//                     <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
//                         <div class="flex items-center -mt-1">
//                             <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Cloud Solutions</h3>
//                         </div>
//                         <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
//                         <p class="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
//                             defenses and exploiting weaknesses in a computer system or network.</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="w-full sm:w-1/2">
//                 <div class="relative h-full ml-0 md:mr-10">
//                     <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
//                     <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
//                         <div class="flex items-center -mt-1">
//                             <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
//                         </div>
//                         <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
//                         <p class="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
//                             that eliminate a large amount of manual work and accelerate the development process.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// </div>
//     )
// };