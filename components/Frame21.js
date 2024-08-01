import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Frame21 = () => {
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
                style={[styles.frameIcon, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/frame5.png")}
              />
            </View>
          </View>
          <View style={[styles.frame5, styles.framePosition]}>
            <Text style={[styles.home, styles.qaTypo]}>Home</Text>
          </View>
        </Pressable>
        <View style={[styles.frame6, styles.frameLayout1]}>
          <View style={[styles.frame3, styles.frameLayout]}>
            <View style={[styles.frame8, styles.frameLayout]} />
            <View style={[styles.frame4, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/frame6.png")}
              />
            </View>
          </View>
          <View style={[styles.frame5, styles.framePosition]}>
            <Text style={[styles.chatbot, styles.qaTypo]}>Chatbot</Text>
          </View>
        </View>
        <Pressable
          style={[styles.frame11, styles.frameLayout1]}
          onPress={() => navigation.navigate("LawyerPage")}
        >
          <View style={[styles.frame3, styles.frameLayout]}>
            <View style={[styles.frame4, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/frame7.png")}
              />
            </View>
          </View>
          <View style={[styles.frame5, styles.framePosition]}>
            <Text style={[styles.lawyers, styles.qaTypo]}>Lawyers</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.frame15, styles.frameLayout1]}
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={[styles.frame3, styles.frameLayout]}>
            <View style={[styles.frame4, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/frame8.png")}
              />
            </View>
          </View>
          <View style={[styles.frame5, styles.framePosition]}>
            <Text style={[styles.profile, styles.qaTypo]}>Profile</Text>
          </View>
        </Pressable>
      </View>
      <Pressable
        style={[styles.frame19, styles.frameLayout1]}
        onPress={() => navigation.navigate("CommunityForum")}
      >
        <View style={[styles.frame3, styles.frameLayout]}>
          <View style={[styles.frame4, styles.frameLayout]}>
            <Image
              style={[styles.frameIcon, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/frame9.png")}
            />
          </View>
        </View>
        <View style={[styles.frame5, styles.framePosition]}>
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
  framePosition: {
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
    top: 6,
    left: 22,
    width: 20,
    height: 20,
  },
  frame4: {
    left: 0,
    height: 32,
    width: 64,
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
    width: 67,
    overflow: "hidden",
    left: 0,
  },
  frame2: {
    left: 16,
    top: 9,
    height: 52,
    borderRadius: Border.br_5xs,
  },
  frame8: {
    borderRadius: Border.br_9980xl,
    backgroundColor: Color.colorLinen,
    left: 0,
    height: 32,
    width: 64,
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
  frame11: {
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
  frame15: {
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
    top: 0,
    height: 73,
    width: 400,
    left: 0,
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
  frame19: {
    top: 10,
    left: 82,
  },
  frame: {
    top: 595,
    height: 73,
    width: 400,
    position: "absolute",
    left: 0,
  },
});

export default Frame21;
