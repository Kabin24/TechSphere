import Navbar from "../shared/Navbar.jsx";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { RadioGroup } from "../ui/radio-group.jsx";
import { Button } from "../ui/button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant.js";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice.js";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    file: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="flex item-center justify-center mx-auto bg-gray-100">
          <form
            onSubmit={submitHandler}
            className="w-1/2   border-black rounded-full p-4 my-5"
          >
            <h1 className=" text-2xl text-center font-bold  text-brandRed mb-5 ">
              Sign Up
            </h1>
            <div className="mb-4">
              <Label>Full Name</Label>

              <Input
                type="text"
                value={input.fullname}
                name="fullname"
                onChange={changeEventHandler}
                placeholder="Enter your fullname"
                className=" border border-gray-400 focus:border-red-600 rounded-full px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-4">
              <Label>Email</Label>
              <Input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="Enter your email "
                className="border border-gray-400 focus:border-red-600 rounded-full px-4 py-2 outline-none "
              />
            </div>
            <div className="mb-4">
              <Label>Phone Number</Label>
              <Input
                type="text"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                placeholder="Enter your phone no"
                className="border border-gray-400 focus:border-red-600 rounded-full px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-4">
              <Label>Password</Label>
              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Enter your password"
                className="border border-gray-400 focus:border-red-700 rounded-full px-4 py-2 outline-none"
              />
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-6">
                <RadioGroup className="flex items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="student"
                      checked={input.role === "student"}
                      onChange={changeEventHandler}
                      className="cursor-pointer text-blue-500 focus:ring-blue-500 h-4 w-4"
                    />
                    <Label htmlFor="student" className="text-gray-700">
                      Student
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="recruiter"
                      checked={input.role === "recruiter"}
                      onChange={changeEventHandler}
                      className="cursor-pointer text-blue-500 focus:ring-blue-500 h-4 w-4"
                    />
                    <Label htmlFor="recruiter" className="text-gray-700">
                      Recruiter
                    </Label>
                  </div>
                </RadioGroup>

                <div className="flex items-center gap-2">
                  <Label className="whitespace-nowrap">Profile</Label>
                  <div className="relative">
                    <Input
                      accept="image/*"
                      type="file"
                      onChange={changeFileHandler}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="px-3 py-1 border border-gray-300 rounded-md bg-white text-sm text-gray-500 hover:border-blue-500 transition-colors">
                      {input.file ? input.file.name : "Choose File"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              {loading ? (
                <Button className="w-full my-4">
                  {" "}
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-40 my-4 
                 bg-brandRed  rounded-full text-xl text-white hover:bg-blue-800"
                >
                  Signup
                </Button>
              )}
            </div>

            <div className="text-center  text-black">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
