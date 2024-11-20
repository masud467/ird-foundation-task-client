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

const Profile = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                  >
                    <FaCircleUser className="size-7" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuLabel>Support Us</DropdownMenuLabel>
                  <DropdownMenuLabel>Download Dua App</DropdownMenuLabel>
                  <DropdownMenuLabel>Privacy Policy</DropdownMenuLabel>
                  <DropdownMenuLabel>Thanks & Credits</DropdownMenuLabel>
                  <DropdownMenuLabel>About Us</DropdownMenuLabel>
                  <DropdownMenuLabel>Copyright Warning</DropdownMenuLabel>
                  <DropdownMenuLabel>Our Other Projects</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
              <IoSettings className="text-green-700 text-3xl" />
            </>
          </div>
    </div>
  );
}

export default Profile;
