import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import { faCube } from "@fortawesome/free-solid-svg-icons";

export default function Aside() {
  const [icon, setIcon] = useState(
    <FontAwesomeIcon icon={faCube} className="pr-4 text-xs" />
  );

  return (
    <>
      {" "}
      <aside className=" block sm:inline-block sm:w-[25%] px-8 py-2 pb-8  ">
        <div
          className="grid
   gap-4"
        >
          <div className="bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border-[1px] border-gray-300 rounded-lg p-4 text-[18px] font-semibold">
            For Author
          </div>
          <div className="bg-blue-200 rounded-lg p-4 grid gap-2 font-semibold text-[18px]">
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
            <a
              //  href="https://docs.google.com/document/d/1sFSXh1xEksqESSMgdWl4uTj0PQ4kHMWc/edit?usp=drive_link&ouid=106824956092792568099&rtpof=true&sd=true"

              href="docs/IRJTAE_format.docx"
            >
              {icon}
              Paper Format
            </a>

            <a
              // href="https://drive.google.com/file/d/1BfxGJG7mMG4Y8ULjE1S9U3R1mFHt9Qvq/view"
              href="docs/IRJTAE_Copyright.pdf"
              target="_blank"
            >
              {icon}
              Copyright Form
            </a>
            <NavLink to="/Indexing">
              {icon}
              Indexing
            </NavLink>
          </div>
          <div className="bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border-[1px] border-gray-300 p-4 font-semibold text-[18px]">
            Publication
          </div>
          <div className="bg-blue-200 rounded-lg p-4 grid gap-2 text-[18px] font-semibold">
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
       rounded-lg p-4 text-[18px] font-semibold shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border-[1px] border-gray-300
    "
          >
            For Reviewers
          </div>
          <div className="bg-blue-200 rounded-lg p-4 grid gap-2 text-[18px] font-semibold">
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
