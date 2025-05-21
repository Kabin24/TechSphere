import { useSelector } from "react-redux";
import LatestJobCards from "./LatestJobCards";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="bg-[#E7E7E7] ">
      <div className="max-w-6xl mt-3 mx-auto bg-[#E7E7E7]  my-20">
        <h1 className="text-4xl font-bold  mb-18  text-center">
          <span className="text-brandRed">Latest & Top </span> Job Openings
        </h1>
        <div className="grid grid-cols-3 gap-4 my-5">
          {allJobs.length <= 0 ? (
            <span>No Job Available</span>
          ) : (
            allJobs
              ?.slice(0, 6)
              .map((job) => <LatestJobCards key={job._id} job={job} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
