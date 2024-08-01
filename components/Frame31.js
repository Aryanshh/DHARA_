import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame31 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <Pressable
        style={[styles.frame1, styles.frameLayout1]}
        onPress={() => navigation.navigate("LegalLib")}
      >
        <Image
          style={[styles.frameIcon, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/frame38.png")}
        />
        <View style={[styles.frame2, styles.frameLayout]}>
          <View style={[styles.frame3, styles.frameLayout]}>
            <Text style={[styles.legalLibrary, styles.legalLibraryPosition]}>
              {" "}
              Legal Library
            </Text>
          </View>
          <View style={[styles.frame4, styles.frameLayout]}>
            <Text style={[styles.viewSummaries, styles.legalLibraryPosition]}>
              View summaries
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 48,
    position: "absolute",
  },
  framePosition: {
    top: 0,
    left: 0,
  },
  frameLayout: {
    width: 221,
    position: "absolute",
  },
  legalLibraryPosition: {
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    borderRadius: Border.br_3xs,
    width: 48,
    height: 48,
    position: "absolute",
  },
  legalLibrary: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_200,
  },
  frame3: {
    height: 24,
    top: 0,
    left: 0,
  },
  viewSummaries: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: FontFamily.publicSansLight,
    color: Color.colorMidnightblue_100,
  },
  frame4: {
    top: 24,
    height: 20,
    left: 0,
  },
  frame2: {
    top: 2,
    left: 64,
    height: 44,
  },
  frame1: {
    top: 12,
    left: 16,
    width: 285,
  },
  frame: {
    top: 348,
    width: 400,
    height: 72,
    left: 0,
    position: "absolute",
  },
});

export default Frame31;
