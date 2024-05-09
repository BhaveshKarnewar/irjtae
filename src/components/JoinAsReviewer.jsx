import React from "react";

export default function JoinAsReviewer() {
  const displayMessage = () => {
    alert("Request recieved! We will connect with you soon");
  };
  const reset = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="block sm:inline-block sm:w-[75%]  ">
        <div className="sm:pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-2xl rounded-lg shadow-2xl">
            JOIN AS REVIEWER
          </div>

          <div className="bg-white rounded-lg px-8 py-8 border-[1px] border-gray-300  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            {/* Contact request */}
            <div className="">
              <h1 className="text-2xl font-semibold pb-4">
                Advisory/Reviewer Board Membership Form
              </h1>
              <hr />
              <form
                id="form"
                onSubmit={displayMessage}
                className="text-lg pt-6 grid gap-2"
              >
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Full name</p>
                  </label>
                  <input
                    type="text"
                    className="w-[60%] sm:w-[30%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 text-[16px]"
                    required
                    placeholder="Type full name"
                  />
                </div>
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Email Id</p>
                  </label>
                  <input
                    type="text"
                    className="w-[60%] sm:w-[30%]  h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 text-[16px]"
                    required
                    placeholder="Type email id"
                  />
                </div>
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Mobile Number</p>
                  </label>
                  <input
                    type="number"
                    className="w-[60%] sm:w-[30%]  h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 text-[16px]"
                    required
                    placeholder="Type mobile number"
                  />
                </div>
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Designation</p>
                  </label>
                  <input
                    type="text"
                    className="w-[60%] sm:w-[30%]  h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 text-[16px]"
                    required
                    placeholder="Type designation"
                  />
                </div>
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Qualification</p>
                  </label>
                  <input
                    type="text"
                    className="w-[60%] sm:w-[30%]  h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 text-[16px]"
                    required
                    placeholder="Type qualification"
                  />
                </div>
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Specialization</p>
                  </label>
                  <input
                    type="text"
                    className="w-[60%] sm:w-[30%]  h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 text-[16px]"
                    required
                    placeholder="Type specialization"
                  />
                </div>
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Experience</p>
                  </label>
                  <input
                    type="number"
                    className="w-[60%] sm:w-[30%]  h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 text-[16px]"
                    required
                    placeholder="Experience in years"
                  />
                </div>

                <div>
                  <label>
                    <p className="inline-block w-[30%]">Address</p>
                  </label>
                  <input
                    type="text"
                    className="w-[60%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 text-[16px]"
                    required
                    placeholder="Type address"
                  />
                </div>

                <div>
                  <label>
                    <p className="inline-block w-[30%]">Resume</p>
                  </label>

                  <input
                    type="file"
                    className="bg-gray-100 border-[1px] border-gray-400 p-[4px] text-[16px] rounded-md w-[60%] sm:w-[30%]"
                    required
                  />
                </div>
                <div>
                  <label>
                    <p className="inline-block w-[30%]">Display Photo </p>
                  </label>

                  <input
                    type="file"
                    className="bg-gray-100 border-[1px] border-gray-400 p-[4px] text-[16px] rounded-md w-[60%] sm:w-[30%]"
                    required
                  />
                </div>

                {/* submit button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="py-1 px-4 w-[100px] hover:scale-110 transition duration-500 bg-blue-700 text-lg text-white rounded-lg mt-4
                "
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={reset}
                    className="py-1 px-4 w-[100px] hover:scale-110 transition duration-500 bg-red-700 text-lg text-white rounded-lg mt-4 ml-4
                "
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
