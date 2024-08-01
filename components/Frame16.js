import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame16 = ({
  march102023,
  frame,
  lawyerXProvidedExceptiona,
  propTop,
  propWidth,
}) => {
  const frame15Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const lawyerXProvidedStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.frame, styles.frameLayout2, frame15Style]}>
      <View style={[styles.frame1, styles.frameLayout2]}>
        <View style={[styles.frame1, styles.frameLayout2]}>
          <View style={[styles.frame3, styles.frameLayout2]}>
            <Text style={styles.xxxXxx}>XXX XXX</Text>
          </View>
          <View style={[styles.frame4, styles.frameLayout1]}>
            <Text style={[styles.march102023, styles.march102023Typo]}>
              {march102023}
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.frameIcon, styles.frameLayout1]}
        resizeMode="cover"
        source={frame}
      />
      <View style={[styles.frame5, styles.frameLayout2]}>
        <Text
          style={[
            styles.lawyerXProvided,
            styles.march102023Typo,
            lawyerXProvidedStyle,
          ]}
        >
          {lawyerXProvidedExceptiona}
        </Text>
      </View>
      <View style={styles.frame6}>
        <View style={[styles.frame7, styles.frameLayout]}>
          <Image
            style={styles.frameIcon1}
            resizeMode="cover"
            source={require("../assets/frame43.png")}
          />
        </View>
        <Image
          style={[styles.frameIcon2, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame44.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout2: {
    width: 368,
    position: "absolute",
  },
  frameLayout1: {
    height: 20,
    left: 0,
    width: 368,
    position: "absolute",
  },
  march102023Typo: {
    fontFamily: FontFamily.publicSansRegular,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 40,
    borderRadius: Border.br_3xs,
    height: 36,
    top: 0,
    position: "absolute",
  },
  xxxXxx: {
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame3: {
    height: 24,
    left: 0,
    top: 0,
  },
  march102023: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.colorMidnightblue_100,
    top: 0,
  },
  frame4: {
    top: 24,
  },
  frame1: {
    height: 44,
    left: 0,
    top: 0,
  },
  frameIcon: {
    top: 56,
  },
  lawyerXProvided: {
    top: 2,
    width: 350,
    color: Color.colorMidnightblue_200,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.publicSansRegular,
  },
  frame5: {
    top: 88,
    height: 48,
    left: 0,
  },
  frameIcon1: {
    top: 10,
    left: 12,
    width: 16,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  frame7: {
    left: 0,
  },
  frameIcon2: {
    left: 76,
  },
  frame6: {
    top: 148,
    height: 36,
    left: 0,
    width: 368,
    position: "absolute",
  },
  frame: {
    top: 12,
    left: 16,
    height: 184,
  },
});

export default Frame16;
