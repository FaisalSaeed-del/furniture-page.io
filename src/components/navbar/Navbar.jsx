import React from "react";
import Logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div>
      <section className="container">
        <nav className="flex justify-around flex-wrap">
          <div className="self-center cursor-pointer">
            <img src={Logo} alt="" />
          </div>
          <ul className="flex gap-20 text-base font-normal self-center">
            <li className="hover:underline decoration-undrclr underline-offset-8  ">
              <a href="">Home</a>
            </li>
            <li className="hover:underline decoration-undrclr underline-offset-8">
              <a href="">About</a>
            </li>
            <li className="hover:underline decoration-undrclr underline-offset-8">
              <a href="">Product</a>
            </li>
            <li className="hover:underline decoration-undrclr underline-offset-8">
              <a href="">Testimonial</a>
            </li>
          </ul>
          <div className="flex flex-wrap  gap-16">
            <ul className="text-base font-normal self-center">
              <li className="hover:underline decoration-undrclr underline-offset-8">
                <a href="">Contact</a>
              </li>
            </ul>
            <div className="bg-btnclr py-5 px-16 cursor-pointer">
              <button className="text-white text-base font-normal">
                Buy Online
              </button>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
