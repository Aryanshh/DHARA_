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
const Frame19 = ({
  frame,
  raviVsStateOfUP,
  newEvidenceSubmitted,
  hoursAgo,
  propTop,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propLeft,
  propWidth4,
}) => {
  const frame23Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const frame24Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const frame25Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const frame26Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  const frame27Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth3),
    };
  }, [propWidth3]);

  const frame28Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth4),
    };
  }, [propLeft, propWidth4]);

  return (
    <View style={[styles.frame, frame23Style]}>
      <View style={[styles.frame1, frame24Style]}>
        <Image
          style={[styles.frameIcon, styles.framePosition]}
          resizeMode="cover"
          source={frame}
        />
        <View style={[styles.frame2, frame25Style]}>
          <View style={[styles.frame3, styles.framePosition, frame26Style]}>
            <Text style={[styles.raviVsState, styles.raviVsStatePosition]}>
              {raviVsStateOfUP}
            </Text>
          </View>
          <View style={[styles.frame4, styles.frameLayout, frame27Style]}>
            <Text
              style={[styles.newEvidenceSubmitted, styles.raviVsStatePosition]}
            >
              {newEvidenceSubmitted}
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame5, styles.frameLayout, frame28Style]}>
        <Text style={[styles.newEvidenceSubmitted, styles.raviVsStatePosition]}>
          {hoursAgo}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  raviVsStatePosition: {
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 20,
    position: "absolute",
  },
  frameIcon: {
    borderRadius: Border.br_3xs,
    width: 48,
    height: 48,
  },
  raviVsState: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_200,
  },
  frame3: {
    height: 24,
    width: 158,
  },
  newEvidenceSubmitted: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: FontFamily.publicSansLight,
    color: Color.colorMidnightblue_100,
  },
  frame4: {
    top: 24,
    width: 158,
    left: 0,
  },
  frame2: {
    top: 2,
    left: 64,
    height: 44,
    width: 158,
    position: "absolute",
  },
  frame1: {
    top: 12,
    left: 16,
    width: 222,
    height: 48,
    position: "absolute",
  },
  frame5: {
    top: 26,
    left: 309,
    width: 76,
  },
  frame: {
    top: 439,
    width: 400,
    height: 72,
    left: 0,
    position: "absolute",
  },
});

export default Frame19;
