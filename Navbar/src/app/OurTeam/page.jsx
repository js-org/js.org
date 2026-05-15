import React from 'react'
import Navbar from "../NavBar/page"

export const page = () => {
  return (
    <div>
        <div className=" sticky top-0 z-50">
                        <Navbar/>
                          </div>
                          <div className='bg-gradient-to-br from-blue-100 to-indigo-200 py-2 px-20'> 
                            <h1 className='bg-red-500 w-fit h-fit rounded-2xl font-bold text-center text-white'>
                           <a href='/'>X Back</a>
                            </h1>
                          </div>
              <main className="bg-gradient-to-br from-blue-100 to-indigo-200 min-h-screen py-12 px-6 font-sans">
                  {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
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
          </main>
    </div>
  )
}
export default page;