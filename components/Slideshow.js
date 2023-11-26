import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000);
  }, [goToNext, goToPrevious]);

  const goToSlides = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative w-full ">
      <div
        onClick={goToPrevious}
        className="text-black p-2 font-bold text-2xl bg-gray-400
        translate-x-2/4 cursor-pointer absolute top-1/3 hover:bg-gray-200 shadow-lg   left-0"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <Image
        className="duration-1000  "
        alt={slides[currentIndex].title}
        src={slides[currentIndex].url}
        width={1540}
        height={768}
      />

      <div
        onClick={goToNext}
        className="text-black p-2 font-bold text-2xl 
        -translate-x-2/4 cursor-pointer absolute top-1/3 hover:bg-gray-200 shadow-lg   bg-gray-400 right-0"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}
export default Slideshow;
