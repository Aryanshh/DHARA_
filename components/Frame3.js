import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame3 = ({ propLeft, propTop }) => {
  const frame1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("top", propTop),
    };
  }, [propLeft, propTop]);

  return (
    <View style={[styles.frame, styles.framePosition, frame1Style]}>
      <Image
        style={[styles.frameIcon, styles.frameLayout]}
        resizeMode="cover"
        source={require("../assets/frame10.png")}
      />
      <View style={styles.frame1}>
        <Text style={[styles.dhara, styles.framePosition]}>DHARA</Text>
      </View>
      <View style={[styles.frame2, styles.frameLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 40,
    width: 40,
    top: 16,
    position: "absolute",
  },
  frameIcon: {
    left: 16,
    borderRadius: Border.br_3xs,
  },
  dhara: {
    left: 115,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.samarkan,
    color: Color.colorMidnightblue_200,
    textAlign: "center",
  },
  frame1: {
    top: 24,
    left: 56,
    width: 288,
    height: 24,
    position: "absolute",
  },
  frame2: {
    left: 344,
  },
  frame: {
    left: 0,
    width: 400,
    height: 72,
  },
});

export default Frame3;
