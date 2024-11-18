/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "react-feather";

const CustomSlider = ({
  items,
  renderItem,
  slidesPerViewConfig,
  interval = 4000,
  showAdjacent = false,
  navigation = true,
  contentWrapper: ContentWrapper = React.Fragment,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [nextDisplayCardIndex, setNextDisplayCardIndex] = useState(
    currentIndex + slidesPerView
  );
  const [previousDisplayCardIndex, setPreviousDisplayCardIndex] = useState(
    currentIndex - 1
  );
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let perView = 1;
      for (const [breakpoint, value] of Object.entries(
        slidesPerViewConfig
      ).sort(([a], [b]) => b - a)) {
        if (width >= breakpoint) {
          perView = value;
          break;
        }
      }
      setSlidesPerView(perView);
    };

    handleResize(); // Set initial screen width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slidesPerViewConfig]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? items.length - slidesPerView
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex >= items.length - slidesPerView;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!isDragging) {
      const intervalId = setInterval(() => {
        goToNext();
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, isDragging, interval]);

  useEffect(() => {
    setCurrentTranslate(-currentIndex * (100 / 1));
    setPrevTranslate(-currentIndex * (100 / 1));
    setNextDisplayCardIndex(currentIndex + slidesPerView);
    setPreviousDisplayCardIndex(currentIndex - 1);
  }, [currentIndex, slidesPerView]);

  const touchStart = (index) => (event) => {
    setIsDragging(true);
    setStartPosition(getPositionX(event));
    sliderRef.current.style.transition = "none";
  };

  const touchMove = (event) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const movement = (currentPosition - startPosition) * 0.15; // Adjust the scaling factor
    setCurrentTranslate(prevTranslate + movement);
  };

  const touchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < items.length - slidesPerView) {
      setCurrentIndex((prev) => prev + slidesPerView);
    } else if (movedBy > 50 && currentIndex > 0) {
      setCurrentIndex((prev) =>
        prev - slidesPerView < 0 ? 0 : prev - slidesPerView
      );
    } else {
      setCurrentTranslate(prevTranslate); // Reset to previous position if movement is small
    }

    sliderRef.current.style.transition = "transform 1s ease-out";
    setCurrentTranslate(-currentIndex * (100 / slidesPerView));
    setPrevTranslate(-currentIndex * (100 / slidesPerView));
  };

  const getPositionX = (event) => {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  };

  return (
    <div className="relative">
      <ContentWrapper>
        <section
          className={`relative z-10 flex w-full overflow-hidden ${
            showAdjacent ? "px-12 lg:px-24 xl:px-32 2xl:px-40" : ""
          }`}
          ref={sliderRef}
          onMouseDown={touchStart(currentIndex)}
          onMouseMove={touchMove}
          onMouseUp={touchEnd}
          onMouseLeave={() => isDragging && touchEnd()}
          onTouchStart={touchStart(currentIndex)}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
        >
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className="flex-shrink-0 h-auto"
              style={{
                transform: `translateX(${currentTranslate}%)`,
                transition: isDragging ? "none" : "transform 1s ease-out",
                width: `${100 / slidesPerView}%`,
                zIndex: nextDisplayCardIndex !== index && "1",
              }}
            >
              <div
                className={`h-full p-2 duration-1000 ${
                  nextDisplayCardIndex === index &&
                  "-translate-x-12 scale-75 blur"
                }  ${
                  previousDisplayCardIndex === index &&
                  "translate-x-12 scale-75 blur"
                }`}
              >
                {renderItem(item, index)}
              </div>
            </div>
          ))}
        </section>
      </ContentWrapper>

      {navigation && (
        <div className="absolute top-0 flex items-center justify-between w-full h-full px-5 xl:px-10">
          <button
            className="relative z-10 duration-200 text-primary hover:text-secondary"
            onClick={goToPrevious}
            aria-label="leftArrow"
          >
            <ChevronLeft className="shadow-white" size={80} />
          </button>
          <button
            className="relative z-10 duration-200 text-primary hover:text-secondary"
            onClick={goToNext}
            aria-label="leftArrow"
          >
            <ChevronRight className="shadow-white" size={80} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomSlider;
