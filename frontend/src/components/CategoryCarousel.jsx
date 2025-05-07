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
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          <span className="relative inline-block">
            Explore Categories
            <span className="absolute bottom-0 left-0 w-full h-1 bg-brandRed mt-1"></span>
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Choose your interest and find relevant jobs tailored for you
        </p>
      </div>

      <div className="relative">
        <Carousel className="w-full max-w-7xl mx-auto px-4">
          <CarouselContent className="-ml-1">
            {category.map((cat) => (
              <CarouselItem
                key={cat}
                className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="relative group p-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-brandRed/5 via-transparent to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative rounded-xl bg-white shadow-xs hover:shadow-md transition-all duration-300 p-6 text-center border border-gray-200 hover:border-brandRed/40 h-full flex items-center justify-center group-hover:scale-[1.02]">
                    <Button
                      variant="ghost"
                      className="text-base font-medium text-gray-800 hover:text-brandRed px-4 py-6 w-full h-full flex items-center justify-center hover:bg-transparent transition-colors duration-200"
                    >
                      <span className="relative z-10">
                        {cat}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brandRed group-hover:w-3/4 transition-all duration-300 ease-out"></span>
                      </span>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-10 hidden md:flex hover:bg-brandRed/10 hover:text-brandRed" />
          <CarouselNext className="-right-10 hidden md:flex hover:bg-brandRed/10 hover:text-brandRed" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {category.slice(0, 4).map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-brandRed transition-colors focus:outline-none focus:ring-2 focus:ring-brandRed/50"
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
