import React from "react";
import NestedList from "./NestedList";

const SummaryTabHighlight = ({ basic, marketAnalysis }) => {
  return (
    <main className="mt-3">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-base text-white bg-secondary">
            <tr>
              <th className="">Aspects</th>
              <th className="">Details</th>
            </tr>
          </thead>
          <tbody className="bg-neutral">
            <tr>
              <td className="pl-3">Study Period </td>
              <td>
                {new Date().getFullYear() - 6}-{new Date().getFullYear() + 8}
              </td>
            </tr>
            <tr>
              <td className="pl-3">Base Year </td>
              <td>{new Date().getFullYear() - 1}</td>
            </tr>
            <tr>
              <td className="pl-3">Estimated Year </td>
              <td>{new Date().getFullYear()}</td>
            </tr>
            <tr>
              <td className="pl-3">Forecast Period</td>
              <td>
                {new Date().getFullYear()}-{new Date().getFullYear() + 8}
              </td>
            </tr>
            <tr>
              <td className="pl-3">Historical Period</td>
              <td>
                {new Date().getFullYear() - 6}-{new Date().getFullYear() - 1}
              </td>
            </tr>
            <tr>
              <td className="pl-3">Growth Rate</td>
              <td>
                CAGR of {basic.marketData.cagr}% from{" "}
                {new Date().getFullYear() - 6}-{new Date().getFullYear() + 8}
              </td>
            </tr>
            <tr>
              <td className="pl-3">Segmentation</td>
              <td>
                <ul className="list-disc">
                  {marketAnalysis.segments_json &&
                  marketAnalysis.segments_json.length > 0 ? (
                    <>
                      <NestedList items={marketAnalysis.segments_json} />
                    </>
                  ) : (
                    marketAnalysis.segments.map((segment, index) => {
                      const segments = segment.split(":");
                      if (segments.length > 1) {
                        const parent = segments[0];
                        const child = segments[1].split(",");
                        const compositeKey = parent + "_" + child.join("_"); // Creating a composite key
                        return (
                          <React.Fragment key={compositeKey}>
                            <li className="mt-3 font-semibold list-square">
                              By {parent}
                            </li>
                            <ul className="list-circle">
                              {child.map((item, itemIndex) => {
                                return (
                                  <li key={compositeKey + "_" + itemIndex}>
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </React.Fragment>
                        );
                      }
                      return (
                        <li key={index} className="list-square">
                          By {segment}
                        </li>
                      );
                    })
                  )}
                </ul>
                <ul className="mt-5 mb-2 ml-3 font-semibold list-disc">
                  <li>By Geography</li>
                </ul>
                <ul className="ml-3 list-square">
                  {marketAnalysis?.regionData_json &&
                  marketAnalysis?.regionData_json.length > 0 ? (
                    <>
                      <NestedList
                        region
                        items={marketAnalysis.regionData_json}
                      />
                    </>
                  ) : (
                    <>
                      {marketAnalysis.regionData.map((segment, index) => {
                        const regions = segment.split(":");
                        if (regions.length > 1) {
                          const parent = regions[0];
                          const child = regions[1].split(",");
                          const compositeKey = parent + "_" + child.join("_"); // Creating a composite key
                          return (
                            <React.Fragment key={compositeKey}>
                              <li className="list-square">{parent}</li>
                              <ul className="list-circle">
                                {child.map((item, itemIndex) => {
                                  return (
                                    <li key={compositeKey + "_" + itemIndex}>
                                      {item}
                                    </li>
                                  );
                                })}
                              </ul>
                            </React.Fragment>
                          );
                        }
                        return (
                          <li key={index} className="list-square">
                            By {segment}
                          </li>
                        );
                      })}
                    </>
                  )}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default SummaryTabHighlight;
