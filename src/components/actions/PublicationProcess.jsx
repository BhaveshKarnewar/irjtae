import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function PublicationProcess() {
  return (
    <>
      <div className="inline-block w-[75%] ">
        <div className="pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-2xl rounded-lg shadow-2xl">
            PUBLICATION PROCESS
          </div>

          <div className="bg-white rounded-lg px-12 py-12 text-center text-white border-[1px] border-gray-300 text-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <div className="rounded-full p-4  bg-[#4ec6baab] text-black font-semibold text-xl">
              AUTHOR SUBMIT PAPER/RESEARCH ARTICLE
            </div>

            <FontAwesomeIcon
              icon={faAnglesDown}
              className="text-black py-6 text-4xl"
            />
            <div className="rounded-full p-4  bg-[#565656]">
              PRELIMINARY REVIEW (QUALITY, PLAGARISM & GRAMMATICAL MISTAKE
              CHECK)
            </div>
            <div className="grid grid-cols-2 gap-10">
              {/* Rejected */}
              <div className="col-span-1">
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  className="text-black py-6 text-4xl"
                />
                <div className="rounded-full p-4  bg-[#FF0000]">
                  COPIED OR PLAGARIZED (REJECTED)
                </div>
              </div>

              {/* Accepted */}
              <div className="col-span-1">
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  className="text-black py-6 text-4xl"
                />
                <div className="rounded-full p-4  bg-[#548235]">
                  ORIGINAL (ACCEPT FOR REVIEW AND PAPER ID ASSIGMENT)
                </div>
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  className="text-black py-6 text-4xl"
                />
                <div className="rounded-full p-4  bg-[#2e75b6]">
                  EDITORAL BOARD (COMMENT ON AIRTICLE) ACCEPETD/REJECTED/ANY
                  CHANGES
                </div>
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  className="text-black py-6 text-4xl"
                />
                <div className="rounded-full p-4  bg-[#deb22e]">
                  FINAL DECISION NOTIFICATION SEND TO AUTHOR
                </div>
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  className="text-black py-6 text-4xl"
                />
                <div className="rounded-full p-4  bg-[#767171]">
                  COPY RIGHT FORM SUBMITTED BY AUTHOR WITH PUBLICATION FEES
                </div>
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  className="text-black py-6 text-4xl"
                />
                <div className="rounded-full p-4  bg-[#ff0066]">
                  FINAL PAPER SEND TO AUTHOR WITH CERTIFICATE
                </div>
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  className="text-black py-6 text-4xl"
                />
                <div className="rounded-full p-4  bg-[#548235]">
                  ARTICLE PUBLISHED ONLINE AND OPEN ACCESS TO ALL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
