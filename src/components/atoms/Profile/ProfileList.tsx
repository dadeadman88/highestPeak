import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Switch, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, SCREENS, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";
import { navigate } from "../../../navigation/RootNavigation";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../../../redux/slices/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileList = (props: any) => {
  const { onPress } = props;
  const dispatch = useDispatch();
  const [toggleState, setToggleState] = useState(true);

  const DATA = [
    {
      id: 1,
      title: "Edit Profile",
      image: IMAGES.pr1,
      navigateTo: SCREENS.EDIT_PROFILE,
    },
    {
      id: 1,
      title: "Change Password",
      image: IMAGES.pr1,
      navigateTo: SCREENS.CHANGE_PASS,
    },
    { id: 2, title: "Notifications", image: IMAGES.pr2, navigateTo: "" },
    // { id: 2, title: "Diet Plan", image: IMAGES.pr7, navigateTo: SCREENS.DIET },
    // { id: 2, title: "Moods", image: IMAGES.pr8, navigateTo: SCREENS.MOOD },
    // {
    //   id: 3,
    //   title: "Subscription",
    //   image: IMAGES.pr3,
    //   navigateTo: SCREENS.SUBSCRIPTION,
    // },
    // { id: 4, title: "Order Placed", image: IMAGES.pr4, navigateTo: "" },
    {
      id: 7,
      title: "Privacy Policy",
      image: IMAGES.pr4,
      navigateTo: SCREENS.PRIVACY,
      params: { title: "Privacy Policy" },
    },
    {
      id: 8,
      title: "Terms and Conditions",
      image: IMAGES.pr4,
      navigateTo: SCREENS.PRIVACY,
      params: { title: "Terms and Conditions" },
    },
    { id: 5, title: "Delete Account", image: IMAGES.pr5, navigateTo: null },
    { id: 6, title: "Logout", image: IMAGES.pr6, navigateTo: null },
  ];

  const _renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          item.id === 5
            ? deleteAccount()
            : item.navigateTo
            ? navigate(item.navigateTo, item.params)
            : logoutAlert()
        }
      >
        <View row marginV-20>
          <Image
            source={item.image}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
          <View marginL-20 flex>
            <View row spread>
              <Typography size={theme.fontSize.medium}>{item.title}</Typography>
              {index === 2 ? (
                <Switch
                  value={toggleState}
                  onValueChange={(value) => setToggleState(value)}
                  onColor={theme.color.primary}
                />
              ) : (
                <Image
                  source={IMAGES.rightIcon}
                  style={{ width: 15, height: 15 }}
                />
              )}
            </View>
          </View>
        </View>
        <View style={commonStyles.lineBar} />
      </TouchableOpacity>
    );
  };

  const deleteAccount = () => {
    Alert.alert("Delete Account", "Do you want to delete your account?", [
      {
        text: "Cancel",
        onPress: null,
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {},
      },
    ]);
  };

  const logoutAlert = () => {
    Alert.alert("Logout", "Do you want to logout?", [
      {
        text: "Cancel",
        onPress: null,
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          dispatch(LogoutUser(null));
          AsyncStorage.removeItem("@LA-USER");
        },
      },
    ]);
  };

  return (
    <FlatList
      data={DATA}
      renderItem={_renderItem}
      keyExtractor={(item: any) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProfileList;
