import { TextProps as ItextProps } from "react-native";
import styled from "styled-components/native";

interface TextProps extends ItextProps{
  color?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular'
}

export const ContainerText = styled.Text<TextProps>`
  ${({ color }) => color && `color: ${color};`};
  padding-top: 3px;
  font-family: ${({fontFamily})=>fontFamily};
  font-size: ${({fontSize})=> fontSize};
`;
