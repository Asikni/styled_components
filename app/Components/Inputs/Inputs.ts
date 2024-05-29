import styled from "styled-components";

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
    display: ${display || "flex"};
    flex-direction: ${direction};
    background-color: ${bg};
    border-radius: ${borderRadius};
    padding: ${padding};
    margin: ${margin};
    border: ${border};
    width: ${width};
    height: ${height};
  `}

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled(Box)``;
