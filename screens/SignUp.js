import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import YourEmailAddress from "../components/YourEmailAddress";
import Frame37 from "../components/Frame37";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={styles.createAScreenBasedOnTitle}>
        <View style={[styles.frame, styles.frameLayout3]}>
          <View style={[styles.frame1, styles.frameLayout2]} />
          <Pressable style={styles.frame2} onPress={() => navigation.goBack()}>
            <Text style={styles.signUp1}>Sign Up</Text>
          </Pressable>
          <View style={[styles.frame3, styles.frameLayout2]} />
        </View>
        <View style={[styles.frame4, styles.frameLayout1]}>
          <View style={styles.frame5}>
            <Text style={[styles.emailAddress, styles.emailAddressTypo]}>
              Email Address
            </Text>
          </View>
          <View style={[styles.frame6, styles.frameLayout]}>
            <YourEmailAddress />
          </View>
        </View>
        <View style={[styles.frame7, styles.frameLayout1]}>
          <View style={styles.frame5}>
            <Text style={[styles.emailAddress, styles.emailAddressTypo]}>
              Password
            </Text>
          </View>
          <View style={[styles.frame6, styles.frameLayout]}>
            <Text style={[styles.yourPassword, styles.emailAddressTypo]}>
              Your password
            </Text>
          </View>
        </View>
        <View style={[styles.frame10, styles.frameLayout1]}>
          <View style={styles.frame5}>
            <Text style={[styles.emailAddress, styles.emailAddressTypo]}>
              Confirm Password
            </Text>
          </View>
          <View style={[styles.frame6, styles.frameLayout]}>
            <Text style={[styles.yourPassword, styles.emailAddressTypo]}>
              Confirm your password
            </Text>
          </View>
        </View>
        <Frame37 />
        <View style={[styles.frame13, styles.frameLayout3]}>
          <View style={[styles.frame14, styles.frameLayout]}>
            <Text style={[styles.signUpWith, styles.signTypo]}>
              Sign Up with Apple
            </Text>
          </View>
        </View>
        <View style={[styles.frame15, styles.frameLayout3]}>
          <Pressable
            style={[styles.frame14, styles.frameLayout]}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={[styles.signUp2, styles.signTypo]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout3: {
    height: 72,
    left: 0,
    position: "absolute",
    width: 400,
  },
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
  emailAddressTypo: {
    textAlign: "left",
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_200,
    position: "absolute",
  },
  frameLayout: {
    borderRadius: Border.br_3xs,
    width: 368,
    left: 16,
    position: "absolute",
  },
  signTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.publicSansRegular,
    top: 12,
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frame1: {
    height: 40,
    left: 16,
    width: 40,
    top: 16,
  },
  signUp1: {
    left: 115,
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
  frame2: {
    top: 24,
    left: 56,
    width: 288,
    height: 24,
    position: "absolute",
  },
  frame3: {
    left: 344,
    height: 40,
    width: 40,
    top: 16,
  },
  frame: {
    top: 0,
    height: 72,
    left: 0,
  },
  emailAddress: {
    lineHeight: 28,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.publicSansRegular,
    left: 0,
    top: 0,
  },
  frame5: {
    height: 28,
    width: 368,
    top: 12,
    left: 16,
    position: "absolute",
  },
  frame6: {
    top: 40,
    borderStyle: "solid",
    borderColor: Color.colorThistle,
    borderWidth: 1,
    height: 40,
  },
  frame4: {
    top: 72,
  },
  yourPassword: {
    top: 8,
    left: 12,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    width: 345,
  },
  frame7: {
    top: 164,
  },
  frame10: {
    top: 256,
  },
  signUpWith: {
    left: 111,
  },
  frame14: {
    backgroundColor: Color.colorBlue,
    height: 48,
    top: 12,
    borderRadius: Border.br_3xs,
  },
  frame13: {
    top: 420,
  },
  signUp2: {
    left: 154,
  },
  frame15: {
    top: 492,
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
    height: 564,
    overflow: "hidden",
    width: 400,
  },
  signUp: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default SignUp;
