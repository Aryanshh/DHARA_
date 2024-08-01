import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Frame25 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <Pressable
          style={[styles.frame2, styles.frameLayout1]}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.frame3, styles.frameLayout]}>
            <View style={[styles.frame4, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame16.png")}
              />
            </View>
          </View>
          <View style={[styles.frame5, styles.frameIconPosition]}>
            <Text style={[styles.home, styles.qaTypo]}>Home</Text>
          </View>
        </Pressable>
        <View style={[styles.frame6, styles.frameLayout1]}>
          <View style={[styles.frame5, styles.frameIconPosition]}>
            <Text style={[styles.chatbot, styles.qaTypo]}>Chatbot</Text>
          </View>
          <Image
            style={[styles.frameIcon1, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame15.png")}
          />
        </View>
        <Pressable
          style={[styles.frame8, styles.frameLayout1]}
          onPress={() => navigation.navigate("LawyerPage")}
        >
          <Image
            style={[styles.frame3, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/frame25.png")}
          />
          <View style={[styles.frame5, styles.frameIconPosition]}>
            <Text style={[styles.lawyers, styles.qaTypo]}>Lawyers</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.frame10, styles.frameLayout1]}
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={[styles.frame3, styles.frameLayout]}>
            <View style={[styles.frame4, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame18.png")}
              />
            </View>
          </View>
          <View style={[styles.frame5, styles.frameIconPosition]}>
            <Text style={[styles.profile, styles.qaTypo]}>Profile</Text>
          </View>
        </Pressable>
      </View>
      <Pressable
        style={[styles.frame14, styles.frameLayout1]}
        onPress={() => navigation.navigate("CommunityForum")}
      >
        <View style={[styles.frame3, styles.frameLayout]}>
          <View style={[styles.frame4, styles.frameLayout]}>
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              resizeMode="cover"
              source={require("../assets/frame26.png")}
            />
          </View>
        </View>
        <View style={[styles.frame5, styles.frameIconPosition]}>
          <Text style={[styles.qa, styles.qaTypo]}>{`Q&A`}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 52,
    borderRadius: Border.br_5xs,
    width: 67,
    position: "absolute",
  },
  frameLayout: {
    height: 32,
    width: 64,
    top: 0,
    position: "absolute",
  },
  frameIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  qaTypo: {
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  frameIcon: {
    left: 22,
    height: 20,
    width: 20,
    top: 6,
    overflow: "hidden",
  },
  frame4: {
    left: 0,
  },
  frame3: {
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
  frame5: {
    top: 36,
    height: 16,
    overflow: "hidden",
    width: 67,
    left: 0,
  },
  frame2: {
    left: 16,
    top: 9,
    height: 52,
    borderRadius: Border.br_5xs,
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
  frameIcon1: {
    left: 24,
    height: 20,
    width: 20,
    top: 6,
    overflow: "hidden",
  },
  frame6: {
    left: 166,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    top: 9,
    height: 52,
    borderRadius: Border.br_5xs,
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
    top: 9,
    height: 52,
    borderRadius: Border.br_5xs,
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
  frame10: {
    left: 317,
    top: 9,
    height: 52,
    borderRadius: Border.br_5xs,
  },
  frame1: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorLinen,
    borderTopWidth: 1,
    left: 0,
    top: 0,
    height: 73,
    width: 400,
    position: "absolute",
  },
  qa: {
    left: 20,
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.publicSansMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  frame14: {
    top: 10,
    left: 82,
  },
  frame: {
    top: 592,
    left: -1,
    height: 73,
    width: 400,
    position: "absolute",
  },
});

export default Frame25;
