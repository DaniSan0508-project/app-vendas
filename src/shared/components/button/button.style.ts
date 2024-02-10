import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonContainerProp extends TouchableOpacityProps{
    margin?:string
}


export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProp>`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    background-color: blue;
    justify-content: center;
    align-items: center;
    ${({margin})=> margin ? `margin:${margin}` : ''}
`;
