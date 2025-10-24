import React from "react";
import { Button, Text, View } from "react-native-ui-lib";
import { theme } from "../../../constants";

export const CustomBtn = (props: any) => {
  const {onPress = ()=>{},label,backgroundColor =theme.color.primarybeta,style,width,height} = props;
  return (
      <Button
        label={label}
        labelStyle={{ fontSize: 16, fontWeight: '600', color: '#FFF' }}
        backgroundColor="#5D4F3F"
        onPress={onPress}
        width={width}
        height={height}
        style={[{
          paddingVertical:15,
          borderRadius:30
        },style]}
      />
  );
};
