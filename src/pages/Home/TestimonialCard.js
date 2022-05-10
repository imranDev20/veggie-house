import React from "react";

const TestimonialCard = ({ name, email, text, image }) => {
  return (
    <div className=" p-5 rounded-lg flex flex-col items-center">
      <p className="text-neutral-500 text-center">{text}</p>

      <div className="w-28 h-28 rounded-full overflow-hidden my-5">
        <img className="h-full w-full object-cover" src={image} alt={name} />
      </div>
      <div className="flex items-center flex-col text-center">
        <h4 className="text-xl font-medium text-neutral-600">{name}</h4>
        <p className="text-orange-500 text-sm">{email}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
