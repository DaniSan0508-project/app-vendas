import styled from 'styled-components/native';


export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    background-color: blue;
    justify-content: center;
    align-items: center;
    ${({margin = '0px'})=> margin ? `margin:${margin}` : ''}
`;
