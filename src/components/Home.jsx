import React from "react";

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
                  This paper has been published on this date by this author
                </li>
                <li>
                  This paper has been published on this date by this author
                </li>
                <li>
                  This paper has been published on this date by this author
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
