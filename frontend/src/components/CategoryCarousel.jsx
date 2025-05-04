import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const category = [
  "Frontend Developer",
  "DevOps Engineer",
  "Backend Developer",
  "Data Scientist",
  "FullStack Developer",
  "UI/UX Designer",
  "Mobile Developer",
  "Cloud Architect",
  "QA Engineer",
  "Product Manager",
];

const CategoryCarousel = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          <span className="relative inline-block">
            Explore Categories
            <span className="absolute bottom-0 left-0 w-full h-1 bg-brandRed  mt-1"></span>
          </span>
        </h2>
        <p className="text-black max-w-2xl mx-auto text-lg">
          Choose your interest and find relevant jobs tailored for you
        </p>
      </div>

      <div className="relative">
        <Carousel className="w-full max-w-6xl mx-auto px-4">
          <CarouselContent className="-ml-2">
            {category.map((cat) => (
              <CarouselItem
                key={cat}
                className="pl-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brandRed/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center border border-gray-100 hover:border-brandRed/30 h-full flex items-center justify-center">
                    <Button
                      variant="ghost"
                      className="text-base font-medium  text-gray-800 hover:text-brandRed px-4 py-6 w-full h-full flex items-center justify-center hover:bg-transparent"
                    >
                      <span className="relative z-10">
                        {cat}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brandRed group-hover:w-3/4 transition-all duration-300"></span>
                      </span>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-8 hidden md:flex" />
          <CarouselNext className="-right-8 hidden md:flex" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {category.slice(0, 4).map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
