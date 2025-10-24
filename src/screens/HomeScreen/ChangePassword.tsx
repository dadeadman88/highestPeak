import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import ChangePassData from "../../components/molecules/ChangePassMOI/ChangePassData";

const ChangePassword = () => {
  return (
    <View style={{flex:1, paddingTop:50}}>
      <View marginH-20 marginV-10>
        <DrawerTitle title={"Change Password"} />
      </View>
      <ChangePassData />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangePassword;
