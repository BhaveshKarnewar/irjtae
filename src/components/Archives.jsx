import React from "react";

export default function Archives() {
  return (
    <>
      <div className="block sm:inline-block sm:w-[75%] ">
        <div className="sm:pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-white font-semibold bg-blue-600 text-2xl rounded-lg shadow-2xl">
            CURRENT ISSUE
          </div>

          {/* Here you can add blocks which will hold papers */}

          {/* VOL-1, ISSUE-2 */}
          <div className="bg-white rounded-lg px-6 py-8 border-[1px] border-gray-300 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <h2 className="text-xl font-semibold pb-6">
              Volume 1, Issue 2, November-December 2024
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
                    Building Careers with Technology: A Workflow for Job
                    Preparation and Placement
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Saraswati
                    Adkine, Pooja Kale, Nikhil Kandhare, Jyoti Kokare, Prof.
                    Chetan Andhare.
                  </p>
                </div>

                <a
                  className="text-blue-600
                "
                  href="#"
                  target="_blank"
                >
                  View
                </a>
              </div>

              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">2</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Blockchain-Based Fund Management System For Indian Temples
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Saurabh
                    Vaidya, Rajnandan Ray, Shreya Shirbhate, Gaurav Rai, Prof.
                    Chetan Andhare
                  </p>
                  {/* <p className="text-[12px]">Published on: 22 May 2024</p> */}
                </div>

                <a
                  className="text-blue-600
                "
                  href="#"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">3</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    SmartBus: An Efficient Solution for Real- Time Public Bus
                    Tracking and Schedule Optimization
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Renuka U.
                    Pangarkar, Pavan M. Najardhane, Pranav V. Wayale, Ajinkya R.
                    Nishane, Prof. Chetan V. Andhare
                  </p>
                </div>
                <a className="text-blue-600" href="#" target="_blank">
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">4</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    AI-Powered Detection of Cyber Attacks: Addressing Deepfakes
                    and Identity Theft
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Ashwin
                    Dumane, Ritesh Mohod, Pooja Shirbhate, Khushi Chafale, Prof.
                    Chetan Andhare
                  </p>
                </div>
                <a className="text-blue-600" href="#" target="_blank">
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">5</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    The Role of Forensic Data in Cyber Security{" "}
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Ayush D.
                    Ther, Soham M. Sawalakhe, Ayush S. Shirbhate, Bhushan S.
                    Onkar, Prof. Dhiraj D. Shirbhate
                  </p>
                </div>
                <a className="text-blue-600" href="#" target="_blank">
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">6</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name "Beta Update"</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">7</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">8</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">9</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">10</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">11</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">12</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">13</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">14</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">15</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">16</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">17</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">18</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Test Name</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Test authors
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_1/IRJTAE_V1A2.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* VOL-1, ISSUE-1 */}
          <div className="bg-white rounded-lg px-6 py-8 border-[1px] border-gray-300 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <h2 className="text-xl font-semibold pb-6">
              Volume 1, Issue 1, April-May 2024
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
                  <p className="pt-2 text-[12px]">
                    Authors: Parth Thakare, Priyanshu Hamand
                  </p>
                  <p className="text-[12px]">Published on: 28 May 2024</p>
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
                  <p className="pt-2 text-[12px]">
                    Authors: Bhavesh Karnewar, Prof. Dhiraj D. Shirbhate
                  </p>
                  <p className="text-[12px]">Published on: 22 May 2024</p>
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
                  <p className="pt-2 text-[12px]">Authors: Aman Deepak Yadav</p>
                  <p className="text-[12px]">Published on: 07 May 2024</p>
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
                  <p className="pt-2 text-[12px]">Authors: Shreyash Purankar</p>
                  <p className="text-[12px]">Published on: 24 April 2024</p>
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
                  <p className="pt-2 text-[12px]">
                    Authors: Atal Dubey, Khushi Chaturkar
                  </p>
                  <p className="text-[12px]">Published on: 15 April 2024</p>
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
                  <p className="pt-2 text-[12px]">Authors: Rajat Pawar</p>
                  <p className="text-[12px]">Published on: 12 April 2024</p>
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
                  <p className="pt-2 text-[12px]">
                    Authors: Prem Borkar, Yash Mukherjee
                  </p>
                  <p className="text-[12px]">Published on: 12 April 2024</p>
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
