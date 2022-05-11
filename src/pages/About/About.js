import React from "react";

const About = () => {
  return (
    <main className="my-10">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex items-center mt-20">
          <div className="w-1/2 rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="w-1/2 px-7">
            <h2 className="font-['Playfair_Display'] text-5xl font-semibold text-neutral-600">
              About Us
            </h2>
            <p className="text-neutral-500 my-5">
              The Veggie House has Everyday Low Prices across vegetables,
              Homeware, Toys, Groceries and much more. Shop online now for great
              value. Making sales for your business is only half the battle;
              efficient warehouse management is the other half.
            </p>
            <p className="text-neutral-500 my-5">
              It’s crucial to have a strong warehousing strategy to ensure
              customer satisfaction, including the use of warehouse inventory
              management software. ERP software can also help improve the
              warehouse management process (see benefits of ERP).
            </p>
          </div>
        </div>
      </div>

      <div className="my-10 py-20 bg-neutral-100">
        <div className="container mx-auto px-5 lg:px-20">
          <h2 className="font-['Playfair_Display'] text-5xl font-semibold text-neutral-600 text-center">
            Services
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
            <div className="shadow-lg bg-white p-5 text-center rounded">
              <h3 className="font-['Playfair_Display'] font-medium text-2xl text-neutral-600">
                Manage Inventory
              </h3>
              <p className="text-neutral-500 mt-5">
                Manage your inventory, add new vegetables into your inventory,
                do anything you want. We have implemented industry standard
                features in our website which makes your experience smooth.
              </p>
            </div>
            <div className="shadow-lg bg-white p-5 text-center rounded">
              <h3 className="font-['Playfair_Display'] font-medium text-2xl text-neutral-600">
                Browse Vegetables
              </h3>
              <p className="text-neutral-500 mt-5">
                Millions of vegetables with a million daily shipments. In here
                you will never run out of your favourite vegetables. Feel free
                to browse through the list of vegetables.
              </p>
            </div>
            <div className="shadow-lg bg-white p-5 text-center rounded">
              <h3 className="font-['Playfair_Display'] font-medium text-2xl text-neutral-600">
                See Your Vegetables
              </h3>
              <p className="text-neutral-500 mt-5">
                Create your own personal account. Add new vegetables to your
                account, delete them or do whatever it is that you wish, go take
                a nap and when you come back still get your list of vegetables
                unaltered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
