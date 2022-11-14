import React from "react";
import Person from "../../assets/images/person.png";
import Quote from "../../assets/images/quote.svg";

const Review = () => {
  return (
    <div className="bg-headclr">
      <section className="container">
        <div className="max-w-[970px] p-12 ">
          <h1 className="text-white text-6xl font-bold">
            What do Customers Say...
          </h1>
        </div>
        <div className="flex justify-center gap-32 flex-wrap p-10">
          <div>
            <img src={Person} alt="" />
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <img src={Quote} alt="" />
            </div>
            <div className="max-w-[257px]">
              <h1 className="text-white text-4xl font-bold">Amazing service</h1>
            </div>
            <div className="max-w-[470px]">
              <p className="text-paraclr text-xl font-normal">
                Since the online marketplace can be a scary place, the presence
                of customer reviews on an online store helps establish
                authenticity, confidence, and trust among shoppers.
              </p>
            </div>
            <div className="max-w-[117px]">
              <span className="text-undrclr text-xl font-bold">
                Wade Warres
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
