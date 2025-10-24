import React, { useState, useEffect } from "react";
import { ImageBackground, Image, StyleSheet, ScrollView, Alert } from "react-native";
import { InputText } from "../../atoms/InputText";
import { View, Text, ToastPresets } from "react-native-ui-lib";
import { IMAGES, theme } from "../../../constants";
import { Typography } from "../../atoms/Typography";
import { CustomBtn } from "../../atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { useDispatch } from "react-redux";
import { getDeviceInfo } from "../../../utils/Constants";
import { AuthActions } from "../../../redux/actions/AuthActions";
import { AppDispatch, store } from "../../../redux/store";

const SignUpScreen = () => {
  const [hasValidated, setValidated] = useState(new Array(5).fill(false));
  const [fname, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [cpasswordVal, setCPasswordVal] = useState("");
  const [password, setPassword] = useState(true);
  const [cpassword, setCPassword] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  // Manual validation function
  const validateFields = () => {
    const newValidation = [
      fname.trim().length > 0, // Full name
      email.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), // Email
      phone.trim().length > 0, // Phone
      passwordVal.length >= 6, // Password
      cpasswordVal === passwordVal && cpasswordVal.length > 0 // Confirm password
    ];
    console.log("Manual validation:", newValidation);
    setValidated(newValidation);
  };

  // Trigger validation when form values change
  useEffect(() => {
    validateFields();
  }, [fname, email, phone, passwordVal, cpasswordVal]);

  const SignupFunc = async () => {
    console.log("signup");
    validateFields();
  
    if (hasValidated.includes(false)) {
      store.dispatch(
        showHideToast({
          visible: true,
          message: "Please fill all fields correctly",
          preset: ToastPresets.FAILURE,
        })
      );
      return;
    }
  
    const signupData = {
      fullname: fname,
      phonenumber: phone,
      email: email.toLowerCase(),
      password: passwordVal,
      device_token: "123456789",
      ...getDeviceInfo(),
      udid: "a1b2c3d4e5f67890123456789abcdef012345678"
    };
  
    await dispatch(AuthActions.Register(signupData)).then((res) => {
      const status = res?.meta?.requestStatus;
  
      if (status === "fulfilled") {
        store.dispatch(
          showHideToast({
            visible: true,
            message: "Account created successfully!",
            preset: ToastPresets.SUCCESS,
          })
        );
  
        // Navigate if needed
        // navigation.navigate("Login");
      }
  
      // No need to handle rejected case — interceptor handles toast already
    });
  };
  

  const testValidation = () => {
    console.log("Current validation state:", hasValidated);
    console.log("Form values:", { fname, email, phone, passwordVal, cpasswordVal });
    validateFields();
  };

  return (
    <ImageBackground
      source={IMAGES.onBoardingImg}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.overlayLayer} />
      <ScrollView style={{ zIndex: 2 }} showsVerticalScrollIndicator={false}>
        <View flex center style={styles.overlay}>
          <Text white h2 style={{ fontWeight: "bold", marginBottom: 4, fontSize: 30 }}>
            Sign Up
          </Text>
          <Text white style={{ marginBottom: 30 }}>
            Create a new account
          </Text>

          <View style={styles.card}>

            <InputText
              value={fname}
              onValidationFailed={(isValid: boolean) => {
                console.log("Full name validation:", isValid);
                let copy = [...hasValidated];
                copy[0] = isValid;
                setValidated(copy);
              }}
              placeholder="Full Name"
              validate={["required"]}
              validationMessage={["Full name is required"]}
              onChangeText={(text: string) => setFName(text)}
            />

            <InputText
              value={email}
              onValidationFailed={(isValid: boolean) => {
                console.log("Email validation:", isValid);
                let copy = [...hasValidated];
                copy[1] = isValid;
                setValidated(copy);
              }}
              placeholder="Email Address"
              validate={["required", "email"]}
              validationMessage={["Email is required", "Email is invalid"]}
              style={{ marginTop: -10 }}
              onChangeText={(text: string) => setEmail(text)}
            />

            <InputText
              value={phone}
              onValidationFailed={(isValid: boolean) => {
                console.log("Phone validation:", isValid);
                let copy = [...hasValidated];
                copy[2] = isValid;
                setValidated(copy);
              }}
              placeholder="Mobile Number"
              validate={["required"]}
              validationMessage={["Mobile Number is required"]}
              style={{ marginTop: -10 }}
              onChangeText={(text: string) => setPhone(text)}
            />

            <InputText
              value={passwordVal}
              onValidationFailed={(isValid: boolean) => {
                let copy = [...hasValidated];
                copy[3] = isValid;
                setValidated(copy);
              }}
              onPressRight={() => setPassword(!password)}
              secureTextEntry={password}
              rightImage={!password ? IMAGES.eyeOn : IMAGES.eyeOff}
              placeholder="Enter your password"
              validate={[
                "required",
                (v: string) => v.length >= 6,
              ]}
              validationMessage={[
                "Password is required",
                "Password must be at least 6 characters",
              ]}
              style={{ marginTop: -10 }}
              onChangeText={(text: string) => setPasswordVal(text)}
            />

            <InputText
              value={cpasswordVal}
              onValidationFailed={(isValid: boolean) => {
                let copy = [...hasValidated];
                copy[4] = isValid;
                setValidated(copy);
              }}
              onPressRight={() => setCPassword(!cpassword)}
              secureTextEntry={cpassword}
              rightImage={!cpassword ? IMAGES.eyeOn : IMAGES.eyeOff}
              placeholder="Confirm password"
              validate={[
                "required",
                (v: string) => v === passwordVal,
              ]}
              validationMessage={[
                "Confirm Password is required",
                "Passwords do not match",
              ]}
              style={{ marginTop: -10 }}
              onChangeText={(text: string) => setCPasswordVal(text)}
            />

            <View marginV-30>
              <CustomBtn label="Sign Up" onPress={SignupFunc} />
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
  },
  overlayLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  overlay: {
    paddingHorizontal: 20,
    paddingTop: 70,
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  logo: {
    height: 80,
    width: 120,
    alignSelf: "center",
    marginBottom: 30,
  },
});

export default SignUpScreen;
