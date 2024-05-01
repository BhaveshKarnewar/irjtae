import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="block sm:inline-block sm:w-[75%] ">
        <div className="sm:pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-2xl rounded-lg shadow-2xl">
            Welcome to IRJTAE
          </div>

          <div className="bg-white rounded-lg px-6 py-8 border-[1px] border-gray-300 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <h2 className="text-2xl font-semibold pb-8">EDITOR</h2>

            <p className="text-justify text-[16px] ">
              IRJTAE invites research papers, final papers, technical report,
              scientific and review articles from authors to submit from all the
              areas of engineering, technology,Artificial Intelligence, Machine
              Learning, Web development, Blockchain technology, Mechatronics and
              all other relevant field of study or research. Submitted article
              and papers are subjected to peer review process. Papers/articles
              may be theoretical, experimental, numerical analysis or
              interpretative. Our journal has aim to create a new forum for
              exchange of innovative ideas and information on all aspects of
              research, engineering, technology and science. We provide superior
              quality editorial, reviewer and support, having the most talented
              and professional team.
            </p>
            <p className="text-justify text-[16px] py-8">
              IRJTAE is a key factor in raising the standards of discussion,
              evaluation and analysis relating to topics of engineering,
              technology, advancement, management and other research area. It
              also provides a platform for students, professionals, engineers,
              researchers, academicians and practitioners who share their
              knowledge in the field of relevant desciplines. IRJTAE publishes
              original papers, research article, review paper, thesis and case
              studies with significant analysis results and technical notes in
              related areas and their applications.
            </p>

            <div className="text-left">
              <p className="text-lg font-semibold pt-4 ">Regards,</p>
              <h1 className="text-xl font-semibold pt-4 ">Editor in Cheif</h1>
            </div>
          </div>

          <div className="p-8 bg-white rounded-md border-[1px] border-gray-300 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] grid sm:grid-cols-5">
            <div className="sm:col-span-2">
              {" "}
              <h1 className="text-xl font-semibold">About :</h1>
              <ul className="pt-6 grid gap-2 text-lg pl-6 list-disc font-semibold">
                <li className="hover:text-blue-800 hover:scale-105 transition duration-500">
                  <NavLink to="/PeerReviewProcess">Peer Review Process</NavLink>
                </li>
                <li className="hover:text-blue-800 hover:scale-105 transition duration-500">
                  <NavLink to="/PrivacyPolicies">Privacy Policies</NavLink>
                </li>
                <li className="hover:text-blue-800 hover:scale-105 transition duration-500">
                  <NavLink to="/PublicationEthics">Publication Ethics</NavLink>
                </li>
                <li className="hover:text-blue-800 hover:scale-105 transition duration-500">
                  <NavLink to="/TermsAndConditions">
                    Terms And Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
            <span className="py-4 sm:hidden"></span>
            <div className="sm:col-span-3 grid gap-4">
              <h1 className="text-xl font-semibold">Editorial Board :</h1>

              <p className="text-[16px] text-justify">
                The editorial board of IRJTAE serves as the backbone of
                scholarly publication, guiding the direction, quality, and
                integrity of the articles. Comprising esteemed experts and
                scholars in various technical fields relevant to our journal's
                scope, the editorial board is responsible for ensuring that the
                publication upholds rigorous academic standards while fostering
                innovation and advancement within its domain.
              </p>

              <NavLink
                to="/EditorialBoard"
                className="p-2 text-lg font-semibold bg-blue-700 w-[80px] text-center text-white rounded-lg hover:scale-110 transition-all duration-500"
              >
                View
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
