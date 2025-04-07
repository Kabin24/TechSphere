import LatestJobs from "./LatestJobs.jsx";
import CategoryCarousel from "./CategoryCarousel.jsx";
import HeroSection from "./HeroSection.jsx";
import Navbar from "./shared/Navbar.jsx";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
        {/* // <Footer/>  */}
      </div>
    </>
  );
};

export default Home;
