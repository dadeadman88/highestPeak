import React, { useEffect, useState } from "react";
import { SCREENS, theme, IMAGES } from "../../constants";
import { ActivityIndicator, StyleSheet, Image } from "react-native";
import { View } from "react-native-ui-lib";
import { commonStyles } from "../../globalStyle";
import { Typography } from "../atoms/Typography";
import { navigate } from "../../navigation/RootNavigation";
import { OnBoardingBtn } from "../atoms/OnBoardingAtoms/OnBoardingBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/slices/AuthSlice";
import Animated, { SlideInDown, SlideInLeft, SlideInUp, ZoomIn } from "react-native-reanimated";

export const OnBeardingContent = (props: any) => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("@LA-USER", (error, result) => {
      if (!error) {
        if (result) {
          dispatch(LoginUser(JSON.parse(result)))
        }
      }
      setLoading(false)
    })
  }, [])

  return (
    <View style={{flex:1}} marginT-10 marginH-20 flex>

      <Animated.View style={{flex:1}} entering={ZoomIn.duration(1000)}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           <Image source={IMAGES.logo} resizeMode="contain" style={styles.iconStyle} />
        </View>

        <Typography
          textType="bold"
          size={theme.fontSize.medium}
          color={theme.color.white}
          style={{textAlign:'center'}}
        >
          Highest Peak {"\n"}Clothing & Apparel{"\n"}
        </Typography>
        
      </Animated.View>

      <View style={{alignItems:'center', justifyContent:'center', marginBottom:100}}>
        {
          loading ?
            <View center marginT-20>
              <ActivityIndicator color={"#fff"} size={"large"} />
            </View>
            :
            <Animated.View entering={SlideInDown.duration(1000)}>
              <OnBoardingBtn onPress={() => navigate(SCREENS.GETTINGSTARTED)} />
            </Animated.View>
        }
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    width: 150,
    height: 150
  },
});
