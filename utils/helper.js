export const getSubHeading = (variables) => {
  function createStringFromSegments(segments) {
    if (segments) {
      return segments
        .map((segment) => {
          const namePart = `by ${segment.name}`;
          if (segment.sub_items && segment.sub_items.length > 0) {
            return `${namePart} (${segment.sub_items
              .map((item) => item.name)
              .join(", ")})`;
          }
          return namePart;
        })
        .join(", ");
    } else {
      return "";
    }
  }

  const subTitle = createStringFromSegments(variables.segments_json);
  const regions = createStringFromSegments(variables.regionData_json);
  // const regions = variables.regionData.map(formatSegment).join(", ");

  const result = `${
    variables.marketKeyword
  } ${subTitle}, ${regions} Forecast ${new Date().getFullYear()}-${
    new Date().getFullYear() + 8
  }`;

  // This will replace any spaces before a comma and ensure exactly one space after the comma.
  return result.replace(/\s*,\s*/g, ", ");
};

export const textElipsisStyles = (lineClamp = 2, lineHeight = 1.5) => ({
  display: "-webkit-box",
  WebkitLineClamp: lineClamp,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxHeight: `${lineClamp * lineHeight}em`,
  lineHeight: `${lineHeight}em`,
});
