"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"; // For the search icon
import { IoIosArrowForward } from "react-icons/io"; // For the forward arrow icon
import { FiLayers } from "react-icons/fi"; // Example icon for categories

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [duas, setDuas] = useState([]); // New state for Duas
  const [expandedCategoryId, setExpandedCategoryId] = useState(null); // Track the expanded category
  const [expandedSubcategoryId, setExpandedSubcategoryId] = useState(null); // Track the expanded subcategory

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResponse, subcategoriesResponse, duasResponse] = await Promise.all([
          fetch("http://localhost:3003/categories"),
          fetch("http://localhost:3003/subcategories"),
          fetch("http://localhost:3003/duas"),
        ]);

        const categoriesData = await categoriesResponse.json();
        const subcategoriesData = await subcategoriesResponse.json();
        const duasData = await duasResponse.json();

        setCategories(categoriesData);
        setSubcategories(subcategoriesData);
        setDuas(duasData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filterCategories = categories.filter((category) =>
    category.cat_name_en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getSubcategoriesForCategory = (categoryId) => {
    return subcategories.filter((sub) => sub.cat_id === categoryId);
  };

  const getDuasForSubcategory = (subcategoryId) => {
    return duas.filter((dua) => dua.subcat_id === subcategoryId);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategoryId((prevId) => (prevId === categoryId ? null : categoryId));
  };

  const toggleSubcategory = (subcategoryId) => {
    setExpandedSubcategoryId((prevId) => (prevId === subcategoryId ? null : subcategoryId));
  };

  

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch className="absolute top-3 right-3 text-gray-400" />
      </div>

      <div className="overflow-y-auto h-[60vh]">
        {filterCategories.map((category) => (
          <div
            key={category.id}
            className="border-b pb-4 mb-4 last:border-b-0 last:pb-0"
          >
            <div
              className="flex items-center justify-between mb-2 cursor-pointer"
              onClick={() => toggleCategory(category.id)} // Toggle subcategories on click
            >
              <div className="flex items-center gap-2">
                <FiLayers className="text-2xl text-green-500" />
                <div>
                  <h3 className="text-lg font-semibold">
                    {category.cat_name_en}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Subcategory: {category.no_of_subcat}
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold bg-green-100 text-green-600 px-2 py-1 rounded-md">
                {category.no_of_dua} Duas
              </span>
            </div>

            {/* Show subcategories only if the category is expanded */}
            {expandedCategoryId === category.id && (
              <ul className="pl-8 list-disc text-sm text-gray-600">
                {getSubcategoriesForCategory(category.id).map((subcat) => (
                  <li key={subcat.subcat_id} className="my-2">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleSubcategory(subcat.subcat_id)} // Toggle Duas on click
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        {subcat.subcat_name_en}
                      </div>
                      <IoIosArrowForward
                        className={`transform transition-transform ${
                          expandedSubcategoryId === subcat.subcat_id ? "rotate-90" : ""
                        }`}
                      />
                    </div>

                    {/* Show Duas only if the subcategory is expanded */}
                    {expandedSubcategoryId === subcat.subcat_id && (
                      <ul className="pl-8 list-decimal text-gray-600 mt-2">
                        {getDuasForSubcategory(subcat.subcat_id).map((dua) => (
                          <li key={dua.id} className="my-1">
                            {dua.dua_name_en}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
