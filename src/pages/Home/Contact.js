import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto px-5 lg:px-20 my-20">
        <h2 className="text-4xl lg:text-5xl mb-16 text-center font-semibold text-neutral-600 font-['Playfair_Display'] relative after:content-[''] after:absolute after:w-[20%] after:h-[5px] after:-bottom-7 after:left-1/2 after:-translate-x-1/2 after:bg-green-600/50">
          Contact
        </h2>
        <div className="max-w-xl mx-auto">
          <form action="">
            <div className="flex justify-between">
              <input
                className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-[49%] bg-neutral-100"
                type="text"
                placeholder="First Name"
              />
              <input
                className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-[49%] bg-neutral-100"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex justify-between">
              <input
                className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-[49%] bg-neutral-100"
                type="email"
                placeholder="email"
              />
              <input
                className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-[49%] bg-neutral-100"
                type="phone"
                placeholder="phone"
              />
            </div>
            <textarea
              className="my-1 py-2 px-4 rounded outline-none focus:ring-2 focus:ring-orange-500/30 w-full bg-neutral-100"
              name=""
              id=""
              cols="30"
              rows="7"
            ></textarea>
            <input
              className="bg-green-600/30 w-full my-3 py-2 text-green-600 rounded cursor-pointer hover:bg-green-600 hover:text-white transition-colors font-semibold"
              type="submit"
              value="Add New Item"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
