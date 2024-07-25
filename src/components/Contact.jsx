import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const displayMessage = () => {
    alert("Contact request sent! Our team will connect with you soon");
  };

  return (
    <>
      <div className="block sm:inline-block sm:w-[75%]  ">
        <div className="sm:pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-2xl rounded-lg shadow-2xl">
            CONTACT US
          </div>

          <div className="bg-white rounded-lg px-8 py-8 border-[1px] border-gray-300  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            {/* Contact us */}
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="sm:col-span-1 border-2 border-gray-300 rounded-lg p-4 text-center ">
                <div className="text-center text-3xl pb-4">
                  {" "}
                  <p className="text-xl font-semibold">Publisher Details</p>
                </div>
                <hr />
                <p className="pt-4 text-lg pb-6">
                  <span className="font-semibold">Dhiraj D. Shirbhate</span>
                  <br />
                  c/o D S Shirbhate, Plot no: 9, Dhanwantari Society, Kale
                  layout, Arni Road, inside Ranapratap gate,
                  <br /> Yavatmal-445001
                  <br />
                  Yavatmal, Maharashtra
                </p>
              </div>
              <div className="sm:col-span-1 border-2 border-gray-300 rounded-lg p-4 text-center ">
                <div className="text-center text-3xl pb-4">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <hr />
                <p className="pt-4 text-lg">irjtae@gmail.com</p>
              </div>
              <div className="sm:col-span-1 border-2 border-gray-300 rounded-lg p-4 text-center ">
                <div className="text-center text-3xl pb-4">
                  {" "}
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <hr />
                <p className="pt-4 text-lg">+91 98342 35843</p>
                <p className=" text-lg">(Whatsapp or SMS on this number)</p>
              </div>
            </div>

            {/* Contact request */}
            <div className="pt-8">
              <h1 className="text-2xl font-semibold pb-4">
                Send a Contact Request
              </h1>
              <hr />
              <form
                id="form"
                onSubmit={displayMessage}
                className="text-lg pt-6 grid gap-2"
              >
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Name</p>
                  </label>
                  <input
                    type="text"
                    className="w-[60%] sm:w-[30%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400"
                    required
                  />
                </div>
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Email Id</p>
                  </label>
                  <input
                    type="text"
                    className="w-[60%] sm:w-[30%]  h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400"
                    required
                  />
                </div>
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Mobile Number</p>
                  </label>
                  <input
                    type="number"
                    className="w-[60%] sm:w-[30%]  h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400"
                    required
                  />
                </div>
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Subject</p>
                  </label>
                  <input
                    type="text"
                    className="w-[60%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400"
                    required
                  />
                </div>
                <div className="flex">
                  <p className="inline-block w-[30%]">Contact Message</p>

                  <textarea
                    type="text"
                    className="w-[60%] h-[80px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400"
                    required
                  />
                </div>
                <div className=" text-center">
                  <button
                    type="submit"
                    className="py-1 px-4 w-[100px] hover:scale-110 transition duration-500 bg-blue-700 text-lg text-white rounded-lg mt-4
                "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
