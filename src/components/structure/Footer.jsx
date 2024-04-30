import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-4">
        <div className="w-full grid gap-12 sm:flex sm:justify-around text-xl text-blue-200 p-4">
          <div className="text-center hidden sm:block">
            <h1 className="text-white text-3xl pt-4 font-semibold">IRJTAE</h1>
            <p className="pt-4">
              "Fueling Curiosity, <br /> Fostering Excellence"
            </p>
          </div>
          <ul className="grid gap-2">
            <li>
              <NavLink to="/PeerReviewProcess">Peer Review Process</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/PrivacyPolicies">Privacy Policies</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/PublicationEthics">Publication Ethics</NavLink>
            </li>
            <li>
              <NavLink to="/TermsAndConditions">Terms And Conditions</NavLink>
            </li>
          </ul>

          <ul className="grid gap-2">
            <li>
              {" "}
              <NavLink to="/EditorialBoard">Editorial Board</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/About"> Editor's vision </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/Archives">Archives</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>

          <ul className="grid gap-2 ">
            <li>Connect :</li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> irjtae@gmail.com
            </li>

            <li>
              <FontAwesomeIcon icon={faWhatsapp} /> +91 98342 35843
            </li>

            <li>
              <FontAwesomeIcon icon={faLinkedin} /> IRJTAE
            </li>
          </ul>
        </div>

        <div className="pt-6 text-center text-lg">
          <p>&copy; 2024 IRJTAE. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
