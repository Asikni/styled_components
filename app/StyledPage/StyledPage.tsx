"use client";
import styled from "styled-components";
import { Box } from "../Components/styledsheets/styledsheets";

import { ThemeProvider, createGlobalStyle } from "styled-components";
interface Theme {
  breakpoints: string[] & { small?: string; medium?: string; large?: string };
  fontSizes: number[];
  space: number[];
  colors: {
    blue: string;
    red: string;
  };
}
const theme: Theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [
    // margin and padding
    0, 4, 8, 16, 32, 64, 128, 256,
  ],
  colors: {
    blue: "#07c",
    red: "#e10",
  },
};
theme.breakpoints.small = theme.breakpoints[0];
theme.breakpoints.medium = theme.breakpoints[1];
theme.breakpoints.large = theme.breakpoints[2];

export const StyledPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        px={{ _: 3, medium: 4 }}
        py={{ _: 5, medium: 6 }}
        color="white"
        bg="blue"
      ></Box>
    </ThemeProvider>
  );
};
