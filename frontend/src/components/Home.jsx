import LatestJobs from "./LatestJobs.jsx";
import CategoryCarousel from "./CategoryCarousel.jsx";
import HeroSection from "./HeroSection.jsx";
import Navbar from "./shared/Navbar.jsx";
import Footer from "./shared/Footer.jsx";
import useGetAllJobs from "@/hooks/useGetAllJobs.jsx";

const Home = () => {
  useGetAllJobs();
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
