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
const Frame5 = ({
  frame,
  intellectualPropertyRight,
  protectingIPInARapidlyEvo,
  propLeft,
  propWidth,
  propWidth1,
}) => {
  const frame30Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const intellectualPropertyRightsStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const protectingIPInStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  return (
    <View style={[styles.frame, frame30Style]}>
      <Image
        style={[styles.frameIcon, styles.framePosition1]}
        resizeMode="cover"
        source={frame}
      />
      <View style={[styles.frame1, styles.framePosition1]}>
        <View style={[styles.frame2, styles.framePosition]}>
          <Text
            style={[
              styles.intellectualPropertyRights,
              styles.protectingIpInPosition,
              intellectualPropertyRightsStyle,
            ]}
          >
            {intellectualPropertyRight}
          </Text>
        </View>
        <View style={[styles.frame3, styles.framePosition]}>
          <Text
            style={[
              styles.protectingIpIn,
              styles.protectingIpInPosition,
              protectingIPInStyle,
            ]}
          >
            {protectingIPInARapidlyEvo}
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
  protectingIpInPosition: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    height: 113,
    overflow: "hidden",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  intellectualPropertyRights: {
    top: 2,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    color: Color.colorMidnightblue_200,
    width: 159,
  },
  frame2: {
    height: 40,
    top: 0,
    width: 168,
    left: 16,
  },
  protectingIpIn: {
    top: 1,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 16,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
    width: 145,
  },
  frame3: {
    top: 44,
    height: 32,
  },
  frame1: {
    top: 125,
    height: 88,
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
    height: 213,
    width: 200,
    position: "absolute",
    borderRadius: Border.br_xs,
    top: 0,
  },
});

export default Frame5;
