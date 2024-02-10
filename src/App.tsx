import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Login from './modules/login';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;
