import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import { useState } from "react";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

//const skills = ["Html", "css", "javascript", "Python"];
const isResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="bg-black-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white shadow-lg border border-black-200 rounded-2xl my-8 p-8 space-y-8">
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
              <h1 className="font-semibold text-2xl text-black-800">
                {user?.fullname}
              </h1>
              <p className="text-black mt-1">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="border rounded-full border-blue-500 hover:border-blue-700 hover:shadow-md transition"
          >
            <Pen className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-black-700">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-black" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="w-5 h-5 text-black-500" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h1 className="font-semibold text-lg text-black-800 mb-2">Skills</h1>
          <div className="flex flex-wrap items-center gap-2">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
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
          <Label className="text-md font-semibold text-black-800">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              href={user?.profile?.resume}
              className="text-blue-600 hover:underline"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-black-500">NA</span>
          )}
        </div>
      </div>

      <div className="bg-black-100 p-5 rounded-2xl shadow-inner">
        <h1 className="font-bold text-3xl text-black mb-4">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <div>
        {" "}
        <UpdateProfileDialog open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Profile;
