import React from "react";

export default function SubmitPaperOnline() {
  const displayMessage = () => {
    alert(
      "Article submitted successfully! You will be notified via email after the article is reviewed."
    );
  };

  return (
    <div className="inline-block w-[75%] ">
      <div className="pr-8 pb-8 grid gap-4">
        <div className="p-6 border-[1px] border-gray-300 text-center text-blue-700 font-semibold bg-white text-3xl rounded-lg shadow-2xl">
          SUBMIT PAPER ONLINE
        </div>

        <div className="bg-white rounded-lg px-8 py-8 border-[1px] border-gray-300  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
          <div className="">
            <h1 className="text-3xl font-semibold pb-6">Add Paper Details </h1>
            <hr />
            <form
              id="form"
              onSubmit={displayMessage}
              className="text-xl pt-6 grid gap-4"
            >
              <div className="grid grid-cols-2 gap-12">
                <div className="col-span-1 flex justify-between">
                  <p>Volume :</p>
                  <p className="font-semibold">Volume 1 Issue 2, May 2024</p>
                </div>
                <div className="col-span-1 flex justify-between">
                  <p>Research Area :</p>
                  <select className="w-[40%] sm:mr-[20%]  h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400">
                    <option value="" disabled selected>
                      Select one
                    </option>
                    {researchArea.map((item) => {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                    <option value="">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label>
                  <p className="inline-block w-[25%]">
                    Paper title <span className="text-red-600 text-xl">*</span>
                  </p>
                </label>
                <input
                  type="text"
                  className="w-[65%] h-[50px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400 font-semibold"
                  required
                  placeholder="Enter paper name"
                />
              </div>
              <div className="flex">
                <p className="inline-block w-[25%]">
                  Abstract/Introduction{" "}
                  <span className="text-red-600 text-xl">*</span>
                </p>

                <textarea
                  type="text"
                  className="w-[65%] h-[100px] p-2 rounded-md bg-gray-100 border-[1px] border-gray-400 text-lg"
                  required
                  placeholder="Enter your abstract here..."
                />
              </div>
              <div className="pb-4">
                <label>
                  <p className="inline-block w-[25%]">
                    Country <span className="text-red-600 text-xl">*</span>
                  </p>
                </label>
                <select
                  className="w-[20%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400"
                  required
                >
                  <option className="text-gray-400" value="" disabled selected>
                    Choose one
                  </option>
                  {country.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>

              <hr className="h-0.5  bg-gray-400" />

              {/* Add Author */}
              <h1 className="text-3xl font-semibold">Add Author</h1>
              <div className="grid grid-cols-4 gap-6 font-semibold">
                <p className="col-span-1">Name</p>
                <p className="col-span-1">Email</p>
                <p className="col-span-1">Phone</p>
                <p className="col-span-1">Institute / Organizations </p>
              </div>
              <hr />
              <div className="grid grid-cols-4 gap-6 ">
                <input
                  type="text"
                  placeholder="Author name"
                  className="col-span-1 rounded-md p-1  text-lg  pl-2 bg-gray-100 border-[1px] border-gray-400"
                />
                <input
                  type="text"
                  placeholder="Author email"
                  className="col-span-1 rounded-md p-1 text-lg  pl-2 bg-gray-100 border-[1px] border-gray-400"
                />
                <input
                  type="number"
                  placeholder="Contact number"
                  className="col-span-1 rounded-md p-1 text-lg  pl-2 bg-gray-100 border-[1px] border-gray-400 "
                />
                <input
                  type="text"
                  placeholder="College/institute"
                  className="col-span-1 rounded-md p-1 text-lg  pl-2 bg-gray-100 border-[1px] border-gray-400"
                />
              </div>

              <hr className="h-0.5  bg-gray-400" />

              {/* Upload paper */}
              <h1 className="text-3xl font-semibold">Upload Paper:</h1>

              <div className="">
                <label>
                  <p className="inline-block w-[25%]">
                    File Upload <span className="text-red-600 text-xl">*</span>{" "}
                    <br />
                    <span className="text-lg text-red-500">
                      (Upload Only .Doc/.Docx File )
                    </span>
                  </p>
                </label>
                <input
                  type="file"
                  className="w-[40%] h-[50px] px-4 py-2 rounded-md bg-gray-100 border-[1px] border-gray-400 items-center "
                  required
                />
              </div>

              <div className="py-4">
                <label>
                  <p className="inline-block w-[25%]">
                    Enter Captcha Code{" "}
                    <span className="text-red-600 text-xl">*</span>
                  </p>
                </label>
                <input
                  className="w-[20%] h-[40px] px-4 rounded-md bg-gray-100 border-[1px] border-gray-400"
                  required
                />

                <img
                  className="inline-block sm:ml-[10%] h-[70px] border-[1px] border-gray-400  rounded-md"
                  src="public/captcha/captcha.jpg"
                  alt=""
                />
              </div>

              <div className=" text-center">
                <button
                  type="submit"
                  className="py-1  w-[100px] hover:scale-110 transition duration-300 bg-blue-500 hover:bg-blue-800 text-2xl text-white rounded-lg mt-4 text-center
            "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Raw data

const researchArea = [
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Chemical Engineering",
  "Computer Engineering",
  "Aerospace Engineering",
  "Biomedical Engineering",
  "Environmental Engineering",
  "Industrial Engineering",
  "Materials Engineering",
  "Petroleum Engineering",
  "Software Engineering",
  "Nuclear Engineering",
  "Ocean Engineering",
  "Mining Engineering",
  "Systems Engineering",
  "Automotive Engineering",
  "Structural Engineering",
  "Geotechnical Engineering",
  "Robotics Engineering",
  "Telecommunications Engineering",
  "Biomechanical Engineering",
  "Renewable Energy Engineering",
  "Control Engineering",
  "Water Resources Engineering",
  "Fire Protection Engineering",
];

const country = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
