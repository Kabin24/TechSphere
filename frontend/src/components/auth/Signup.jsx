import Navbar from "../shared/Navbar.jsx";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.jsx";

const Signup = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex item-center justify-center mx-auto bg-gray-100">
          <form
            action=""
            className="w-1/2   border-gray-200 rounded-3xl p-4 my-5"
          >
            <h1 className=" text-2xl text-center font-bold  text-brandRed mb-5 ">
              Sign Up
            </h1>
            <div className="mb-4">
              <Label>Full Name</Label>
              <Input
                type="text"
                placeholder="Enter your fullname"
                className=" border border-gray-400 focus:border-red-600 rounded-full px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-4">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter your email "
                className="border border-gray-400 focus:border-red-600 rounded-full px-4 py-2 outline-none "
              />
            </div>
            <div className="mb-4">
              <Label>Phone Number</Label>
              <Input
                type="text"
                placeholder="Enter your phone no"
                className="border border-gray-400 focus:border-red-600 rounded-full px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-4">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="border border-gray-400 focus:border-red-700 rounded-full px-4 py-2 outline-none"
              />
            </div>

            <div className="mt-5">
              <RadioGroup className="flex items-center gap-4 ">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="student">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recruiter" id="r2" />
                  <Label htmlFor="recruiter">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
