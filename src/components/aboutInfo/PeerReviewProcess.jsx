import React from "react";
import { NavLink } from "react-router-dom";

export default function PeerReviewProcess() {
  return (
    <>
      <div className="inline-block w-[75%] ">
        <div className="pr-8 pb-8 grid gap-4">
          <div className="p-6 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-3xl rounded-lg shadow-2xl">
            PEER REVIEW PROCESS
          </div>

          <div className="bg-white rounded-lg px-8 py-8 border-[1px] border-gray-300  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <h1 className="text-3xl font-semibold pb-2 ">PAPER SUBMISSION</h1>
            <ol className="list-decimal pl-4 text-lg grid gap-4">
              <li>
                The corresponding author should submit the paper to the journal
                online using this link :{" "}
                <NavLink
                  to="/SubmitPaperOnline"
                  className="text-blue-600 font-semibold"
                >
                  Click here
                </NavLink>
              </li>
              <li>After submitting paper-id is sent to author.</li>
              <li>
                The author will be guided by email for further process and be
                able to track the progress of the paper by using paper id.
              </li>
            </ol>

            <h1 className="text-3xl font-semibold pt-8 pb-2 ">
              EDITORIAL BOARD
            </h1>

            <ol className="list-decimal pl-4 text-lg grid gap-4">
              <li>
                {" "}
                Editorial Board will check the plagiarism, format and
                composition of the paper comply with the Guide for Authors, to
                ensure it includes the required sections and styles. If the
                manuscript fails to meet one or more requirements, the Editorial
                Board will return it to the authors for amendments.
              </li>
              <li>
                Submitted paper will be screened by the Editor-in-Chief whether
                the manuscript abides by the focus and scope of IRJTAE journal.
                paper that do not meet the basic requirements will be rejected
                without further review.
              </li>
              <li>
                If the manuscript meets all requirements, the EIC will assign it
                to an Reviewer with relevant expertise, who will be responsible
                for managing the peer review process. Reviewer may reject
                manuscripts that they deem highly unlikely to pass peer review.
              </li>
              <li>
                Articles submitted for possible publication are subjected to a
                double-blind, peer review process.
              </li>
              <li>
                Articles that are found suitable by Editor are then sent for
                review to two experts in the field of the paper. Reviewer of a
                paper are unknown to each other.
              </li>
              <li>
                The reviewers will rate several aspects of the manuscript, offer
                specific suggestions for improvement, and make a recommendation
                with regard to its suitability for publication.
              </li>
              <li>
                The review is submitted to the journal, with a recommendation to
                accept or reject the paper or with a request for revision (major
                or minor), that should be well substantiated and justified.
              </li>
            </ol>
            <h1 className="text-3xl font-semibold pt-8 pb-2 ">
              The key parameters to be applied in the final evaluation of all
              types of submissions are :
            </h1>

            <ul className="list-disc pl-6 text-lg grid gap-4">
              <li>
                Innovation (Is the manuscript original? Does it provide new
                evidence or ideas capable of furthering knowledge in the given
                social economic context?)
              </li>
              <li>
                Quality (clarity, logic, English language and grammar,
                thoroughness, layout etc.)
              </li>
              <li>
                Relevance (interest to readers, not too specific, applicability,
                importance of the topic, impact on social life, economy,
                scientific community, etc.)
              </li>
            </ul>

            <h1 className="text-3xl font-semibold pt-8 pb-2">
              Four possible decisions may therefore be reached
            </h1>

            <ul className="list-disc pl-6 text-lg grid gap-4">
              <li>
                Accept – the manuscript satisfies all publication parameters and
                is worthy of publication.
              </li>
              <li>
                Minor/Major Revisions – further revision of the manuscript is
                required in order to satisfy all parameters.
              </li>
              <li>
                Reject and Resubmission Suggested – the paper fails to satisfy
                key parameters and substantial revision of the manuscript is
                required to address its shortcomings.
              </li>
              <li>
                Reject – the paper fails to satisfy key parameters and it is
                highly unlikely that further work can address its shortcomings.
              </li>
            </ul>

            <h1 className="text-3xl font-semibold pt-8 pb-2">
              CONFIRMATION OF THE DECISION AND COMMUNICATION TO THE AUTHORS
            </h1>

            <ul className=" text-lg grid gap-4">
              <li>
                All decisions are confirmed by the Editor-in-Chief prior to
                notification. The Editorial Board sends a decision email to the
                corresponding author including any relevant reviewer comments.
                All comments and related files will be provided in an anonymised
                form.
              </li>
              <li>
                Revision Stage- Manuscripts that have been recommended for
                revision will be returned to the submitting author.
              </li>
              <li>
                Final Steps- If paper is accepted then IRJTAE journal makes
                every effort to ensure articles are published rapidly and
                accurately. The corresponding author will receive a paper
                acceptance e-mail and he/she should send Copyright form, then
                the article is published online under the licence Creative
                Commons Attribution – Non Commercial – No Derivs Alike
                (CC-BY-NC-ND) with in 4 hours after receiving required
                documents. Copyright for commercial and associated uses will
                remain with the Publisher.
              </li>
              <li>
                After completing all the process by author paper/article is
                published online in respective volume/issue and same is mailed
                to author with certificate of publication
              </li>
            </ul>
            <h1 className="text-3xl font-semibold pt-8 pb-2">FAIR PLAY</h1>

            <p className=" text-lg ">
              Editor should evaluate manuscripts for their intellectual content
              without regard to race, gender, sexual orientation, religious
              belief, ethnic origin, citizenship, or political philosophy of the
              authors. Editor's decision to accept or reject a paper for
              publication should be based only on the paper's importance,
              originality and clarity, and the study's relevance to the aim of
              journal.
            </p>

            <h1 className="text-3xl font-semibold pt-8 pb-2">
              COPYRIGHT POLICY
            </h1>

            <p className=" text-lg ">
              Copyright policies are legal documents that specify who retains
              the right to use and distribute an original work. After submitting
              paper, authors are asked to submit copyright agreement to abide by
              an open access (CC-BY NC-ND). Under the terms of this agreement,
              authors retain ownership of the copyright of their articles.
              However, this agreement permits any user to reuse, download,
              print, extract, archive, and distribute the article, so long as
              appropriate credit is given to the authors and the source of the
              research work. The agreement ensures that the paper will be
              available as widely as possible and that the paper can be included
              in any IRJTAE archive.
            </p>

            <h1 className="text-3xl font-semibold pt-8 pb-2">
              List of author rights in copyright policy:
            </h1>
            <ul className=" text-lg grid gap-2">
              <li>In future research work reuse idea or data of the paper.</li>
              <li>
                Reproduce copies of the article for academic, coaching or
                teaching purposes.
              </li>
              <li>
                Use the published version of the article in presentations
                (conferences, seminars, etc.)
              </li>
              <li>
                Grant permission to others to use or re-use table or figure.
              </li>
            </ul>

            <h1 className="text-3xl font-semibold pt-8 pb-2">
              List of all rights author(s) are granting to IRJTAE :
            </h1>

            <ul className=" text-lg grid gap-2">
              <li>
                Reproduce, publish, distribute, edit and translate the work
                (specify either exclusively or non-exclusively).
              </li>
              <li>Adapt and create derivatives from the work.</li>
              <li>
                Make the article available in all forms and media (so article
                can be made available with any new technology).
              </li>
              <li>Enforce copyright on behalf of the author.</li>
              <li>
                Similarly to the author rights section, you’ll want to make the
                rights you expect the author(s) to grant to the journal explicit
                to avoid any confusion.
              </li>
            </ul>

            <h1 className="text-3xl font-semibold pt-8 pb-2">
              AUTHOR WARRANTIES AND DEFINITIONS :
            </h1>

            <ul className=" text-lg grid gap-2">
              <li>
                Expectations of the author(s) or warranties that the author(s)
                must make with regard to the nature of the submission. The
                author(s) to acknowledge:
              </li>
              <li>
                Originality of the submission - author(s) guarantee it is their
                original work.
              </li>
              <li>
                Work has not been previously published and/or is not being
                considered for publication at other journals.
              </li>
              <li>
                All material and information from third parties is cited in the
                manuscript.
              </li>
              <li>
                Permission has been obtained for any material used from other
                sources.
              </li>
              <li>
                Authors should ensure that the study under consideration is
                original and does not contain plagiarized content.
              </li>
              <li>
                Author of the paper will be responsible if they just rewrite
                others content or change the title of other published paper.
              </li>
              <li>
                For any further information contact us at irjtae@gmail.com or
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
