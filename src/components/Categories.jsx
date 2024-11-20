import React from "react";
import { FaSearch } from "react-icons/fa"; // For the search icon
import { IoIosArrowForward } from "react-icons/io"; // For the forward arrow icon
import { FiLayers } from "react-icons/fi"; // Example icon for categories

const Categories = () => {
  const categories = [
    {
      title: "Dua's Importance",
      subCategory: 7,
      count: 21,
      items: [
        "The servant is dependent on his Lord",
        "The most important thing to ask Allah for",
        "Ask for paradise & protection from fire",
        "Dua to remain steadfast on the religion",
        "Dua of good outcome in all deeds",
        "Seeking whatever good Allah can bestow",
        "Shelter from horror, misery, evil consequences, and rejoicing of the enemy",
      ],
    },
    {
      title: "Dua's Excellence",
      subCategory: 1,
      count: 15,
      items: [],
    },
    {
      title: "Time of Dua",
      subCategory: 0,
      count: 30,
      items: [],
    },
    {
      title: "Eat of Dua",
      subCategory: 5,
      count: 30,
      items: [],
    },
  ];

  return (
  
    <div className="bg-white h-[840px] rounded-lg shadow-lg p-4">
      
      {/* Header */}
      <div className="bg-green-500 text-white text-center rounded-md py-2 font-bold">
        Categories
      </div>

      {/* Search Box */}
      <div className="relative my-4">
        <input
          type="text"
          placeholder="Search Categories"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <FaSearch className="absolute top-3 right-3 text-gray-400" />
      </div>

      {/* Categories List */}
      <div className="overflow-y-auto h-[60vh]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border-b pb-4 mb-4 last:border-b-0 last:pb-0"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FiLayers className="text-2xl text-green-500" />
                <div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="text-sm text-gray-500">
                    Subcategory: {category.subCategory}
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold bg-green-100 text-green-600 px-2 py-1 rounded-md">
                {category.count} Duas
              </span>
            </div>

            {/* Category Items */}
            <ul className="pl-8 list-disc text-sm text-gray-600">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 my-1">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Categories;
