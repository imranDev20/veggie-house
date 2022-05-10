import React from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import useTestimonials from "../../hooks/useTestimonial";

const auth = getAuth(app);

const AddTestimonial = () => {
  const [user, loading, error] = useAuthState(auth);
  const { testimonials, setTestimonials } = useTestimonials();

  const handleAddTestimonial = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const text = event.target.text.value;
    const email = user?.email;

    const testimonial = {
      name,
      image,
      email,
      text,
    };

    const url = `${process.env.REACT_APP_SERVER_URL}/testimonials`;
    console.log(url);

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(testimonial),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Testimonial added successfully");
        event.target.reset();
        const newTestimonials = [...testimonials, testimonial];
        setTestimonials(newTestimonials);
      })
      .catch((error) => console.log("Error:", error));
  };
  return (
    <main className="container mx-auto px-20">
      <div className="max-w-lg mx-auto">
        <h2 className="mb-10 text-5xl text-center font-semibold text-neutral-600 font-['Playfair_Display'] relative after:content-[''] after:absolute after:w-[70%] after:h-[5px] after:-bottom-7 after:left-1/2 after:-translate-x-1/2 after:bg-green-600/50">
          Write Your Opinion
        </h2>

        <form
          onSubmit={handleAddTestimonial}
          action=""
          className=" flex flex-col items center my-20"
        >
          <input
            className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-full bg-neutral-100"
            type="text"
            placeholder="Name"
            name="name"
          />

          <input
            className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-full bg-neutral-100"
            type="text"
            placeholder="Image URL"
            name="image"
          />
          <textarea
            className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-full bg-neutral-100"
            name="text"
            id=""
            cols="15"
            rows="4"
          ></textarea>
          <input
            className="bg-green-600/30 w-full my-3 py-2 text-green-600 rounded cursor-pointer hover:bg-green-600 hover:text-white transition-colors font-semibold"
            type="submit"
            value="Add New Item"
          />
        </form>
      </div>
    </main>
  );
};

export default AddTestimonial;
