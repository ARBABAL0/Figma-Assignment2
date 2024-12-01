
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-gray-100 px-8 py-4 border-b">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Contact Info */}
        <p className="text-sm text-gray-700 flex flex-wrap items-center gap-2 text-center sm:text-left">
          <span>Phone: 956 742 455 678</span>
          <span className="hidden sm:inline border-l border-gray-300 h-4 mx-2"></span>
          <span>Email: info@ddsgnr.com</span>
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <Image
            src="/Facebook.png"
            alt="Visit us on Facebook"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/Instagram.png"
            alt="Follow us on Instagram"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/Twitter.png"
            alt="Follow us on Twitter"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/LinkedIn.png"
            alt="Connect with us on LinkedIn"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
