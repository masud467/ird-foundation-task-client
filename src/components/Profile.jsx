import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from './ui/button';
import { FaCircleUser } from 'react-icons/fa6';
import { IoSettings } from 'react-icons/io5';
import { BiDonateHeart } from 'react-icons/bi';
import { LuDownload } from "react-icons/lu";

const Profile = () => {
  return (
    <div className='flex '>
      <div className="flex items-center gap-6 ml-auto">
          
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full w-12 h-12"
                  >
                    <FaCircleUser className="size-8" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuLabel className='flex gap-3'> <BiDonateHeart size={20} className='text-green-600' />Support Us</DropdownMenuLabel>
                  <DropdownMenuLabel className='flex gap-3'> <LuDownload className='text-green-600'/>Download Dua App</DropdownMenuLabel>
                  <DropdownMenuLabel>Privacy Policy</DropdownMenuLabel>
                  <DropdownMenuLabel>Thanks & Credits</DropdownMenuLabel>
                  <DropdownMenuLabel>About Us</DropdownMenuLabel>
                  <DropdownMenuLabel>Copyright Warning</DropdownMenuLabel>
                  <DropdownMenuLabel>Our Other Projects</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
              <IoSettings className="text-green-700 text-2xl" />
            
          </div>
    </div>
  );
}

export default Profile;
