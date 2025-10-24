import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import RegisterEventMol from "../../components/molecules/RegisterEventMol";

const RegisterEvent = () => {
  return (
    <View style={{flex:1, paddingTop:50}}>
      <View marginH-20 marginV-10>
        <DrawerTitle title={"Register Event"} />
      </View>
      <RegisterEventMol />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RegisterEvent;
