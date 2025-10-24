import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { scale, verticalScale } from "react-native-size-matters";
import { IMAGES, SCREEN_HEIGHT } from "../../../constants";
import { View } from "react-native-ui-lib";
import { OnBeardingContent } from "../../molecules/OnBeardingContent";

export const OnBeardingTopCont = (props: any) => {
  return (
        <View style={styles.bkImgStyle}>
           <OnBeardingContent />
        </View>
  );
};

const styles = StyleSheet.create({
  bkImgStyle: {
    flex: 1,
    backgroundColor:"#5D4F3F"
   },
  gradientOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  gradient: {
    height: 200,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  logoStyle: {
    width: scale(200),
    height: verticalScale(150),
  },
});
