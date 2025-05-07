import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable";

const Companies = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className=" max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <Input className="w-fit rounded-xl" placeholder="filter by name" />
          <Button
            onClick={() => navigate("/admin/companies/create")}
            className="bg-brandRed text-white rounded-xl hover:bg-red-800"
          >
            New Company
          </Button>
        </div>

        <div className="mt-10">
          <CompaniesTable />
        </div>
      </div>
    </div>
  );
};

export default Companies;
