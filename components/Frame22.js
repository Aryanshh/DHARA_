import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame22 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.framePosition]}>
          <Text style={[styles.subscribeForPremium, styles.subscribeFlexBox]}>
            Subscribe for Premium Legal Resources
          </Text>
        </View>
        <View style={[styles.frame3, styles.framePosition]}>
          <Text
            style={[styles.unlockExclusiveAccess, styles.subscribeFlexBox]}
          >{`Unlock exclusive access to detailed legal articles, expert Q&A sessions, and priority lawyer connections.`}</Text>
        </View>
        <Pressable
          style={styles.frame4}
          onPress={() => navigation.navigate("Subscription")}
        >
          <Text style={[styles.subscribeNow, styles.subscribeFlexBox]}>
            Subscribe Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 320,
    left: 24,
    position: "absolute",
  },
  subscribeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  subscribeForPremium: {
    top: 0,
    left: 2,
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    width: 317,
    color: Color.colorMidnightblue_200,
    textAlign: "center",
  },
  frame2: {
    top: 24,
    height: 56,
  },
  unlockExclusiveAccess: {
    top: 2,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.publicSansRegular,
    width: 311,
    color: Color.colorMidnightblue_200,
    textAlign: "center",
    left: 5,
  },
  frame3: {
    top: 92,
    height: 72,
  },
  subscribeNow: {
    top: 8,
    left: 12,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    color: Color.colorWhite,
  },
  frame4: {
    top: 176,
    left: 123,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    width: 123,
    height: 36,
    position: "absolute",
  },
  frame1: {
    top: 12,
    left: 16,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLinen,
    width: 368,
    height: 236,
    overflow: "hidden",
    position: "absolute",
  },
  frame: {
    top: 139,
    width: 400,
    height: 260,
    left: 5,
    position: "absolute",
  },
});

export default Frame22;
