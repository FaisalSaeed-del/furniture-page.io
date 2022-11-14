import React from "react";
import Group from "../../assets/images/contact.png";

const Contact = () => {
  return (
    <div>
      <section className="container">
        <div className="flex justify-around flex-wrap pt-24 mb-8">
          <div>
            <img src={Group} alt="" width="100%" />
          </div>
          <div>
            <div className="mb-8 max-w-xs">
              <h1 className="text-6xl text-headclr font-bold">Contact Us</h1>
            </div>
            <div className="mb-8 max-w-xs">
              <span className="text-paraclr text-xl font-normal">
                Our team would love to hear from you!
              </span>
            </div>
            <form>
              <div className="flex gap-5 mb-8 flex-wrap">
                <div className="">
                  <input
                    type="text"
                    class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleFormControlInput1"
                    placeholder="Example label"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleFormControlInput1"
                    placeholder="Example label"
                  />
                </div>
              </div>
              <div className="mb-8">
                <input
                  type="text"
                  class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlInput1"
                  placeholder="Example label"
                />
              </div>
              <div className="mb-8">
                <textarea
                  class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-paraclr
        bg-white bg-clip-padding
        border border-solid border-headclr
        rounded
        
      "
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div>
                <div class="flex space-x-2 justify-center">
                  <button
                    type="button"
                    class="inline-block px-20 py-2.5 bg-undrclr text-white font-medium text-xl leading-tight uppercase rounded shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
