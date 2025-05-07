import { Avatar } from "@radix-ui/react-avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { PopoverTrigger } from "@radix-ui/react-popover";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption> A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="" alt="Company Logo" />
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>13-03-2025</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
              <PopoverTrigger>
                <MoreHorizontal />
              </PopoverTrigger>
              <PopoverContent className="w-24 rounded-full text-white bg-brandRed">
                <div className="flex items-center gap-3  text-sm  cursor-pointer">
                  <Edit2 className="h-4 w-4" />
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
