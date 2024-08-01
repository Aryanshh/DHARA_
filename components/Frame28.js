import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame28 = () => {
  return (
    <View style={[styles.frame, styles.frameLayout1]}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={styles.frame2}>
          <View style={[styles.frame3, styles.frameLayout]}>
            <View style={[styles.frame4, styles.framePosition1]}>
              <Text style={[styles.basicPlan, styles.moFlexBox]}>
                Basic Plan
              </Text>
            </View>
            <View style={[styles.frame5, styles.framePosition1]}>
              <Text style={[styles.mo, styles.moFlexBox]}>₹199/mo</Text>
            </View>
            <View style={[styles.frame6, styles.framePosition1]}>
              <View style={[styles.frame7, styles.framePosition]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame37.png")}
                />
                <Text style={[styles.accessToLegal, styles.moFlexBox]}>
                  Access to legal news
                </Text>
              </View>
              <View style={[styles.frame8, styles.framePosition]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame37.png")}
                />
                <Text
                  style={[styles.accessToLegal, styles.moFlexBox]}
                >{`Basic Q&A`}</Text>
              </View>
              <View style={[styles.frame9, styles.framePosition]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame37.png")}
                />
                <Text style={[styles.accessToLegal, styles.moFlexBox]}>
                  Limited lawyer connections
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 250,
    width: 368,
  },
  frameLayout: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  framePosition1: {
    left: 24,
    width: 286,
    position: "absolute",
  },
  moFlexBox: {
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    position: "absolute",
  },
  framePosition: {
    height: 20,
    left: 0,
    position: "absolute",
  },
  basicPlan: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    left: 0,
    top: 0,
  },
  frame4: {
    top: 20,
    height: 24,
    width: 286,
  },
  mo: {
    fontSize: FontSize.size_11xl,
    lineHeight: 36,
    fontWeight: "900",
    fontFamily: FontFamily.publicSansBlack,
    left: 0,
    top: 0,
  },
  frame5: {
    top: 48,
    height: 36,
    width: 286,
  },
  frameIcon: {
    width: 20,
    overflow: "hidden",
    top: 0,
    height: 20,
  },
  accessToLegal: {
    top: 2,
    left: 28,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
  },
  frame7: {
    width: 286,
    top: 0,
    height: 20,
  },
  frame8: {
    top: 28,
    width: 286,
  },
  frame9: {
    top: 56,
    width: 286,
  },
  frame6: {
    top: 104,
    height: 76,
    width: 286,
  },
  frame3: {
    top: 24,
    left: 32,
    width: 334,
    height: 200,
  },
  frame2: {
    top: 1,
    left: 1,
    width: 366,
    height: 248,
    position: "absolute",
  },
  frame1: {
    borderStyle: "solid",
    borderColor: Color.colorThistle,
    borderWidth: 1,
    left: 0,
    top: 0,
    height: 250,
    width: 368,
  },
  frame: {
    top: 12,
    left: 16,
    position: "absolute",
  },
});

export default Frame28;
