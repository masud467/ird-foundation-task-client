import React from "react";
import { FaSearch } from "react-icons/fa"; // Search icon
import { BiCopy, BiBookmark, BiShareAlt } from "react-icons/bi";
import { IoBulbOutline } from "react-icons/io5";
import { FiInfo } from "react-icons/fi"; // Info icon
import Profile from "./Profile";

const Main = () => {
  const duas = [
    {
      id: 1,
      title: "The servant is dependent on his Lord #1",
      content:
        "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
      reference: "Surah Al-Fatir 35:15",
    },
    {
      id: 2,
      title: "The servant is dependent on his Lord #2",
      content:
        "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): 'And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.' (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.",
      reference: "",
    },
    {
      id: 3,
      title: "The servant is dependent on his Lord #3",
      content:
        "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): 'And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.' (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.",
      reference: "",
    },
  ];

  return (
    <div className=" min-h-screen">
      {/* Search Bar */}
      <div className="flex gap-28">
        <div className="flex w-80 items-center bg-white rounded-lg  py-1 px-4 mb-4 ml-auto">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className=" left-1 w-full px-4 py-2 border-none focus:outline-none"
          />
          <FaSearch className=" text-gray-400" />
        </div>
        <div>
          <Profile></Profile>
        </div>
      </div>

      {/* Section Title */}
      <div className="bg-green-100 text-green-700 font-semibold text-lg rounded-md py-2 px-4 mb-4">
        Section: The servant is dependent on his Lord
      </div>

      {/* Dua Cards */}
      <div className="overflow-y-auto h-[60vh] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300">
        <div className="space-y-4">
          {duas.map((dua) => (
            <div
              key={dua.id}
              className="bg-white rounded-lg  p-4 space-y-2 border"
            >
              {/* Title */}
              <h2 className="text-green-600 font-semibold text-lg">
                {dua.title}
              </h2>

              {/* Content */}
              <p className="text-gray-700 text-sm">{dua.content}</p>

              {/* Reference */}
              {dua.reference && (
                <p className=" text-lg font-medium">
                  <span className="text-green-500">Reference:</span> {dua.reference}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-8 text-gray-500">
                <BiCopy className="cursor-pointer hover:text-green-600 text-2xl" />
                <BiBookmark className="cursor-pointer hover:text-green-600 text-2xl" />
                <IoBulbOutline className="cursor-pointer hover:text-green-600 text-2xl" />
                <FiInfo className="cursor-pointer hover:text-green-600 text-2xl" />
                <BiShareAlt className="cursor-pointer hover:text-green-600 text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
