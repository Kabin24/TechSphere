import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <section
      className="relative py-24 px-4 overflow-hidden bg-cover bg-black bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(245,245,245,0.95)), url('https://images.unsplash.com/photo-1605902711622-cfb43c4437b1?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-brandRed/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex flex-col items-center gap-8 max-w-4xl mx-auto">
        {/* Badge with animation */}
        <span className="px-6 py-2 rounded-full bg-brandRed/10 text-brandRed font-semibold text-sm shadow-sm border border-brandRed/20 hover:scale-105 transition-transform duration-300 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandRed opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brandRed"></span>
          </span>
          🚀 No. 1 Job Hunt Website
        </span>

        {/* Headline with gradient text */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-800 via-brandRed to-gray-800 bg-clip-text text-transparent">
          Search, Apply & <br />
          <span className="relative">
            Get Your <span className="text-brandRed">Dream Job</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brandRed to-transparent"></span>
          </span>
        </h1>

        {/* Subtitle with animated underline */}
        <p className="text-black  text-center  text-lg max-w-2xl relative group">
          Unlock endless career opportunities. Discover your next job with ease,
          tailored just for you.
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brandRed group-hover:w-full transition-all duration-500"></span>
        </p>

        {/* Enhanced search bar */}
        <div className="flex w-full max-w-2xl shadow-lg border border-gray-200 rounded-full overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
          <input
            type="text"
            placeholder="Job title, keywords, or company..."
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-6 py-4 !text-black outline-none bg-white placeholder-gray-400 "
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-brandRed hover:bg-red-600 px-8 gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            size="xl"
          >
            <Search className="h-5 w-5 text-stone-50" />
            <span className="hidden sm:inline text-slate-50">Search</span>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            1000+ Jobs
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            50+ Companies
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            10000+ Candidates
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
