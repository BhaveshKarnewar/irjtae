import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default function Fee() {
  return (
    <>
      <div className="inline-block sm:w-[75%] ">
        <div className="px-2 sm:pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-2xl rounded-lg shadow-2xl">
            PUBLICATION FEES FOR ALL AUTHORS
          </div>

          <div className="bg-white rounded-lg px-8 py-12 border-[1px] border-gray-300 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <h2 className="text-3xl font-semibold pb-12 hidden">
              RS. 999 FOR INDIAN AUTHORS and 25$ FOR FOREIGN AUTHORS
            </h2>

            <h2 className="text-left pb-4 text-xl font-semibold">
              Paper Publication or Processing Charges :
            </h2>

            <p className="text-justify text-[16px] ">
              Ingenious Research Journal for Technological Advancements in
              Engineering operates as an Open Access publication. It does not
              generate revenue from the sale of online articles. Instead, it
              offers free access to all published content, facilitating
              widespread distribution of knowledge globally at minimal expense.
              To sustain essential functions such as peer review, administrative
              support, journal development, article formatting, marketing,
              customer service, online system and website maintenance the
              journal relies on article processing fees.
            </p>

            {/* Payment box */}

            <div className="flex justify-center items-center pt-12">
              <div
                className=" sm:hover:scale-105 transition-all duration-700 sm:w-[70%] bg-blue-200 py-8 pb-12 rounded-lg
               "
              >
                <h1 className="text-4xl font-semibold">
                  <FontAwesomeIcon
                    icon={faIndianRupeeSign}
                    className="text-5xl pr-3"
                  />
                  999
                </h1>
                <p className="pt-4 pb-10 text-lg hidden">Research Paper</p>

                <h1 className="text-xl hidden pt-6 sm:block ">
                  PAY FOR RESEARCH PAPER
                </h1>

                <ul className="text-lg grid gap-2 py-8">
                  <li>
                    {" "}
                    <strong>999 Rs.</strong> publication fees per article
                  </li>
                  <li className="hidden">
                    {" "}
                    <strong>25 $</strong> for Foreign Author
                  </li>
                  <li>
                    {" "}
                    <strong>Online Publication</strong> of research paper
                  </li>
                  <li>
                    {" "}
                    <strong>4</strong> Authors Maximum
                  </li>
                  <li>
                    <strong>25</strong> pages Maximum
                  </li>
                  <li>
                    <strong>Free soft copy</strong> of paper and certificates
                  </li>
                </ul>

                <NavLink
                  to="/SubmitPaperOnline"
                  value="Click here to Apply"
                  className="py-2 px-8 bg-blue-800 text-white text-lg rounded-full "
                >
                  Submit your Article
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
