import React from "react";
import { NavLink } from "react-router-dom";

export default function CallForPaper() {
  return (
    <>
      <div className="block sm:inline-block sm:w-[75%] ">
        <div className="px-4 sm:px-0 sm:pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-2xl rounded-lg shadow-2xl">
            CALL FOR PAPER
          </div>

          <div className="bg-white rounded-lg px-8 py-8 border-[1px] border-gray-300 text-center  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] grid gap-4">
            <div className="flex justify-between text-lg">
              <p className="pl-12 font-semibold">SUBMISSION LAST DATE</p>
              <p className="w-[40%]">31 - May - 2024</p>
            </div>
            <hr />
            <div className="flex justify-between text-lg">
              <p className="pl-12 font-semibold">REVIEW STATUS</p>
              <p className="w-[40%]">12 hrs to 24 Hrs</p>
            </div>
            <hr />
            <div className="flex justify-between text-lg">
              <p className="pl-12 font-semibold">PAPER PUBLICATION</p>
              <p className="w-[40%]">4 hrs</p>
            </div>
            <hr />

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-UB-jv4X3wiSyfMWXUMg8ookPsp_1BnS9u7B2RraeiLsC0g/viewform?usp=sf_link">
              <button
                type="submit"
                className="py-2 px-4 hover:bg-blue-800   hover:scale-110 transition duration-500 bg-blue-500 text-xl text-white rounded-lg mt-4
                "
              >
                Submit your paper now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
