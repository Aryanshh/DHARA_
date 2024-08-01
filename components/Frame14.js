import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame14 = ({
  standardPlan,
  mo,
  accessToLegalNews,
  unlimitedQA,
  priorityLawyerConnections,
  aIChatbotAccess,
  propTop,
}) => {
  const frame9Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.frame, styles.frameLayout1, frame9Style]}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={styles.frame2}>
          <View style={[styles.frame3, styles.frameLayout]}>
            <View style={[styles.frame4, styles.framePosition1]}>
              <Text style={[styles.standardPlan, styles.moFlexBox]}>
                {standardPlan}
              </Text>
            </View>
            <View style={[styles.frame5, styles.framePosition1]}>
              <Text style={[styles.mo, styles.moFlexBox]}>{mo}</Text>
            </View>
            <View style={[styles.frame6, styles.framePosition1]}>
              <View style={[styles.frame7, styles.framePosition]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame37.png")}
                />
                <Text style={[styles.accessToLegal, styles.moFlexBox]}>
                  {accessToLegalNews}
                </Text>
              </View>
              <View style={[styles.frame8, styles.framePosition]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame37.png")}
                />
                <Text style={[styles.accessToLegal, styles.moFlexBox]}>
                  {unlimitedQA}
                </Text>
              </View>
              <View style={[styles.frame9, styles.framePosition]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame37.png")}
                />
                <Text style={[styles.accessToLegal, styles.moFlexBox]}>
                  {priorityLawyerConnections}
                </Text>
              </View>
              <View style={[styles.frame10, styles.framePosition]}>
                <Image
                  style={[styles.frameIcon, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/frame37.png")}
                />
                <Text style={[styles.accessToLegal, styles.moFlexBox]}>
                  {aIChatbotAccess}
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
  frameLayout1: {
    height: 278,
    width: 368,
  },
  frameLayout: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  framePosition1: {
    left: 24,
    width: 286,
    position: "absolute",
  },
  moFlexBox: {
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    position: "absolute",
  },
  framePosition: {
    height: 20,
    left: 0,
    position: "absolute",
  },
  standardPlan: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    left: 0,
    top: 0,
  },
  frame4: {
    top: 20,
    height: 24,
    width: 286,
  },
  mo: {
    fontSize: FontSize.size_11xl,
    lineHeight: 36,
    fontWeight: "900",
    fontFamily: FontFamily.publicSansBlack,
    left: 0,
    top: 0,
  },
  frame5: {
    top: 48,
    height: 36,
    width: 286,
  },
  frameIcon: {
    width: 20,
    overflow: "hidden",
    top: 0,
    height: 20,
  },
  accessToLegal: {
    top: 2,
    left: 28,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
  },
  frame7: {
    width: 286,
    top: 0,
    height: 20,
  },
  frame8: {
    top: 28,
    width: 286,
  },
  frame9: {
    top: 56,
    width: 286,
  },
  frame10: {
    top: 84,
    width: 286,
  },
  frame6: {
    top: 104,
    height: 104,
    width: 286,
  },
  frame3: {
    top: 24,
    left: 32,
    width: 334,
    height: 228,
  },
  frame2: {
    top: 1,
    left: 1,
    width: 366,
    height: 276,
    position: "absolute",
  },
  frame1: {
    borderStyle: "solid",
    borderColor: Color.colorThistle,
    borderWidth: 1,
    left: 0,
    top: 0,
    height: 278,
    width: 368,
  },
  frame: {
    top: 278,
    left: 16,
    position: "absolute",
  },
});

export default Frame14;
