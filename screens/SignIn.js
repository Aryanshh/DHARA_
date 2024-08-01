import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <View style={styles.createAScreenBasedOnTitle}>
        <View style={styles.frame}>
          <Image
            style={[styles.frameIcon, styles.frameLayout2]}
            resizeMode="cover"
            source={require("../assets/frame11.png")}
          />
          <View style={styles.frame1}>
            <Text style={styles.signIn1}>Sign In</Text>
          </View>
          <View style={[styles.frame2, styles.frameLayout2]} />
        </View>
        <View style={[styles.frame3, styles.frameLayout1]}>
          <View style={[styles.frame4, styles.framePosition]}>
            <Text style={styles.emailAddress}>Email Address</Text>
          </View>
          <View style={[styles.frame5, styles.framePosition]}>
            <Text style={styles.yourEmailAddress}>Your email address</Text>
          </View>
        </View>
        <View style={[styles.frame6, styles.frameLayout1]}>
          <View style={[styles.frame4, styles.framePosition]}>
            <Text style={styles.emailAddress}>Password</Text>
          </View>
          <View style={[styles.frame5, styles.framePosition]}>
            <Text style={styles.yourEmailAddress}>Your password</Text>
          </View>
        </View>
        <View style={[styles.frame9, styles.frameLayout]}>
          <View style={[styles.frame10, styles.framePosition]}>
            <Text style={[styles.signInWith, styles.signTypo]}>
              Sign In with Google
            </Text>
          </View>
        </View>
        <View style={[styles.frame11, styles.frameLayout]}>
          <View style={[styles.frame10, styles.framePosition]}>
            <Text style={[styles.signInWith1, styles.signTypo]}>
              Sign In with Apple
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.frame13, styles.frameLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.frame10, styles.framePosition]}>
            <Text style={[styles.signIn2, styles.signTypo]}>Sign In</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout2: {
    width: 40,
    top: 16,
    height: 40,
    position: "absolute",
  },
  frameLayout1: {
    height: 92,
    left: 0,
    position: "absolute",
    width: 400,
  },
  framePosition: {
    width: 368,
    left: 16,
    position: "absolute",
  },
  frameLayout: {
    height: 64,
    left: 0,
    position: "absolute",
    width: 400,
  },
  signTypo: {
    color: Color.colorWhite,
    top: 8,
    fontFamily: FontFamily.publicSansRegular,
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameIcon: {
    height: 40,
    borderRadius: Border.br_3xs,
    left: 16,
    width: 40,
    top: 16,
  },
  signIn1: {
    left: 119,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    textAlign: "center",
    color: Color.colorMidnightblue_200,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: 0,
    position: "absolute",
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
    height: 40,
    width: 40,
    top: 16,
  },
  frame: {
    height: 72,
    left: 0,
    top: 0,
    position: "absolute",
    width: 400,
  },
  emailAddress: {
    lineHeight: 28,
    textAlign: "left",
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_200,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame4: {
    height: 28,
    top: 12,
    width: 368,
  },
  yourEmailAddress: {
    left: 12,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    width: 345,
    top: 8,
    textAlign: "left",
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_200,
    position: "absolute",
  },
  frame5: {
    top: 40,
    borderStyle: "solid",
    borderColor: Color.colorThistle,
    borderWidth: 1,
    height: 40,
    borderRadius: Border.br_3xs,
  },
  frame3: {
    top: 72,
  },
  frame6: {
    top: 164,
  },
  signInWith: {
    left: 110,
  },
  frame10: {
    backgroundColor: Color.colorBlue,
    top: 12,
    width: 368,
    height: 40,
    borderRadius: Border.br_3xs,
  },
  frame9: {
    top: 256,
  },
  signInWith1: {
    left: 114,
  },
  frame11: {
    top: 320,
  },
  signIn2: {
    left: 157,
  },
  frame13: {
    top: 384,
  },
  createAScreenBasedOnTitle: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    height: 448,
    overflow: "hidden",
    width: 400,
  },
  signIn: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default SignIn;
