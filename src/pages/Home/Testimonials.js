import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import useTestimonials from "../../hooks/useTestimonial";

// Import Swiper styles
import "swiper/css";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const { testimonials } = useTestimonials();

  return (
    <section className="w-full my-10 py-10 bg-neutral-50">
      <div className="container mx-auto px-20">
        <h2 className="mb-10 text-5xl text-center font-semibold text-neutral-600 font-['Playfair_Display'] relative after:content-[''] after:absolute after:w-[30%] after:h-[5px] after:-bottom-7 after:left-1/2 after:-translate-x-1/2 after:bg-green-600/50">
          Testimonials
        </h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id} className="py-10">
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                email={testimonial.email}
                text={testimonial.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center">
          <Link
            className="bg-orange-500/20 px-5 py-3 text-orange-500 font-semibold rounded hover:bg-orange-500 hover:text-white transition-colors "
            to="/add-testimonial"
          >
            Add Your Opinion
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
