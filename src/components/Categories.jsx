import {
  faArrowCircleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Cat1 from "../assets/product2.jpg";
import Cat2 from "../assets/product5.jpg";
import Cat3 from "../assets/cat-3.jpg";
import Cat4 from "../assets/product9.jpg";

const Categories = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-center mb-12">
        <h1 className="text-3xl font-bold">Top Collections</h1>
        <p className="text-grey">
          Check out our full product collections from store
        </p>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-8 lg:flex-row w-full">
          <div className="relative w-full">
            <img
              src={Cat1}
              alt=""
              className="h-[400px] w-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black w-full text-white flex flex-col gap-2 p-4 rounded-b-lg pt-12">
              <h3 className="text-xl font-medium">Unisex Tees</h3>
              <p className="text-grey">
                Premium cotton t-shirts designed for comfort and style.
              </p>
              
            </div>
          </div>
          <div className="relative  lg:w-[65%]">
            <img
              src={Cat2}
              alt=""
              className="h-[400px] w-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black w-full text-white flex flex-col gap-2 p-4 rounded-b-lg pt-12">
              <h3 className="text-xl font-medium">Thrift Finds</h3>
              <p className="text-grey">
                Curated high-quality pre-loved pieces at unbeatable prices.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row w-full">
          <div className="relative lg:w-[65%]">
            <img
              src={Cat3}
              alt=""
              className="h-[400px] w-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black w-full text-white flex flex-col gap-2 p-4 rounded-b-lg pt-12">
              <h3 className="text-xl font-medium">Fashion Accessories</h3>
              <p className="text-grey">
                The perfect finishing touches: hats, jewelry, and more.
              </p>
            </div>
          </div>
          <div className="relative  lg:w-full">
            <img
              src={Cat4}
              alt=""
              className="h-[400px] w-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black w-full text-white flex flex-col gap-2 p-4 rounded-b-lg pt-12">
              <h3 className="text-xl font-medium">Streetwear</h3>
              <p className="text-grey">
                Trendy hoodies, joggers, and urban essentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
