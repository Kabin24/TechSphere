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
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice.js";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",

    role: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
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
            className="w-1/2   border-gray-200 rounded-3xl p-4 my-5"
          >
            <h1 className=" text-2xl text-center font-bold  text-brandRed mb-5 ">
              Login
            </h1>

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

            <div className="mt-5 space-y-4">
              <RadioGroup className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer text-blue-950 focus:ring-blue-900h-4 w-4"
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
            </div>
            {loading ? (
              <Button className="w-full my-4">
                {" "}
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                please wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full my-6 py-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors shadow-md"
              >
                Log In
              </Button>
            )}

            <div className="text-center mt-4 text-gray-600">
              Dont have an account?{" "}
              <Link
                to="/Signup"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
