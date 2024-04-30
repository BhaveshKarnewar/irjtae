import React from "react";

export default function Conference() {
  return (
    <>
      <div className="inline-block w-[75%] ">
        <div className="pr-8 pb-8 grid gap-4">
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
                    NATIONAL CONFERENCE ON MECHANICAL AND AUTOMOBILE ENGINEERING
                  </h1>
                  <p className="text-[16px]">
                    Attend here:
                    <a
                      className="text-blue-600"
                      href="https://www.nationalconference.in/event/index.php?id=2482052"
                      target="_blank"
                    >
                      Link
                    </a>
                  </p>
                </div>

                <p>26 May 2024</p>
                <p>Banglore, India</p>
              </div>
              <hr />

              <div className="flex justify-between px-8 text-[16px]">
                <div className="text-left w-[50%]">
                  <h1 className="font-semibold">
                    INTERNATIONAL CONFERENCE ON SCIENCE TECHNOLOGY AND
                    MANAGEMENT
                  </h1>
                  <p className="text-[16px]">
                    Attend here:
                    <a
                      target="_blank"
                      className="text-blue-600"
                      href="https://www.sfe.net.in/conf/index.php?id=2479230"
                    >
                      Link
                    </a>
                  </p>
                </div>

                <p>01 June 2024</p>
                <p>Pune, India</p>
              </div>
              <hr />
              <div className="flex justify-between px-8 text-[16px]">
                <div className="text-left w-[50%]">
                  <h1 className="font-semibold">
                    NATIONAL CONFERENCE ON ADVANCES IN ENGINEERING AND
                    TECHNOLOGY
                  </h1>
                  <p className="text-[16px]">
                    Attend here:
                    <a
                      target="_blank"
                      className="text-blue-600"
                      href="https://www.nationalconference.in/event/index.php?id=2482227"
                    >
                      Link
                    </a>
                  </p>
                </div>

                <p>08 June 2024</p>
                <p className="">
                  Bhubaneswar,
                  <br /> India
                </p>
              </div>
              <hr />
              <div className="flex justify-between px-8 text-[16px]">
                <div className="text-left w-[50%]">
                  <h1 className="font-semibold">
                    NATIONAL CONFERENCE ON INTERNET OF THINGS
                  </h1>
                  <p className="text-[16px]">
                    Attend here:
                    <a
                      target="_blank"
                      className="text-blue-600"
                      href="https://www.nationalconference.in/event/index.php?id=2482218"
                    >
                      Link
                    </a>
                  </p>
                </div>

                <p>09 June 2024 </p>
                <p> Raipur, India</p>
              </div>
              <hr />
              <div className="flex justify-between px-8 text-[16px]">
                <div className="text-left w-[50%]">
                  <h1 className="font-semibold">
                    INTERNATIONAL CONFERENCE ON COMPUTATIONAL INTELLIGENCE AND
                    COMMUNICATION NETWORKS
                  </h1>
                  <p className="text-[16px]">
                    Attend here:
                    <a
                      target="_blank"
                      className="text-blue-600"
                      href="https://nier.in//conf/index.php?id=2479993"
                    >
                      Link
                    </a>
                  </p>
                </div>

                <p>15 June 2024 </p>
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
