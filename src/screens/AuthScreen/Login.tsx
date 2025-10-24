import React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import { Text } from 'react-native-ui-lib';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import LoginScreen from '../../components/molecules/LoginMol/LoginScreen';

const Login = () => {
  return (
    // <SafeAreaContainer safeArea={false}>  
      <LoginScreen />
    // </SafeAreaContainer>
  );
};

export default Login;
