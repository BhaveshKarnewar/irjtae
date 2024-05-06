import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function EditorialBoard() {
  const [icon, setIcon] = useState(<FontAwesomeIcon icon={faLinkedin} />);
  return (
    <>
      <div className="block sm:inline-block sm:w-[75%] ">
        <div className="sm:pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-2xl rounded-lg shadow-2xl">
            Welcome to IRJTAE
          </div>

          <div className="bg-white rounded-lg px-6 py-8 border-[1px] border-gray-300 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <h2 className="text-xl font-semibold pb-4">EDITORIAL BOARD</h2>

            <h2 className=" pb-2 text-xl font-semibold text-blue-700">
              Ingenious Research Journal for Technological Advancements in
              Engineering
            </h2>
            <hr />
            <h2 className="text-xl pt-4 font-semibold ">Editor in Cheif</h2>

            {/* EDITOR in cheif */}

            <div className=" py-4 grid gap-6 pl-8 ">
              <div>
                <div className="w-full flex  justify-between gap-12 items-center pl-[10%]">
                  <img
                    className="h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] rounded-full border-[2px] border-black "
                    src="Images/Dhiraj_sir2.jpeg"
                    alt=""
                  />
                  <div className="text-left w-[70%]">
                    <h1 className="text-xl pb-2">Prof. Dhiraj D. Shirbhate</h1>
                    <h1 className="text-[16px]">
                      Dept of Computer Engineering , <br />
                      Government college of Engineering, Yavatmal
                    </h1>
                    <p className="text-[16px]">
                      Email:{" "}
                      <span className="text-blue-700"> irjtae@gmail.com</span>{" "}
                    </p>
                  </div>
                </div>
              </div>

              {/* Board Members */}
              <hr />
              <h1 className="pb-2 text-xl font-semibold">
                Advisory/Editorial/Reviewer Board Members
              </h1>

              <hr />

              <div className=" sm:pl-[10%] flex justify-between items-center  ">
                <img
                  className="h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] rounded-full border-[2px] border-black"
                  src="Images/Amol.png"
                  alt=""
                />
                <div className="text-left w-[70%]">
                  <h1 className="text-2xl pb-2">Dr. Amol G. Dikundwar</h1>
                  <h1 className="text-[16px]">
                    Assistant Professor, <br />
                    National Institute of Phamaceutical Education and Research,
                    Hyderabad <br />
                    PhD, IISC Banglore
                  </h1>
                  <p className="text-[16px]">
                    Email:{" "}
                    <span className="text-blue-700">
                      amol.dikundwar@niperhyd.ac.in
                    </span>{" "}
                  </p>
                </div>
              </div>

              <hr />

              <div className=" sm:pl-[10%] flex justify-between items-center  ">
                <img
                  className="h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] rounded-full border-[2px] border-black"
                  src="Images/Prachi.jpg"
                  alt=""
                />
                <div className="text-left w-[70%]">
                  <h1 className="text-2xl pb-2">Prof. Prachi Deshmukh</h1>
                  <h1 className="text-[16px]">
                    Dept. of Computer Science, <br />
                    Prof.Ram Meghe Institute of Technology and Research Badnera,
                    Amravati, MH
                  </h1>{" "}
                  <p className="text-[16px]">
                    Email:{" "}
                    <span className="text-blue-700">
                      pndeshmukh@mitra.ac.in
                    </span>{" "}
                  </p>
                </div>
              </div>

              <hr />

              <div className=" sm:pl-[10%] flex justify-between items-center  ">
                <img
                  className="h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] rounded-full border-[2px] border-black"
                  src="Images/Andhare.jpg"
                  alt=""
                />
                <div className="text-left w-[70%]">
                  <h1 className="text-2xl pb-2">Prof. C V Andhare</h1>
                  <h1 className="text-[16px]">
                    Head of Department, <br /> Dept. of Computer Engineering,{" "}
                    <br />
                    Government College of Engineering, Yavatmal, Maharashtra
                  </h1>{" "}
                  <p className="text-[16px]">
                    Email:{" "}
                    <span className="text-blue-700">
                      chetanandhare@gmail.com
                    </span>{" "}
                  </p>
                </div>
              </div>

              <hr />

              <div className=" sm:pl-[10%] flex justify-between items-center  ">
                <img
                  className="h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] rounded-full border-[2px] border-black"
                  src="Images/ShreyashK.jpeg"
                  alt=""
                />
                <div className="text-left w-[70%]">
                  <h1 className="text-2xl pb-2">Ar. Shreyash S. Karnewar</h1>
                  <h1 className="text-[16px]">
                    Architect, <br />
                    Academy of Architecture, Mumbai (2017-22)
                  </h1>{" "}
                  <p className="text-[16px]">
                    Email:{" "}
                    <span className="text-blue-700">
                      shreyashkarnewar6@gmail.com
                    </span>{" "}
                  </p>
                </div>
              </div>

              <hr />
              <div className=" sm:pl-[10%] flex justify-between items-center  ">
                <img
                  className="h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] rounded-full border-[2px] border-black"
                  src="Images/Shweta.jpeg"
                  alt=""
                />
                <div className="text-left w-[70%]">
                  <h1 className="text-2xl pb-2">Prof. Shweta A. Junghare</h1>
                  <h1 className="text-[16px]">
                    Dept. of Computer Engineering <br />
                    Government college of engineering yavatmal
                  </h1>
                  <p className="text-[16px]">
                    Email:{" "}
                    <span className="text-blue-700">
                      shwetajunghare7@gmail.com
                    </span>{" "}
                  </p>
                </div>
              </div>

              <hr />
              <div className=" sm:pl-[10%] flex justify-between items-center  ">
                <img
                  className="h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] rounded-full border-[2px] border-black"
                  src="Images/Pranav.jpg"
                  alt=""
                />
                <div className="text-left w-[70%]">
                  <h1 className="text-2xl pb-2">Mr. Pranav P. Purankar</h1>
                  <h1 className="text-[16px]">
                    Software Engineer <br />
                    Founder- Stealth Mode
                  </h1>
                  <p className="text-[16px]">
                    Email:{" "}
                    <span className="text-blue-700">
                      pranav.purankar@gmail.com
                    </span>{" "}
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
