import { ArrowLeft, Loader2 } from "lucide-react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const CompanySetup = () => {
  const params = useParams();

  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const { singleCompany } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg">
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-4 mb-8">
            <Button
              onClick={() => navigate("/admin/companies")}
              variant="outline"
              className="flex items-center gap-2 bg-brandRed hover:bg-brandRed/90 text-white font-semibold px-4 py-2 rounded-xl shadow"
              type="button"
            >
              <ArrowLeft size={18} />
              <span>Back</span>
            </Button>
            <h1 className="text-2xl font-bold text-gray-800">Company Setup</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-medium text-gray-600">
                Company Name
              </Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                className="mt-1 rounded-xl"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-600">
                Description
              </Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                className="mt-1 rounded-xl"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-600">
                Website
              </Label>
              <Input
                type="text"
                name="website"
                value={input.website}
                onChange={changeEventHandler}
                className="mt-1 rounded-xl"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-600">
                Location
              </Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="mt-1 rounded-xl"
              />
            </div>
            <div className="md:col-span-2">
              <Label className="text-sm font-medium text-gray-600">
                Company Logo
              </Label>
              <Input
                type="file"
                accept="image/*"
                name="name"
                onChange={changeFileHandler}
                className="mt-1 rounded-xl"
              />
            </div>
          </div>

          {loading ? (
            <Button className="w-full mt-8 bg-gray-800 hover:bg-gray-700 text-white">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-brandRed to-red-600 hover:from-red-600 hover:to-brandRed text-white font-semibold py-2 rounded-xl shadow-md transition-all"
            >
              Update
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
