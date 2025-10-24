import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ToastPresets, View } from "react-native-ui-lib";
import { commonStyles } from "../../globalStyle";
import { useDispatch, useSelector } from "react-redux";
import { CustomBtn } from "../atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { InputText } from "../atoms/InputText";
import { States } from "../../utils/types";
import { AuthActions } from "../../redux/actions/AuthActions";
import { showHideToast } from "../../redux/slices/OtherSlice";
import { useRoute } from '@react-navigation/native';
import { Checkbox } from "react-native-ui-lib"; // Ensure this is installed
import { onBack } from "../../navigation/RootNavigation";

const CLASS_OPTIONS = {
  fresh: ["Open", "Non Pro", "Unlimited Amateur"],
  lae: ["4yr Old Open", "4yr Old Non Pro", "5/6yr Old Open", "5/6yr Old Non Pro"]
};

const RegisterEventMol = () => {
  const { params }: any = useRoute();
  const slot = params?.slot || {};
  const dispatch = useDispatch();

  const { user } = useSelector((state: States) => state.Auth);
  const [fname, setFName] = useState(user?.fullname || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phonenumber || "");

  const [classStates, setClassStates] = useState<{ [key: string]: { checked: boolean, count: string } }>({});
  const [hasValidated, setValidated] = useState([true]);

  useEffect(() => {
    const classes = CLASS_OPTIONS[slot.category_name] || [];
    const initial = Object.fromEntries(classes.map(cls => [cls, { checked: false, count: "" }]));
    setClassStates(initial);
  }, [slot]);

  const handleCheckboxChange = (cls: string, checked: boolean) => {
    setClassStates(prev => ({
      ...prev,
      [cls]: { ...prev[cls], checked }
    }));
  };

  const handleEntryChange = (cls: string, count: string) => {
    setClassStates(prev => ({
      ...prev,
      [cls]: { ...prev[cls], count }
    }));
  };

  const submitEvent = async () => {
    const selectedEntries = Object.entries(classStates)
      .filter(([_, data]) => data.checked && data.count)
      .map(([cls, data]) => ({
        class: cls,
        entries: parseInt(data.count)
      }));

    if (selectedEntries.length === 0) {
      dispatch(showHideToast({
        visible: true,
        message: "Please select at least one class and enter number of entries.",
        preset: ToastPresets.FAILURE
      }));
      return;
    }

    const payload = {
      event_id: slot.id,
      entries: selectedEntries
    };

    console.log("Submitting Payload: ", (payload));

    await dispatch(AuthActions.RegisterEvent(payload)).then((v) => {
      console.log(v)
      if (v.meta.requestStatus === "fulfilled") {
        dispatch(showHideToast({
          visible: true,
          message: "You have registered in this event",
          preset: ToastPresets.SUCCESS
        }));
        onBack();
      }
      else {
        console.log("fuck you")
      }
    });
  };

  return (
    <View style={commonStyles.footerContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputText value={slot.title} editable={false} placeholder="Event name" />
        <InputText value={fname} editable={false} placeholder="Full Name" style={{ marginTop: -15 }} />
        <InputText value={email} editable={false} placeholder="Email Address" style={{ marginTop: -15 }} />
        <InputText value={phone} editable={false} placeholder="Mobile Number" style={{ marginTop: -15 }} />

        {(CLASS_OPTIONS[slot.category_name] || []).map((cls, idx) => (
          <View key={idx} style={{ marginBottom: 15 }}>
            <Checkbox
              label={cls}
              value={classStates[cls]?.checked || false}
              onValueChange={(val: boolean) => handleCheckboxChange(cls, val)}
              color="#0F77B7"
            />
            {classStates[cls]?.checked && (
              <InputText
                placeholder="Number of entries"
                keyboardType="numeric"
                value={classStates[cls]?.count}
                onChangeText={(text: string) => handleEntryChange(cls, text)}
                style={{ marginTop: 5 }}
              />
            )}
          </View>
        ))}

        <View marginV-40>
          <CustomBtn label="Submit" onPress={submitEvent} />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterEventMol;