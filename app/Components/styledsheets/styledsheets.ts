import styled from "styled-components";
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight,
} from "styled-system";

interface Breakpoints {
  small?: string; //additional properties
  medium?: string;
  large?: string;
}
//This allows the Breakpoints interface to have all the properties and methods that a regular array of strings has, while also defining additional properties specific to the Breakpoints interface.

interface FontSizes extends Array<number> {
  smallfont?: number;
  mediumfont?: number;
  largefont?: number;
}

interface ThemeColors {
  blue?: string;
  redx?: string;
}
export const themeThree = {
  breakpoints: ["40em", "52em", "64em"] as Breakpoints,
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128] as FontSizes,
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    blue: "#07c",
    redx: "#e10",
  } as ThemeColors,
};
export const { colors } = themeThree;

// themeThree.breakpoints.small = themeThree.breakpoints[0];
// themeThree.breakpoints.medium = themeThree.breakpoints[1];
// themeThree.breakpoints.large = themeThree.breakpoints[2];

// themeThree.fontSizes.smallfont = themeThree.fontSizes[0];
// themeThree.fontSizes.mediumfont = themeThree.fontSizes[3];
// themeThree.fontSizes.largefont = themeThree.fontSizes[6];

interface StyleBoxProps {
  bg: Array<keyof ThemeColors>; // Restrict bg to keys of ThemeColors
  color: Array<keyof ThemeColors>; // Restrict color to keys of ThemeColors
  px?: number[];
  py?: number[];
}
export const StyleBox = styled.div<StyleBoxProps>`
  ${space} //it is because of this styled components knows say
  ${width}
  ${fontSize}
  ${color}
`;

export const Text = styled.div`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;
