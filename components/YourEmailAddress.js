import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const YourEmailAddress = () => {
  return <Text style={styles.yourEmailAddress}>Your email address</Text>;
};

const styles = StyleSheet.create({
  yourEmailAddress: {
    position: "absolute",
    top: 8,
    left: 12,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_200,
    textAlign: "left",
    width: 345,
  },
});

export default YourEmailAddress;
