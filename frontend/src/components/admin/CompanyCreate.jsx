import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState();
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4">
        <div className="my-10">
          <h1 className="font-bold text-3xl text-brandRed mb-2">
            Your Company Name
          </h1>
          <p className="text-gray-600">
            What would you like to name your company? You can change this later.
          </p>
        </div>

        <div className="mb-6">
          <Label className="text-sm text-gray-700">Company Name</Label>
          <Input
            type="text"
            className="mt-2 rounded-xl border-gray-300 focus:ring-2 focus:ring-brandRed"
            placeholder="JobHunt, Microsoft etc."
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4 mb-16">
          <Button
            variant="outline"
            className="rounded-xl border-gray-400 hover:bg-gray-100"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button
            onClick={registerNewCompany}
            className="bg-brandRed text-white rounded-xl hover:bg-red-600"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
