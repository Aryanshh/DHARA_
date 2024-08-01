import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame6 = ({
  frame,
  qA,
  getAnswersToYourLegalQues,
  propTop,
  propLeft,
  propWidth,
  onFramePress,
}) => {
  const frame2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const getAnswersToStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const navigation = useNavigation();

  return (
    <Pressable style={[styles.frame, frame2Style]} onPress={onFramePress}>
      <Image style={styles.frameIcon} resizeMode="cover" source={frame} />
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.framePosition]}>
          <Text style={[styles.qa, styles.qaPosition]}>{qA}</Text>
        </View>
        <View style={[styles.frame3, styles.framePosition]}>
          <Text
            style={[styles.getAnswersTo, styles.qaPosition, getAnswersToStyle]}
          >
            {getAnswersToYourLegalQues}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    width: 142,
    position: "absolute",
  },
  qaPosition: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    top: 17,
    width: 20,
    height: 20,
    overflow: "hidden",
    left: 17,
    position: "absolute",
  },
  qa: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    color: Color.colorMidnightblue_200,
    top: 0,
  },
  frame2: {
    height: 24,
    top: 0,
  },
  getAnswersTo: {
    top: 2,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
    width: 130,
  },
  frame3: {
    top: 24,
    height: 40,
  },
  frame1: {
    top: 45,
    height: 64,
    width: 142,
    left: 17,
    position: "absolute",
  },
  frame: {
    top: 12,
    left: 208,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorThistle,
    borderWidth: 1,
    width: 176,
    height: 126,
    position: "absolute",
  },
});

export default Frame6;
