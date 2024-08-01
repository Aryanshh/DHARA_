import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame9 = ({ frame, lawyerY, specializationFamilyLaw, propLeft }) => {
  const frame6Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.frame, frame6Style]}>
      <Image
        style={[styles.frameIcon, styles.framePosition1]}
        resizeMode="cover"
        source={frame}
      />
      <View style={[styles.frame1, styles.framePosition1]}>
        <View style={[styles.frame2, styles.framePosition]}>
          <Text style={[styles.lawyerY, styles.lawyerYPosition]}>
            {lawyerY}
          </Text>
        </View>
        <View style={[styles.frame3, styles.framePosition]}>
          <Text
            style={[styles.specializationFamilyLaw, styles.lawyerYPosition]}
          >
            {specializationFamilyLaw}
          </Text>
        </View>
        <View style={[styles.frame4, styles.framePosition]}>
          <Text style={[styles.viewProfile, styles.lawyerYClr]}>
            View Profile
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    left: 0,
    width: 240,
    position: "absolute",
  },
  framePosition: {
    width: 208,
    left: 16,
    position: "absolute",
  },
  lawyerYPosition: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  lawyerYClr: {
    color: Color.colorMidnightblue_200,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  frameIcon: {
    height: 320,
    overflow: "hidden",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  lawyerY: {
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    color: Color.colorMidnightblue_200,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  frame2: {
    height: 20,
    overflow: "hidden",
    top: 0,
    width: 208,
    left: 16,
  },
  specializationFamilyLaw: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 16,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
  },
  frame3: {
    top: 24,
    height: 16,
    overflow: "hidden",
  },
  viewProfile: {
    top: 8,
    left: 64,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    textAlign: "center",
    position: "absolute",
    color: Color.colorMidnightblue_200,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  frame4: {
    top: 52,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLinen,
    height: 36,
  },
  frame1: {
    top: 332,
    height: 100,
  },
  frame: {
    left: 272,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    height: 432,
    width: 240,
    borderRadius: Border.br_xs,
    top: 0,
    position: "absolute",
  },
});

export default Frame9;
