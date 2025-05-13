import { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { companies } = useSelector((store) => store.company);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <h2 className="text-2xl font-bold text-white text-center">
              Post a New Job Opportunity
            </h2>
          </div>

          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">Job Title *</Label>
                <Input
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={changeEventHandler}
                  className="mt-1 h-10 focus-visible:ring-2 rounded-xl focus-visible:ring-blue-500"
                  placeholder="e.g. Senior Frontend Developer"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">
                  Description *
                </Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  className="mt-1 h-10 rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500"
                  placeholder="Brief about the job role"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">
                  Requirements *
                </Label>
                <Input
                  type="text"
                  name="requirements"
                  value={input.requirements}
                  onChange={changeEventHandler}
                  className="mt-1 h-10 rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500"
                  placeholder="Skills, qualifications needed"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">
                  Salary Range *
                </Label>
                <Input
                  type="text"
                  name="salary"
                  value={input.salary}
                  onChange={changeEventHandler}
                  className="mt-1 h-10  rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500"
                  placeholder="e.g. 12 LPA"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">Location *</Label>
                <Input
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                  className="mt-1 h-10  rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500"
                  placeholder="e.g. Remote, New York, etc."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">Job Type *</Label>
                <Input
                  type="text"
                  name="jobType"
                  value={input.jobType}
                  onChange={changeEventHandler}
                  className="mt-1 h-10 rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500"
                  placeholder="Full time, Part Time, etc."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">
                  Experience Level *
                </Label>
                <Input
                  type="text"
                  name="experience"
                  value={input.experience}
                  onChange={changeEventHandler}
                  className="mt-1 h-10  rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500"
                  placeholder="e.g. Mid-level, Senior, etc."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">
                  Open Positions *
                </Label>
                <Input
                  type="number"
                  name="position"
                  value={input.position}
                  onChange={changeEventHandler}
                  className="mt-1 h-10 rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500"
                  placeholder="Number of vacancies"
                  min="1"
                  required
                />
              </div>

              {companies.length > 0 && (
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <Label className="text-gray-700 font-medium">Company *</Label>
                  <Select onValueChange={selectChangeHandler}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a Company" />
                    </SelectTrigger>
                    <SelectContent className="border border-gray-200 shadow-lg">
                      <SelectGroup>
                        {companies.map((company) => (
                          <SelectItem
                            key={company._id}
                            value={company?.name?.toLowerCase()}
                            className="hover:bg-gray-50 focus:bg-gray-50"
                          >
                            {company.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <div className="pt-4">
              {loading ? (
                <Button
                  className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 flex justify-center items-center gap-2"
                  disabled
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Posting Job...
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  disabled={companies.length === 0}
                >
                  Post Job Opportunity
                </Button>
              )}

              {companies.length === 0 && (
                <p className="mt-3 text-sm text-red-600 font-medium text-center">
                  You need to register a company before posting jobs.
                  <span className="block">
                    Please create a company profile first.
                  </span>
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
