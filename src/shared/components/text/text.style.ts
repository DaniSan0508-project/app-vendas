import { TextProps as ItextProps } from "react-native";
import styled from "styled-components/native";

interface TextProps extends ItextProps{
  color?:string
}

export const ContainerText = styled.Text<TextProps>`
  ${({ color }) => color && `color: ${color};`}
`;
