import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame2 = ({ frame, typeYourMessageHere, propTop }) => {
  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.frame, frameStyle]}>
      <Image style={styles.frameIcon} resizeMode="cover" source={frame} />
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.framePosition]}>
          <Text style={styles.typeYourMessage}>{typeYourMessageHere}</Text>
        </View>
        <Image
          style={[styles.frameIcon1, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/frame4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    top: 0,
    height: 40,
    position: "absolute",
  },
  frameIcon: {
    top: 14,
    left: 16,
    borderRadius: Border.br_9980xl,
    height: 36,
    overflow: "hidden",
    width: 36,
    position: "absolute",
  },
  typeYourMessage: {
    top: 8,
    left: 12,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    width: 265,
    position: "absolute",
  },
  frame2: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLinen,
    width: 316,
    top: 0,
    left: 0,
  },
  frameIcon1: {
    left: 278,
    width: 36,
  },
  frame1: {
    top: 12,
    left: 68,
    height: 40,
    width: 316,
    position: "absolute",
  },
  frame: {
    top: 531,
    width: 400,
    height: 64,
    left: 0,
    position: "absolute",
  },
});

export default Frame2;
