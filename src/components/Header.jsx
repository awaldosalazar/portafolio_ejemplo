import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link as ScrollLink } from "react-scroll";
import content from "../content";
import Typical from "react-typical";
import React from "../images/react.svg";
const Header = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: "#091c29",
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full md:w-2/5">
          <LazyLoadImage src={content.header.img} placeholderSrc={React} />
        </div>
        <div className="text-white font-dosis text-center md:text-left">
          <h2
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 ease-in-out text-4xl md:text-5xl font-bold`}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 ease-in-out font-bold text-2xl text-gray-500`}
          >
            {content.header.text[2]}{" "}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              wrapper="p"
              className="inline-block"
            />
          </h1>
          <ScrollLink to="stack" smooth={true}>
            <button className="animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
