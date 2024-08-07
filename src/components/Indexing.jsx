import React from "react";

export default function Indexing() {
  return (
    <>
      <div className="inline-block sm:w-[75%] px-4 sm:px-0 ">
        <div className="sm:pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-2xl rounded-lg shadow-2xl">
            INDEXING
          </div>

          <div className="bg-white rounded-lg px-[15%] py-12 border-[1px] border-gray-300 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex flex-wrap gap-x-20 gap-y-8 justify-center">
            <a
              href="https://scholar.google.com/citations?hl=en&user=o_3Wk-cAAAAJ"
              target="_blank"
            >
              <img
                className="h-[160px] w-[230px]"
                src="https://cdn1.lib.jmu.edu/wp-content/uploads/Screenshot-2023-10-25-at-5.01.23-PM.png"
                alt=""
              />
            </a>

            <a href="https://www.slideshare.net/irjtae" target="_blank">
              <img
                className="h-[160px] w-[230px]"
                src="https://cdn2.downdetector.com/static/uploads/logo/logo-slideshare.png"
                alt=""
              />
            </a>
            <a href="https://zenodo.org/" target="_blank">
              <img
                className="h-[160px] w-[230px]"
                src="https://seekvectorlogo.com/wp-content/uploads/2023/03/zenodo-vector-logo-small.png"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="h-[160px] w-[230px]"
                src="https://library.kln.ac.lk/images/2021/06/22/plagiarism_stop.jpg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="h-[160px] w-[230px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijvab52o5JsWMbmGsFzOKKfoj1KtDKZZ_qQ&s"
              />
            </a>
            <a href="https://issuu.com/" target="_blank">
              <img
                className="h-[160px] w-[230px]"
                src="https://mma.prnewswire.com/media/1338403/Issuu_Logo.jpg?p=facebook"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
