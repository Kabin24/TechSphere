import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Header: Time and Bookmark */}
      <div className="flex items-center justify-between text-sm text-gray-400">
        <p className="text-slate-900">2 days ago</p>
        <Button
          variant="ghost"
          className="rounded-full hover:bg-gray-100"
          size="icon"
        >
          <Bookmark className="w-5 h-5 text-gray-500" />
        </Button>
      </div>

      {/* Avatar and Location */}
      <div className="flex items-center gap-4 mt-4">
        <Avatar className="w-14 h-14 ring-2 ring-gray-200">
          <AvatarImage src="data:image/jpeg;base64,..." alt="Company Logo" />
        </Avatar>
        <div>
          <h2 className="font-semibold text-lg text-gray-800">Google Inc.</h2>
          <p className="text-sm text-gray-500">Nepal</p>
        </div>
      </div>

      {/* Job Title and Description */}
      <div className="mt-4">
        <h1 className="text-xl font-bold text-gray-900">Frontend Developer</h1>
        <p className="text-sm text-gray-600 mt-1">
          We are looking for a skilled frontend developer to join our team and
          build amazing user interfaces.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge className="text-blue-600 font-semibold bg-blue-50">
          4 Positions
        </Badge>
        <Badge className="text-red-600 font-semibold bg-red-50">
          Part Time
        </Badge>
        <Badge className="text-purple-600 font-semibold bg-purple-50">
          24 LPA
        </Badge>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-6">
        <Button variant="outline" className="rounded-full px-5">
          Details
        </Button>
        <Button className="bg-brandRed text-white hover:bg-red-600 rounded-full px-5">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
