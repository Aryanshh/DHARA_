import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import Frame13 from "./Frame13";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame34 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.frameLayout1]}>
      <View style={[styles.frame1, styles.qaPosition]}>
        <Frame13 />
        <Pressable
          style={styles.frame2}
          onPress={() => navigation.navigate("CommunityForum")}
        >
          <View style={[styles.frame3, styles.frameLayout]}>
            <View style={[styles.frame4, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/frame26.png")}
              />
            </View>
          </View>
          <View style={[styles.frame5, styles.framePosition]}>
            <Text style={[styles.qa, styles.qaPosition]}>{`Q&A`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 73,
    width: 400,
    left: 0,
  },
  qaPosition: {
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 32,
    width: 64,
    top: 0,
    position: "absolute",
  },
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  frameIcon: {
    top: 6,
    left: 22,
    width: 20,
    height: 20,
  },
  frame4: {
    left: 0,
  },
  frame3: {
    left: 2,
  },
  qa: {
    left: 20,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    color: Color.colorMidnightblue_100,
    textAlign: "center",
  },
  frame5: {
    top: 36,
    height: 16,
    width: 67,
    left: 0,
  },
  frame2: {
    top: 10,
    left: 82,
    borderRadius: Border.br_5xs,
    height: 52,
    width: 67,
    position: "absolute",
  },
  frame1: {
    height: 73,
    width: 400,
    left: 0,
  },
  frame: {
    top: 814,
    position: "absolute",
  },
});

export default Frame34;
