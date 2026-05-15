// components/Navbar.jsx
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaYoutube } from "react-icons/fa";

export default function page() {
  return (
    <div className=" sticky top-0 z-50">
    <header className="bg-gray-100 shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-20 h-10 rounded-full bg-gray-300">
            <span className="text-blue-600 font-bold text-xl"><a href="/"><img src="/logo.png" alt="Zuptrix Logo"/></a></span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text animate-bounce">
            <a href="/">
            Zuptrix   
            </a>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4 font-bold h-fit w-fit md:h-fit md:w-fit">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <Link href="/ServicePage" className="text-blue-600 hover:text-blue-800">
            Services
          </Link>
                    <Link href="/OurTeam" className="text-blue-600 hover:text-blue-800">
            Our Team
          </Link>
          <a href="https://forms.gle/7WbyPzyJDmAkfJz59" className="text-blue-600 hover:text-blue-800">Career</a>
          <Link href="/AboutPage" className="text-blue-600 hover:text-blue-800">
            About Us
          </Link>
          <Link href="/ContactPage" className="text-blue-600 hover:text-blue-800">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-1 md:h-fit md:w-fit sm:h-fit sm:w-fit">
          <a href="https://www.facebook.com/share/18v8hYDiWf/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.instagram.com/zuptrix_solutions/?utm_source=qr&r=nametag" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            <FaInstagram size={20} />
          </a>
          <a href="https://wa.me/+9779715010101" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
            <FaWhatsapp size={20} />
          </a>
          <a href="mailto:infozuptrix@gmail.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
            <FaEnvelope size={20} />
          </a>
          <a href="https://www.youtube.com/@ZuptrixSolutions" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
            <FaYoutube size={23} />
          </a>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden bg-blue-100 flex justify-around py-2 font-bold">
        <Link href="/" className="text-blue-600">Home</Link>
        <Link href="/ServicePage" className="text-blue-600">Services</Link>
        <Link href="https://forms.gle/7WbyPzyJDmAkfJz59" className="text-blue-600">Career</Link>
        <Link href="/AboutPage" className="text-blue-600">About</Link>
        <Link href="/ContactPage" className="text-blue-600">Contact</Link>
      </div>
    </header>
    </div>
  );
}
























// import react from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//     return(
//         <div>
//     <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
//       <div className="flex items-center">
//         <Link href="/">
//           <Image
//             src="/ZLogo.png"
//             alt="Zuptrix Logo"
//             width={120}
//             height={40}
//             priority
//           />
//         </Link>
//       </div>
//       <div className="flex space-x-6 font-bold">
//         <Link href="www.facebook.com" className="text-blue-400">
//           Facebook
//         </Link>
//         <Link href="/services" className="text-orange-300">
//           Instagram
//         </Link>
//         <Link href="/contact" className="text-green-400">
//           Contact
//         </Link>
//       </div>
//     </nav>
//             <nav className="bg-blue-200 p-4 rounded-2xl">
//         <ul className="flex space-x-6 justify-center font-bold">
//     <li>
//       <a href="/" className="text-black hover:text-blue-600 transition">
//         Home
//       </a>
//     </li>
//     <li>
//       <a href="/ServicePage" className="text-black hover:text-blue-600 transition">
//         Our Services
//       </a>
//     </li>
//     <li>
//       <a href="/BlogPage" className="text-black hover:text-blue-600 transition">
//         Blog
//       </a>
//     </li>
//     <li>
//       <a href="/AboutPage" className="text-black hover:text-blue-600 transition">
//         About Us
//       </a>
//     </li>
//     <li>
//       <a href="/ContactPage" className="text-black hover:text-blue-600 transition">
//         Contact
//       </a>
//     </li>
//   </ul>
// </nav>
//         </div>
//     )
// };