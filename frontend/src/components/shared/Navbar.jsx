import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Link } from "react-router-dom";

import { Popover } from "../ui/popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const user = true;

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#ca2a2a]">Sewa</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/Browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                {" "}
                <Button
                  variant="outline"
                  className="border-gray-400 text-black  rounded-full "
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-red-600 text-white hover:bg-red-900 rounded-full">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer w-10 h-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="w-10 h-10 rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4 shadow-lg rounded-lg bg-white">
                <div className="flex gap-4 space-y-2">
                  {" "}
                  <Avatar className="cursor-pointer w-12 h-12">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="w-10 h-10 rounded-full"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Kabin shrestha</h4>
                    <p className="flex text-sm text-gray-500">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer  hover:underline">
                  <User2 />
                  <Button variant="Link">
                    <Link to="/profile">View Profile</Link>
                  </Button>
                </div>

                <div className="flex w-fit items-center gap-2 cursor-pointer hover:underline">
                  <LogOut />
                  <Button variant="Link">Logout</Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
