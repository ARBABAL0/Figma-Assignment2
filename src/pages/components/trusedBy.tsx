import React from "react";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start gap-20">
          <h3 className="text-xl font-bold text-gray-900">
            Trusted by 2000+ companies worldwide
          </h3>

          <div className="flex items-center">
            <Image
              src="/logo1.png"
              alt="Logo 1"
              width={123.8}
              height={38.52}
              className="h-12 grayscale hover:grayscale-0 transition-all duration-200"
            />
           
            <Image
              src="/logo 2.png"
              alt="Logo 1"
              width={123.8}
              height={38.52}
              className="h-12 grayscale hover:grayscale-0 transition-all duration-200"
            />
            <Image
              src="/Airbnb Logo1.png"
              alt="Logo 1"
              width={123.8}
              height={38.52}
              className="h-12 grayscale hover:grayscale-0 transition-all duration-200"
            />
             <Image
              src="/Airbnb Logo2.png"
              alt="Logo 1"
              width={123.8}
              height={38.52}
              className="h-12 grayscale hover:grayscale-0 transition-all duration-200"
            />
              <Image
              src="/Airbnb Logo3.png"
              alt="Logo 1"
              width={123.8}
              height={38.52}
              className="h-12 grayscale hover:grayscale-0 transition-all duration-200"
            />
              <Image
              src="/Airbnb Logo4.png"
              alt="Logo 1"
              width={123.8}
              height={38.52}
              className="h-12 grayscale hover:grayscale-0 transition-all duration-200"
            />
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;