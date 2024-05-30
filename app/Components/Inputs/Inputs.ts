import styled from "styled-components";
// import variant from "@styled-system/variant";
// this is when we want to define something there

interface Breakpoints extends Array<string> {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const breakpoints: Breakpoints = ["40em", "52em", "64em", "80em"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

type BoxProps = {
  display?: string;
  direction?: string;
  bg?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  border?: string;
  width?: string;
  height?: string;
};

export const Box = styled.div<BoxProps>`
  ${({
    display,
    direction,
    bg,
    borderRadius,
    padding,
    margin,
    border,
    width,
    height,
  }) => `
    display: ${display};
    flex-direction: ${direction || "row"};
    background-color: ${bg};
    border-radius: ${borderRadius};
    padding: ${padding};
    margin: ${margin};
    border: ${border};
    width: ${width};
    height: ${height};
  `}

  @media only screen and (max-width: 768px) {
    //how to do media query
    flex-direction: column;
  }
`;

export const Column = styled(Box)``;

interface ButtonProps {
  border?: string;
  padding?: string;
  margin?: string;
  color?: string;
  backgroundColor?: string;
}

export const Button = styled.button<ButtonProps>`
  ${({ border, padding, margin, color, backgroundColor }) =>
    `
border:${border};

padding:${padding};

margin:${margin};

color:${color};

background-color:${backgroundColor}

`}
`;

// export const Shape = styled("div")(
//   variant({
//     variants: {
//       circle: {
//         color: "white",
//         bg: "black",
//         border: "1px solid red",
//       },
//       square: {
//         color: "green",
//         bg: "yellow",
//         border: "1px dotted red",
//       },
//       rect: {
//         color: "yellow",
//         bg: "cyan",
//         border: "1px dotted blue",
//       },
//     },
//   })
// );

const colors = {
  primary: "#e10",
  secondary: "#07c",
  teritary: "#BF4F74",
};
interface ShapeProps {
  shape?: "circle" | "square" | "rect";
  color?: "primary" | "secondary" | "teritary";
}

export const ShapeBox = styled.div<ShapeProps>`
  ${({ shape, color }) => {
    const backgroundColor = color ? colors[color] : "#fff";

    if (shape === "circle") {
      return `
        border: 5px solid red;
        color: black;
        background-color: ${backgroundColor};
        border-radius: 50px;
        height: 50px;
        width: 50px;
      `;
    }

    if (shape === "square") {
      return `
        border: 1px solid red;
        color: blue;
        background: ${backgroundColor};
        border-radius: 0px;
        height: 50px;
        width: 50px;
      `;
    }

    if (shape === "rect") {
      return `
        border: 1px dotted red;
        color: white;
        background: ${backgroundColor};
        border-radius: 0px;
        height: 50px;
        width: 150px;
      `;
    }
  }}
`;
