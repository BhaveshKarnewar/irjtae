import React from "react";

export default function Archives() {
  return (
    <>
      <div className="inline-block w-[75%] ">
        <div className="pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-white font-semibold bg-blue-600 text-2xl rounded-lg shadow-2xl">
            CURRENT ISSUE
          </div>

          <div className="bg-white rounded-lg px-6 py-8 border-[1px] border-gray-300 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <h2 className="text-xl font-semibold pb-12">
              Volume 1 Issue 1, April 2024
            </h2>

            {/* index srNo,Paper, download */}
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
                    Paper mama: Something Interesting
                  </h1>
                  <p className="pt-2 text-[16px]">Author: Author name</p>
                  <p className="text-[16px]">
                    Published on:{" "}
                    <a className="text-blue-600" href="">
                      date
                    </a>
                  </p>
                </div>

                <a
                  className="text-blue-600
                "
                  href="Images/IRJTAE_Copyright.pdf "
                >
                  Download
                </a>
              </div>

              <hr />

              <div className="flex justify-between px-12 text-[16px]">
                <p>2</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Paper Title: Something Interesting
                  </h1>
                  <p className="pt-2 text-[16px]">Author: Author name</p>
                  <p className="text-[16px]">
                    Published on:{" "}
                    <a className="text-blue-600" href="">
                      date
                    </a>
                  </p>
                </div>

                <a
                  className="text-blue-600
                "
                  href=""
                >
                  Download
                </a>
              </div>
              <hr />
              <div className="flex justify-between px-12 text-[16px]">
                <p>3</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Paper Title: Something Interesting
                  </h1>
                  <p className="pt-2 text-[16px]">Author: Author name</p>
                  <p className="text-[16px]">
                    Published on:{" "}
                    <a className="text-blue-600" href="">
                      date
                    </a>
                  </p>
                </div>

                <a
                  className="text-blue-600
                "
                  href=""
                >
                  Download
                </a>
              </div>
              <hr />
              <div className="flex justify-between px-12 text-[16px]">
                <p>4</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Paper Title: Something Interesting
                  </h1>
                  <p className="pt-2 text-[16px]">Author: Author name</p>
                  <p className="text-[16px]">
                    Published on:{" "}
                    <a className="text-blue-600" href="">
                      date
                    </a>
                  </p>
                </div>

                <a
                  className="text-blue-600
                "
                  href=""
                >
                  Download
                </a>
              </div>
              <hr />
              <div className="flex justify-between px-12 text-[16px]">
                <p>5</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Paper Title: Something Interesting
                  </h1>
                  <p className="pt-2 text-[16px]">Author: Author name</p>
                  <p className="text-[16px]">
                    Published on:{" "}
                    <a className="text-blue-600" href="">
                      date
                    </a>
                  </p>
                </div>

                <a
                  className="text-blue-600
                "
                  href=""
                >
                  Download
                </a>
              </div>
              <hr />
              <div className="flex justify-between px-12 text-[16px]">
                <p>6</p>
                <div className="text-left w-[60%]">
                  <h1 className="font-semibold">
                    Paper Title: Something Interesting
                  </h1>
                  <p className="pt-2 text-[16px]">Author: Author name</p>
                  <p className="text-[16px]">
                    Published on:{" "}
                    <a className="text-blue-600" href="">
                      date
                    </a>
                  </p>
                </div>

                <a
                  className="text-blue-600
                "
                  href=""
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
