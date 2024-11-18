"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Mail, MapPin, PhoneCall } from "react-feather";

// import image1 from "@/assets/contact/location/image1.png";
// import image2 from "@/assets/contact/location/image2.png";
import image3 from "@/assets/contact/location/image3.png";
import indiaBuilding from "@/assets/contact/location/indiaBuilding.jpeg";
import indiaLocationMap from "@/assets/contact/location/indiaLocationMap.jpeg";
import usaBuilding from "@/assets/contact/location/usaBuilding.jpeg";
import usaLocationMap from "@/assets/contact/location/usaLocationMap.jpeg";
import { salesEmail } from "@/constants/constants";

const LocationTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabsElement = [
    {
      id: 1,
      tabName: "Head Office (IN)",
      tabContent: (
        <>
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <Image className="w-full" src={indiaBuilding} alt="image one" />
            </div>
            <div>
              {/* <Image
                className="w-full"
                src={indiaLocationMap}
                alt="map image"
              /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.266862679434!2d73.9091862770383!3d18.562003822911418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1a9d17181d1%3A0xa43b5ca862fdefd7!2sSolitaire%20Business%20Hub%20Viman%20Nagar!5e0!3m2!1sen!2sbd!4v1711908597201!5m2!1sen!2sbd"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              style={{
                backgroundImage: `url(${image3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="grid w-full h-full p-5 py-12 text-white bg-opacity-80 bg-secondary place-items-center">
                <div>
                  <h3 className="mb-5 text-xl font-bold capitalize">
                    contact details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>
                        A5010, Solitaire Business Hub, <br /> Viman Nagar,{" "}
                        <br /> Pune India - 411014
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneCall size={14} />
                      <span>+1 2017933837</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={14} />
                      <span>{salesEmail}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      id: 2,
      tabName: "Branch Office (US)",
      tabContent: (
        <>
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <Image className="w-full" src={usaBuilding} alt="image one" />
            </div>
            <div>
              {/* <Image className="w-full" src={usaLocationMap} alt="map image" /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.422585807878!2d-74.34572982450985!3d40.554344347253036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b64447791f2b%3A0x432ad0562805c3a!2s429%20Parsonage%20Rd%2C%20Edison%2C%20NJ%2008837%2C%20USA!5e0!3m2!1sen!2sbd!4v1711909188315!5m2!1sen!2sbd"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              style={{
                backgroundImage: `url(${image3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="grid w-full h-full p-5 py-12 text-white bg-opacity-80 bg-secondary place-items-center">
                <div>
                  <h3 className="mb-5 text-xl font-bold capitalize">
                    contact details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>
                        Unit No. 429, Parsonage Road Edison <br />
                        NJ New Jersey USA - 08837
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneCall size={14} />
                      <span>+1 5513331547</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={14} />
                      <span>{salesEmail}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ),
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      {/* tabs nav */}
      <nav className="bg-neutral">
        <ul className="flex flex-wrap gap-y-2">
          {tabsElement.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 py-2 font-bold md:py-4 hover:bg-secondary hover:text-white ${
                  activeTab === tab.id ? "bg-secondary text-white" : ""
                }`}
              >
                {tab.tabName}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* tabs container */}
      <section className="my-5">
        {tabsElement.find((tab) => tab.id === activeTab)?.tabContent}
      </section>
    </div>
  );
};

export default LocationTabs;
