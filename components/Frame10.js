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
const Frame10 = ({
  frame,
  whatAreTheStepsToFileForD,
  familyLaw,
  upvote,
  propHeight,
  propLeft,
  propHeight1,
  propTop,
  propLeft1,
}) => {
  const frame7Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
      ...getStyleValue("left", propLeft),
    };
  }, [propHeight, propLeft]);

  const frameIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight1),
    };
  }, [propHeight1]);

  const frame8Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const upvoteStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View style={[styles.frame, frame7Style]}>
      <Image
        style={[styles.frameIcon, styles.framePosition1, frameIconStyle]}
        resizeMode="cover"
        source={frame}
      />
      <View style={[styles.frame1, styles.framePosition1, frame8Style]}>
        <View style={[styles.frame2, styles.framePosition]}>
          <Text style={[styles.whatAreThe, styles.familyLawPosition]}>
            {whatAreTheStepsToFileForD}
          </Text>
        </View>
        <View style={[styles.frame3, styles.framePosition]}>
          <Text style={[styles.familyLaw, styles.familyLawPosition]}>
            {familyLaw}
          </Text>
        </View>
        <View style={[styles.frame4, styles.framePosition]}>
          <Text style={[styles.upvote, styles.upvoteClr, upvoteStyle]}>
            {upvote}
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
  familyLawPosition: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  upvoteClr: {
    color: Color.colorMidnightblue_200,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  frameIcon: {
    height: 113,
    overflow: "hidden",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  whatAreThe: {
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
  },
  familyLaw: {
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
  upvote: {
    top: 8,
    left: 61,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    textAlign: "center",
    position: "absolute",
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
    top: 125,
    height: 100,
  },
  frame: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    height: 225,
    width: 200,
    left: 16,
    borderRadius: Border.br_xs,
    top: 0,
    position: "absolute",
  },
});

export default Frame10;
