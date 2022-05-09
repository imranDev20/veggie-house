import React from "react";

const InventorySkeleton = () => {
  return (
    <div className="shadow-lg rounded-lg min-h-[656px]">
      {/* image */}
      <div className="w-full h-72 bg-neutral-200"></div>
      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* title */}
          <div className="my-2 h-[32px] w-[70%] bg-neutral-200 rounded-full"></div>
          {/* price */}
          <p className="h-[32px] w-[40%] bg-neutral-200 rounded-full"></p>
          <div className="my-3">
            {[0, 1, 2, 3, 4].map((n) => (
              <p key={n} className="my-3 bg-neutral-200 h-3 rounded-full"></p>
            ))}
          </div>
          <div className="flex justify-between my-2">
            <p className="w-[48%] bg-neutral-200 h-3 rounded-full"></p>
            <p className="w-[48%] bg-neutral-200 h-3 rounded-full"></p>
          </div>
        </div>
        <div className="inline-block mt-5 rounded py-2 bg-neutral-200 h-[38px]"></div>
      </div>
    </div>
  );
};

export default InventorySkeleton;
