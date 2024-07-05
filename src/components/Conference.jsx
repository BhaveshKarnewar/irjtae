import React from "react";

export default function Conference() {
  return (
    <>
      <div className="inline-block w-[75%] ">
        <div className="sm:pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-2xl rounded-lg shadow-2xl">
            CONFERENCE
          </div>

          <div className="bg-white rounded-lg px-6 py-8 border-[1px] border-gray-300 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            {/* index */}
            <hr />
            <div className="flex justify-between px-8 py-2 text-[16px] font-semibold">
              <p className="w-[50%] text-left">Conferences</p>
              <p>Date</p>
              <p>Venue</p>
            </div>
            <hr />

            {/* Conferences */}
            <div id="Conferences" className="grid gap-4 py-4">
              <div className="flex justify-between px-8 text-[16px]">
                <div className="text-left w-[50%]">
                  <h1 className="font-semibold">
                    ERCICA - EMERGING RESEARCH IN COMPUTING, INFORMATION,
                    COMMUNICATION AND APPLICATIONS
                  </h1>
                  <p className="text-[16px]">
                    Attend here:
                    <a
                      className="text-blue-600"
                      href="https://www.ercica.com/"
                      target="_blank"
                    >
                      Link
                    </a>
                  </p>
                </div>

                <p>18 July 2024</p>
                <p>Banglore, India</p>
              </div>
              <hr />

              <div className="flex justify-between px-8 text-[16px]">
                <div className="text-left w-[50%]">
                  <h1 className="font-semibold">
                    NATIONAL CONFERENCE ON ADVANCED COMPUTER SCIENCE AND
                    INFORMATION TECHNOLOGY
                  </h1>
                  <p className="text-[16px]">
                    Attend here:
                    <a
                      target="_blank"
                      className="text-blue-600"
                      href="https://www.nationalconference.in/event/index.php?id=2636740"
                    >
                      Link
                    </a>
                  </p>
                </div>

                <p>20 July 2024</p>
                <p>Pune, India</p>
              </div>
              <hr />
              <div className="flex justify-between px-8 text-[16px]">
                <div className="text-left w-[50%]">
                  <h1 className="font-semibold">
                    INTERNATIONAL CONFERENCE ON ENGINEERING & TECHNOLOGY
                  </h1>
                  <p className="text-[16px]">
                    Attend here:
                    <a
                      target="_blank"
                      className="text-blue-600"
                      href="https://www.sfe.net.in/conf/index.php?id=2630118"
                    >
                      Link
                    </a>
                  </p>
                </div>

                <p>03 August 2024</p>
                <p className="">Noida, India</p>
              </div>
              <hr />
              <div className="flex justify-between px-8 text-[16px]">
                <div className="text-left w-[50%]">
                  <h1 className="font-semibold">
                    NATIONAL CONFERENCE ON COMPUTING AND ELECTRONICS ENGINEERING
                  </h1>
                  <p className="text-[16px]">
                    Attend here:
                    <a
                      target="_blank"
                      className="text-blue-600"
                      href="https://www.nationalconference.in/event/index.php?id=2637148"
                    >
                      Link
                    </a>
                  </p>
                </div>

                <p>11 August 2024 </p>
                <p> Raipur, India</p>
              </div>
              <hr />
              <div className="flex justify-between px-8 text-[16px]">
                <div className="text-left w-[50%]">
                  <h1 className="font-semibold">
                    INTERNATIONAL CONFERENCE ON ENGINEERING & TECHNOLOGY
                  </h1>
                  <p className="text-[16px]">
                    Attend here:
                    <a
                      target="_blank"
                      className="text-blue-600"
                      href="http://nier.in/conf/index.php?id=2635350"
                    >
                      Link
                    </a>
                  </p>
                </div>

                <p>24 August 2024 </p>
                <p> Goa, India</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
