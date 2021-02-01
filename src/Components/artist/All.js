import React from "react";

const All = () => {
  return (
    <div className="flex flex-col">
      <div className="w-auto flex flex-row h-full  m-8 border-red-500 shadow-lg hover:shadow-2xl  ">
        <div className="h-4/5 p-8 ">
          <h1 className="text-red-600 font-bold text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            voluptas.
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id non
            fuga a!
          </p>
        </div>

        <div className="img w-6/12 h5">
          <img
            className="h-full w-full "
            src="/images/music1.jpg"
            alt="artist images"
          />
        </div>
      </div>
    </div>
  );
};

export default All;
