"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaCog, FaDownload, FaShieldAlt, FaHeart } from "react-icons/fa";
import { MdOutlineCopyright, MdOutlineApps } from "react-icons/md";
import { AiOutlineAppstore, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai";
import Image from "next/image";
import profile from "../../public/image/profile.png";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { TfiLayersAlt } from "react-icons/tfi";

const ProfileDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown when clicking the profile icon
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking anywhere outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Open and close the drawer
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  // Toggle language options inside the drawer
  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Section */}
      <div className="flex items-center  gap-5">
      <div
        className="flex items-center space-x-1 cursor-pointer"
        onClick={toggleDropdown}
      >
        <Image
          src={profile} 
          alt="Profile Icon"
          className=" rounded-full"
          width={50}
          height={50}
        />
        <div className="text-gray-600 ">
          <IoMdArrowDropdown />
        </div>
      </div>
      <div onClick={toggleDrawer}>
        <FaCog className=" text-center text-xl cursor-pointer text-green-600" />
      </div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-10 right-0 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 text-gray-600 hover:text-green-600 cursor-pointer">
              <BiSolidDonateHeart className="text-green-600" />
              <span>Support Us</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600 hover:text-green-600 cursor-pointer">
              <FaDownload className="text-green-600" />
              <span>Download Dua App</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600 hover:text-green-600 cursor-pointer">
              <FaShieldAlt className="text-green-600" />
              <span>Privacy Policy</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600 hover:text-green-600 cursor-pointer">
              <FaHeart className="text-green-600" />
              <span>Thanks & Credits</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600 hover:text-green-600 cursor-pointer">
              <AiOutlineInfoCircle className="text-green-600" />
              <span>About Us</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600 hover:text-green-600 cursor-pointer">
              <MdOutlineCopyright className="text-green-600" />
              <span>Copyright Warning</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600 hover:text-green-600 cursor-pointer">
              <MdOutlineApps className="text-green-600" />
              <span>Our Other Projects</span>
            </li>
          </ul>
        </div>
      )}
      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className=" rounded-tl-3xl rounded-bl-3xl fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-30 p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Settings</h2>
              <button
                onClick={toggleDrawer}
                className="text-gray-600 hover:text-gray-900"
              >
                ✖
              </button>
            </div>
            <div className="mt-5">
              <div className="p-4 border-b">
                <h3 className="hover:text-green-600 text-lg font-medium cursor-pointer flex items-center gap-5"
                onClick={toggleLanguageOptions}>
                  <IoLanguage ></IoLanguage>
                  Language Settings
                </h3>
                {showLanguageOptions && (
                  <div className="flex gap-4 mt-2">
                    <button className="px-4 py-2 bg-green-600 text-white rounded">
                      English
                    </button>
                    <button className="px-4 py-2 bg-white border rounded">
                      বাংলা
                    </button>
                  </div>
                )}
              </div>
              <div className="p-4 border-b text-gray-500">
                <p className="hover:text-green-600 text-lg font-medium cursor-pointer flex items-center gap-5"><TfiLayersAlt />General Settings</p>
              </div>
              <div className="p-4 border-b text-gray-500">
                <p className="hover:text-green-600 text-lg font-medium cursor-pointer flex items-center gap-5"> <AiOutlineAppstore  />Font Settings</p>
              </div>
              <div className="p-4 text-gray-500">
                <p className="hover:text-green-600 text-lg font-medium cursor-pointer flex items-center gap-5"><AiOutlineAppstore  /> Appearance Settings</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default ProfileDropdown;
