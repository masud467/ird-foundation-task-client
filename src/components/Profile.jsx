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
  const [showGeneralSettings, setShowGeneralSettings] = useState(false);
  const [showFontSettings, setShowFontSettings] = useState(false);
  const [translationFontSize, setTranslationFontSize] = useState(18);
  const [arabicFontSize, setArabicFontSize] = useState(26);
  const [selectedArabicScript, setSelectedArabicScript] = useState("Uthmani");
  const [selectedArabicFont, setSelectedArabicFont] = useState("Me Quran");
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

  // Drawer toggles
  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const toggleLanguageOptions = () => setShowLanguageOptions(!showLanguageOptions);
  const toggleGeneralSettings = () => setShowGeneralSettings(!showGeneralSettings);
  const toggleFontSettings = () => setShowFontSettings(!showFontSettings);

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
              {/* general setting */}
              <div className="p-4 border-b text-gray-500">
                <p className="hover:text-green-600 text-lg font-medium cursor-pointer flex items-center gap-5" onClick={toggleGeneralSettings}><TfiLayersAlt />General Settings</p>
                {showGeneralSettings && (
                  <div className="mt-3 space-y-3">
                    <div className="flex items-center">
                      <input type="checkbox" id="showArabic" className="mr-2" />
                      <label htmlFor="showArabic" className="text-gray-700">
                        Show Arabic
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="showTranslation" className="mr-2" />
                      <label htmlFor="showTranslation" className="text-gray-700">
                        Show Translation
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="showTransliteration"
                        className="mr-2"
                        defaultChecked
                      />
                      <label htmlFor="showTransliteration" className="text-gray-700">
                        Show Transliteration
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="showReference"
                        className="mr-2"
                        defaultChecked
                      />
                      <label htmlFor="showReference" className="text-gray-700">
                        Show Reference
                      </label>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-b text-gray-500">
                <p className="hover:text-green-600 text-lg font-medium cursor-pointer flex items-center gap-5" onClick={toggleFontSettings}> <AiOutlineAppstore />Font Settings</p>
                {showFontSettings && (
                <div className="mt-4 space-y-4">
                  {/* Translation Font Size */}
                  <div>
                    <label className="text-gray-700 block mb-2">
                      Translation Font Siz
                    </label>
                    <div className="flex items-center justify-center gap-4">
                    <input
                      type="range"
                      min="10"
                      max="40"
                      value={translationFontSize}
                      onChange={(e) => setTranslationFontSize(e.target.value)}
                      className="w-full"
                    />
                    <div className="text-green-600 font-semibold mt-2 text-center">
                      {translationFontSize}
                    </div>
                    </div>
                  </div>

                  {/* Select Arabic Script */}
                  <div>
                    <label className="text-gray-700 block mb-2">
                      Select Arabic Script
                    </label>
                    <select
                      value={selectedArabicScript}
                      onChange={(e) => setSelectedArabicScript(e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                    >
                      <option value="Uthmani">Uthmani</option>
                      <option value="IndoPak">IndoPak</option>
                      
                    </select>
                  </div>

                  {/* Arabic Font */}
                  <div>
                    <label className="text-gray-700 block mb-2">Arabic Font</label>
                    <select
                      value={selectedArabicFont}
                      onChange={(e) => setSelectedArabicFont(e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                    >
                      <option value="KFGQ">KFGQ</option>
                      <option value="Me Quran">Me Quran</option>
                      <option value="Al Mushaf">Al Mushaf</option>
                      <option value="Amiri Quran">Amiri Quran</option>
                    </select>
                  </div>

                  {/* Arabic Font Size */}
                  <div>
                    <label className="text-gray-700 block mb-2">
                      Arabic Font Size
                    </label>
                    <div className='flex gap-4'>
                    <input
                      type="range"
                      min="10"
                      max="40"
                      value={arabicFontSize}
                      onChange={(e) => setArabicFontSize(e.target.value)}
                      className="w-full"
                    />
                    <div className="text-green-600 font-semibold mt-2">
                      {arabicFontSize}
                    </div>
                    </div>
                  </div>
                </div>
              )}
            
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
