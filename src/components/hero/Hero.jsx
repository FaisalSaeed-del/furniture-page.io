import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div>
      <section className="container">
        <div className="">
          <div className="max-w-1/2 flex m-auto mb-10 hero-star">
            <h1 className="text-headclr text-center text-lg font-bold">
              Amazing furniture for your home
            </h1>
          </div>
          <div className="max-w-3xl flex m-auto mb-24 ">
            <p className="text-center text-paraclr text-xl font-normal">
              We think the chair is the most important piece of furniture in
              your home. Because if you love the chair you are sitting in
              chances are you will love the rest of the room.
            </p>
          </div>
          <div className="hero-bg  bg-no-repeat bg-cover bg-center  relative">
            <div className="flex justify-between p-4 items-center bg-white max-w-2xl mx-auto h-20 absolute left-0 right-0 -top-10  ">
              <input
                className="w-full outline-none "
                type="text"
                placeholder="Search Your Product"
              />
              <div className="max-w-sm text-paraclr">
                <CiSearch />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
