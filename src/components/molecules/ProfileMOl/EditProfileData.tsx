import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ToastPresets, View } from "react-native-ui-lib";
import { commonStyles } from "../../../globalStyle";
import ProfileImg from "../../atoms/Profile/ProfileImg";
import ProfileList from "../../atoms/Profile/ProfileList";
import { useDispatch, useSelector } from "react-redux";
import { IMAGES } from "../../../constants";
import { onBack } from "../../../navigation/RootNavigation";
import { CustomBtn } from "../../atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { InputText } from "../../atoms/InputText";
import { States } from "../../../utils/types";
import { AuthActions } from "../../../redux/actions/AuthActions";
import { showHideToast } from "../../../redux/slices/OtherSlice";

const EditProfileData = () => {
  const [hasValidated, setValidated] = useState(new Array(2).fill(true));
  const { user } = useSelector((state: States) => state.Auth);
  const [full_name, setFName] = useState(user?.fullname);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phonenumber);
  const dispatch = useDispatch();

  console.log(user)

  const EditProfile = async () => {
    
    if (!hasValidated.includes(false)) {
      await dispatch(AuthActions.EditProfile({
        full_name: full_name,
        phonenumber: phone
      })).then((v) => {
        let status = v.meta.requestStatus;
        if (status == "fulfilled") {
          dispatch(showHideToast({
            visible: true,
            message: "Profile has been updated",
            preset: ToastPresets.SUCCESS
          }))
          onBack();
        }
      });
    }
  }

  return (
    <View style={commonStyles.footerContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputText
          // label={"Email Address:"}
          value={full_name}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[0] = isValid;
              return copy;
            });
          }}
          placeholder="First Name"
          validationMessage={["First name is required"]}
          validate={["required"]}
          onChangeText={(text: string) => setFName(text)}
        />
        <InputText
          // label={"Email Address:"}
          editable={false}
          value={email}
          // onValidationFailed={(isValid: boolean) => {
          //   setValidated((prev) => {
          //     let copy = [...prev];
          //     copy[0] = isValid;
          //     return copy;
          //   });
          // }}
          placeholder="Email Address"
          // validate={["email"]}
          style={{ marginTop: -10 }}
          //validationMessage={["Email is invalid"]}
          onChangeText={(text: string) => setEmail(text)}
        />
        <InputText
          // label={"Email Address:"}
          value={phone}
          placeholder="Mobile Number"
          style={{ marginTop: -10 }}
          onChangeText={(text: string) => setPhone(text)}
        />

        <View marginV-40>
          <CustomBtn label="Edit Profile" onPress={() => EditProfile()} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileData;
