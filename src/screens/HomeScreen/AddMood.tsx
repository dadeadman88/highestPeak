import * as React from "react";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import { theme } from "../../constants";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import { Calendar } from "react-native-calendars";
import { DateTimePicker, Text, ToastPresets, View } from "react-native-ui-lib";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { InputText } from "../../components/atoms/InputText";
import { verticalScale } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { MainActions } from "../../redux/actions/MainActions";
import { CustomBtn } from "../../components/atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { showHideToast } from "../../redux/slices/OtherSlice";

interface AddMoodProps {}

export const MOODS = [
  { img: require("../../assets/images/sad.png"), label: "Sad", value: "sad" },
  {
    img: require("../../assets/images/angry.png"),
    label: "Angry",
    value: "angry",
  },
  {
    img: require("../../assets/images/smile.png"),
    label: "Happy",
    value: "happy",
  },
  {
    img: require("../../assets/images/laugh.png"),
    label: "Excited",
    value: "excited",
  },
];

const AddMood = (props: AddMoodProps) => {
  const [mood, setMood] = React.useState(__DEV__ ? "sad" : "");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState(null);
  const [notes, setNotes] = React.useState("");
  const dispatch = useDispatch();
  const nav = useNavigation();

  const SaveMood = async () => {
    if (mood != "" && date != "" && time != "") {
      await dispatch(
        MainActions.AddMoodService({
          mood,
          mood_date: date,
          mood_time: time,
          description: notes,
        })
      ).then((v) => {
        let status = v.meta.requestStatus;
        if (status == "fulfilled") {
          nav.goBack();
        }
      });
    } else {
      dispatch(
        showHideToast({
          visible: true,
          message: "Please select mood, date and time",
          preset: ToastPresets.FAILURE,
        })
      );
    }
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <View marginH-20 marginV-10>
        <DrawerTitle title={"Add Mood"} />
      </View>
      <ScrollView>
        <View row spread padding-30>
          {MOODS.map((v) => (
            <TouchableOpacity onPress={() => setMood(v.value)}>
              <View
                gap-5
                center
                padding-10
                br20
                style={{
                  backgroundColor:
                    v.value == mood ? theme.color.primarybeta : "transparent",
                }}
              >
                <Image source={v.img} style={{ width: 50, height: 50 }} />
                <Text small regular color={v.value == mood ? "white" : "black"}>
                  {v.label}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Calendar
          onDayPress={(dt) => {
            setDate(dt.dateString);
          }}
          markedDates={{
            [date]: {
              selected: true,
              selectedColor: theme.color.primarybeta,
            },
          }}
        />
        <View margin-15 gap-10>
          <DateTimePicker
            placeholder="Select Time"
            placeholderTextColor={theme.color.tgray}
            onChange={(dtt) => {
              setTime(dtt);
            }}
            leadingAccessory={
              <Image
                source={require("../../assets/images/clock.png")}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginEnd: 10,
                }}
              />
            }
            mode="time"
            fieldStyle={{
              height: verticalScale(40),
              marginTop: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
              backgroundColor: theme.color.inputTypeColor,
            }}
          />
          <InputText
            style={{ height: verticalScale(100) }}
            label={false}
            placeholder="Notes"
            onChangeText={(t) => setNotes(t)}
          />
          <CustomBtn label="Save" onPress={SaveMood} />
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default AddMood;
