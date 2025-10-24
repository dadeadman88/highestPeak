import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../constants";
import Home from "../screens/HomeScreen/Home";
import BottomTabs from "./BottomTabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Exercise from "../screens/HomeScreen/Exercise";
import ZoomCall from "../screens/HomeScreen/ZoomCall";
import Notification from "../screens/HomeScreen/Notification";
import Profile from "../screens/HomeScreen/Profile";
import ExerciseDetail from "../screens/HomeScreen/ExerciseDetail";
import Workout from "../screens/HomeScreen/Workout";
import WorkoutResult from "../screens/HomeScreen/WorkoutResult";
import Home_Screen from "../screens/HomeScreen/Home_Screen";
import FitnessDetail from "../screens/HomeScreen/FitnessDetail";
import NutrtionDetail from "../screens/HomeScreen/NutrtionDetail";
import Subscription from "../screens/HomeScreen/SubscriptionScreen/Subscription";
import PaymentMethod from "../screens/HomeScreen/SubscriptionScreen/PaymentMethod";
import GoalDetails from "../screens/HomeScreen/GoalDetails";
import PaymentConfirm from "../screens/HomeScreen/SubscriptionScreen/PaymentConfirm";
import EditProfile from "../screens/HomeScreen/EditProfile";
import Privacy from "../screens/HomeScreen/Privacy";
import ChangePassword from "../screens/HomeScreen/ChangePassword";
import Booking from "../screens/HomeScreen/Booking";
import AddDiet from "../screens/HomeScreen/AddDiet";
import Diet from "../screens/HomeScreen/Diet";
import AddMood from "../screens/HomeScreen/AddMood";
import Mood from "../screens/HomeScreen/Moods";
import RegisterEvent from "../screens/HomeScreen/RegisterEvent";
import WebLink from "../screens/HomeScreen/WebLink";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREENS.HOME} component={BottomTabNavigation} />
      <Stack.Screen name={SCREENS.EXERCISE_DETAIL} component={ExerciseDetail} />
      <Stack.Screen name={SCREENS.WORKOUT} component={Workout} />
      <Stack.Screen name={SCREENS.WORKOUT_RESULT} component={WorkoutResult} />
      {/* <Stack.Screen name={SCREENS.HEALTH_COACHING} component={HealthCoaching} /> */}
      {/* <Stack.Screen name={SCREENS.FITNESS_DETAIL} component={FitnessDetail} /> */}
      {/* <Stack.Screen
        name={SCREENS.NUTRITION_DETAIL}
        component={NutrtionDetail}
      /> */}
      <Stack.Screen name={SCREENS.GOAL_DETAILS} component={GoalDetails} />
      <Stack.Screen name={SCREENS.Register_Event} component={RegisterEvent} />

      {/* <Stack.Screen name={SCREENS.SUBSCRIPTION} component={Subscription} /> */}
      <Stack.Screen name={SCREENS.PAYMENT_METHOD} component={PaymentMethod} />
      <Stack.Screen name={SCREENS.PAYMENT_CONFIRM} component={PaymentConfirm} />
      <Stack.Screen name={SCREENS.EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={SCREENS.CHANGE_PASS} component={ChangePassword} />
      <Stack.Screen name={SCREENS.PRIVACY} component={Privacy} />
      <Stack.Screen name={SCREENS.ADD_DIET} component={AddDiet} />
      <Stack.Screen name={SCREENS.DIET} component={Diet} />
      <Stack.Screen name={SCREENS.ADD_MOOD} component={AddMood} />
      <Stack.Screen name={SCREENS.MOOD} component={Mood} />
      <Stack.Screen name={SCREENS.BOOKING} component={Booking} />
      <Stack.Screen name={SCREENS.NOTIFICATION} component={Notification} />
      <Stack.Screen name={SCREENS.WEB_LINK} component={WebLink} />
    </Stack.Navigator>
  );
};

const BottomTabNavigation = (props: any) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME_SCREEN}
      tabBar={(e: any) => <BottomTabs {...e} {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={SCREENS.HOME_SCREEN}
        component={Home_Screen}
        initialParams={{ index: 0 }}
      />
      <Tab.Screen
        name={SCREENS.FITNESS_DETAIL}
        component={Home_Screen}
        initialParams={{ index: 1 }}
      />
      <Tab.Screen name={SCREENS.BOOKING} component={Booking} />
      <Tab.Screen name={SCREENS.SUBSCRIPTION} component={Subscription} />
      <Tab.Screen name={SCREENS.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
