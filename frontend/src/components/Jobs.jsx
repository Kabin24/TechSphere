import { useSelector } from "react-redux";
import FilterCard from "./FilterCard";
import Job from "./Job";
import Navbar from "./shared/Navbar";

const jobsArray = [1, 2, 3, 4, 5, 5, 6, 7, 7];
const Jobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div>
      <Navbar />
      <div className="   max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[15%]">
            <FilterCard />
          </div>
          {jobsArray.length < 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh]  pb-5">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map((job) => (
                  <div className="overflow-x-hidden" key={job?._id}>
                    <Job job={job} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
