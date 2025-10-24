import React from "react";
import { View } from "react-native";

import { OnBeardingTopCont } from "../atoms/OnBoardingAtoms/OnBeardingTopCont";
import Animated, { SlideInUp } from "react-native-reanimated";

const OnBoardingTamplet = () => {
  return (
    <View style={{flex:1}}>
      <Animated.View style={{ flex: 1, zIndex:2 }} entering={SlideInUp}>
        <OnBeardingTopCont />
      </Animated.View>
    </View>
  );
};

export default OnBoardingTamplet;
