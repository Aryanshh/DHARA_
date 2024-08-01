import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Frame13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <Pressable
        style={[styles.frame1, styles.frameLayout1]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.frame2, styles.frameLayout]}>
          <View style={[styles.frame3, styles.frameLayout]}>
            <Image
              style={[styles.frameIcon, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/frame16.png")}
            />
          </View>
        </View>
        <View style={[styles.frame4, styles.framePosition]}>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.frame5, styles.frameLayout1]}
        onPress={() => navigation.navigate("Chatbot")}
      >
        <View style={[styles.frame4, styles.framePosition]}>
          <Text style={[styles.chatbot, styles.homeTypo]}>Chatbot</Text>
        </View>
        <View style={[styles.frame2, styles.frameLayout]}>
          <Image
            style={[styles.frameIcon, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/frame15.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.frame8, styles.frameLayout1]}
        onPress={() => navigation.navigate("LawyerPage")}
      >
        <View style={[styles.frame2, styles.frameLayout]}>
          <View style={[styles.frame3, styles.frameLayout]}>
            <Image
              style={[styles.frameIcon, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/frame17.png")}
            />
          </View>
        </View>
        <View style={[styles.frame4, styles.framePosition]}>
          <Text style={[styles.lawyers, styles.homeTypo]}>Lawyers</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.frame12, styles.frameLayout1]}
        onPress={() => navigation.navigate("Profile")}
      >
        <View style={[styles.frame2, styles.frameLayout]}>
          <View style={[styles.frame3, styles.frameLayout]}>
            <Image
              style={[styles.frameIcon, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/frame18.png")}
            />
          </View>
        </View>
        <View style={[styles.frame4, styles.framePosition]}>
          <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 52,
    borderRadius: Border.br_5xs,
    top: 9,
    width: 67,
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
  homeTypo: {
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  frameIcon: {
    top: 6,
    left: 22,
    width: 20,
    height: 20,
  },
  frame3: {
    left: 0,
  },
  frame2: {
    left: 2,
  },
  home: {
    left: 17,
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.publicSansMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  frame4: {
    top: 36,
    height: 16,
    width: 67,
    overflow: "hidden",
    left: 0,
  },
  frame1: {
    left: 16,
  },
  chatbot: {
    left: 11,
    fontWeight: "600",
    fontFamily: FontFamily.publicSansSemiBold,
    color: Color.colorMidnightblue_200,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  frame5: {
    left: 166,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  lawyers: {
    left: 10,
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.publicSansMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  frame8: {
    left: 242,
  },
  profile: {
    left: 15,
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.publicSansMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  frame12: {
    left: 317,
  },
  frame: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorLinen,
    borderTopWidth: 1,
    width: 400,
    height: 73,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default Frame13;
