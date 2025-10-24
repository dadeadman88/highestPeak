import React, { useState } from "react";
import { Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { InputText } from "../../atoms/InputText";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, SCREENS, theme } from "../../../constants";
import { Typography } from "../../atoms/Typography";
import { CustomBtn } from "../../atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { navigate } from "../../../navigation/RootNavigation";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../redux/actions/AuthActions";
import { getDeviceInfo } from "../../../utils/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const [hasValidated, setValidated] = useState(new Array(2).fill(true));
  const [email, setEmail] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [password, setPassword] = useState(true);
  const dispatch = useDispatch();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const LoginFunc = async () => {
    if (!hasValidated.includes(false)) {
      await dispatch(
        AuthActions.Login({
          email: email.toLowerCase(),
          password: passwordVal,
          device_token: "123456788",
          ...getDeviceInfo(),
        })
      ).then((v) => {
        let status = v.meta.requestStatus;
        if (status == "fulfilled") {
          AsyncStorage.setItem("@LA-USER", JSON.stringify(v.payload));
        }
      });
    }
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Logo */}
      <Image
        source={IMAGES.loginLogo}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Welcome text */}
      <Text style={styles.welcome}>Welcome back!</Text>

      {/* Inputs */}
      <View style={styles.form}>
        <InputText
          label={"Username"}
          value={email}
         // value="dadeadman88@gmail.com"
          onValidationFailed={(isValid) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[0] = isValid;
              return copy;
            });
          }}
          placeholder="Albert Sam"
          validate={["required"]}
          validationMessage={["Username is required"]}
          onChangeText={(text) => setEmail(text)}
          fieldStyle={isEmailFocused ? { borderColor: '#C5AC8E', borderWidth: 1 } : {}}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />

        <InputText
          label={"Password"}
          value={passwordVal}
        //  value={"12345678"}
          onValidationFailed={(isValid) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[1] = isValid;
              return copy;
            });
          }}
          onPressRight={() => setPassword(!password)}
          secureTextEntry={password}
          rightImage={!password ? IMAGES.eyeOn : IMAGES.eyeOff}
          placeholder="Enter your password"
          validate={["required"]}
          validationMessage={["Password is required"]}
          onChangeText={(text) => setPasswordVal(text)}
          fieldStyle={isPasswordFocused ? { borderColor: '#C5AC8E', borderWidth: 1 } : {}}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />

        {/* Forgot password onPress={() => navigate(SCREENS.FORGOT)} */}
        <TouchableOpacity>
          <Typography align="right" color={theme.color.tgray} style={{ marginTop: 8 }}>
            Forgot password?
          </Typography>
        </TouchableOpacity>

        {/* Login Button */}
        <View style={{ marginTop: 30 }}>
          <CustomBtn label="Login" onPress={LoginFunc} />
        </View>

        {/* Register onPress={() => navigate(SCREENS.SIGN_UP)} */}
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <Text small style={{ marginBottom: 10 }}>
            Don’t have an account?
          </Text>
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerText}>Register For Free Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  logo: {
    height: 70,
    width: "70%",
    marginTop: 50,
    marginBottom: 30,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  form: {
    width: "100%",
    paddingHorizontal:10,
    paddingVertical:10
  },
  registerBtn: {
    borderWidth: 1,
    borderColor: "#c5a67e",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    marginTop:20
  },
  registerText: {
    color: "#c5a67e",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoginScreen;
