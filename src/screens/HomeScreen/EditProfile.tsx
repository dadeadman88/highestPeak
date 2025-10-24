import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import EditProfileData from "../../components/molecules/ProfileMOl/EditProfileData";

const EditProfile = () => {
  return (
    <View style={{flex:1, paddingTop:50}}>
        <View marginH-20 marginV-10>
          <DrawerTitle title={"Edit Profile"} />
        </View>
        <EditProfileData />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditProfile;
