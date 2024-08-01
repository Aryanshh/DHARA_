import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame12 = ({ searchForLegalQuestions }) => {
  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame27.png")}
        />
        <View style={[styles.frame2, styles.frameLayout]}>
          <Text style={styles.searchForLegal}>{searchForLegalQuestions}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 40,
    width: 368,
    position: "absolute",
  },
  frameIcon: {
    top: 10,
    left: 12,
    width: 20,
    height: 20,
    overflow: "hidden",
    position: "absolute",
  },
  searchForLegal: {
    top: 8,
    left: 40,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 317,
    height: 24,
    position: "absolute",
  },
  frame2: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLinen,
    left: 0,
  },
  frame1: {
    top: 12,
    left: 16,
  },
  frame: {
    top: 72,
    width: 400,
    height: 64,
    left: 0,
    position: "absolute",
  },
});

export default Frame12;
