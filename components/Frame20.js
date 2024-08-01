import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame20 = ({ lawyerX, specialistInFamilyLaw, frame, propTop }) => {
  const frame29Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.frame, frame29Style]}>
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.framePosition]}>
          <Text style={[styles.lawyerX, styles.lawyerXPosition]}>
            {lawyerX}
          </Text>
        </View>
        <View style={[styles.frame3, styles.framePosition]}>
          <Text style={[styles.specialistInFamily, styles.lawyerXPosition]}>
            {specialistInFamilyLaw}
          </Text>
        </View>
      </View>
      <Image style={styles.frameIcon} resizeMode="cover" source={frame} />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    width: 208,
    position: "absolute",
  },
  lawyerXPosition: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  lawyerX: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    color: Color.colorMidnightblue_200,
  },
  frame2: {
    height: 28,
    top: 0,
    left: 0,
  },
  specialistInFamily: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
  },
  frame3: {
    top: 32,
    height: 20,
  },
  frame1: {
    height: 56,
    width: 208,
    top: 16,
    left: 16,
    position: "absolute",
  },
  frameIcon: {
    left: 240,
    width: 112,
    height: 63,
    top: 16,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  frame: {
    top: 12,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    width: 368,
    height: 95,
    borderRadius: Border.br_xs,
    left: 16,
    position: "absolute",
  },
});

export default Frame20;
