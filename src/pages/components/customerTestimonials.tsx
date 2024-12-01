import React from "react";
import Image from "next/image";

const testimonialsData = [
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "/",
    name: "james nduku",
    role: "softwere developer.",
  },
  {
    rating: 5,
    text: "Great experience, will use again.",
    image: "/team1.png",
    name: "Erick kipkemboi",
    role: "Scrum Master",
  },
  {
    rating: 5,
    text: "Outstanding support and quality.",
    image: "/team6.png",
    name: "Stephen Kerubo",
    role: "UI/UX Desiner",
  },
];

// Helper function to render stars
const renderStars = (rating: number) => {
  return [...Array(5)].map((_, i) => (
    <span
      key={i}
      className={`inline-block w-5 h-5 ${
        i < rating ? "text-yellow-500" : "text-gray-300"
      }`}
    >
      ★
    </span>
  ));
};

const Testimonials = () => {
  return (
    <section
      className="bg-gray-100 py-12"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-3xl font-bold text-gray-900 text-center"
        >
          Customer Testimonials
        </h2>
        <p className="text-gray-900 text-center mt-2">
          See what our customers are saying about us.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-2">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-900 italic mb-4">{""}</p>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial}'s profile picture`}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-900">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
