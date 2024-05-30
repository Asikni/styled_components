import styled from "styled-components";
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight,
} from "styled-system";

export const themeThree = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    blue: "#07c",
    red: "#e10",
  },
};

themeThree.breakpoints.small = themeThree.breakpoints[0];
themeThree.breakpoints.medium = themeThree.breakpoints[1];
themeThree.breakpoints.large = themeThree.breakpoints[2];

export const StyleBox = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;
StyleBox.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
};

export const Text = styled.div`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;
Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
};
