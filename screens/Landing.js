import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Landing = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.landing}>
      <View style={styles.theUserInputWasGiveABlan}>
        <Image
          style={styles.dhara1Icon}
          resizeMode="cover"
          source={require("../assets/dhara-1.png")}
        />
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={styles.frame1} />
          <View style={styles.frame2} />
        </View>
        <View style={styles.frame3}>
          <View style={styles.frame4} />
        </View>
        <View style={[styles.frame5, styles.frameLayout]}>
          <Pressable
            style={styles.frame6}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={[styles.signIn, styles.signTypo]}>Sign In</Text>
          </Pressable>
        </View>
        <View style={[styles.frame7, styles.frameLayout]}>
          <Pressable
            style={styles.frame6}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={[styles.signUp, styles.signTypo]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 72,
    left: 0,
    position: "absolute",
    width: 400,
  },
  signTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.publicSansRegular,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: 12,
    position: "absolute",
  },
  dhara1Icon: {
    top: -61,
    left: -7,
    width: 414,
    height: 896,
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
    top: 16,
    left: 344,
    width: 40,
    height: 40,
    position: "absolute",
  },
  frame: {
    top: 0,
  },
  frame4: {
    top: 20,
    height: 70,
    width: 368,
    left: 16,
    position: "absolute",
  },
  frame3: {
    top: 297,
    height: 102,
    left: 0,
    position: "absolute",
    width: 400,
  },
  signIn: {
    left: 157,
  },
  frame6: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    height: 48,
    top: 12,
    width: 368,
    left: 16,
    position: "absolute",
  },
  frame5: {
    top: 399,
  },
  signUp: {
    left: 154,
  },
  frame7: {
    top: 471,
  },
  theUserInputWasGiveABlan: {
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
    height: 725,
    overflow: "hidden",
    width: 400,
  },
  landing: {
    flex: 1,
    width: "100%",
    height: 719,
    alignItems: "center",
  },
});

export default Landing;
