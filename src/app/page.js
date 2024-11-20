import Categories from "@/components/Categories";
import Main from "@/components/Main";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#EBEEF2] h-screen py-10 overflow-hidden">
      <div className="grid grid-cols-12 gap-4 mx-8 ">
        <div className="col-span-1 ">
          <Sidebar></Sidebar>
        </div>

        <div className="col-span-3 ">
          <h1 className="text-xl font-semibold pb-5">Dua Pages</h1>
          <Categories></Categories>
        </div>
        <div className="col-span-6">
          <Main></Main>
        </div>
        <div className="col-span-2">
          <Profile></Profile>
        </div>
      </div>
    </div>
  );
}
