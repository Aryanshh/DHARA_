import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.framePosition1}>
        <View style={[styles.frame2, styles.framePosition1]}>
          <Pressable
            style={[styles.frame3, styles.frameLayout1]}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={[styles.frame4, styles.frameLayout]}>
              <View style={[styles.frame5, styles.frameLayout]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame16.png")}
                />
              </View>
            </View>
            <View style={[styles.frame6, styles.framePosition]}>
              <Text style={[styles.home, styles.qaTypo]}>Home</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.frameShadowBox}
            onPress={() => navigation.navigate("Chatbot")}
          >
            <View style={[styles.frame6, styles.framePosition]}>
              <Text style={[styles.chatbot, styles.qaTypo]}>Chatbot</Text>
            </View>
            <View style={[styles.frame4, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/frame15.png")}
              />
            </View>
          </Pressable>
          <Pressable
            style={[styles.frame10, styles.frameLayout1]}
            onPress={() => navigation.navigate("LawyerPage")}
          >
            <View style={[styles.frame4, styles.frameLayout]}>
              <View style={[styles.frame5, styles.frameLayout]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame17.png")}
                />
              </View>
            </View>
            <View style={[styles.frame6, styles.framePosition]}>
              <Text style={[styles.lawyers, styles.qaTypo]}>Lawyers</Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.frame14, styles.frameLayout1]}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={[styles.frame4, styles.frameLayout]}>
              <View style={[styles.frame5, styles.frameLayout]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame18.png")}
                />
              </View>
            </View>
            <View style={[styles.frame6, styles.framePosition]}>
              <Text style={[styles.profile, styles.qaTypo]}>Profile</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.frame2, styles.framePosition1]}>
          <Pressable
            style={[styles.frame3, styles.frameLayout1]}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={[styles.frame4, styles.frameLayout]}>
              <View style={[styles.frame5, styles.frameLayout]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame16.png")}
                />
              </View>
            </View>
            <View style={[styles.frame6, styles.framePosition]}>
              <Text style={[styles.home, styles.qaTypo]}>Home</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.frameShadowBox}
            onPress={() => navigation.navigate("Chatbot")}
          >
            <View style={[styles.frame6, styles.framePosition]}>
              <Text style={[styles.chatbot, styles.qaTypo]}>Chatbot</Text>
            </View>
            <View style={[styles.frame4, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/frame15.png")}
              />
            </View>
          </Pressable>
          <Pressable
            style={[styles.frame10, styles.frameLayout1]}
            onPress={() => navigation.navigate("LawyerPage")}
          >
            <View style={[styles.frame4, styles.frameLayout]}>
              <View style={[styles.frame5, styles.frameLayout]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame17.png")}
                />
              </View>
            </View>
            <View style={[styles.frame6, styles.framePosition]}>
              <Text style={[styles.lawyers, styles.qaTypo]}>Lawyers</Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.frame14, styles.frameLayout1]}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={[styles.frame4, styles.frameLayout]}>
              <View style={[styles.frame5, styles.frameLayout]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame18.png")}
                />
              </View>
            </View>
            <View style={[styles.frame6, styles.framePosition]}>
              <Text style={[styles.profile, styles.qaTypo]}>Profile</Text>
            </View>
          </Pressable>
        </View>
        <Pressable
          style={[styles.frame34, styles.frameLayout1]}
          onPress={() => navigation.navigate("CommunityForum")}
        >
          <View style={[styles.frame4, styles.frameLayout]}>
            <View style={[styles.frame5, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/frame26.png")}
              />
            </View>
          </View>
          <View style={[styles.frame6, styles.framePosition]}>
            <Text style={[styles.qa, styles.qaTypo]}>{`Q&A`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    width: 400,
    top: 0,
    position: "absolute",
    left: 0,
    height: 73,
  },
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
  frame5: {
    left: 0,
    height: 32,
    width: 64,
  },
  frame4: {
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
  frame6: {
    top: 36,
    height: 16,
    width: 67,
    overflow: "hidden",
    left: 0,
  },
  frame3: {
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
  frameShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0)",
    left: 166,
    height: 52,
    width: 67,
    borderRadius: Border.br_5xs,
    top: 9,
    position: "absolute",
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
  frame10: {
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
  frame14: {
    left: 317,
    top: 9,
    height: 52,
    borderRadius: Border.br_5xs,
  },
  frame2: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorLinen,
    borderTopWidth: 1,
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
  frame34: {
    top: 10,
    left: 82,
  },
  frame: {
    flex: 1,
    width: "100%",
    height: 73,
  },
});

export default Frame;
