import React, { useMemo } from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame8 = ({ profile, propLeft }) => {
  const profileStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.framePosition]}>
      <Pressable
        style={[styles.frame1, styles.frameLayout]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/frame10.png")}
        />
      </Pressable>
      <View style={styles.frame2}>
        <Text style={[styles.profile, styles.framePosition, profileStyle]}>
          {profile}
        </Text>
      </View>
      <View style={[styles.frame3, styles.frameLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 40,
    width: 40,
    top: 16,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_3xs,
    width: "100%",
    height: "100%",
  },
  frame1: {
    left: 16,
  },
  profile: {
    left: 120,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    color: Color.colorMidnightblue_200,
    textAlign: "center",
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
  },
  frame: {
    left: 0,
    width: 400,
    height: 72,
  },
});

export default Frame8;
