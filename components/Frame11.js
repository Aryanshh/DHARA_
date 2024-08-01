import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame11 = ({ frame, wills, lastWillAndTestament, propLeft }) => {
  const frame21Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.frame, frame21Style]}>
      <Image
        style={[styles.frameIcon, styles.framePosition1]}
        resizeMode="cover"
        source={frame}
      />
      <View style={[styles.frame1, styles.framePosition1]}>
        <View style={[styles.frame2, styles.framePosition]}>
          <Text style={[styles.wills, styles.willsPosition]}>{wills}</Text>
        </View>
        <View style={[styles.frame3, styles.framePosition]}>
          <Text style={[styles.lastWillAnd, styles.willsPosition]}>
            {lastWillAndTestament}
          </Text>
        </View>
        <View style={[styles.frame4, styles.framePosition]}>
          <Text style={[styles.viewTemplates, styles.willsClr]}>
            View Templates
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    left: 0,
    width: 200,
    position: "absolute",
  },
  framePosition: {
    width: 168,
    left: 16,
    position: "absolute",
  },
  willsPosition: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  willsClr: {
    color: Color.colorMidnightblue_200,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  frameIcon: {
    height: 200,
    overflow: "hidden",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  wills: {
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    color: Color.colorMidnightblue_200,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  frame2: {
    height: 20,
    overflow: "hidden",
    top: 0,
    width: 168,
    left: 16,
  },
  lastWillAnd: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 16,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
  },
  frame3: {
    top: 24,
    height: 16,
    overflow: "hidden",
  },
  viewTemplates: {
    top: 8,
    left: 31,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    textAlign: "center",
    position: "absolute",
    color: Color.colorMidnightblue_200,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  frame4: {
    top: 52,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLinen,
    height: 36,
  },
  frame1: {
    top: 212,
    height: 100,
  },
  frame: {
    left: 232,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    height: 312,
    width: 200,
    borderRadius: Border.br_xs,
    top: 0,
    position: "absolute",
  },
});

export default Frame11;
