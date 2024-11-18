/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CustomContainer from "../ui/CustomContainer";
import Button from "../ui/Button";
import { ArrowRight, FileText, Phone } from "react-feather";
import bannerImage1 from "@/assets/about/banner/image1.png";
import bannerImage2 from "@/assets/about/banner/image2.png";
import avatar from "@/assets/report/avatar.png";
import quotation from "@/assets/report/quotation.png";
import Image from "next/image";
import Link from "next/link";
import Sponsors from "../home/Sponsors";
import { websiteTitle } from "@/constants/constants";
import Testimonials from "../common/sliders/Testimonials";

const AboutPage = ({ sponsors, testimonials }) => {
  const progressData = [
    {
      year: 1985,
      title: "Start with a Small Service",
      description:
        "This was the beginning of our company. We didn’t know how far we would go or if we would even survive the next few years. However, we understood that we could offer specific services no one else was providing, and that realization drove us to start the company.",
    },
    {
      year: 1990,
      title: "First Employees",
      description:
        "This was the first time that Consulting felt like it could actually last. We realized that we were stabilizing and growing simultaneously. We had outgrown our previous office and began searching for a new location to support our expanding team.",
    },
    {
      year: 2001,
      title: "First Recognition",
      description:
        "By this time, we had become a well-known and respected name in the industry. With over 16 years of experience, we were industry stalwarts, representing many of the biggest players. We were firmly established, and our reputation could not be ignored.",
    },
    {
      year: 2015,
      title: "AMA — Corporation or Family",
      description:
        "Our journey has taken us to new heights. Information technology has completely transformed how we analyze and present data. We have embraced new technologies to deliver cutting-edge analytics, and as we move forward, we intend to harness the full potential of these advancements to power our services.",
    },
  ];

  const links = [
    { text: "Company overview", href: "#company-overview" },
    { text: "Career", href: "/career" },
    { text: "Company History", href: "#company-history" },
    { text: "Our misson", href: "#our-misson" },
    // { text: "Our methodology", href: "/reports/123" },
    // { text: "Partners", href: "/partners" },
    // { text: "Our team list", href: "/our-team-list" },
    // { text: "Our team grid", href: "/our-team-grid" },
  ];

  return (
    <div className="mt-10">
      <CustomContainer classNames="mb-5 md:mb-10">
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="space-y-3 lg:col-span-2">
            {/* banner section  */}
            <div className="grid grid-cols-1 bg-tertiary md:grid-cols-2 md:p-10 xl:p-16">
              <div className="p-4">
                <h1 className="mrf-secondary-heading">
                  <span className="">Explore</span>
                  <br />
                  <span>Our Reports</span>
                </h1>
                <p>
                  We are company that offers consulting, customized and sydicate
                  research services for you from initial sketches to the final
                  construction.
                </p>
                <div className="mt-5 w-fit">
                  <Link href="/industries">
                    <Button>
                      Explore
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative p-4 min-h-72">
                <Image
                  className="w-full max-w-56 lg:max-w-64"
                  src={bannerImage1}
                  alt="banner image 1"
                />
                <Image
                  className="absolute right-0 w-full bottom-4 max-w-56 lg:max-w-64"
                  src={bannerImage2}
                  alt="banner image 2"
                />
              </div>
            </div>
            {/* years of progress */}
            <section id="company-history" className="my-5">
              {progressData?.map((data, index) => (
                <div key={index} className="flex gap-2 mb-5 md:gap-5 ">
                  <div>
                    <h3 className="text-lg font-bold md:text-xl text-primary">
                      {data.year}
                    </h3>
                  </div>
                  <div className="h-auto mt-2 md:mt-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-0 h-full mx-auto border"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold md:text-xl">
                      {data.title}
                    </h3>
                    <p className="mt-3 text-sm">{data.description}</p>
                  </div>
                </div>
              ))}
            </section>
            {/* company overview section  */}
            <section id="company-overview">
              <div className="mb-5">
                <h1 className="mt-4 text-2xl font-bold text-primary lg:text-3xl">
                  Company Overview
                </h1>
                <hr className="w-12 mt-2 border-t-4 border-b-4 rounded border-secondary" />
              </div>
              <p>
                {websiteTitle} is one of the leading market research companies
                that offers quantitative B2B research on emerging opportunities
                with higher growth impacting more than 80% of corporate revenues
                worldwide. Our analyst team tracks high-growth studies with
                detailed statistical analysis as well as in-depth industry and
                market trends and dynamics, providing an all-round industry
                overview. Our rich research methodology integrates intense
                insights combined with industry factors and market forces to
                deliver. Our research studies assist our clients in
                accomplishing a wide range of goals in the market, be it
                expanding their global presence, optimizing supply chain,
                competitors profiling, or performing M&As.
                <br />
                <span className="inline-block mt-3">
                  Throughout the last decade, we've worked with over 8,000
                  companies and have added more than $150 billion in revenue
                  impact. As a consequence, we have moved from being a market
                  research publishing house to a growth-enabling firm, with core
                  corporate culture around “GIVE growth” that encourage growth
                  mentality throughout our workforce. Late January of this year
                  saw the company officially pass through the transition and
                  emerged one of Americas top management consulting firms,
                  cording to Forbes. Intrestingly we emerged as the only Indian
                  origin startup line in the list of 200 firms. We differentiate
                  ourselves, even within this niche group, with a unique value
                  proposition, as our proprietary Knowledge Store is a
                  research-driven, AI-enabled market intelligence platform for
                  growth-minded executives.
                </span>
              </p>

              <div className="p-4 mt-5 font-semibold border-l-8 bg-neutral border-secondary lg:px-10 xl:px-20">
                {websiteTitle}'s growth is consistently fueled by the trust
                bestowed upon us by our valued clients. Our expertise spans
                across diverse industries including finance, energy, business
                services, and consumer products.
              </div>
            </section>
            <section id="our-misson" className="md:flex md:gap-5">
              <div className="flex-1">
                <h1 className="mt-4 mb-5 text-2xl font-bold capitalize text-primary lg:text-3xl">
                  Our Misson
                </h1>
                <p>
                  Our goal is to forge a long-term relationship with the
                  clients, focusing on a commitment that is unparalleled:
                  becoming the premier source of financial and market
                  intelligence reports worldwide. Customer satisfaction is our
                  top priority, with a focus on meeting client needs. We
                  maintain standards of excellence in delivering our services to
                  ensure client satisfaction.
                </p>
              </div>
              <div className="flex-1">
                <h1 className="mt-4 mb-5 text-2xl font-bold capitalize text-primary lg:text-3xl">
                  how we work
                </h1>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/yWAmQRS1mOE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
          {/* sidebar section  */}
          <aside className="space-y-5">
            <section className="mx-4">
              {links?.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  className={`block px-6 py-2 duration-100 bg-neutral mb-1 hover:bg-primary hover:text-white text-secondary capitalize ${
                    idx === null && "border-l-4 border-primary"
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </section>
            <section className="mx-4">
              <Link href="/industries">
                <Button classNames="w-full">
                  <FileText size={16} /> Company Reports
                </Button>
              </Link>
            </section>
            <section className="p-6 py-8 mx-4 bg-neutral">
              <h4 className="font-semibold">How can we help you?</h4>
              <p className="mt-2 text-sm">
                Contact us at the Advance Market Analytics office nearest to you
                or submit a business inquiry online.
              </p>
              <div className="mt-5">
                <Link href="/contact">
                  <Button classNames="btn-sm">
                    <Phone size={14} /> Contacts
                  </Button>
                </Link>
              </div>
            </section>
            <section className="mx-4">
              {/* <div
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 45% 90%, 32% 100%, 32% 90%, 0 90%)",
                }}
                className="p-4 pb-10 bg-accent"
              >
                <p>
                  “Thank you very much. I really appreciate the work your team
                  has done. I feel very comfortable recommending your services
                  to some of the other startups that I’m working with, and will
                  likely establish a good long partnership with you.”
                </p>
                <div className="w-16 ml-auto">
                  <Image src={quotation} alt="quotation" />
                </div>
              </div>
              <div className="flex items-center gap-4 my-5">
                <div>
                  <Image
                    className="w-12 rounded-full"
                    src={avatar}
                    alt="avatar"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Dr. John Doe</h3>
                  <p className="text-neutral">Sales & Marketing, Alien Ltd.</p>
                </div>
              </div> */}
              <Testimonials testimonials={testimonials} />
            </section>
          </aside>
        </section>
      </CustomContainer>
      <Sponsors sponsors={sponsors} />
      <section>
        <div className="text-white bg-secondary">
          <CustomContainer
            classNames={`items-center justify-between py-4 lg:flex `}
          >
            <div className="text-lg font-bold capitalize lg:text-2xl">
              looking for Trending Report by Industries?
            </div>
            <div className="mt-2 lg:mt-0 w-fit">
              <Link href={`/industries`}>
                <Button>
                  Explore <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </CustomContainer>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
