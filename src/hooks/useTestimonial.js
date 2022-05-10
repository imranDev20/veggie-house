import { useEffect, useState, useReducer } from "react";
import axios from "axios";

const useTestimonials = () => {
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

  return { testimonials, setTestimonials };
};

export default useTestimonials;
