import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="inline-block w-full sm:w-[75%] sm:pr-8 pb-8 
      "
      >
        <div className="grid sm:grid-cols-6 sm:gap-8 ">
          {/* left grid */}

          <div className="col-span-4 grid gap-4">
            {/* Welcome */}

            <div
              className="py-4 text-center text-black
             rounded-lg  bg-blue-200 text-2xl font-bold shadow-xl "
            >
              Welcome to IRJTAE
            </div>
            {/* Call for paper */}

            <div className="p-4 bg-white rounded-lg text-center grid shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border-[1px] border-gray-300  ">
              <h1
                className="p-2 text-2xl font-semibold
              "
              >
                Call for paper
              </h1>
              <p className="text-lg font-semibold">
                Review Status : 24 to 48 Hours
              </p>
              <p className="text-lg font-semibold pb-8">
                Paper publication : 4 hours
              </p>

              <p className="text-justify text-[16px] px-4">
                IRJTAE stands as a peer-reviewed, Open Access journal, operating
                at a low cost and with expedited processing times. It's
                dedicated to disseminating original research and review articles
                across various fields including engineering, advanced
                technology, and management, aiming to advance scientific
                research. By providing free access to published articles, IRJTAE
                fosters knowledge dissemination, ensuring accessibility for
                scholars, professionals, academics, engineers, and students in
                the field. This facilitates academic and research endeavors by
                enabling reading, reprinting, and distribution of the published
                work.
              </p>

              <div id="Journal Particulars" className="pt-6">
                <h1 className="font-semibold text-2xl pb-4">
                  Journal Particulars
                </h1>
                <hr />
                <div className="text-[15px]">
                  <div className="flex text-left pl-12 py-1">
                    <p className="w-[40%]">Title</p>
                    <p className="w-[55%] text-blue-800">
                      Ingenious Research Journal For Technological Advancements
                      In Engineering
                    </p>
                  </div>
                  <hr />
                  <div className="flex text-left pl-12 py-1">
                    <p className="w-[40%]">Frequency</p>
                    <p className="w-[55%] text-blue-800">Monthly</p>
                  </div>
                  <hr />
                  <div className="flex text-left pl-12 py-1">
                    <p className="w-[40%]">Cheif Editor</p>
                    <p className="w-[55%] text-blue-800">
                      Prof. D. D. Shirbhate
                    </p>
                  </div>
                  <hr />
                  <div className="flex text-left pl-12 py-1">
                    <p className="w-[40%]">Starting Year</p>
                    <p className="w-[55%] text-blue-800">2024</p>
                  </div>
                  <hr />
                  <div className="flex text-left pl-12 py-1">
                    <p className="w-[40%]">Subject</p>
                    <p className="w-[55%] text-blue-800">
                      Engineering and Technology
                    </p>
                  </div>
                  <hr />
                  <div className="flex text-left pl-12 py-1">
                    <p className="w-[40%]">Language</p>
                    <p className="w-[55%] text-blue-800">English</p>
                  </div>
                  <hr />
                  <div className="flex text-left pl-12 py-1">
                    <p className="w-[40%]">Publication Format</p>
                    <p className="w-[55%] text-blue-800">Online</p>
                  </div>
                  <hr />
                  <div className="flex text-left pl-12 py-1">
                    <p className="w-[40%]">Phone no.</p>
                    <p className="w-[55%] text-blue-800">+91 98342 35843</p>
                  </div>
                  <hr />
                  <div className="flex text-left pl-12 py-1">
                    <p className="w-[40%]">Email</p>
                    <p className="w-[55%] text-blue-800">irjtae@gmail.com</p>
                  </div>
                  <hr />
                  <div className="flex text-left pl-12 py-1">
                    <p className="w-[40%]">Website</p>
                    <p className="w-[55%] text-blue-800">www.irjtae.com</p>
                  </div>
                  <hr />
                  <div className="flex text-left pl-12 py-1">
                    <p className="w-[40%]">Address</p>
                    <p className="w-[55%] text-blue-800">
                      c/o D S Shirbhate, Plot no: 9, Dhanwantari Society, Kale
                      layout, Arni Road, inside Ranapratap gate,
                      Yavatmal-445001, Yavatmal, Maharashtra
                    </p>
                  </div>
                  <hr />
                </div>
              </div>

              <div id="services" className=" pl-8 pt-8 text-left">
                <h1 className="text-2xl font-semibold py-2">Our Services</h1>
                <ul className="list-disc grid gap-1 text-[16px] p-4 ">
                  <li>Low cost Journal</li>
                  <li> Fast response after received paper within 4 hours.</li>
                  <li>
                    Fast paper publication within 4 hours after receiving
                    publication fees and copyright form.
                  </li>
                  <li>Student friendly affordable publication fees.</li>

                  <li> Simple and fast paper submission process.</li>
                  <li>
                    Highly qualified editorial board members with technical
                    expertise.
                  </li>
                  <li>Free open access journal.</li>
                  <li>Monthly paper publication.</li>

                  <li>
                    Provide free soft copy of certificate of publication to each
                    author.
                  </li>
                  <li>Strictly goes through plagiarism-checking process.</li>
                  <li> Paper can be submitted by authors any day any time.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* right grid */}

          <div className="col-span-2 sm:block hidden">
            <div className="bg-white h-full rounded-lg  border-gray-300 border-[1px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <h1 className="text-xl pl-6 pt-4">News and Events</h1>
              <p className="pl-6">__________</p>

              <ul className=" pt-4 pl-12 pr-12 text-[16px] list-disc text-justify grid gap-2">
                <li>
                  Call for Papers, (For Issue 2) Last date: 31 July 2024.{" "}
                </li>
                <li>
                  Issue 1, April-May 2024 articles are published.{" "}
                  <NavLink to="/Archives" className="text-blue-600">
                    <span> </span>Read here.
                  </NavLink>
                </li>

                <li>
                  Upcoming Conferennces are added.
                  <NavLink to="/Conference" className="text-blue-600">
                    <span> </span> Checkout here.
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
