import React from "react";

export default function PayPublicationFee() {
  const displayMessage = () => {
    alert("Invalid Paper ID");
  };

  return (
    <>
      <div className="block sm:inline-block sm:w-[75%] ">
        <div className="sm:pr-8 pb-8 grid gap-4">
          <div className="p-4 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-2xl rounded-lg shadow-2xl">
            PAY PUBLICATION FEE
          </div>

          <div className="bg-white rounded-lg px-8 py-8 border-[1px] border-gray-300  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <div className="">
              <h1 className="text-xl font-semibold pb-6">
                Add Payment Details
              </h1>
              <hr />
              <form
                id="form"
                onSubmit={displayMessage}
                className="text-lg pt-6 grid gap-4"
              >
                <div className="grid grid-cols-2 gap-12">
                  <div className="sm:col-span-1 flex justify-between">
                    <p>
                      Paper Id <span className="text-red-600 text-xl">*</span>
                    </p>
                    <input
                      className="sm:w-[48%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 "
                      placeholder="Enter paper key"
                      required
                    />
                  </div>
                  <br className="sm:hidden" />
                  <div className="sm:col-span-1 flex justify-between">
                    <p>
                      Author Name{" "}
                      <span className="text-red-600 text-xl">*</span>
                    </p>
                    <input
                      placeholder="Enter name"
                      className=" sm:w-[48%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 "
                      required
                    />
                  </div>
                </div>

                <div>
                  <label>
                    <p className="inline-block w-[25%]">
                      Paper title{" "}
                      <span className="text-red-600 text-xl">*</span>
                    </p>
                  </label>
                  <input
                    type="text"
                    className="w-[75%] h-[45px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 "
                    required
                    placeholder="Enter paper name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-12">
                  <div className="col-span-1 flex justify-between">
                    <p>
                      Email Id <span className="text-red-600 text-xl">*</span>
                    </p>
                    <input
                      placeholder="Enter email"
                      className="sm:w-[48%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 "
                      required
                    />
                  </div>
                  <br className="sm:hidden" />
                  <div className="col-span-1 flex justify-between">
                    <p>
                      Mobile Number{" "}
                      <span className="text-red-600 text-xl">*</span>
                    </p>
                    <input
                      type="number"
                      placeholder="Contact Number"
                      className=" sm:w-[48%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 "
                      required
                    />
                  </div>
                </div>
                {/* grid was there in the class but due to hidden i removed it */}
                <div className=" grid-cols-2 gap-12 hidden">
                  <div className="col-span-1 flex justify-between">
                    <p>
                      Payment Currency{" "}
                      <span className="text-red-600 text-xl">*</span>
                    </p>
                    <select
                      className="sm:w-[48%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 "
                      required
                    >
                      <option value="" disabled selected>
                        Select one
                      </option>
                      <option value="Indian">Indian</option>
                      <option value="Foreign">Foreign</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex justify-between">
                    <p>
                      Payment Mode{" "}
                      <span className="text-red-600 text-xl">*</span>
                    </p>
                    <select
                      className="sm:w-[48%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 "
                      required
                    >
                      <option value="" disabled selected>
                        Select one
                      </option>
                      <option value="Indian">
                        By Indian Credit/Debit Card/UPI/Wallet
                      </option>
                      <option value="Foreign">International Payment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label>
                    <p className="inline-block w-[25%]">
                      Amount to Pay{" "}
                      <span className="text-red-600 text-xl">*</span>
                    </p>
                  </label>
                  <input
                    type="number"
                    className="w-[75%] h-[45px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400"
                    required
                    placeholder="Enter Amount"
                  />
                </div>

                <div className=" text-center">
                  <button
                    type="submit"
                    className="py-1  w-[100px] hover:scale-110 transition duration-300 bg-blue-500 hover:bg-blue-800 text-xl text-white rounded-lg mt-4 text-center
            "
                  >
                    Save
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
