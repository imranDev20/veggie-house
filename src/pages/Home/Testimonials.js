import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/testimonials`;
    axios.get(url).then(
      (response) => {
        setTestimonials(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  console.log(testimonials);

  return (
    <section className="w-full my-20">
      <div className="container mx-auto px-20">
        <h2 className="mb-20 text-5xl text-center font-semibold text-neutral-600 font-['Playfair_Display'] relative after:content-[''] after:absolute after:w-[30%] after:h-[5px] after:-bottom-7 after:left-1/2 after:-translate-x-1/2 after:bg-green-600/50">
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
      </div>
    </section>
  );
};

export default Testimonials;
