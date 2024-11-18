export const generateSummary = (
  summary,
  developments,
  drivers,
  restrains,
  trends
) => {
  let paragraph = "";

  if (summary) {
    paragraph += `${summary} `;
  }

  if (developments && developments.length > 0) {
    paragraph += `Recent developments include: ${developments.join(", ")}. `;
  }

  if (drivers && drivers.length > 0) {
    paragraph += `Key drivers for this market are: ${drivers.replace(
      ";",
      ","
    )}. `;
  }

  if (restrains && restrains.length > 0) {
    paragraph += `Potential restraints include: ${restrains.replace(
      ";",
      ","
    )}. `;
  }

  if (trends && trends.length > 0) {
    paragraph += `Notable trends are: ${trends.replace(";", ",")}. `;
  }

  return paragraph;
};
