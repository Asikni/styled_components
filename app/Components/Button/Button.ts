import { keyframes, styled } from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
export const StyledButton = styled.button<{ variant?: string }>`
  border: 2px solid green;
  background-color: ${(props) =>
    props.variant === "outline" ? "yellow" : "orange"};
  color: ${(props) => (props.variant === "outline" ? "purple" : "black")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props) =>
      props.variant === "outline" ? "orange" : "yellow"};
    color: ${(props) => (props.variant === "outline" ? "white" : "black")};
    border: 2px solid white;
  }
`;
export const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
  border: 2px solid #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
export const SubmitButton = styled(Button).attrs((props) => ({
  type: "submit",
}))`
  color: cyan;
  border-color: green;
  cursor: pointer;
`;

const rotate = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

export const AnimatedLogo = styled.img`
  height: 40em;
  width: 40em;
  animation: ${rotate} infinite 20s linear;
`;

export const DarkButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.themeOne.dark.primary};
  background-color: ${(props) => props.theme.themeOne.dark.primary};
  color: ${(props) => props.theme.themeOne.dark.text};
`;

export const Input = styled.input<{ $inputColor?: string }>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.$inputColor || "green"};
  background: yellow;
  border: none;
  border-radius: 3px;
`;

export const ButtonTwo = styled.button<{ themeVariant?: string }>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${(props) =>
    props.themeVariant === "themeTwo"
      ? props.theme.themeTwo.main
      : props.theme.themeOne.dark.main};
  border: 2px solid
    ${(props) =>
      props.themeVariant === "themeTwo"
        ? props.theme.themeTwo.main
        : props.theme.themeOne.dark.main};
`;

export const ButtonThree = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
