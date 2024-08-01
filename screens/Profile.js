import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import Frame8 from "../components/Frame8";
import Frame15 from "../components/Frame15";
import { useNavigation } from "@react-navigation/native";
import Frame32 from "../components/Frame32";
import Frame33 from "../components/Frame33";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={styles.theUserInputWasGiveProfil}>
        <Frame8 profile="Profile" />
        <View style={styles.frame}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame53.png")}
          />
          <View style={styles.frame1}>
            <View style={styles.frame2}>
              <Text
                style={[styles.aiyra, styles.textPosition]}
              >{`Aiyra `}</Text>
            </View>
            <View style={styles.frame3}>
              <Text style={[styles.premiumMember, styles.premiumMemberTypo]}>
                Premium Member
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.frame4}>
          <View style={[styles.frame5, styles.frameLayout1]}>
            <View style={[styles.frame6, styles.framePosition2]}>
              <Text style={[styles.questionsAsked, styles.premiumMemberTypo]}>
                Questions Asked
              </Text>
            </View>
            <View style={[styles.frame7, styles.framePosition1]}>
              <Text style={[styles.text, styles.textTypo]}>15</Text>
            </View>
          </View>
          <View style={[styles.frame8, styles.frameLayout1]}>
            <View style={[styles.frame9, styles.framePosition2]}>
              <Text style={[styles.questionsAsked, styles.premiumMemberTypo]}>
                Answers Provided
              </Text>
            </View>
            <View style={[styles.frame10, styles.framePosition1]}>
              <Text style={[styles.text, styles.textTypo]}>8</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame11, styles.frameLayout]}>
          <View style={[styles.frame12, styles.framePosition]}>
            <Text
              style={[styles.subscriptionDetails, styles.subscriptionPosition]}
            >
              Subscription Details
            </Text>
          </View>
        </View>
        <Frame15
          frame={require("../assets/frame54.png")}
          seniorPartnerAtDoeAssocia="Plan"
          present="Premium"
          propTop={453}
          propWidth={122}
          propWidth1={58}
          propWidth2={58}
          propWidth3={58}
        />
        <Frame15
          frame={require("../assets/frame55.png")}
          seniorPartnerAtDoeAssocia="Next Billing Date"
          present="March 15, 2024"
          propTop={525}
          propWidth={189}
          propWidth1={125}
          propWidth2={125}
          propWidth3={125}
        />
        <Frame15
          frame={require("../assets/frame56.png")}
          seniorPartnerAtDoeAssocia="Payment Method"
          present="Visa **** 1234"
          propTop={597}
          propWidth={190}
          propWidth1={126}
          propWidth2={126}
          propWidth3={126}
        />
        <Pressable
          style={styles.frame13}
          onPress={() => navigation.navigate("Subscription")}
        >
          <View style={styles.frame14}>
            <Text
              style={[styles.manageSubscription, styles.subscriptionPosition]}
            >
              Manage Subscription
            </Text>
          </View>
        </Pressable>
        <View style={[styles.frame15, styles.frameLayout]}>
          <View style={[styles.frame16, styles.framePosition]}>
            <Text
              style={[styles.subscriptionDetails, styles.subscriptionPosition]}
            >
              Activity
            </Text>
          </View>
        </View>
        <Frame32 />
        <Frame33 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    textAlign: "center",
    lineHeight: 28,
    top: 0,
    position: "absolute",
  },
  premiumMemberTypo: {
    color: Color.colorMidnightblue_100,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.publicSansRegular,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  frameLayout1: {
    height: 86,
    width: 176,
    borderWidth: 1,
    borderColor: Color.colorThistle,
    borderStyle: "solid",
    top: 12,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
  },
  framePosition2: {
    top: 49,
    height: 20,
    position: "absolute",
  },
  framePosition1: {
    top: 17,
    height: 28,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    color: Color.colorMidnightblue_200,
    left: 0,
  },
  frameLayout: {
    height: 55,
    left: 0,
    position: "absolute",
    width: 400,
  },
  framePosition: {
    height: 23,
    top: 20,
    left: 16,
    position: "absolute",
  },
  subscriptionPosition: {
    letterSpacing: 0,
    position: "absolute",
  },
  frameIcon: {
    top: 16,
    left: 136,
    borderRadius: Border.br_9980xl,
    width: 128,
    height: 128,
    position: "absolute",
    overflow: "hidden",
  },
  aiyra: {
    left: 162,
    fontWeight: "600",
    fontFamily: FontFamily.publicSansSemiBold,
    color: Color.colorMidnightblue_200,
    textAlign: "center",
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  frame2: {
    height: 28,
    top: 0,
    width: 368,
    left: 0,
    position: "absolute",
  },
  premiumMember: {
    left: 126,
  },
  frame3: {
    top: 28,
    height: 20,
    width: 368,
    left: 0,
    position: "absolute",
  },
  frame1: {
    top: 152,
    height: 48,
    width: 368,
    left: 16,
    position: "absolute",
  },
  frame: {
    top: 72,
    height: 216,
    left: 0,
    position: "absolute",
    width: 400,
  },
  questionsAsked: {
    left: 0,
  },
  frame6: {
    left: 33,
    width: 109,
  },
  text: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    lineHeight: 28,
    top: 0,
    position: "absolute",
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
  },
  frame7: {
    left: 77,
    width: 22,
  },
  frame5: {
    left: 16,
    height: 86,
    width: 176,
    borderWidth: 1,
    borderColor: Color.colorThistle,
    borderStyle: "solid",
  },
  frame9: {
    left: 30,
    width: 117,
  },
  frame10: {
    left: 81,
    width: 13,
  },
  frame8: {
    left: 208,
  },
  frame4: {
    top: 288,
    height: 110,
    left: 0,
    position: "absolute",
    width: 400,
  },
  subscriptionDetails: {
    top: -1,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    color: Color.colorMidnightblue_200,
    left: 0,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  frame12: {
    width: 166,
  },
  frame11: {
    top: 398,
  },
  manageSubscription: {
    top: 8,
    left: 103,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.colorWhite,
    fontFamily: FontFamily.publicSansRegular,
    letterSpacing: 0,
    textAlign: "center",
  },
  frame14: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    height: 40,
    top: 12,
    width: 368,
    left: 16,
    position: "absolute",
  },
  frame13: {
    top: 669,
    height: 64,
    left: 0,
    position: "absolute",
    width: 400,
  },
  frame16: {
    width: 63,
  },
  frame15: {
    top: 733,
  },
  theUserInputWasGiveProfil: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    height: 1097,
    overflow: "hidden",
    width: 400,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
  },
  profile: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default Profile;
