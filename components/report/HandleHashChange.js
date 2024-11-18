"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HandleHashChange = ({ prevHashValue, nextHashValue }) => {
  const {
    ref: topRef,
    inView: inViewTop,
    entry: entryTop,
  } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const {
    ref: bottomRef,
    inView: inViewBottom,
    entry: entryBottom,
  } = useInView({
    threshold: 1,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entryTop) {
      const boundingClientRect = entryTop.boundingClientRect;
      const isOutOfViewFromTop = boundingClientRect.top < 0;
      if (
        isOutOfViewFromTop &&
        !inViewTop &&
        localStorage.getItem("isClickScroll") !== "true"
      ) {
        window.location.hash = `#${nextHashValue}`;
      }
    }
  }, [inViewTop, entryTop, nextHashValue]);

  useEffect(() => {
    if (entryBottom) {
      const boundingClientRect = entryBottom.boundingClientRect;
      const isOutOfViewFromBottom =
        boundingClientRect.bottom < window.innerHeight;
      if (
        isOutOfViewFromBottom &&
        inViewBottom &&
        localStorage.getItem("isClickScroll") !== "true"
      ) {
        window.location.hash = `#${prevHashValue}`;
      }
    }
  }, [inViewBottom, entryBottom, prevHashValue]);

  return (
    <div className="absolute">
      <div className="-translate-y-24 lg:-translate-y-40">
        <div ref={topRef}>
          <hr className="m-0 border-none" />
        </div>
        <div ref={bottomRef}>
          <hr className="m-0 border-none" />
        </div>
      </div>
      <div
        id={nextHashValue}
        className="-translate-y-20 lg:-translate-y-36"
      ></div>
    </div>
  );
};

export default HandleHashChange;
