import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const StyledText = styled.Text`
  font-size: 24px;
  color: #333333;
`;

const App: React.FC = () => {
  return (
    <StyledContainer>
      <StyledText>Teste</StyledText>
    </StyledContainer>
  );
};

export default App;
