import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Frame34 from "../components/Frame34";
import Frame3 from "../components/Frame3";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ExplanationEnviro = () => {
  return (
    <View style={styles.explanationEnviro}>
      <View style={styles.theUserInputWasWhenClick}>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <View style={[styles.frame2, styles.framePosition2]}>
              <Text
                style={[styles.simplifiedExplanation, styles.beneficiariesTypo]}
              >
                Simplified Explanation
              </Text>
            </View>
            <View style={[styles.frame3, styles.framePosition2]}>
              <Text style={[styles.beneficiaries, styles.beneficiariesTypo]}>
                Beneficiaries
              </Text>
            </View>
            <View style={[styles.frame4, styles.framePosition2]}>
              <Text style={[styles.beneficiaries, styles.beneficiariesTypo]}>
                Long-Term Impact
              </Text>
            </View>
            <View style={[styles.frame5, styles.framePosition2]}>
              <Text style={[styles.beneficiaries, styles.beneficiariesTypo]}>
                Short-Term Impact
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame6, styles.frameLayout1]}>
          <View style={[styles.frame7, styles.framePosition]}>
            <Text
              style={[
                styles.simplifiedExplanation1,
                styles.simplifiedExplanation1FlexBox,
              ]}
            >
              Simplified Explanation
            </Text>
          </View>
        </View>
        <View style={styles.frame8}>
          <Text
            style={[
              styles.environmentalRegulationsAre,
              styles.simplifiedExplanation1FlexBox,
            ]}
          >
            Environmental regulations are rules set by the government to protect
            the environment from pollution and damage caused by human
            activities. These rules cover areas like air and water quality,
            waste management, and wildlife protection.
          </Text>
        </View>
        <View style={[styles.frame9, styles.frameLayout1]}>
          <View style={[styles.frame10, styles.framePosition]}>
            <Text
              style={[
                styles.simplifiedExplanation1,
                styles.simplifiedExplanation1FlexBox,
              ]}
            >
              Beneficiaries
            </Text>
          </View>
        </View>
        <View style={[styles.frame11, styles.frameLayout]}>
          <Text
            style={[
              styles.environmentalRegulationsAre,
              styles.simplifiedExplanation1FlexBox,
            ]}
          >
            The primary beneficiaries are the general public who enjoy better
            air, water, and overall environmental quality. Additionally,
            businesses operating in environmentally friendly ways can benefit
            from incentives and a positive brand image.
          </Text>
        </View>
        <Frame34 />
        <View style={[styles.frame12, styles.frameLayout1]}>
          <View style={[styles.frame13, styles.framePosition]}>
            <Text
              style={[
                styles.simplifiedExplanation1,
                styles.simplifiedExplanation1FlexBox,
              ]}
            >
              Long-Term Impact
            </Text>
          </View>
        </View>
        <View style={[styles.frame14, styles.frameLayout]}>
          <Text
            style={[
              styles.environmentalRegulationsAre,
              styles.simplifiedExplanation1FlexBox,
            ]}
          >
            Strong environmental regulations contribute to sustainable
            development, public health improvement, and biodiversity
            conservation. They also foster innovation in green technologies.
          </Text>
        </View>
        <View style={[styles.frame15, styles.frameLayout1]}>
          <View style={[styles.frame16, styles.framePosition]}>
            <Text
              style={[
                styles.simplifiedExplanation1,
                styles.simplifiedExplanation1FlexBox,
              ]}
            >
              Short-Term Impact
            </Text>
          </View>
        </View>
        <View style={[styles.frame17, styles.frameLayout]}>
          <Text
            style={[
              styles.environmentalRegulationsAre,
              styles.simplifiedExplanation1FlexBox,
            ]}
          >
            Compliance with environmental regulations can lead to increased
            costs for businesses. However, it also creates opportunities for the
            environmental industry and promotes responsible consumption.
          </Text>
        </View>
        <Frame3 propLeft={-4} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition2: {
    height: 34,
    top: 0,
    position: "absolute",
  },
  beneficiariesTypo: {
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    left: 8,
    top: 8,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameLayout1: {
    height: 60,
    left: 0,
    position: "absolute",
    width: 400,
  },
  framePosition: {
    height: 28,
    left: 16,
    position: "absolute",
  },
  simplifiedExplanation1FlexBox: {
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    position: "absolute",
  },
  frameLayout: {
    height: 112,
    left: 0,
    position: "absolute",
    width: 400,
  },
  simplifiedExplanation: {
    color: Color.colorMidnightblue_200,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    left: 8,
    top: 8,
  },
  frame2: {
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowRadius: 0,
    elevation: 0,
    borderColor: Color.colorMidnightblue_200,
    borderBottomWidth: 2,
    width: 146,
    left: 16,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 34,
  },
  beneficiaries: {
    color: Color.colorMidnightblue_100,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    left: 8,
    top: 8,
  },
  frame3: {
    left: 170,
    width: 91,
  },
  frame4: {
    left: 269,
    width: 119,
  },
  frame5: {
    left: 396,
    width: 123,
  },
  frame1: {
    borderColor: Color.colorThistle,
    borderBottomWidth: 1,
    borderStyle: "solid",
    top: 0,
    height: 35,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 400,
  },
  frame: {
    top: 72,
    height: 35,
    left: 0,
    position: "absolute",
    width: 400,
  },
  simplifiedExplanation1: {
    top: -1,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1,
    lineHeight: 28,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
  },
  frame7: {
    width: 226,
    top: 20,
    height: 28,
  },
  frame6: {
    top: 107,
  },
  environmentalRegulationsAre: {
    top: 4,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.publicSansRegular,
    width: 369,
    left: 16,
  },
  frame8: {
    top: 167,
    height: 136,
    left: 0,
    position: "absolute",
    width: 400,
  },
  frame10: {
    width: 130,
    top: 20,
    height: 28,
  },
  frame9: {
    top: 291,
  },
  frame11: {
    top: 341,
  },
  frame13: {
    top: 25,
    width: 180,
  },
  frame12: {
    top: 474,
  },
  frame14: {
    top: 534,
  },
  frame16: {
    width: 187,
    top: 20,
    height: 28,
  },
  frame15: {
    top: 638,
  },
  frame17: {
    top: 686,
  },
  theUserInputWasWhenClick: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 6,
    elevation: 6,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    height: 890,
    overflow: "hidden",
    width: 400,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  explanationEnviro: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default ExplanationEnviro;
