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
interface ThemeSpaces {
  0?: number;
  1?: number;
  2?: number;
  3?: number;
  4?: number;
  5?: number;
  6?: number;
  7?: number;
}
export const themeThree = {
  breakpoints: ["40em", "52em", "64em"] as Breakpoints,
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128] as FontSizes,
  space: [0, 4, 8, 16, 32, 64, 128, 256] as ThemeSpaces,
  colors: {
    blue: "#07c",
    redx: "#e10",
  } as ThemeColors,
};

// themeThree.breakpoints.small = themeThree.breakpoints[0];
// themeThree.breakpoints.medium = themeThree.breakpoints[1];
// themeThree.breakpoints.large = themeThree.breakpoints[2];

// themeThree.fontSizes.smallfont = themeThree.fontSizes[0];
// themeThree.fontSizes.mediumfont = themeThree.fontSizes[3];
// themeThree.fontSizes.largefont = themeThree.fontSizes[6];
// Define a type alias for an array of length 3
type ThreeElementArray<T> = [T, T, T];
interface StyleBoxProps {
  bg: ThreeElementArray<keyof ThemeColors>; // Restrict bg to keys of ThemeColors
  color: ThreeElementArray<keyof ThemeColors>; // Restrict color to keys of ThemeColors
  px?: ThreeElementArray<keyof ThemeSpaces>;
  py?: ThreeElementArray<keyof ThemeSpaces>;
}

interface TextProps {
  fontSize: Array<keyof FontSizes>;
}
export const StyleBox = styled.div<StyleBoxProps>`
  ${space} //it is because of this styled components knows say
  ${width}
  ${fontSize}
  ${color}
`;

export const Text = styled.div<TextProps>`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;
