import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#ca2a2a]">Portal</span>
          </h1>
        </div>
        <ul className="flex font-medium items-center gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/browse">Browse</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
