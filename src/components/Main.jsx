"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiCopy, BiBookmark, BiShareAlt } from "react-icons/bi";
import { IoBulbOutline } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import Profile from "./Profile";
import Categories from "./Categories";
import Sidebar from "./Sidebar";

const Main = () => {
  const [duas, setDuas] = useState([]);
  const [filteredDuas, setFilteredDuas] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [loadingStates, setLoadingStates] = useState({
    initial: true,
    categoryChange: false,
  });
  const [preloadedData, setPreloadedData] = useState({
    categoryData: {},
    subcategoryData: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [duasResponse, categoriesResponse, subcategoriesResponse] =
          await Promise.all([
            fetch("https://ird-foundation-task-server.vercel.app/duas"),
            fetch("https://ird-foundation-task-server.vercel.app/categories"),
            fetch(
              "https://ird-foundation-task-server.vercel.app/subcategories"
            ),
          ]);

        const [duasData, categoriesData, subcategoriesData] = await Promise.all(
          [
            duasResponse.json(),
            categoriesResponse.json(),
            subcategoriesResponse.json(),
          ]
        );

        // Preprocess and organize data
        const categoryMapping = {};
        categoriesData.forEach((category) => {
          categoryMapping[category.cat_id] = {
            duas: duasData.filter((dua) => dua.cat_id === category.cat_id),
            subcategories: subcategoriesData.filter(
              (sub) => sub.cat_id === category.cat_id
            ),
          };
        });

        setDuas(duasData);
        setFilteredDuas(duasData);
        setCategories(categoriesData);
        setSubcategories(subcategoriesData);
        setPreloadedData({
          categoryData: categoryMapping,
          subcategoryData: {},
        });
        setLoadingStates({ initial: false, categoryChange: false });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleContentSelect = (selection) => {
    switch (selection.type) {
      case "category": {
        const categoryDuas =
          preloadedData.categoryData[selection.id]?.duas || [];
        const category = categories.find((cat) => cat.cat_id === selection.id);
        setFilteredDuas(categoryDuas);
        setSelectedCategory(category?.cat_name_en || "");
        setSelectedSubcategory("");
        break;
      }
      case "subcategory": {
        const subcategoryDuas = duas.filter(
          (dua) => dua.subcat_id === selection.id
        );
        const subcategory = subcategories.find(
          (sub) => sub.subcat_id === selection.id
        );
        setFilteredDuas(subcategoryDuas);
        setSelectedSubcategory(subcategory?.subcat_name_en || "");
        break;
      }
      case "dua": {
        const selectedDua = duas.filter((dua) => dua.dua_id === selection.id);
        setFilteredDuas(selectedDua);
        break;
      }
      default:
        setFilteredDuas(duas);
    }
    setIsDrawerOpen(false);
  };

  const renderDuaCard = (dua, index) => (
    <div
      key={`${dua.cat_id}-${dua.subcat_id}-${dua.dua_id}-${index}`}
      className="bg-white rounded-lg p-4 space-y-2 border transition-all duration-300 ease-in-out"
    >
      <h2 className="text-green-600 font-semibold text-lg">
        {dua.dua_name_en}
      </h2>
      <p className="text-gray-700 text-sm">{dua.top_en}</p>
      {dua.refference_en && (
        <p className="text-lg font-medium">
          <span className="text-green-500">Reference:</span> <br />
          {dua.refference_en}
        </p>
      )}
      <div className="flex items-center justify-end space-x-8 text-gray-500">
        <BiCopy className="cursor-pointer hover:text-green-600 text-2xl" />
        <BiBookmark className="cursor-pointer hover:text-green-600 text-2xl" />
        <IoBulbOutline className="cursor-pointer hover:text-green-600 text-2xl" />
        <FiInfo className="cursor-pointer hover:text-green-600 text-2xl" />
        <BiShareAlt className="cursor-pointer hover:text-green-600 text-2xl" />
      </div>
    </div>
  );

  return (
    <div className="bg-[#EBEEF2] h-screen py-10 overflow-hidden">
      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <div
        className={`fixed inset-y-0 left-0 w-80 bg-white z-50 transform transition-transform duration-300 lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <Categories onSelectContent={handleContentSelect} />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-12 gap-4 mx-8">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3">
          <h1 className="text-xl font-semibold pb-5">Dua Pages</h1>
          <Categories onSelectContent={handleContentSelect} />
        </div>

        <div className="col-span-8">
          <div className="flex gap-28">
            <div className="flex w-80 items-center bg-white rounded-lg py-1 px-4 mb-4 ml-auto">
              <input
                type="text"
                placeholder="Search by Dua Name"
                className="left-1 w-full px-4 py-2 border-none focus:outline-none"
              />
              <FaSearch className="text-gray-400" />
            </div>
            <div>
              <Profile />
            </div>
          </div>

          <div className="overflow-y-auto h-[60vh] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300">
            <div className="min-h-[600px] transition-all duration-300 ease-in-out">
              {selectedCategory && (
                <div className="bg-green-100 text-green-700 font-semibold text-lg rounded-md py-2 px-4 mb-4 transition-opacity duration-300">
                  Section: {selectedCategory}
                  {selectedSubcategory && ` > ${selectedSubcategory}`}
                </div>
              )}
              <div className="space-y-4 transition-all duration-300">
                {filteredDuas.map((dua, index) => renderDuaCard(dua, index))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden px-4">
        <div className="flex items-center justify-between mb-4">
          <button
            className="p-2 bg-white rounded-lg"
            onClick={() => setIsDrawerOpen(true)}
          >
            <HiMenu className="text-2xl" />
          </button>
          <div className="flex items-center gap-4">
            <div className="flex w-full items-center bg-white rounded-lg py-1 px-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-2 py-1 border-none focus:outline-none"
              />
              <FaSearch className="text-gray-400" />
            </div>
            <Profile />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-150px)]">
          {selectedCategory && (
            <div className="bg-green-100 text-green-700 font-semibold text-base rounded-md py-2 px-4 mb-4">
              Section: {selectedCategory}
              {selectedSubcategory && ` > ${selectedSubcategory}`}
            </div>
          )}
          <div className="space-y-4">
            {filteredDuas.map((dua, index) => renderDuaCard(dua, index))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
