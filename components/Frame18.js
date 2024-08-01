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
const Frame18 = ({
  frame,
  employmentContract,
  standardEmploymentAgreeme,
  propTop,
}) => {
  const frame22Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.frame, styles.frameLayout2, frame22Style]}>
      <Image
        style={[styles.frameIcon, styles.frameLayout2]}
        resizeMode="cover"
        source={frame}
      />
      <View style={[styles.frame1, styles.frameLayout2]}>
        <View style={[styles.frame2, styles.frameLayout1]}>
          <View style={[styles.frame3, styles.frameLayout1]}>
            <View style={styles.frame4}>
              <Text
                style={[styles.employmentContract, styles.employmentPosition]}
              >
                {employmentContract}
              </Text>
            </View>
            <View style={[styles.frame5, styles.frameLayout]}>
              <View style={[styles.frame6, styles.frameLayout]}>
                <Text
                  style={[
                    styles.standardEmploymentAgreement,
                    styles.employmentPosition,
                  ]}
                >
                  {standardEmploymentAgreeme}
                </Text>
              </View>
            </View>
          </View>
        </View>
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
    height: 56,
    width: 336,
    position: "absolute",
  },
  employmentPosition: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 20,
    width: 336,
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    height: 224,
    left: 0,
    top: 0,
    borderRadius: Border.br_xs,
    width: 368,
    position: "absolute",
  },
  employmentContract: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    color: Color.colorMidnightblue_200,
  },
  frame4: {
    height: 28,
    width: 336,
    left: 0,
    top: 0,
    position: "absolute",
  },
  standardEmploymentAgreement: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
  },
  frame6: {
    top: 0,
  },
  frame5: {
    top: 36,
  },
  frame3: {
    left: 0,
    top: 0,
  },
  frame2: {
    top: 16,
    left: 16,
  },
  frame1: {
    top: 224,
    height: 88,
    left: 0,
    width: 368,
    position: "absolute",
  },
  frame: {
    top: 12,
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
    borderRadius: Border.br_xs,
    width: 368,
    position: "absolute",
    left: 16,
  },
});

export default Frame18;
