import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Devloper</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-600 font-bold bg-blue-50">
              4 Positions
            </Badge>
            <Badge className="text-red-600 font-bold bg-red-50">
              Part Time
            </Badge>
            <Badge className="text-purple-600 font-bold bg-purple-50">
              24 LPA
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-xl  ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed "
              : "bg-brandRed hover:bg-red-800 text-white font-semibold "
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
        Job Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">ui designer</span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">kathmandu</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non
            necessitatibus, cumque rerum iusto laudantium corrupti libero
            dignissimos at fugiat voluptate excepturi autem id aperiam? Odit
            corrupti unde cumque aperiam.
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">2 yrs</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary: <span className="pl-4 font-normal text-gray-800">12 LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-800">2</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">17-07-2024</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
