import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <header className="text-gray-600 body-font flex items-center gap-4 mt-4 sm:mt-0" >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/Ddsgnr Library.png"
              alt="Ddsgnr logo"
              width={135}
              height={45}
              className="w-25 h-15"
            />          
          </a>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm md:text-base text-blod">
            <Link className="hover:text-black" href="/">
              Home
            </Link>
            <Link className="hover:text-black" href="/Courses">
              Courses
            </Link>
            <Link className="hover:text-black" href="/Services">
              Services
            </Link>
            <Link className="hover:text-black" href="/Achievement">
              Achievement
            </Link>
            <Link className="hover:text-black" href="/Aboutus">
              About Us
            </Link>
            <Link className="hover:text-black" href="/Testimonial">
              Testimonial
            </Link>
          </nav>

          {/* Buttons Section */}
          <div className="flex space-x-4">
            <button className="border border-black text-black px-4 py-2 rounded-md hover:bg-gray-100">
              Login
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}