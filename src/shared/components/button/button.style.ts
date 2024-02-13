import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../themes/theme';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonContainerProp extends TouchableOpacityProps{
    margin?:string
}


export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProp>`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    background-color: blue;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${({margin})=> margin ? `margin:${margin}` : ''};
`;

export const GradientButton = styled(LinearGradient)<ButtonContainerProp>`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    flex-direction: row;
    background-color: blue;
    justify-content: center;
    align-items: center;
    ${({margin})=> margin ? `margin:${margin}` : ''};
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProp>`
    background-color: transparent;
    border-width: 1px;
    border-color: ${theme.colors.mainTheme.primary};
`;

export const ActivityIndicator = styled.ActivityIndicator`
    margin-left: 8px;
`
