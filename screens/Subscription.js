import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Frame28 from "../components/Frame28";
import Frame14 from "../components/Frame14";
import Frame7 from "../components/Frame7";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Subscription = () => {
  return (
    <View style={styles.subscription}>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.frame1}>
          <Text style={styles.chooseYourPayment}>Choose Your Payment Plan</Text>
        </View>
      </View>
      <View style={[styles.frame2, styles.framePosition]}>
        <Text style={[styles.getAccessTo, styles.subscribeTypo]}>
          Get access to comprehensive legal resources and services. Choose a
          plan that suits your needs and start benefiting from our extensive
          legal network and AI chatbot.
        </Text>
      </View>
      <View style={[styles.frame3, styles.framePosition]}>
        <Frame28 />
        <Frame14
          standardPlan="Standard Plan"
          mo="₹399/mo"
          accessToLegalNews="Access to legal news"
          unlimitedQA={`Unlimited Q&A`}
          priorityLawyerConnections="Priority lawyer connections"
          aIChatbotAccess="AI chatbot access"
        />
        <Frame14
          standardPlan="Premium Plan"
          mo="₹999/mo"
          accessToLegalNews="All features of Standard Plan"
          unlimitedQA="Personalized legal advice"
          priorityLawyerConnections="24/7 lawyer support"
          aIChatbotAccess="Exclusive webinars"
          propTop={572}
        />
      </View>
      <View style={[styles.frame4, styles.framePosition]}>
        <View style={[styles.frame5, styles.frame5Position]}>
          <Text style={[styles.subscribe, styles.frame5Position]}>
            Subscribe
          </Text>
        </View>
      </View>
      <Frame7 propLeft={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  subscribeTypo: {
    fontFamily: FontFamily.publicSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  frame5Position: {
    top: 12,
    position: "absolute",
  },
  chooseYourPayment: {
    top: -1,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    textAlign: "center",
    color: Color.colorMidnightblue_200,
    left: 0,
    position: "absolute",
  },
  frame1: {
    top: 20,
    width: 267,
    height: 28,
    left: 16,
    position: "absolute",
  },
  frame: {
    top: 72,
    height: 60,
  },
  getAccessTo: {
    top: 4,
    width: 369,
    color: Color.colorMidnightblue_200,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    left: 16,
    position: "absolute",
  },
  frame2: {
    top: 132,
    height: 112,
  },
  frame3: {
    top: 244,
    height: 862,
  },
  subscribe: {
    left: 145,
    letterSpacing: 0,
    color: Color.colorWhite,
    fontFamily: FontFamily.publicSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  frame5: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    width: 368,
    height: 48,
    left: 16,
  },
  frame4: {
    top: 1106,
    height: 72,
  },
  subscription: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1178,
    overflow: "hidden",
  },
});

export default Subscription;
