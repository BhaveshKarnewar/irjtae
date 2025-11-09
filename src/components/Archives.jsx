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

          {/* VOL-2, ISSUE-1 */}
          <div className="bg-white rounded-lg px-6 py-8 border-[1px] border-gray-300 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <h2 className="text-xl font-semibold pb-6">
              Volume 2, Issue 1, September-November 2025
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
                    Emotion Detector: Deep Learning Approaches For Human Emotion
                    Recognition
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Komal
                    Shegokar, Ketki Lokhande, Kartiki Yende, Ishwari Jumle,
                    Dhanashree Ikhar, Ashish Mahalle
                  </p>
                </div>

                <a
                  className="text-blue-600
                "
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_01.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>

              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">2</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">Legal Document Summarizer</h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Mahesh
                    Phalake, Joy Lonare, Abhishek Mande and Athrava Rakhunde
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_002.pdf"
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
                    Library Management System: Review of QR Code Technology for
                    Modernizing Library Operations
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Uday
                    Khandare, Shivam Sharma, Shivaji Mule and Shreyash Meshram
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_003.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">4</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    TradeMonk – The Integrated Social Trading Platform
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Suhani
                    Futane, Guarav Bawankar, Nayan Bhutada and Vishal Narwade
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_004.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">5</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Secure Chat App with End-To-End Encryption Using
                    Post-Quantum Cryptography and AI-Based Anomaly Detection
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Sejal Pund,
                    Pooja Rode, Sanchita Sande and Rutuja Tayade
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_005.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">6</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Legal Ease - A Review on Mobile-Based Platforms for Online
                    Advocate Consultation
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Jagadish
                    Rathod, Vedprasad Takey, Rohit Thakare and Om Suklikar
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_006.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">7</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Climate and Pollution Monitoring Platform
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Shreya
                    Deshpande, Piyush Shirke, Ayush Kute and Rasika Sutavane
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_007.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">8</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    YouTube Analysis: Leveraging Machine Learning and
                    Visualization for Intelligent Content Insights
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Sharada
                    Namdev Bhagat, Neha Pandurang Bhokare, Tejaswi Rajeshpant
                    Sawarkar and Aditya Nandkishor Ingale
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_008.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">9</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    A Multi-Agent Generative AI Framework for a Next-Generation
                    Chat-GPT Clone with Self-Adaptive Memory and Multimodal
                    Capabilities
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Anushka
                    Chaturkar, Manav Dhaye, Sanjana Sutrave and Yash Dhoke
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_009.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">10</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Krishi AI: An Artificial Intelligence–Based Framework for
                    Smart and Sustainable Agriculture
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Tejaswini
                    Ghore, Rucha Raut, Punam Thakre and Gauri Wande
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_010.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">11</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Enhancing Healthcare Customer Support Using Agent-Based AI
                    Chatbots
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Nikita
                    Dahake, Tapasya Mendole, Akanksha Nandanwar and Kamini Patil
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_011.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">12</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Community Medicine Donation and Request System
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Samiksha
                    Bobade, Prachi Dhande, Shreya Dike and Dhanshree Ghogare
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_012.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">13</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    AI Interview Web Application
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Sudarshan
                    Tayde, Tejas Pokale, Samruddhi Gulhane and Laxmi Sudke
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_013.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">14</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Routelytics - A Smart Travel Assistant
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Nishar
                    Sundar Chavan, Sharyu Tulsiram Bidwai, Gayatri Chandrakant
                    Darane and Apeksha Ravindra Bhagat
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_014.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">15</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    PrepZone - A Review on Adaptive Online Platforms for
                    Aptitude Preparation and Assessment
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Tanvi
                    Shewale, Gayatri Rodge, Jagruti Somwanshi and Babita Narwade
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_015.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">16</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Snap Studio: AI-powered Image Generation and Enhancement
                    Tool
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Vikas
                    Kasolkar, Ayush Chavan, Fardin Chavan and Krushna Babhulkar
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_016.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">17</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Deepfake Detection System: A Review
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Sakshi
                    Khode, Shruti Wadhekar, Yamini Babulkar and Mehwish Sheikh
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_017.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">18</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Business Analyst Agent – AI-driven Executive Insights
                    Generator
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Rounak
                    Arwar, Gauri Ingole, Rahul Jarad and Vivek Rekulwar
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_018.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p id="srno">19</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Next-generation Library Management System
                  </h1>
                  <p className="pt-2 text-[12px]">
                    <span className="font-semibold">Authors:</span> Aditya
                    Karbhal, Aniket Solanki, Sunil Bidve and Ansh Shahare
                  </p>
                </div>
                <a
                  className="text-blue-600"
                  href="Papers/Volume_2/Issue_1/IRJATE_V2I1_019.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>

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
