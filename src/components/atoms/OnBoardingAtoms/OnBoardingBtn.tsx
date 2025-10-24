import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, theme } from "../../../constants";

export const OnBoardingBtn = (props:any) => {
  const {onPress = ()=>{}} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
      <Typography size={theme.fontSize.large} color={"#000"}>
        Get Started
      </Typography>
      
      <View style={styles.iconView}>
        <Image source={IMAGES.rightArrow} resizeMode="contain" style={styles.iconStyle} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    marginTop:50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: theme.color.white,
  },
  iconView: {
    marginLeft:10
  },
  iconStyle: {
    width: 30,
    height: 30
  },
});
