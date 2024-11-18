"use client";
import React, { useState } from "react";
import { Minimize, Plus } from "react-feather";

const NestedList = ({ items, level, parentIndex }) => {
  return (
    <ul className="ml-5">
      {items &&
        items.map((item, index) => (
          <li key={index} className="ml-3">
            {/* Display the item name with appropriate numbering */}
            {parentIndex}.{index + 1}. {item.name}
            {/* Recursively render sub-items if they exist */}
            {item.sub_items && item.sub_items.length > 0 && (
              <NestedList
                items={item.sub_items}
                level={level + 1}
                parentIndex={`${parentIndex}.${index + 1}`}
              />
            )}
          </li>
        ))}
    </ul>
  );
};

export default function TOC({ marketAnalysis, marketReport, report }) {
  const dynamics = ["Drivers", "Restrains", "Trends"];
  const [activeTab, setActiveTab] = useState("toc");
  //   const { marketAnalysis, marketReport, report } = reportData;
  const tableData = [
    {
      title: "Introduction",
      data: [
        "Research Scope",
        "Market Segmentation",
        "Research Methodology",
        "Definitions and Assumptions",
      ],
    },
    {
      title: "Executive Summary",
      data: ["Introduction"],
    },
    {
      title: "Market Dynamics",
      data: [
        "Introduction",
        ...dynamics.map(
          (data) => `Market ${data}: ${marketReport[data.toLowerCase()]}`
        ),
      ],
    },
    {
      title: "Market Factor Analysis",
      data: [
        "Porters Five Forces",
        "Supply/Value Chain",
        "PESTEL analysis",
        "Market Entropy",
        "Patent/Trademark Analysis",
      ],
    },
    {
      title: `${
        !report.marketKeyword.toLocaleLowerCase().includes("global") &&
        report.region.trim().toLocaleLowerCase() === "global"
          ? "Global"
          : ""
      } ${report.marketKeyword} Analysis, Insights and Forecast, ${
        new Date().getFullYear() - 6
      }-${new Date().getFullYear() + 6}`,
      data: marketAnalysis.segments_json
        ? [
            ...marketAnalysis.segments_json,
            {
              name: "Region",
              sub_items: marketAnalysis.regionData_json.map((region_data) => {
                return {
                  name: region_data.name,
                };
              }),
            },
          ]
        : [
            ...marketAnalysis.segments.map((data) => {
              const array = data.split(":");
              return `Market Analysis, Insights and Forecast - By ${array[0]} : ${array[1]}`;
            }),
            `Market Analysis, Insights and Forecast - By Region : ${marketAnalysis.regionData
              .map((data) => {
                const array = data.split(":");
                if (marketAnalysis.regionData.length > 1) {
                  return array[0].trim();
                } else {
                  if (array?.[1]) {
                    return array[1]
                      .trim()
                      .split(",")
                      .map((reg) => reg);
                  }
                }
              })
              .toString()}`,
          ],
    },
    ...(marketAnalysis.regionData_json &&
    marketAnalysis.regionData_json?.length > 1
      ? marketAnalysis.regionData_json.map((data) => {
          // const array = data.split(":");
          return {
            title: `${data.name} ${
              report.marketKeyword
            } Analysis, Insights and Forecast, ${
              new Date().getFullYear() - 6
            }-${new Date().getFullYear() + 6}`,
            data: [...marketAnalysis.segments_json],
          };
        })
      : []),
    ...(marketAnalysis.regionData?.length > 1
      ? marketAnalysis.regionData.map((data) => {
          const array = data.split(":");
          return {
            title: `${array[0].trim()} ${
              report.marketKeyword
            } Analysis, Insights and Forecast, ${
              new Date().getFullYear() - 6
            }-${new Date().getFullYear() + 6}`,
            data: [
              ...marketAnalysis.segments.map((data) => {
                const nestedArray = data.split(":");
                return `Market Analysis, Insights and Forecast - By ${nestedArray[0]} : ${nestedArray[1]}`;
              }),
              `Market Analysis, Insights and Forecast - By Country/Sub-region : ${array[1]}`,
            ],
          };
        })
      : []),
    ...(marketAnalysis.regionData?.length === 1 &&
    marketAnalysis.regionData[0].split(":")?.[1]
      ? marketAnalysis.regionData[0]
          .split(":")[1]
          .split(",")
          .map((data) => {
            return {
              title: `${data.trim()} ${
                report.marketKeyword
              } Analysis, Insights and Forecast, ${
                new Date().getFullYear() - 6
              }-${new Date().getFullYear() + 6}`,
              data: [
                ...marketAnalysis.segments.map((data) => {
                  const nestedArray = data.split(":");
                  return `Market Analysis, Insights and Forecast - By ${nestedArray[0]} : ${nestedArray[1]}`;
                }),
                // `Market Analysis, Insights and Forecast - By Country/Sub-region : ${array[1]}`,
              ],
            };
          })
      : []),
    {
      title: "Competitive Analysis",
      data: [
        `${
          !report.marketKeyword.toLocaleLowerCase().includes("global") &&
          report.region.trim().toLocaleLowerCase() === "global"
            ? "Global"
            : ""
        } Market Share Analysis ${new Date().getFullYear() - 1}`,
        `Company Profiles: ${marketAnalysis.companies
          .map((data) => {
            return `${data.replace(",", "")}`;
            // + Overview, Products, SWOT Analysis, Recent Developments, Financial (Based on Availability)
          })
          .toString()}`,
      ],
    },
  ];

  let figureData = [];
  if (report?.region?.toLowerCase()?.trim() === "global") {
    let segments = [...marketAnalysis.segments, "Region"];
    if (marketAnalysis.segments && marketAnalysis.segments_json) {
      segments = [
        ...marketAnalysis.segments_json.map((segment) => segment),
        { name: "Region", sub_items: [] },
      ];
    }
    figureData = [
      `Global ${report.marketKeyword} Revenue Breakdown (${
        report.marketData.valueUnit
      }, %) by Region ${new Date().getFullYear() - 1} & ${
        new Date().getFullYear() + 7
      }`,
      report.marketData.volumeUnit
        ? `Global ${report.marketKeyword} Volume Breakdown (${
            report.marketData.volumeUnit
          }, %) by Region ${new Date().getFullYear() - 1} & ${
            new Date().getFullYear() + 7
          }`
        : null,

      ...segments.flatMap((data) => {
        if (data.name) {
          let subData = data.sub_items;
          let output = [
            `Global ${report.marketKeyword} Revenue (${
              report.marketData.valueUnit
            }), by ${data.name} ${new Date().getFullYear() - 1} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `Global ${report.marketKeyword} Volume (${
                  report.marketData.volumeUnit
                }), by ${data.name} ${new Date().getFullYear() - 1} & ${
                  new Date().getFullYear() + 7
                }`
              : null,
            `Global ${report.marketKeyword} Revenue Share (%), by ${
              data.name
            } ${new Date().getFullYear() - 1} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `Global ${report.marketKeyword} Volume Share (%), by ${
                  data.name
                } ${new Date().getFullYear() - 1} & ${
                  new Date().getFullYear() + 7
                }`
              : null,
          ];
          if (subData) {
            const flatMap = subData.flatMap((newData) => {
              const forecastYearRange = `${new Date().getFullYear() - 4} & ${
                new Date().getFullYear() + 7
              }`;

              // Create an array with the base forecast lines for the current level
              let result = [
                `Global ${report.marketKeyword} Forecast (${report.marketData.valueUnit}), by ${newData.name} ${forecastYearRange}`,
                report.marketData.volumeUnit
                  ? `Global ${report.marketKeyword} Forecast (${report.marketData.volumeUnit}), by ${newData.name} ${forecastYearRange}`
                  : null,
              ];

              // If sub_items exist, add forecast lines for each sub_item
              if (newData.sub_items && newData.sub_items.length > 0) {
                newData.sub_items.forEach((subItem) => {
                  result.push(
                    `Global ${report.marketKeyword} Forecast (${report.marketData.valueUnit}), by ${subItem.name} ${forecastYearRange}`,
                    report.marketData.volumeUnit
                      ? `Global ${report.marketKeyword} Forecast (${report.marketData.volumeUnit}), by ${subItem.name} ${forecastYearRange}`
                      : null
                  );
                });
              }

              // Filter out any null values before returning the result
              return result.filter((item) => item !== null);
            });
            output = [...output, ...flatMap];
          } else {
            output = [
              `Global ${report.marketKeyword} Revenue (${
                report.marketData.valueUnit
              }), by ${data.split(":")[0]} ${new Date().getFullYear() - 1} & ${
                new Date().getFullYear() + 7
              }`,
              report.marketData.volumeUnit
                ? `Global ${report.marketKeyword} Volume (${
                    report.marketData.volumeUnit
                  }), by ${data.split(":")[0]} ${
                    new Date().getFullYear() - 1
                  } & ${new Date().getFullYear() + 7}`
                : null,
              `Global ${report.marketKeyword} Revenue Share (%), by ${
                data.split(":")[0]
              } ${new Date().getFullYear() - 1} & ${
                new Date().getFullYear() + 7
              }`,
              report.marketData.volumeUnit
                ? `Global ${report.marketKeyword} Volume Share (%), by ${
                    data.split(":")[0]
                  } ${new Date().getFullYear() - 1} & ${
                    new Date().getFullYear() + 7
                  }`
                : null,
            ];
          }
          return output;
        } else {
          let subData = data.split(":")[1];
          let output = [
            `Global ${report.marketKeyword} Revenue (${
              report.marketData.valueUnit
            }), by ${data.split(":")[0]} ${new Date().getFullYear() - 1} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `Global ${report.marketKeyword} Volume (${
                  report.marketData.volumeUnit
                }), by ${data.split(":")[0]} ${
                  new Date().getFullYear() - 1
                } & ${new Date().getFullYear() + 7}`
              : null,
            `Global ${report.marketKeyword} Revenue Share (%), by ${
              data.split(":")[0]
            } ${new Date().getFullYear() - 1} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `Global ${report.marketKeyword} Volume Share (%), by ${
                  data.split(":")[0]
                } ${new Date().getFullYear() - 1} & ${
                  new Date().getFullYear() + 7
                }`
              : null,
          ];
          if (subData) {
            const flatMap = subData.split(",").flatMap((newData) => {
              return [
                `Global ${report.marketKeyword} Forecast (${
                  report.marketData.valueUnit
                }), by ${newData} ${new Date().getFullYear() - 4} & ${
                  new Date().getFullYear() + 7
                }`,
                report.marketData.volumeUnit
                  ? `Global ${report.marketKeyword} Forecast (${
                      report.marketData.volumeUnit
                    }), by ${newData} ${new Date().getFullYear() - 4} & ${
                      new Date().getFullYear() + 7
                    }`
                  : null,
              ];
            });
            output = [...output, ...flatMap];
          } else {
            output = [
              `Global ${report.marketKeyword} Revenue (${
                report.marketData.valueUnit
              }), by ${data.split(":")[0]} ${new Date().getFullYear() - 1} & ${
                new Date().getFullYear() + 7
              }`,
              report.marketData.volumeUnit
                ? `Global ${report.marketKeyword} Volume (${
                    report.marketData.volumeUnit
                  }), by ${data.split(":")[0]} ${
                    new Date().getFullYear() - 1
                  } & ${new Date().getFullYear() + 7}`
                : null,
              `Global ${report.marketKeyword} Revenue Share (%), by ${
                data.split(":")[0]
              } ${new Date().getFullYear() - 1} & ${
                new Date().getFullYear() + 7
              }`,
              report.marketData.volumeUnit
                ? `Global ${report.marketKeyword} Volume Share (%), by ${
                    data.split(":")[0]
                  } ${new Date().getFullYear() - 1} & ${
                    new Date().getFullYear() + 7
                  }`
                : null,
            ];
          }
          return output;
        }
      }),
      ...marketAnalysis.regionData.flatMap((data) => {
        const region = data.split(":")[0];
        const segments = [...marketAnalysis.segments, "Country"];
        const newData = segments.flatMap((segment) => {
          return [
            `${region} ${report.marketKeyword} Revenue (${
              report.marketData.valueUnit
            }), by ${segment.split(":")[0]} ${new Date().getFullYear() - 1} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `${region} ${report.marketKeyword} Volume (${
                  report.marketData.volumeUnit
                }), by ${segment.split(":")[0]} ${
                  new Date().getFullYear() - 1
                } & ${new Date().getFullYear() + 7}`
              : null,
            `${region} ${report.marketKeyword} Revenue Share (%), by ${
              segment.split(":")[0]
            } ${new Date().getFullYear() - 1} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `${region} ${report.marketKeyword} Volume Share (%), by ${
                  segment.split(":")[0]
                } ${new Date().getFullYear() - 1} & ${
                  new Date().getFullYear() + 7
                }`
              : null,
          ];
        });
        return newData;
      }),
      ...marketAnalysis.regionData_json.flatMap((data) => {
        const region = data.name;
        const segments = [
          ...marketAnalysis.segments_json.map((seg) => seg.name),
          "Country",
        ];
        const newData = segments.flatMap((segment) => {
          return [
            `${region} ${report.marketKeyword} Revenue (${
              report.marketData.valueUnit
            }), by ${segment} ${new Date().getFullYear() - 1} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `${region} ${report.marketKeyword} Volume (${
                  report.marketData.volumeUnit
                }), by ${segment} ${new Date().getFullYear() - 1} & ${
                  new Date().getFullYear() + 7
                }`
              : null,
            `${region} ${
              report.marketKeyword
            } Revenue Share (%), by ${segment} ${
              new Date().getFullYear() - 1
            } & ${new Date().getFullYear() + 7}`,
            report.marketData.volumeUnit
              ? `${region} ${
                  report.marketKeyword
                } Volume Share (%), by ${segment} ${
                  new Date().getFullYear() - 1
                } & ${new Date().getFullYear() + 7}`
              : null,
          ];
        });
        return newData;
      }),
    ].filter((item) => item !== null);
  } else {
    figureData = [
      `${report.marketKeyword} Revenue Breakdown (${
        report.marketData.valueUnit
      }, %) by Product ${new Date().getFullYear() - 1} & ${
        new Date().getFullYear() + 7
      }`,
      ...marketAnalysis.segments.map(
        (data) =>
          `${report.marketKeyword} Value Share (%), by ${data.split(":")[0]} ${
            new Date().getFullYear() - 1
          } & ${new Date().getFullYear() + 7}`
      ),
      `${report.marketKeyword} Share (%) by Company ${
        new Date().getFullYear() - 1
      }`,
    ];
  }

  let LITData = [];

  LITData = [
    ...[...marketAnalysis.segments, "Region"].flatMap((segment) => {
      return [
        `${
          !report.marketKeyword.toLocaleLowerCase().includes("global") &&
          report.region.trim().toLocaleLowerCase() === "global"
            ? "Global"
            : ""
        } ${report.marketKeyword} Revenue ${
          report.marketData.valueUnit
        } Forecast, by ${segment.split(":")[0]} ${
          new Date().getFullYear() - 6
        } & ${new Date().getFullYear() + 7}`,
        report.marketData.volumeUnit
          ? `${
              !report.marketKeyword.toLocaleLowerCase().includes("global") &&
              report.region.trim().toLocaleLowerCase() === "global"
                ? "Global"
                : ""
            } ${report.marketKeyword} Volume ${
              report.marketData.volumeUnit
            } Forecast, by ${segment.split(":")[0]} ${
              new Date().getFullYear() - 6
            } & ${new Date().getFullYear() + 7}`
          : null,
      ];
    }),
    ...[...marketAnalysis.segments_json, { name: "Region" }].flatMap(
      (segment) => {
        return [
          `${
            !report.marketKeyword.toLocaleLowerCase().includes("global") &&
            report.region.trim().toLocaleLowerCase() === "global"
              ? "Global"
              : ""
          } ${report.marketKeyword} Revenue ${
            report.marketData.valueUnit
          } Forecast, by ${segment.name} ${new Date().getFullYear() - 6} & ${
            new Date().getFullYear() + 7
          }`,
          report.marketData.volumeUnit
            ? `${
                !report.marketKeyword.toLocaleLowerCase().includes("global") &&
                report.region.trim().toLocaleLowerCase() === "global"
                  ? "Global"
                  : ""
              } ${report.marketKeyword} Volume ${
                report.marketData.volumeUnit
              } Forecast, by ${segment.name} ${
                new Date().getFullYear() - 6
              } & ${new Date().getFullYear() + 7}`
            : null,
        ];
      }
    ),
    ...marketAnalysis.regionData.flatMap((data) => {
      const region = data.split(":")[0];
      const segments = [...marketAnalysis.segments, "Country"];
      const newData = segments.flatMap((segment) => {
        return [
          `${
            !report.marketKeyword.toLocaleLowerCase().includes("global") &&
            report.region.trim().toLocaleLowerCase() === "global"
              ? "Global"
              : ""
          } ${report.marketKeyword} Revenue ${
            report.marketData.valueUnit
          } Forecast, by ${segment.split(":")[0]} ${
            new Date().getFullYear() - 6
          } & ${new Date().getFullYear() + 7}`,
          report.marketData.volumeUnit
            ? `${
                !report.marketKeyword.toLocaleLowerCase().includes("global") &&
                report.region.trim().toLocaleLowerCase() === "global"
                  ? "Global"
                  : ""
              } ${report.marketKeyword} Volume ${
                report.marketData.volumeUnit
              } Forecast, by ${segment.split(":")[0]} ${
                new Date().getFullYear() - 6
              } & ${new Date().getFullYear() + 7}`
            : null,
        ];
      });
      let countriesData = [];
      if (data.split(":")[1]) {
        countriesData = data
          .split(":")[1]
          .split(",")
          .flatMap((newData) => {
            return [
              `${newData} ${report.marketKeyword} Revenue (${
                report.marketData.valueUnit
              }) Forecast, by Application ${new Date().getFullYear() - 6} & ${
                new Date().getFullYear() + 7
              }`,
              report.marketData.volumeUnit
                ? `${newData} ${report.marketKeyword} Volume (${
                    report.marketData.volumeUnit
                  }) Forecast, by Application ${
                    new Date().getFullYear() - 6
                  } & ${new Date().getFullYear() + 7}`
                : null,
            ];
          });
      }
      return [...newData, ...countriesData];
    }),
    ...marketAnalysis.regionData_json.flatMap((data) => {
      const segments = [...marketAnalysis.segments_json, { name: "Country" }];
      const newData = segments.flatMap((segment) => {
        return [
          `${
            !report.marketKeyword.toLocaleLowerCase().includes("global") &&
            report.region.trim().toLocaleLowerCase() === "global"
              ? "Global"
              : ""
          } ${report.marketKeyword} Revenue ${
            report.marketData.valueUnit
          } Forecast, by ${segment.name} ${new Date().getFullYear() - 6} & ${
            new Date().getFullYear() + 7
          }`,
          report.marketData.volumeUnit
            ? `${
                !report.marketKeyword.toLocaleLowerCase().includes("global") &&
                report.region.trim().toLocaleLowerCase() === "global"
                  ? "Global"
                  : ""
              } ${report.marketKeyword} Volume ${
                report.marketData.volumeUnit
              } Forecast, by ${segment.name} ${
                new Date().getFullYear() - 6
              } & ${new Date().getFullYear() + 7}`
            : null,
        ];
      });
      let countriesData = [];
      if (data.sub_items && data.sub_items.length) {
        countriesData = data.sub_items.flatMap((newData) => {
          return [
            `${newData.name} ${report.marketKeyword} Revenue (${
              report.marketData.valueUnit
            }) Forecast, by Application ${new Date().getFullYear() - 6} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `${newData.name} ${report.marketKeyword} Volume (${
                  report.marketData.volumeUnit
                }) Forecast, by Application ${new Date().getFullYear() - 6} & ${
                  new Date().getFullYear() + 7
                }`
              : null,
          ];
        });
      }
      return [...newData, ...countriesData];
    }),
  ].filter((item) => item !== null);
  return (
    <div>
      <div className="relative mb-2 rounded-sm shadow-sm collapse bg-base-200">
        <button
          onClick={() => {
            activeTab === "toc" ? setActiveTab("") : setActiveTab("toc");
          }}
          className="absolute z-20 btn btn-circle btn-sm right-3 top-3"
        >
          {activeTab === "toc" ? (
            <Minimize className="h-5" />
          ) : (
            <Plus className="h-5" />
          )}{" "}
        </button>
        <input type="radio" onChange={() => {}} checked={activeTab === "toc"} />
        <div className="text-xl font-medium collapse-title">
          Table Of Content
        </div>
        <div className="collapse-content">
          <ol>
            {tableData.map((data, index) => (
              <li className="mb-3" key={index}>
                <span className="font-semibold">
                  {index + 1}. {data.title}
                </span>
                <ul>
                  {data.data.map((nestedData, nestedIndex) => (
                    <li className="ml-5" key={nestedIndex}>
                      {nestedData.name ? (
                        <>
                          {index + 1}.{nestedIndex + 1}.{" "}
                          <span>
                            {" "}
                            Market Analysis, Insights and Forecast - by{" "}
                            {nestedData.name}
                          </span>
                          <NestedList
                            items={nestedData.sub_items}
                            level={1}
                            parentIndex={`${index + 1}.${nestedIndex + 1}`}
                          />
                        </>
                      ) : nestedData.split(":").length > 1 ? (
                        <div>
                          <ul>
                            <li>
                              {index + 1}.{nestedIndex + 1}.{" "}
                              {nestedData.split(":")[0]}
                            </li>
                            <li className="ml-5">
                              <ul>
                                {nestedData.split(":")[1].split(",").length >
                                1 ? (
                                  nestedData
                                    .split(":")[1]
                                    .split(",")
                                    .map((lastData, lastIndex) => (
                                      <li key={lastIndex}>
                                        {" "}
                                        {index + 1}.{nestedIndex + 1}.
                                        {lastIndex + 1} {lastData}
                                        {nestedData.split(":")[0] ===
                                          "Company Profiles" && (
                                          <ul>
                                            {[
                                              "Overview",
                                              "Products",
                                              "SWOT Analysis",
                                              "Recent Developments",
                                              "Financials (Based on Availability)",
                                            ].map((cProfile, cIndex) => (
                                              <li className="ml-5" key={cIndex}>
                                                {" "}
                                                {index + 1}.{nestedIndex + 1}.
                                                {lastIndex + 1}.{cIndex + 1}.{" "}
                                                {cProfile}{" "}
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </li>
                                    ))
                                ) : (
                                  <li>
                                    {nestedData.split(":")[1].length > 1 && (
                                      <>
                                        {index + 1}.{nestedIndex + 1}.1.{" "}
                                        {nestedData.split(":")[1]}
                                      </>
                                    )}
                                  </li>
                                )}
                              </ul>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <div>
                          {index + 1}.{nestedIndex + 1}. {nestedData}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mb-2 rounded-sm shadow-sm collapse bg-base-200">
        <button
          onClick={() => {
            activeTab === "lif" ? setActiveTab("") : setActiveTab("lif");
          }}
          className="absolute z-20 btn btn-circle btn-sm right-3 top-3"
        >
          {" "}
          {activeTab === "lif" ? (
            <Minimize className="h-5" />
          ) : (
            <Plus className="h-5" />
          )}{" "}
        </button>
        <input type="radio" onChange={() => {}} checked={activeTab === "lif"} />
        <div className="text-xl font-medium collapse-title">
          List of Figures
        </div>
        <div className="collapse-content">
          <ol>
            {figureData.map((data, index) => (
              <li className="mb-3" key={index + 1}>
                <span className="font-bold"> Figure {index + 1}:</span> {data}{" "}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mb-2 rounded-sm shadow-sm collapse bg-base-200">
        <button
          onClick={() => {
            activeTab === "lit" ? setActiveTab("") : setActiveTab("lit");
          }}
          className="absolute z-20 btn btn-circle btn-sm right-3 top-3"
        >
          {" "}
          {activeTab === "lit" ? (
            <Minimize className="h-5" />
          ) : (
            <Plus className="h-5" />
          )}{" "}
        </button>
        <input type="radio" onChange={() => {}} checked={activeTab === "lit"} />
        <div className="text-xl font-medium collapse-title">List of Tables</div>
        <div className="collapse-content">
          <ol>
            {LITData.map((data, index) => (
              <li className="mb-1" key={index}>
                <span className="font-bold">Table {index + 1}:</span> {data}{" "}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
