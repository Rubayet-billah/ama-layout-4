import Image from "next/image";
import React from "react";
import stepChart from "@/assets/report/methodology/stepChart.png";
import barChart from "@/assets/report/methodology/barChart.png";
import methodChart from "@/assets/report/methodology/methodChart.png";
import approachChart from "@/assets/report/methodology/approachChart.png";
import analystChart from "@/assets/report/methodology/analystChart.png";
import {
  Factory,
  FileBarChart2,
  Lightbulb,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

const MethodologyTabContent = () => {
  const sections = [
    {
      color: "var(--color-primary)",
      content:
        "Involves using different sources of information in order to increase the validity of a study",
      icon: <Factory className="text-[var(--color-primary)]" />,
    },
    {
      color: "var(--color-accent)",
      content:
        "These sources are likely to be stakeholders in a program - participants, other researchers, program staff, other community members, and so on.",
      icon: <Users className="text-[var(--color-accent)]" />,
    },
    {
      color: "var(--color-primary)",
      content:
        "Then we put all data in single framework & apply various statistical tools to find out the dynamic on the market.",
      icon: <FileBarChart2 className="text-[var(--color-primary)]" />,
    },
    {
      color: "var(--color-secondary)",
      content:
        "During the analysis stage, feedback from the stakeholder groups would be compared to determine areas of agreement as well as areas of divergence",
      icon: <ShieldCheck className="text-[var(--color-secondary)]" />,
    },
  ];

  return (
    <div className="mb-5 space-y-5 lg:space-y-10 lg:mb-10">
      {/* step 1 */}
      <section>
        <header className="my-5">
          <h2 className="p-2 font-bold bg-neutral w-fit">
            STEP 1 - Identification of Relevant Samples Size from Population
            Database
          </h2>
        </header>
        <div className="grid gap-5 my-5 lg:grid-cols-2">
          <div>
            <Image src={stepChart} alt="Step Chart" />
          </div>
          <div>
            <Image src={barChart} alt="bar chart" />
          </div>
        </div>
        <div className="mt-10">
          <Image
            className="w-full max-w-2xl mx-auto"
            src={methodChart}
            alt="method chart"
          />
        </div>
      </section>
      {/* step 2 */}
      <section>
        <header className="my-5">
          <h2 className="p-2 font-bold bg-neutral w-fit">
            STEP 2 - Approaches for Defining Global Market Size (Value, Volume*
            & Price*)
          </h2>
        </header>
        <div>
          <Image
            className="w-full max-w-2xl mx-auto"
            src={approachChart}
            alt="approach chart"
          />
        </div>
        <div className="p-4 mt-5 border-2 border-primary">
          Top-down and bottom-up approaches are used to validate the global
          market size and estimate the market size for manufactures, regional
          segemnts, product and application.
        </div>
        <p className="mt-2 text-right">Note* : In applicable scenarios</p>
      </section>
      {/* step 3 */}
      <section>
        <header className="my-5">
          <h2 className="p-2 font-bold bg-neutral w-fit">
            STEP 3 - Data Sources
          </h2>
        </header>
        <section className="grid gap-5 my-5 md:grid-cols-2">
          <div className="text-primary">
            <div className="flex items-center gap-2 font-bold">
              <div className="grid w-10 h-10 text-white rounded-full bg-primary place-items-center">
                <Lightbulb className="font-extrabold text-white" />
              </div>
              <p>Primary Research</p>
            </div>
            <ul className="ml-4 list-disc list-inside">
              <li>Web Analytics</li>
              <li>Survey Reports</li>
              <li>Research Institute</li>
              <li>Latest Research Reports</li>
              <li>Opinion Leaders</li>
            </ul>
          </div>
          <div className="text-secondary">
            <div className="flex items-center gap-2 font-bold">
              <div className="grid w-10 h-10 text-white rounded-full bg-secondary place-items-center">
                <Settings className="font-extrabold text-white" />
              </div>
              <p>Secondary Research</p>
            </div>
            <ul className="ml-4 list-disc list-inside">
              <li>Annual Reports</li>
              <li>White Paper</li>
              <li>Latest Press Release</li>
              <li>Industry Association</li>
              <li>Paid Database</li>
              <li>Investor Presentations</li>
            </ul>
          </div>
        </section>

        <div>
          <Image
            className="w-full max-w-2xl mx-auto"
            src={analystChart}
            alt="approach chart"
          />
        </div>
      </section>

      {/* step 4 */}
      <section>
        <header className="my-5">
          <h2 className="p-2 font-bold bg-neutral w-fit">
            STEP 4 - Data Triangulation
          </h2>
        </header>
        <main className="max-w-lg space-y-3">
          {sections.map((section, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`grid border-8 rounded-full w-14 min-w-14 h-14 place-items-center border-${section.color}`}
                style={{
                  borderColor: section.color,
                }}
              >
                {section.icon} {/* Render the icon */}
              </div>
              <p className="">{section.content}</p>
            </div>
          ))}
        </main>
        <div className="p-4 mt-5 border-2 border-primary">
          Additionally after gathering mix and scattered data from wide range of
          sources, data is triangull- ated and correlated to come up with
          estimated figures which are further validated through primary mediums,
          or industry experts, opinion leader.
        </div>
      </section>
    </div>
  );
};

export default MethodologyTabContent;
