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
const Frame15 = ({
  frame,
  seniorPartnerAtDoeAssocia,
  present,
  propTop,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
}) => {
  const frame10Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const frame11Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const frame12Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const frame13Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  const frame14Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth3),
    };
  }, [propWidth3]);

  return (
    <View style={[styles.frame, frame10Style]}>
      <View style={[styles.frame1, styles.frameLayout1, frame11Style]}>
        <Image
          style={[styles.frameIcon, styles.framePosition]}
          resizeMode="cover"
          source={frame}
        />
        <View style={[styles.frame2, styles.frameLayout, frame12Style]}>
          <View style={[styles.frame3, styles.frameLayout, frame13Style]}>
            <Text style={[styles.seniorPartnerAt, styles.presentPosition]}>
              {seniorPartnerAtDoeAssocia}
            </Text>
          </View>
          <View style={[styles.frame4, styles.frameLayout, frame14Style]}>
            <Text style={[styles.present, styles.presentPosition]}>
              {present}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 48,
    position: "absolute",
  },
  framePosition: {
    top: 0,
    left: 0,
  },
  frameLayout: {
    width: 259,
    position: "absolute",
  },
  presentPosition: {
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    borderRadius: Border.br_3xs,
    width: 48,
    height: 48,
    position: "absolute",
  },
  seniorPartnerAt: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_200,
  },
  frame3: {
    height: 24,
    top: 0,
    left: 0,
  },
  present: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: FontFamily.publicSansLight,
    color: Color.colorMidnightblue_100,
  },
  frame4: {
    top: 24,
    height: 20,
    left: 0,
  },
  frame2: {
    top: 2,
    left: 64,
    height: 44,
  },
  frame1: {
    top: 12,
    left: 16,
    width: 323,
  },
  frame: {
    top: 668,
    width: 400,
    height: 72,
    left: 0,
    position: "absolute",
  },
});

export default Frame15;
