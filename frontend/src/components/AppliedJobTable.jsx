import { useSelector } from "react-redux";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);

  const hasJobs = Array.isArray(allAppliedJobs) && allAppliedJobs.length > 0;

  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!hasJobs ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                You have not applied to any job yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                <TableCell>{appliedJob.job?.title}</TableCell>
                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                <TableCell>
                  <Badge
                    className={`${
                      appliedJob?.status === "rejected"
                        ? "bg-red-400"
                        : appliedJob?.status === "pending"
                        ? "bg-gray-400"
                        : "bg-green-400  hover:bg-green-700"
                    }`}
                  >
                    {appliedJob?.status?.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
