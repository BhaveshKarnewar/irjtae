import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import { faCube } from "@fortawesome/free-solid-svg-icons";

export default function Aside() {
  const [icon, setIcon] = useState(
    <FontAwesomeIcon icon={faCube} className="pr-4 text-sm" />
  );

  return (
    <>
      {" "}
      <aside className=" block sm:inline-block sm:w-[25%] px-8 py-2 pb-8  ">
        <div
          className="grid
   gap-4"
        >
          <div className="bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border-[1px] border-gray-300 rounded-lg p-6 text-2xl font-semibold">
            For Author
          </div>
          <div className="bg-blue-200 rounded-lg p-6 grid gap-4 font-semibold text-xl">
            <NavLink to="/CallForPaper">
              {icon}
              Call for paper
            </NavLink>
            <NavLink to="/PublicationProcess">
              {icon}
              Publication Process
            </NavLink>
            <NavLink to="/SubmitPaperOnline">
              {icon}
              Submit Paper Online
            </NavLink>
            <NavLink to="/PayPublicationFee">
              {icon}
              Pay Publication Fee
            </NavLink>
            <a href="documents/IRJTAE_format.docx">
              {icon}
              Paper Format
            </a>

            <a href="documents/IRJTAE_Copyright.pdf" target="_blank">
              {icon}
              Copyright Form
            </a>
            <NavLink to="/Indexing">
              {icon}
              Indexing
            </NavLink>
          </div>
          <div className="bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border-[1px] border-gray-300 p-6 font-semibold text-2xl">
            Publication
          </div>
          <div className="bg-blue-200 rounded-lg p-6 grid gap-4 text-xl font-semibold">
            <NavLink to="/Archives">
              {icon}
              Current issue
            </NavLink>
            <NavLink className={"hidden"}>
              {icon}
              Past issue
            </NavLink>
          </div>
          <div
            className="bg-white
       rounded-lg p-6 text-2xl font-semibold shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border-[1px] border-gray-300
    "
          >
            For Reviewers
          </div>
          <div className="bg-blue-200 rounded-lg p-6 grid gap-4 text-xl font-semibold">
            <NavLink to="/EditorialBoard">{icon}Editorial Board</NavLink>
            <NavLink to="/About">{icon}About us </NavLink>

            <p className="hidden">
              {icon}
              Join as Reviewer
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
