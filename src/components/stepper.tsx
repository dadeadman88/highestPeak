import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';


interface StepperCompProps {
    labels:Array<string>
 }


const StepperComp = ({labels}: StepperCompProps) => {

    const [currentStep, setCurrentStep] = React.useState(0);

    return (
        <View style={styles.container}>
            <View style={{ width: "100%", padding: 15, gap: 20, flexDirection: "row" }}>
                {
                    labels.map((v, i) => (
                        <View style={{ width: 50, height: 50, backgroundColor: i == currentStep ? "red" : "#aaa", justifyContent: "center", alignItems: "center" }}>
                            <Text>
                                {
                                    v.label
                                }
                            </Text>
                        </View>
                    ))
                }
            </View>
            <View style={{ flexDirection: "row", gap: 20 }}>
                <Pressable onPress={() => setCurrentStep(currentStep - 1)} disabled={currentStep == 0}>
                    <Text>
                        Previous
                    </Text>
                </Pressable>
                <Pressable onPress={() => setCurrentStep(currentStep + 1)} disabled={currentStep == labels.length - 1}>
                    <Text>
                        Next
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default StepperComp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});