import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Frame6 from "./Frame6";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame24 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame12.png")}
        />
        <View style={styles.frame2}>
          <View style={[styles.frame3, styles.framePosition]}>
            <Text style={[styles.legalNews, styles.legalNewsPosition]}>
              Legal News
            </Text>
          </View>
          <View style={[styles.frame4, styles.framePosition]}>
            <Text style={[styles.stayInformedWith, styles.legalNewsPosition]}>
              Stay informed with the latest updates
            </Text>
          </View>
        </View>
      </View>
      <Frame6
        frame={require("../assets/frame13.png")}
        qA={`Q&A`}
        getAnswersToYourLegalQues="Get answers to your legal questions"
        onFramePress={() => navigation.navigate("CommunityForum")}
      />
      <Frame6
        frame={require("../assets/frame14.png")}
        qA="Find a Lawyer"
        getAnswersToYourLegalQues="Connect with legal professionals"
        propTop={154}
        propLeft={16}
        propWidth={122}
        onFramePress={() => navigation.navigate("LawyerPage")}
      />
      <Frame6
        frame={require("../assets/frame15.png")}
        qA="AI Chatbot"
        getAnswersToYourLegalQues="Get instant legal advice"
        propTop={154}
        propLeft={208}
        propWidth={108}
        onFramePress={() => navigation.navigate("Chatbot")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    width: 142,
    position: "absolute",
  },
  legalNewsPosition: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    top: 17,
    width: 20,
    height: 20,
    overflow: "hidden",
    left: 17,
    position: "absolute",
  },
  legalNews: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    color: Color.colorMidnightblue_200,
    top: 0,
  },
  frame3: {
    height: 24,
    top: 0,
  },
  stayInformedWith: {
    top: 2,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
    width: 124,
  },
  frame4: {
    top: 24,
    height: 40,
  },
  frame2: {
    top: 45,
    height: 64,
    width: 142,
    left: 17,
    position: "absolute",
  },
  frame1: {
    top: 12,
    left: 16,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorThistle,
    borderWidth: 1,
    width: 176,
    height: 126,
    position: "absolute",
  },
  frame: {
    top: 1510,
    left: 5,
    width: 400,
    height: 292,
    position: "absolute",
  },
});

export default Frame24;
