import React from "react";

export default function Archives() {
  return (
    <>
      <div className="block sm:inline-block sm:w-[75%] ">
        <div className="sm:pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-white font-semibold bg-blue-600 text-2xl rounded-lg shadow-2xl">
            CURRENT ISSUE
          </div>

          <div className="bg-white rounded-lg px-6 py-8 border-[1px] border-gray-300 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <h2 className="text-xl font-semibold pb-6">
              Volume 1 Issue 1, April 2024
            </h2>

            {/* index srNo,Paper,View */}
            <hr />
            <div className="flex justify-between px-8 py-2 text-[16px] font-semibold">
              <p>SR.No</p>
              <p>Paper Name</p>
              <p>View Paper</p>
            </div>
            <hr />

            {/* Papers */}
            <div id="paperCollection" className="grid gap-4 py-4">
              <div className="flex justify-between px-12 text-[16px]">
                <p>1</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Improving Credit Risk Assessment in Financial Institutions
                    Using Deep Learning and Explainable AI
                  </h1>
                  <p className="pt-2 text-[16px]">Author: Parth Thakare</p>
                  <p className="text-[16px]">Published on: 28 Apr 2024</p>
                </div>

                <a
                  className="text-blue-600
                "
                  href="Papers/Volume_1/IRJTAE_V1A1.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>

              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p>2</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    From Cryptocurrencies to Smart Contracts: The Evolution and
                    Impact of Blockchain Technology
                  </h1>
                  <p className="pt-2 text-[16px]">
                    Author: Bhavesh Karnewar, Prof. Dhiraj D. Shirbhate
                  </p>
                  <p className="text-[16px]">Published on: 25 Apr 2024</p>
                </div>

                <a
                  className="text-blue-600
                "
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />
              <div className="flex justify-between px-12 text-[16px]">
                <p>3</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Advancements and Applications of Drone Technology: A
                    Comprehensive Review
                  </h1>
                  <p className="pt-2 text-[16px]">Author: Aman Deepak Yadav</p>
                  <p className="text-[16px]">Published on: 24 Apr 2024</p>
                </div>

                <a
                  className="text-blue-600
                "
                  href="Papers/Volume_1/IRJTAE_V1A3.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />
              <div className="flex justify-between px-12 text-[16px]">
                <p>4</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Sustainable Civil Engineering Solutions through
                    Technological Innovations
                  </h1>
                  <p className="pt-2 text-[16px]">Author: Shreyash Purankar</p>
                  <p className="text-[16px]">Published on: 24 Apr 2024</p>
                </div>

                <a
                  className="text-blue-600
                "
                  href="Papers/Volume_1/IRJTAE_V1A4.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />
              <div className="flex justify-between px-12 text-[16px]">
                <p>5</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Future Advancements of Electric Vehicles in India: A
                    Technological Review
                  </h1>
                  <p className="pt-2 text-[16px]">
                    Author: Atal Dubey, Khushi Chaturkar
                  </p>
                  <p className="text-[16px]">Published on: 15 Apr 2024</p>
                </div>

                <a
                  className="text-blue-600
                "
                  href="Papers/Volume_1/IRJTAE_V1A5.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />
              <div className="flex justify-between px-12 text-[16px]">
                <p>6</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    A Comprehensive Overview of Advance Techniques, Applications
                    and Challenges in Data Science
                  </h1>
                  <p className="pt-2 text-[16px]">Author: Rajat Pawar</p>
                  <p className="text-[16px]">Published on: 16 Apr 2024</p>
                </div>

                <a
                  className="text-blue-600
                "
                  href="Papers/Volume_1/IRJTAE_V1A6.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />
              <div className="flex justify-between px-12 text-[16px]">
                <p>7</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Artificial Intelligence in Finance: Applications, Challenges
                    and Opportunities
                  </h1>
                  <p className="pt-2 text-[16px]">
                    Author: Prem Borkar, Yash Mukherjee
                  </p>
                  <p className="text-[16px]">Published on: 13 Apr 2024</p>
                </div>

                <a
                  className="text-blue-600
                "
                  href="Papers/Volume_1/IRJTAE_V1A7.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
