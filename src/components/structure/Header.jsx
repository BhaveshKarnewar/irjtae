import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex flex-col justify-center items-center">
        <div className="w-full pt-[32px] text-center font-bold text-blue-800 flex sm:px-12 sm:justify-between flex-col sm:flex-row justify-center items-center  ">
          <a href="#">
            <img
              src="/captcha/IRJTAE_logo_show.png"
              className=" h-[70px] w-[70px] sm:h-[150px] sm:w-[150px]"
              alt=""
            />
          </a>

          <div>
            <h1 className="text-3xl">
              INGENIOUS RESEARCH JOURNAL FOR TECHNOLOGICAL ADVANCEMENTS
              <br />
              IN ENGINEERING
            </h1>
            <p className="text-sm sm:text-xl font-normal pt-2">
              (Open access, Peer reviewed, Technological Journal)
            </p>
          </div>

          <div className="text-black hidden sm:block sm:invisible w-[100px]">
            {" "}
            ISSN : Pending
          </div>
        </div>
        <div className="w-[90%] bg-blue-300 p-2 mb-8 mt-6 sm:mt-2 rounded-full text-xl shadow-2xl">
          <div className="sm:hidden pl-4 sm:pl-8 sm:py-4">IRJTA</div>
          <div className="hidden sm:flex sm:justify-between sm:items-center">
            <NavLink
              to=""
              className="rounded-lg hover:bg-blue-600 p-4  hover:text-white font-semibold "
            >
              HOME
            </NavLink>
            <NavLink
              to="/Indexing"
              className="rounded-lg hover:bg-blue-600 p-4  hover:text-white font-semibold "
            >
              INDEXING
            </NavLink>
            <NavLink
              to="/Fee"
              className="rounded-lg hover:bg-blue-600 p-4  hover:text-white font-semibold "
            >
              FEE
            </NavLink>
            <NavLink
              to="/Archives"
              className="rounded-lg hover:bg-blue-600 p-4  hover:text-white font-semibold "
            >
              ARCHIVES
            </NavLink>
            <NavLink
              to="/Conference"
              className="rounded-lg hover:bg-blue-600 p-4  hover:text-white font-semibold "
            >
              CONFERENCE
            </NavLink>
            <NavLink
              to="/EditorialBoard"
              className="rounded-lg hover:bg-blue-600 p-4  hover:text-white font-semibold "
            >
              <div className="w-[205px]">EDITORIAL BOARD</div>
            </NavLink>
            <NavLink
              to="/About"
              className="rounded-lg hover:bg-blue-600 p-4  hover:text-white font-semibold "
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/Contact"
              className="rounded-lg hover:bg-blue-600 p-4  hover:text-white font-semibold"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

/*
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCube } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [icon, setIcon] = useState(
    <FontAwesomeIcon icon={faCube} className="pr-4 text-sm" />
  );

  return (
    <>
      <header className="flex flex-col justify-center items-center">
        <div className="text-3xl pt-6 text-center">
          Sasta Research Journal for Paper Publication
          <br />
          Yavtamal
        </div>
        <div className="w-[90%] bg-blue-300 flex justify-between items-center p-2 my-8 rounded-full text-2xl">
          <div className="pl-4 sm:pl-8 sm:py-4">Logo</div>
          <div className="hidden sm:flex pr-8">
            <NavLink
              to=""
              className="rounded-lg hover:bg-blue-600 p-4  hover:text-white "
            >
              Home
            </NavLink>
            <NavLink
              to="/Papers"
              className="rounded-lg hover:bg-blue-600 p-4  hover:text-white "
            >
              Indexing
            </NavLink>
            <NavLink className="rounded-lg hover:bg-blue-600 p-4  hover:text-white ">
              Fee
            </NavLink>
            <NavLink className="rounded-lg hover:bg-blue-600 p-4  hover:text-white ">
              Archives
            </NavLink>
            <NavLink className="rounded-lg hover:bg-blue-600 p-4  hover:text-white ">
              Conference
            </NavLink>
            <NavLink className="rounded-lg hover:bg-blue-600 p-4  hover:text-white ">
              About
            </NavLink>
          </div>
        </div>
      </header>

      <aside className=" block sm:inline-block sm:w-[25%] px-8 py-2 pb-8 ">
        <div
          className="grid
         gap-4"
        >
          <div className="bg-white shadow-xl border-[1px] border-gray-300 rounded-lg p-6 text-2xl font-semibold">
            For Author
          </div>
          <div className="bg-blue-200 rounded-lg p-6 grid gap-4 font-semibold text-xl">
            <p>
              {icon}
              Call for paper
            </p>
            <p>
              {icon}
              Publication Process
            </p>
            <p>
              {icon}
              Submit Paper Online
            </p>
            <p>
              {icon}
              Pay Publication Fee
            </p>
            <p>
              {icon}
              Paper Format
            </p>
            <p>
              {icon}
              Copyright Form
            </p>
            <p>
              {icon}
              Indexing
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-xl border-[1px] border-gray-300 p-6 font-semibold text-2xl">
            Publication
          </div>
          <div className="bg-blue-200 rounded-lg p-6 grid gap-4 text-xl">
            <p>
              {icon}
              Current issue
            </p>
            <p>
              {icon}
              Past issue
            </p>
          </div>
          <div
            className="bg-white
             rounded-lg p-6 text-2xl font-semibold shadow-xl border-[1px] border-gray-300
          "
          >
            For Reviewers
          </div>
          <div className="bg-blue-200 rounded-lg p-6 grid gap-4 text-xl">
            <p>{icon}Editorial Board</p>
            <p>
              {icon}
              Join as Reviewer
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

*/
