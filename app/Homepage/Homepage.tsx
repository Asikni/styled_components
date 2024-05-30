"use client";

import { DarkButton, Title } from "../Components/Button/Button";
import { Wrapper } from "../Components/Button/Button";
import { Button } from "../Components/Button/Button";
import { StyledButton } from "../Components/Button/Button";
import { TomatoButton } from "../Components/Button/Button";
import { SubmitButton } from "../Components/Button/Button";
import { AnimatedLogo } from "../Components/Button/Button";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Input } from "../Components/Button/Button";
import { ButtonTwo } from "../Components/Button/Button";
import { ButtonThree } from "../Components/Button/Button";
import { Box, ShapeBox } from "../Components/Inputs/Inputs";

const theme = {
  themeOne: {
    dark: {
      primary: "#000",
      text: "#fff",
      main: "#BF4F74",
    },
    light: {
      primary: "#fff",
      text: "#000",
    },
  },
  themeTwo: {
    fontFamily: "Segoe UI",
    main: "mediumseagreen",
    fg: "#BF4F74",
    bg: "white",
  },
  themeThree: {
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
  },
};

const invertTheme = (theme: any) => ({
  fg: theme.bg, //or theme.themeTwo.bg
  bg: theme.fg,
});
// const themeFour = {
//   main: "mediumseagreen",
// };

const GlobalStyle = createGlobalStyle`
    button {
        font-family: ${(props) => props.theme.fontFamily};
        width: 500px;
        
    }
    h1 {
        color: #d2ffc0;
        font-size: 50px;
    }
   
`;

export const Homepage = () => {
  return (
    <div>
      <Box
        width="100px"
        height="100px"
        borderRadius="10px"
        border="1px solid green"
        bg="cyan"
      />

      <ThemeProvider theme={theme}>
        <ShapeBox shape="circle" color="secondary">
          nive
        </ShapeBox>

        <GlobalStyle />
        <div>
          <Wrapper>
            <Title>Hello</Title>
            <Box bg="green">
              <Button $primary>Button- 1</Button>
              <StyledButton variant="outline">Button- 2</StyledButton>
              <StyledButton>Button- 2</StyledButton>
              <TomatoButton>Button-3</TomatoButton>
              <TomatoButton as="a" href="#">
                Link with Tomato Button styles
              </TomatoButton>
              <SubmitButton> Submit</SubmitButton>
            </Box>
            <AnimatedLogo
              src={"styled_components/public/next.svg"}
              alt="picture"
            />
            <DarkButton> Dark Button </DarkButton>
            <Input defaultValue="@probablyup" type="text" />
            <Input
              defaultValue="@geelen"
              type="text"
              $inputColor="rebeccapurple"
            />
            <ButtonTwo>Normal</ButtonTwo>
            <Button theme={{ main: "blue" }}>Ad hoc theme</Button>{" "}
            {/** does not work*/}
            <ButtonTwo themeVariant="themeTwo">Themed</ButtonTwo>{" "}
            {/*One way of nested themes */}
            <ThemeProvider theme={theme.themeTwo}>
              {" "}
              {/*Second way of nested themes */}
              <ThemeProvider theme={invertTheme(theme.themeTwo)}>
                <ButtonThree>Inverted Theme</ButtonThree>
              </ThemeProvider>
            </ThemeProvider>
          </Wrapper>
        </div>
      </ThemeProvider>
    </div>
  );
};
