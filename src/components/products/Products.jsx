import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Table from "../../assets/images/table.png";
import Stool from "../../assets/images/stool.png";
import Black from "../../assets/images/black.png";
import Lamp from "../../assets/images/lamp.png";
import Chair1 from "../../assets/images/chair1.png";
import Chair2 from "../../assets/images/chair2.png";
import Bedside from "../../assets/images/bedside.png";
import Sofa from "../../assets/images/sofa.png";

const Products = () => {
  return (
    <div>
      <section className="container">
        <div>
          <div className="max-w-6xl flex justify-center pt-24">
            <h1 className="text-headclr text-6xl font-bold">Products</h1>
          </div>
        </div>
        <div className="py-10">
          <ul className="flex justify-center gap-20 flex-wrap text-xl text-paraclr">
            <li className="hover:underline decoration-undrclr underline-offset-8 hover:text-undrclr ">
              <a href="">All</a>
            </li>
            <li className="hover:underline decoration-undrclr underline-offset-8 hover:text-undrclr  ">
              <a href="">Chair</a>
            </li>
            <li className="hover:underline decoration-undrclr underline-offset-8 hover:text-undrclr  ">
              <a href="">Table</a>
            </li>
            <li className="hover:underline decoration-undrclr underline-offset-8 hover:text-undrclr  ">
              <a href="">Sofa</a>
            </li>
            <li className="hover:underline decoration-undrclr underline-offset-8 hover:text-undrclr  ">
              <a href="">Bed</a>
            </li>
            <li className="hover:underline decoration-undrclr underline-offset-8 hover:text-undrclr  ">
              <a href="">Cabinet</a>
            </li>
          </ul>
        </div>
        {/* Items Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-40 px-20 ">
          <div className=" bg-footerclr max-w-xs ">
            <div className="py-3 px-7">
              <img src={Table} alt="" />
            </div>
            <div className="px-5 py-3">
              <h2 className="text-headclr text-2xl font-bold">Tea Table</h2>
            </div>
            <div className="flex self-center justify-between flex-wrap p-4">
              <div>
                <span className="text-base text-headclr font-normal">
                  <a href="">$150</a>
                </span>
              </div>
              <div>
                <span>
                  <a href="" className="text-undrclr text-xl">
                    <AiOutlineArrowRight />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-footerclr max-w-xs ">
            <div className="py-3 px-7">
              <img src={Bedside} alt="" />
            </div>
            <div className="px-5 py-3">
              <h2 className="text-headclr text-2xl font-bold">Tea Table</h2>
            </div>
            <div className="flex self-center justify-between flex-wrap p-4">
              <div>
                <span className="text-base text-headclr font-normal">
                  <a href="">$150</a>
                </span>
              </div>
              <div>
                <span>
                  <a href="" className="text-undrclr text-xl">
                    <AiOutlineArrowRight />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-footerclr max-w-xs ">
            <div className="py-3 px-7">
              <img src={Black} alt="" />
            </div>
            <div className="px-5 py-3">
              <h2 className="text-headclr text-2xl font-bold">Tea Table</h2>
            </div>
            <div className="flex self-center justify-between flex-wrap p-4">
              <div>
                <span className="text-base text-headclr font-normal">
                  <a href="">$150</a>
                </span>
              </div>
              <div>
                <span>
                  <a href="" className="text-undrclr text-xl">
                    <AiOutlineArrowRight />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-footerclr max-w-xs ">
            <div className="py-3 px-7">
              <img src={Lamp} alt="" />
            </div>
            <div className="px-5 py-3">
              <h2 className="text-headclr text-2xl font-bold">Tea Table</h2>
            </div>
            <div className="flex self-center justify-between flex-wrap p-4">
              <div>
                <span className="text-base text-headclr font-normal">
                  <a href="">$150</a>
                </span>
              </div>
              <div>
                <span>
                  <a href="" className="text-undrclr text-xl">
                    <AiOutlineArrowRight />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-40 px-20 ">
          <div className=" bg-footerclr max-w-xs ">
            <div className="py-3 px-7">
              <img src={Sofa} alt="" />
            </div>
            <div className="px-5 py-3">
              <h2 className="text-headclr text-2xl font-bold">Tea Table</h2>
            </div>
            <div className="flex self-center justify-between flex-wrap p-4">
              <div>
                <span className="text-base text-headclr font-normal">
                  <a href="">$150</a>
                </span>
              </div>
              <div>
                <span>
                  <a href="" className="text-undrclr text-xl">
                    <AiOutlineArrowRight />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-footerclr max-w-xs ">
            <div className="py-3 px-7">
              <img src={Chair1} alt="" />
            </div>
            <div className="px-5 py-3">
              <h2 className="text-headclr text-2xl font-bold">Tea Table</h2>
            </div>
            <div className="flex self-center justify-between flex-wrap p-4">
              <div>
                <span className="text-base text-headclr font-normal">
                  <a href="">$150</a>
                </span>
              </div>
              <div>
                <span>
                  <a href="" className="text-undrclr text-xl">
                    <AiOutlineArrowRight />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-footerclr max-w-xs ">
            <div className="py-3 px-7">
              <img src={Chair2} alt="" />
            </div>
            <div className="px-5 py-3">
              <h2 className="text-headclr text-2xl font-bold">Tea Table</h2>
            </div>
            <div className="flex self-center justify-between flex-wrap p-4">
              <div>
                <span className="text-base text-headclr font-normal">
                  <a href="">$150</a>
                </span>
              </div>
              <div>
                <span>
                  <a href="" className="text-undrclr text-xl">
                    <AiOutlineArrowRight />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-footerclr max-w-xs ">
            <div className="py-3 px-7">
              <img src={Stool} alt="" />
            </div>
            <div className="px-5 py-3">
              <h2 className="text-headclr text-2xl font-bold">Tea Table</h2>
            </div>
            <div className="flex self-center justify-between flex-wrap p-4">
              <div>
                <span className="text-base text-headclr font-normal">
                  <a href="">$150</a>
                </span>
              </div>
              <div>
                <span>
                  <a href="" className="text-undrclr text-xl">
                    <AiOutlineArrowRight />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
