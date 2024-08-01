import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Frame23 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frameLayout2]}>
        <Text style={[styles.budget2024, styles.budget2024Typo]}>
          Budget 2024
        </Text>
      </View>
      <View style={[styles.frame2, styles.frameLayout1]}>
        <Text style={[styles.aBudgetFor, styles.budgetPosition]}>
          "A Budget for Every Indian"
        </Text>
      </View>
      <Pressable
        style={[styles.frame3, styles.frameFlexBox]}
        onPress={() => navigation.navigate("ExplanationBudget")}
      >
        <Text style={[styles.seeExplanation, styles.seeExplanationTypo]}>
          See Explanation
        </Text>
      </Pressable>
      <Image
        style={[styles.image1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.frame4, styles.framePosition1]}>
        <Text
          style={[styles.environmentalRegulations, styles.seeExplanationTypo]}
        >
          Environmental Regulations
        </Text>
      </View>
      <View style={[styles.frame5, styles.framePosition]}>
        <Text style={[styles.aBudgetFor, styles.budgetPosition]}>
          New Standards for 2024
        </Text>
      </View>
      <Pressable
        style={[styles.frame6, styles.framePosition]}
        onPress={() => navigation.navigate("ExplanationEnviro")}
      >
        <Text style={[styles.seeExplanation, styles.seeExplanationTypo]}>
          See Explanation
        </Text>
      </Pressable>
      <View style={[styles.frame7, styles.frame7Position]}>
        <Text style={[styles.aBudgetFor, styles.budgetPosition]}>
          Navigating GST Made Easy
        </Text>
      </View>
      <Text style={[styles.gstNewNorms, styles.frame7Position]}>
        GST New Norms
      </Text>
      <Pressable
        style={[styles.frame8, styles.frameFlexBox]}
        onPress={() => navigation.navigate("ExplanationGST")}
      >
        <Text style={[styles.seeExplanation, styles.seeExplanationTypo]}>
          See Explanation
        </Text>
      </Pressable>
      <Image
        style={[styles.image2Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout2: {
    overflow: "hidden",
    height: 29,
    width: 300,
  },
  budget2024Typo: {
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  frameLayout1: {
    height: 23,
    overflow: "hidden",
  },
  budgetPosition: {
    left: 0,
    position: "absolute",
  },
  frameFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_10xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 51,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_3xs,
  },
  seeExplanationTypo: {
    fontSize: FontSize.size_sm,
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    lineHeight: 20,
  },
  iconPosition: {
    width: 335,
    left: 26,
    position: "absolute",
  },
  framePosition1: {
    left: 44,
    position: "absolute",
  },
  framePosition: {
    left: 43,
    position: "absolute",
  },
  frame7Position: {
    left: 46,
    position: "absolute",
  },
  budget2024: {
    textAlign: "left",
    left: 0,
    position: "absolute",
    top: 3,
  },
  frame1: {
    top: 205,
    left: 45,
    position: "absolute",
  },
  aBudgetFor: {
    top: 0,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 16,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
  },
  frame2: {
    top: 238,
    left: 44,
    position: "absolute",
    width: 300,
    height: 23,
  },
  seeExplanation: {
    textAlign: "center",
  },
  frame3: {
    top: 265,
    width: 298,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_10xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 51,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_3xs,
    left: 44,
    position: "absolute",
  },
  image1Icon: {
    top: 7,
    borderRadius: Border.br_smi,
    height: 185,
  },
  environmentalRegulations: {
    textAlign: "left",
    left: 0,
    position: "absolute",
    top: 3,
  },
  frame4: {
    top: 902,
    overflow: "hidden",
    height: 29,
    width: 300,
  },
  frame5: {
    top: 935,
    height: 23,
    overflow: "hidden",
    width: 300,
  },
  frame6: {
    top: 962,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_10xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 51,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_3xs,
    width: 298,
  },
  frame7: {
    top: 581,
    width: 272,
    height: 23,
    overflow: "hidden",
  },
  gstNewNorms: {
    top: 550,
    width: 157,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
  },
  frame8: {
    top: 615,
    left: 58,
    width: 270,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_10xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 51,
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  image2Icon: {
    top: 343,
    borderRadius: Border.br_sm,
    height: 186,
  },
  frame: {
    top: 459,
    left: 5,
    width: 400,
    height: 992,
    position: "absolute",
  },
});

export default Frame23;
