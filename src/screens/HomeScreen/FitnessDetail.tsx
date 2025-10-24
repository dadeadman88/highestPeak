import React from "react";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import { ScrollView } from "react-native";
import HealthCoachingTamplet from "../../components/templates/HealthCoachingTamplet";
import FitnessTamplet from "../../components/templates/FitnessTamplet";

const FitnessDetail = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ top: -10 }}>
        <FitnessTamplet />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default FitnessDetail;
