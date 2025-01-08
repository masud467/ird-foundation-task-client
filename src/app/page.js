"use client";
import Categories from "@/components/Categories";
import Main from "@/components/Main";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
// import { useState } from "react";

export default function Home() {
  // const [selectedCategory, setSelectedCategory] = useState(null);

  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  // };

  return (
    <div>
      {/* <div className="col-span-1 ">
          <Sidebar></Sidebar>
        </div> */}

      {/* <div className="col-span-3 ">
          <h1 className="text-xl font-semibold pb-5">Dua Pages</h1>
          <Categories></Categories>
        </div> */}

      <Main></Main>

      {/* <div className="col-span-2">
          <Profile></Profile>
        </div> */}
    </div>
  );
}
