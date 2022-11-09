import React from "react";
import Frame from "../../assets/images/frame.png";

const Aboutus = () => {
  return (
    <div>
      <section className="container">
        <div className="py-10 px-10">
          <div className="max-w-xs mb-6">
            <h1 className="text-headclr text-6xl font-bold">About US</h1>
          </div>
          <div className="max-w-lg">
            <p className="text-paraclr text-xl font-normal">
              Comfort is key and how you feel about your chair will affect how
              you feel and your mood.
            </p>
          </div>
        </div>
        <div className="flex justify-around flex-wrap">
          <div className="self-center">
            <div className="flex flex-wrap gap-10 mb-10">
              <div className="flex flex-col gap-y-2">
                <div className="max-w-[34px]">
                  <span className="text-btnclr text-6xl font-bold">1</span>
                </div>
                <div className="max-w-[114px]">
                  <h2 className="text-base font-bold ">Mission</h2>
                </div>
                <div className="max-w-[270px]">
                  <p className="text-paraclr text-xl">
                    It makes people at ease and feel like they want to open up.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="max-w-[34px]">
                  <span className="text-btnclr text-6xl font-bold">2</span>
                </div>
                <div className="max-w-[114px]">
                  <h2 className="text-base font-bold ">Vision</h2>
                </div>
                <div className="max-w-[270px]">
                  <p className="text-paraclr text-xl">
                    It makes people at ease and feel like they want to open up.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10">
              <div className="flex flex-col gap-y-2">
                <div className="max-w-[34px]">
                  <span className="text-btnclr text-6xl font-bold">3</span>
                </div>
                <div className="max-w-[114px]">
                  <h2 className="text-base font-bold ">Motivate</h2>
                </div>
                <div className="max-w-[270px]">
                  <p className="text-paraclr text-xl">
                    It makes people at ease and feel like they want to open up.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="max-w-[34px]">
                  <span className="text-btnclr text-6xl font-bold">4</span>
                </div>
                <div className="max-w-[114px]">
                  <h2 className="text-base font-bold ">Goal</h2>
                </div>
                <div className="max-w-[270px]">
                  <p className="text-paraclr text-xl">
                    It makes people at ease and feel like they want to open up.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={Frame} alt="" width="100%" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
