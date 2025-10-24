import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { View } from "react-native-ui-lib";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import { commonStyles } from "../../globalStyle";
import { Typography } from "../../components/atoms/Typography";

const Privacy = (props:any) => {
  console.log('props',props?.route?.params?.title)
  const title = props?.route?.params?.title

  if(title === 'Privacy Policy'){
    return (
      <View style={{flex:1, paddingTop:50}}>
        <View style={commonStyles.footerContainer}>
          <View marginH-0 marginV-10>
            <DrawerTitle title={title} />
            <ScrollView showsVerticalScrollIndicator={false}>
  
            <Typography style={{paddingTop:20, paddingVertical:10, marginBottom:100, lineHeight:25}}>
            This Privacy Policy outlines how the ETCHA App (East Tennessee Cutting Horse Association
  App) collects, uses, and protects user information. By using the app, you agree to the terms
  explained below. {"\n"}{"\n"}
  1. Information We Collect{"\n"}
  When you use the ETCHA App, we may collect your full name, email address, phone number,
  event dates you select, and the class and number of entries you submit. We do not collect any
  payment information, location data, or sensitive personal details.{"\n"}{"\n"}
  2. How We Use Your Information{"\n"}
  We use the information you provide solely to register you for cutting horse events, organize class
  schedules, contact you with event-related updates or confirmations, and manage event
  coordination. Your data is not used for advertising, analytics, or third-party marketing.{"\n"}{"\n"}
  3. Data Storage and Security{"\n"}
  All information collected through the app is stored securely and is accessible only to authorized
  event administrators. While we take reasonable steps to protect your data, no mobile application
  or digital platform can guarantee complete security.{"\n"}{"\n"}
  4. Third-Party Access{"\n"}
  The ETCHA App does not use third-party tools, advertising systems, or analytics services that
  collect or track user information. Your data remains within the app’s internal registration system
  and is not shared externally.{"\n"}{"\n"}
  5. Your Rights and Data Control{"\n"}
  You have full control over your information. You may request to view, update, or delete your
  personal data at any time by contacting us at info@etcha.us. We will respond to all requests
  promptly and with care.{"\n"}{"\n"}
  6. Data Retention{"\n"}
  Your information is retained only for as long as necessary to manage event registration and
  planning. After each event cycle concludes, we may archive your data for internal recordkeeping
  or securely remove it from our system.{"\n"}{"\n"}
  7. Policy Updates{"\n"}
  
  We may update this Privacy Policy occasionally to reflect changes in our process or compliance
  needs. All updates will be published on this page along with the revised date. Continued use of
  the app indicates your acceptance of the most recent version of the policy.{"\n"}{"\n"}
  If you have any questions or concerns about this policy or how your data is handled, please
  contact us at info@etcha.us.{"\n"}{"\n"}
            </Typography>
            </ScrollView>
            
  
          </View>
        </View>
      </View>
    );
  }
  else {
    return (
      <View style={{flex:1, paddingTop:50}}>
        <View style={commonStyles.footerContainer}>
          <View marginH-0 marginV-10>
            <DrawerTitle title={title} />
            <ScrollView showsVerticalScrollIndicator={false}>
  
            <Typography style={{paddingTop:20, paddingVertical:10, marginBottom:100, lineHeight:25}}>
            These Terms and Conditions apply to your use of the ETCHA App (East Tennessee Cutting
Horse Association App). By downloading or using the app, you agree to the terms outlined
below. If you do not agree, you should not use the app.{"\n"}{"\n"}
1. Purpose of the App{"\n"}
The ETCHA App is designed to help users register for cutting horse events, select dates and
classes, and submit entries. The app is for informational and coordination purposes only. No
payment or financial transactions are processed through the app.{"\n"}{"\n"}
2. Eligibility{"\n"}
You must be at least 13 years of age to use the ETCHA App. By using the app, you confirm that
you meet this requirement.{"\n"}{"\n"}
3. Accuracy of Information{"\n"}
You agree that the information you submit through the app, including your name, contact details,
and entry selections, is accurate and complete. ETCHA is not responsible for errors caused by
incorrect or incomplete information provided by users.{"\n"}{"\n"}
4. App Usage and Conduct{"\n"}
You agree to use the ETCHA App only for its intended purpose. You must not attempt to
disrupt, damage, or reverse-engineer any part of the app. Misuse of the app may result in loss of
access or legal action.{"\n"}{"\n"}
5. Intellectual Property{"\n"}
All content in the ETCHA App, including text, layout, logos, and structure, is the property of
ETCHA or its event partners and is protected by applicable copyright and trademark laws. You
may not copy, reuse, or distribute any part of the app without written permission.{"\n"}{"\n"}
6. Limitation of Liability
ETCHA is not liable for any damages resulting from your use or inability to use the app. This
includes delays, data errors, connectivity issues, or miscommunications related to events or
entries. Use of the app is at your own risk.{"\n"}{"\n"}
7. Changes and Updates
We may update or modify these terms at any time. When changes are made, we will update the
date at the top of this page. Continued use of the app after changes have been posted means you
accept the updated terms.{"\n"}{"\n"}
If you have any questions about these Terms and Conditions, please contact us at
info@etcha.us.{"\n"}{"\n"}
            </Typography>
            </ScrollView>
            
  
          </View>
        </View>
      </View>
    );
  }
  
  
};

const styles = StyleSheet.create({});

export default Privacy;
