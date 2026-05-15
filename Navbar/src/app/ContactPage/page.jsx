import next from "next";
import Link from "next/link";
import NavBar from "../NavBar/page";
import FooterPage from "../FooterPage/page"

export default function page() {
    return(
        <div>
          <div className=" sticky top-0 z-50">
            <NavBar/>
          </div>
      <main className="bg-gray-50 min-h-screen py-12 px-6">
        <div className="container mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
            Contact Us
          </h1>

          {/* Contact Info + Form */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-blue-600">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                Have questions or want to work with us? Reach out and we’ll get
                back to you as soon as possible.
              </p>

              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-blue-600">Address:</span>{" "}
                  Janakpur, Nepal
                </p>
                <p>
                  <span className="font-semibold text-blue-600">Phone:</span>{" "}
                  +977 9715010101
                </p>
                <p>
                  <span className="font-semibold text-blue-600">Email:</span>{" "}
                  infozuptrix@gmail.com
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <a href="mailto:infozuptrix@gmail.com" target="_blank" rel="noopener noreferrer">
                Send Message
                </a>
              </button>
            </form>
          </div>
        </div>
      </main>
      <div>
        <FooterPage/>
      </div>
      </div>
      );
};