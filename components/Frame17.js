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
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame17 = ({
  frame,
  home,
  returnToTheMainDashboard,
  homeTop,
  frameWidth,
  propWidth,
  propWidth1,
  propWidth2,
  onFramePress,
}) => {
  const frame16Style = useMemo(() => {
    return {
      ...getStyleValue("top", homeTop),
    };
  }, [homeTop]);

  const frame17Style = useMemo(() => {
    return {
      ...getStyleValue("width", frameWidth),
    };
  }, [frameWidth]);

  const frame18Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const frame19Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const frame20Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  const navigation = useNavigation();

  return (
    <Pressable style={[styles.frame, frame16Style]} onPress={onFramePress}>
      <View style={[styles.frame1, styles.frameLayout1, frame17Style]}>
        <Image
          style={[styles.frameIcon, styles.framePosition]}
          resizeMode="cover"
          source={frame}
        />
        <View style={[styles.frame2, styles.frameLayout, frame18Style]}>
          <View style={[styles.frame3, styles.frameLayout, frame19Style]}>
            <Text style={[styles.home, styles.homePosition]}>{home}</Text>
          </View>
          <View style={[styles.frame4, styles.frameLayout, frame20Style]}>
            <Text style={[styles.returnToThe, styles.homePosition]}>
              {returnToTheMainDashboard}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
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
    width: 191,
    position: "absolute",
  },
  homePosition: {
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
  home: {
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
  returnToThe: {
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
    width: 255,
  },
  frame: {
    top: 132,
    width: 400,
    height: 72,
    left: 0,
    position: "absolute",
  },
});

export default Frame17;
