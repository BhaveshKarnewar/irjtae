import React from "react";
import { NavLink } from "react-router-dom";

export default function TermsAndConditions() {
  return (
    <>
      <div className="inline-block w-[75%] ">
        <div className="pr-8 pb-8 grid gap-4">
          <div className="p-6 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-3xl rounded-lg shadow-2xl">
            TERMS AND CONDITIONS
          </div>

          <div className="bg-white rounded-lg px-8 py-8 border-[1px] border-gray-300  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <div className="text-3xl font-semibold pt-4 pb-2 text-center">
              PAPER PUBLICATION PROCESS
            </div>
            <p className="text-lg">
              IRJTAE accepts paper from Engineering, Technology, Management,
              Advancement and other research areas in the form of research
              paper, final paper, thesis, review article or case studies.
              Submitted paper is reviewed within 24 hours after submission and
              published online within 4 hour after receiving publication fees
              and copyright form. Know more at <span> </span>
              <NavLink
                to="/PublicationProcess"
                className="text-blue-600 font-semibold"
              >
                Publication Process.
              </NavLink>
            </p>
            <h1 className="text-3xl font-semibold pt-8 pb-2">
              PROCESS OF PAPER PUBLICATION
            </h1>
            <ol className="text-lg list-decimal pl-6 ">
              <li>
                Author submit paper/ research article in word format through
                link provided on home page of site or e-mail at irjtae@gmail.com
              </li>
              <li>
                After submitting paper-id is sent to author and paper is send to
                editorial board for pre-screening.
              </li>
              <li>
                If editorial board accepts paper then reviewer is assign to
                review the paper and give his comment on paper (accepted,
                rejected or modify and re-submit).
              </li>
              <li>
                If paper is accepted by the reviewer then letter of acceptance
                sent to the author.
              </li>
              <li>
                Author has to send us copyright agreement along with payment
                details within a given time limit.
              </li>
              <li>
                After completing all the process by author paper/article is
                published online in respective volume/issue and same is mailed
                to author with certificate of publication.
              </li>
              <li>
                For any query or delay from author side, author can contact us
                at irjtae@gmail.com
              </li>
            </ol>
            <h1 className="text-3xl font-semibold pt-8 pb-2">
              ARTICLE WITHDRAWAL AND REFUND POLICY
            </h1>
            <p
              className="
            text-lg pb-4"
            >
              Article that have been submitted and accepted for review but which
              have not been formally published and will not yet have the
              complete volume/issue/page information and that violate our
              journal publishing policies in the view of the editors (such as
              plagiarism, multiple submission, bogus claims of authorship,
              fraudulent use of ideas or data of others), may be “Withdrawn”
              from IRJTAE.
            </p>
            <p
              className="
            text-lg pb-4"
            >
              IRJTAE avoid unwarranted withdrawal of manuscripts. In such case
              IRJTAE defines refund policy keeping in mind the cause the time
              waste by the reviewers, editors and the editorial staff.
            </p>
            <p
              className="
            text-lg pb-2"
            >
              Authors should follow the publication ethics. Visit publication
              policies:
            </p>
            <ol className="text-lg list-decimal pl-6 ">
              <li>
                Author should keep patience. Paper can review within 24 hours
                after accepted and published online within 4 hour after
                receiving publication fees and copyright form.
              </li>
              <li>
                The author can withdraw the paper without paying any withdrawal
                fees, if the author(s) requests a withdrawal of paper, within 4
                hours of submission or before it is accepted for review process.
              </li>
              <li>
                Withdraw a manuscript from a journal because it is being
                accepted by another journal is unacceptable.
              </li>
              <li>
                Authors should carefully check the data and facts before
                submitting the manuscript.
              </li>
              <li>
                Information, data and facts presented in the manuscripts are
                accurate and error-free.
              </li>
              <li>
                All authors include corresponding and co authors should confirm
                the number of authors, authorship, approval and integrity of the
                manuscript before submission.
              </li>
              <li>
                Changes or correction is not allowed once paper is published
                online. Author should pay extra charges as per correction.
              </li>
              <li>
                Paper cannot be withdrawn after the peer review process or
                published online and the article publication charges, if paid by
                the authors, will not be refunded.
              </li>
              <li>
                IRJTAE Editorial Board will provide author a formal letter of
                Manuscript Withdrawal.
              </li>
              <li>
                Paper should be related to stream or branch of the all author.
                At any stage of review or after publish, if no relationship
                found between author branch and study conducted, then Journal
                has rights to withdraw or reject that paper.
              </li>
            </ol>
            <h1 className="text-3xl font-semibold pt-8 pb-2">
              COPYRIGHT POLICY
            </h1>
            <p className="text-lg">
              Copyright policies are legal documents that specify who retains
              the right to use and distribute an original work. After submitting
              paper, authors are asked to submit copyright agreement to abide by
              an open access Creative Commons license (CC-BY). Under the terms
              of this agreement, authors retain ownership of the copyright of
              their articles. However, this agreement permits any user to reuse,
              download, print, extract, archive, and distribute the article, so
              long as appropriate credit is given to the authors and the source
              of the research work. The agreement ensures that the paper will be
              available as widely as possible and that the paper can be included
              in any IRJTAE archive.
            </p>
            <h1 className="text-3xl font-semibold pt-8 pb-2">
              List of author rights in copyright policy:
            </h1>
            <ol className="text-lg">
              <li>
                In future, reuse of research work idea or data of the paper .
              </li>
              <li>
                Make reproductions of the article to distribute among students,
                participants, or learners for educational use.
              </li>
              <li>
                Use the published version of the article in presentations
                (seminars,conferences, etc.).
              </li>
              <li>
                Grant permission to others to use or re-use content, table or
                figure.
              </li>
            </ol>
            <h1 className="text-3xl font-semibold pt-8 pb-2">
              List of all rights author(s) are granting to IRJTAE:{" "}
            </h1>
            <ol className="text-lg">
              <li>
                Author may reproduce, publish, distribute, edit, and translate
                the work, with specified exclusivity.
              </li>
              <li>
                Author have the right to adapt and create derivatives from the
                work.
              </li>
              <li>
                The article should be made available in all forms and media,
                including any new technologies.
              </li>
              <li>Enforce copyright on behalf of the author.</li>
              <li>
                Explicit rights granted to the journal should be specified to
                avoid confusion.
              </li>
            </ol>
            <h1 className="text-3xl font-semibold pt-8 pb-2">
              AUTHOR WARRANTIES AND DEFINITIONS
            </h1>
            <ol className="text-lg">
              <li>
                Expectations of the author(s) or warranties that the author(s)
                must make with regard to the nature of the submission.
              </li>
              <li> The author(s) to acknowledge:</li>
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
                For any further information contact us at irjtae@gmail.com or{" "}
                <span> </span>
                <NavLink to="/Contact" className="text-blue-600 font-semibold">
                  Contact us
                </NavLink>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
