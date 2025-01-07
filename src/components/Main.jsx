"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiCopy, BiBookmark, BiShareAlt } from "react-icons/bi";
import { IoBulbOutline } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import Profile from "./Profile";
import Categories from "./Categories";
import Sidebar from "./Sidebar";
import Image from "next/image";

const Main = () => {
  const [duas, setDuas] = useState([]);
  const [filteredDuas, setFilteredDuas] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [duasResponse, categoriesResponse, subcategoriesResponse] =
          await Promise.all([
            fetch("http://localhost:3003/duas"),
            fetch("http://localhost:3003/categories"),
            fetch("http://localhost:3003/subcategories"),
          ]);

        const duasData = await duasResponse.json();
        const categoriesData = await categoriesResponse.json();
        const subcategoriesData = await subcategoriesResponse.json();

        setDuas(duasData);
        setFilteredDuas(duasData);
        setCategories(categoriesData);
        setSubcategories(subcategoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleContentSelect = (selection) => {
    switch (selection.type) {
      case "category":
        setFilteredDuas(duas.filter((dua) => dua.cat_id === selection.id));
        const category = categories.find((cat) => cat.cat_id === selection.id);
        setSelectedCategory(category?.cat_name_en || "");
        setSelectedSubcategory("");
        break;
      case "subcategory":
        setFilteredDuas(duas.filter((dua) => dua.subcat_id === selection.id));
        const subcategory = subcategories.find(
          (sub) => sub.subcat_id === selection.id
        );
        setSelectedSubcategory(subcategory?.subcat_name_en || "");
        break;
      case "dua":
        setFilteredDuas(duas.filter((dua) => dua.dua_id === selection.id));
        break;
      default:
        setFilteredDuas(duas);
    }
  };

  return (
    <div className="bg-[#EBEEF2] h-screen py-10 overflow-hidden">
      <div className="grid grid-cols-12 gap-4 mx-8 ">
        <div className="col-span-1">
          <Sidebar></Sidebar>
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
            {selectedCategory && (
              <div className="bg-green-100 text-green-700 font-semibold text-lg rounded-md py-2 px-4 mb-4">
                Section: {selectedCategory}
                {selectedSubcategory && ` > ${selectedSubcategory}`}
              </div>
            )}
            <div className="space-y-4">
              {filteredDuas.map((dua, index) => (
                <div
                  key={`${dua.cat_id}-${dua.subcat_id}-${dua.dua_id}-${index}`}
                  className="bg-white rounded-lg p-4 space-y-2 border"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/image/duacard.svg"
                      width={30}
                      height={30}
                      alt="image"
                    ></Image>
                    <h2 className="text-green-600 font-semibold text-lg">
                      {dua.dua_name_en}
                    </h2>
                  </div>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
