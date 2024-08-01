import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame37 = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frame1Position]}>
        <Text style={[styles.signUpWith, styles.frame1Position]}>
          Sign Up with Google
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1Position: {
    top: 12,
    position: "absolute",
  },
  signUpWith: {
    left: 106,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  frame1: {
    left: 16,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    width: 368,
    height: 48,
  },
  frame: {
    top: 348,
    left: 0,
    width: 400,
    height: 72,
    position: "absolute",
  },
});

export default Frame37;
