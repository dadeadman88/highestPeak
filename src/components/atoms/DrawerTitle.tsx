import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { scale, verticalScale } from "react-native-size-matters";
import { Typography } from "./Typography";
import { IMAGES, theme } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { onBack } from "../../navigation/RootNavigation";

const DrawerTitle = (props: any) => {
  const { title } = props;
  return (
    <View row gap={10}>
      <TouchableOpacity onPress={() => onBack()}>
        <Image
          source={IMAGES.leftIconWithColor}
          style={{ width: 30, height: 30, }}
        />
      </TouchableOpacity>
      <Typography textType="semiBold" size={theme.fontSize.large20}>
        {title}
      </Typography>
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    height: 20,
    alignSelf: "center",
    borderWidth: 3,
    marginRight: 10,
    borderColor: theme.color.primary,
  },
});
export default DrawerTitle;
