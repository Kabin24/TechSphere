import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["Html", "css", "javascript"];
const isResume = true;

const Profile = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 rounded-2xl my-8 p-8 space-y-8">
        {/* Profile Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24 rounded-full ring-2 ring-black">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
                className="rounded-full"
              />
            </Avatar>
            <div>
              <h1 className="font-semibold text-2xl text-gray-800">kabin</h1>
              <p className="text-gray-600 mt-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, culpa.
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="border rounded-full border-blue-500 hover:border-blue-700 hover:shadow-md transition"
          >
            <Pen className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-gray-700">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-500" />
            <span>kabinshrestha37&@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="w-5 h-5 text-gray-500" />
            <span>+977 981109623</span>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h1 className="font-semibold text-lg text-gray-800 mb-2">Skills</h1>
          <div className="flex flex-wrap items-center gap-2">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <Badge
                  key={index}
                  className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span>Na</span>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <div className="grid w-full max-w-sm items-start gap-1.5">
          <Label className="text-md font-semibold text-gray-800">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              href="http://youtube.com"
              className="text-blue-600 hover:underline"
            >
              kabinResume
            </a>
          ) : (
            <span className="text-gray-500">NA</span>
          )}
        </div>

        {/* Applied Jobs */}
        <div className="bg-gray-100 p-5 rounded-2xl shadow-inner">
          <h1 className="font-bold text-lg text-gray-800 mb-4">Applied Jobs</h1>
          <AppliedJobTable />
        </div>
      </div>
    </div>
  );
};

export default Profile;
