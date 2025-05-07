import LatestJobs from "./LatestJobs.jsx";
import CategoryCarousel from "./CategoryCarousel.jsx";
import HeroSection from "./HeroSection.jsx";
import Navbar from "./shared/Navbar.jsx";
import Footer from "./shared/Footer.jsx";
import useGetAllJobs from "@/hooks/useGetAllJobs.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
