import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <Link to="/">
          <h1 className="text-2xl font-bold hover:opacity-80 transition-opacity">
            Tech<span className="text-[#F83002]">Sphere</span>
          </h1>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex font-medium items-center gap-6">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className="hover:text-[#6A38C2] transition-colors"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/jobs"
                    className="hover:text-[#6A38C2] transition-colors"
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#6A38C2] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className="hover:text-[#6A38C2] transition-colors"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className="hover:text-[#6A38C2] transition-colors"
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-[#6A38C2] rounded-xl "
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] rounded-xl ">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <button className="rounded-full focus:outline-none hover:ring-2 hover:ring-[#6A38C2]/50 transition-all">
                  <Avatar className="cursor-pointer w-9 h-9 border border-[#6A38C2]/20">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="User avatar"
                      className="object-cover"
                    />
                  </Avatar>
                </button>
              </PopoverTrigger>

              <PopoverContent
                className="w-64 p-4 shadow-lg rounded-xl border border-gray-100"
                align="end"
                sideOffset={10}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border border-[#6A38C2]/20">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="User avatar"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {user?.fullname}
                      </h4>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {user?.profile?.bio || "No bio"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 border-t pt-2">
                    {user && user.role === "student" && (
                      <Link
                        to="/profile"
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#6A38C2] transition-colors"
                      >
                        <User2 className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          View Profile
                        </span>
                      </Link>
                    )}

                    <button
                      onClick={logoutHandler}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </div>
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
