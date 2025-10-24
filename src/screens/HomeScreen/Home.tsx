import React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Text, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import HomeScreen from "../../components/molecules/HomeMol/HomeScreen";
import { theme } from "../../constants";
import { useSelector } from "react-redux";
import { States } from "../../utils/types";

const Home = () => {
  const { token,user } = useSelector((state: States) => state.Auth)
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          flex
          backgroundColor={theme.color.primary}
        >
          <HomeScreen />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Home;
