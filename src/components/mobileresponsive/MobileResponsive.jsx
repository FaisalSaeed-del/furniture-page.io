import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/images/logo.svg";

const MobileResponsive = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <section className="container">
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <nav className="flex flex-col gap-5 py-5">
            <div className="self-center cursor-pointer">
              <img src={Logo} alt="" />
            </div>
            <ul className="flex flex-col items-center gap-10">
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
            <div className="flex items-center flex-col gap-5">
              <ul className="text-base font-normal self-center">
                <li className="hover:underline decoration-undrclr underline-offset-8">
                  <a href="">Contact</a>
                </li>
              </ul>
              <div className="bg-btnclr py-3 px-3 cursor-pointer">
                <button className="text-white text-base font-normal">
                  Buy Online
                </button>
              </div>
            </div>
          </nav>
        </Drawer>
        <button className="text-btnclr" onClick={toggleDrawer}>
          <GiHamburgerMenu />
        </button>
      </section>
    </div>
  );
};

export default MobileResponsive;
