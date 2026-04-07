import { icon } from "@fortawesome/fontawesome-svg-core";
import { faArrowsSpin, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { 
  faTag, 
  faUserCheck, 
  faTruckFast, 
  faGem, 
  faMobileScreenButton 
} from '@fortawesome/free-solid-svg-icons';


const Services = () => {
  const ServiceLists = [
  {
    id: 1,
    title: "Unbeatable Affordability",
    description: "High-quality fashion that fits your budget. We prove that looking good doesn't have to be expensive.",
    icon: faTag,
  },
  {
    id: 2,
    title: "Curated Unisex Styles",
    description: "Carefully selected pieces designed to look great on everyone, from trendy tees to street essentials.",
    icon: faUserCheck,
  },
  {
    id: 3,
    title: "Nationwide Delivery",
    description: "Based in Ibadan, but we ship our style to your doorstep anywhere in Nigeria with speed and care.",
    icon: faTruckFast,
  },
  {
    id: 4,
    title: "Quality Guaranteed",
    description: "Whether it's a new arrival or a thrifted gem, every item undergoes a strict quality check.",
    icon: faGem,
  },
  {
    id: 5,
    title: "Seamless Shopping",
    description: "No stress. Order directly via WhatsApp or DM and get instant updates on your purchase.",
    icon: faMobileScreenButton,
  }
];

  return (
    <div id="services">
      <div className="flex flex-col gap-2 text-center mb-12">
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <p className="text-grey">Making your purchase seamless with no delay</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6" id="services">
        {ServiceLists.map((service) => {
          return (
            <div
              className="bg-primary hover:bg-secondary transition duration-300 rounded-lg p-6 text-white flex flex-col  gap-4"
              key={service.id}
              data-aos="fade-right"
            >
              <FontAwesomeIcon
                className="text-3xl bg-secondary p-2 w-fit rounded-lg border border-primary "
                icon={service.icon}
              />
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="text-light">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
