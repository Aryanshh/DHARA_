import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import Frame3 from "../components/Frame3";
import Frame13 from "../components/Frame13";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ExplanationGST = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.explanationGst}>
      <View style={[styles.theUserInputWasWhenClick, styles.frame2ShadowBox]}>
        <View style={[styles.frame, styles.frameLayout4]}>
          <View style={[styles.frame1, styles.frameLayout4]}>
            <View style={[styles.frame2, styles.framePosition1]}>
              <Text style={styles.simplifiedExplanation}>
                Simplified Explanation
              </Text>
            </View>
            <View style={[styles.frame3, styles.framePosition1]}>
              <Text style={[styles.beneficiaries, styles.qaTypo]}>
                Beneficiaries
              </Text>
            </View>
            <View style={[styles.frame4, styles.framePosition1]}>
              <Text style={[styles.beneficiaries, styles.qaTypo]}>
                Long-Term Impact
              </Text>
            </View>
            <View style={[styles.frame5, styles.framePosition1]}>
              <Text style={[styles.beneficiaries, styles.qaTypo]}>
                Short-Term Impact
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame6, styles.frameLayout3]}>
          <View style={[styles.frame7, styles.framePosition]}>
            <Text style={[styles.simplifiedExplanation1, styles.gstIsAFlexBox]}>
              Simplified Explanation
            </Text>
          </View>
        </View>
        <View style={styles.frame8}>
          <Text style={[styles.gstIsA, styles.gstIsAFlexBox]}>
            GST is a single indirect tax levied on the sale of goods and
            services in India, replacing multiple taxes. It aims to simplify
            taxation and boost the economy.
          </Text>
        </View>
        <View style={[styles.frame9, styles.frameLayout3]}>
          <View style={[styles.frame10, styles.framePosition]}>
            <Text style={[styles.simplifiedExplanation1, styles.gstIsAFlexBox]}>
              Beneficiaries
            </Text>
          </View>
        </View>
        <View style={[styles.frame11, styles.frameLayout2]}>
          <Text style={[styles.gstIsA, styles.gstIsAFlexBox]}>
            Consumers, businesses, and the government benefit from GST.
            Consumers enjoy a reduced tax burden, businesses gain from
            streamlined processes, and the government increases tax revenue.
          </Text>
        </View>
        <View style={[styles.frame12, styles.frameLayout3]}>
          <View style={[styles.frame13, styles.framePosition]}>
            <Text style={[styles.simplifiedExplanation1, styles.gstIsAFlexBox]}>
              Long-Term Impact
            </Text>
          </View>
        </View>
        <View style={[styles.frame14, styles.frameLayout2]}>
          <Text style={[styles.gstIsA, styles.gstIsAFlexBox]}>
            GST is expected to lead to a unified Indian market, increased GDP
            growth, and improved tax compliance.
          </Text>
        </View>
        <View style={[styles.frame15, styles.frameLayout3]}>
          <View style={[styles.frame16, styles.framePosition]}>
            <Text style={[styles.simplifiedExplanation1, styles.gstIsAFlexBox]}>
              Short-Term Impact
            </Text>
          </View>
        </View>
        <View style={[styles.frame17, styles.frameLayout2]}>
          <Text style={[styles.gstIsA, styles.gstIsAFlexBox]}>
            Initially, GST led to some price adjustments and compliance
            challenges. However, it has simplified tax procedures and enhanced
            transparency.
          </Text>
        </View>
        <Frame3 propTop={3} />
        <View style={styles.frame18}>
          <Frame13 />
          <Pressable
            style={[styles.frame19, styles.frameLayout1]}
            onPress={() => navigation.navigate("CommunityForum")}
          >
            <View style={[styles.frame20, styles.frameLayout]}>
              <View style={[styles.frame21, styles.frameLayout]}>
                <Image
                  style={styles.frameIcon}
                  resizeMode="cover"
                  source={require("../assets/frame26.png")}
                />
              </View>
            </View>
            <View style={[styles.frame22, styles.frameLayout1]}>
              <Text style={[styles.qa, styles.qaTypo]}>{`Q&A`}</Text>
            </View>
          </Pressable>
          <View style={[styles.frame19, styles.frameLayout1]}>
            <View style={[styles.frame20, styles.frameLayout]}>
              <View style={[styles.frame21, styles.frameLayout]}>
                <Image
                  style={styles.frameIcon}
                  resizeMode="cover"
                  source={require("../assets/frame26.png")}
                />
              </View>
            </View>
            <View style={[styles.frame22, styles.frameLayout1]}>
              <Text style={[styles.qa, styles.qaTypo]}>{`Q&A`}</Text>
            </View>
          </View>
          <Pressable
            style={[styles.frame19, styles.frameLayout1]}
            onPress={() => navigation.navigate("CommunityForum")}
          >
            <View style={[styles.frame20, styles.frameLayout]}>
              <View style={[styles.frame21, styles.frameLayout]}>
                <Image
                  style={styles.frameIcon}
                  resizeMode="cover"
                  source={require("../assets/frame26.png")}
                />
              </View>
            </View>
            <View style={[styles.frame22, styles.frameLayout1]}>
              <Text style={[styles.qa, styles.qaTypo]}>{`Q&A`}</Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.frame19, styles.frameLayout1]}
            onPress={() => navigation.navigate("CommunityForum")}
          >
            <View style={[styles.frame20, styles.frameLayout]}>
              <View style={[styles.frame21, styles.frameLayout]}>
                <Image
                  style={styles.frameIcon}
                  resizeMode="cover"
                  source={require("../assets/frame26.png")}
                />
              </View>
            </View>
            <View style={[styles.frame22, styles.frameLayout1]}>
              <Text style={[styles.qa, styles.qaTypo]}>{`Q&A`}</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame2ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  frameLayout4: {
    height: 35,
    left: 0,
    position: "absolute",
    width: 400,
  },
  framePosition1: {
    height: 34,
    top: 0,
    position: "absolute",
  },
  qaTypo: {
    color: Color.colorMidnightblue_100,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  frameLayout3: {
    height: 60,
    left: 0,
    position: "absolute",
    width: 400,
  },
  framePosition: {
    height: 28,
    top: 20,
    left: 16,
    position: "absolute",
  },
  gstIsAFlexBox: {
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    position: "absolute",
  },
  frameLayout2: {
    height: 112,
    left: 0,
    position: "absolute",
    width: 400,
  },
  frameLayout1: {
    width: 67,
    position: "absolute",
  },
  frameLayout: {
    height: 32,
    width: 64,
    top: 0,
    position: "absolute",
  },
  simplifiedExplanation: {
    textAlign: "center",
    color: Color.colorMidnightblue_200,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    left: 8,
    top: 8,
    position: "absolute",
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
  },
  beneficiaries: {
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    left: 8,
    top: 8,
    color: Color.colorMidnightblue_100,
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
    overflow: "hidden",
  },
  frame: {
    top: 72,
  },
  simplifiedExplanation1: {
    top: -1,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1,
    lineHeight: 28,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    left: 0,
  },
  frame7: {
    width: 226,
  },
  frame6: {
    top: 107,
  },
  gstIsA: {
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
  },
  frame9: {
    top: 303,
  },
  frame11: {
    top: 362,
  },
  frame13: {
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
  },
  frame15: {
    top: 646,
  },
  frame17: {
    top: 705,
  },
  frameIcon: {
    top: 6,
    left: 22,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  frame21: {
    left: 0,
  },
  frame20: {
    left: 2,
  },
  qa: {
    left: 20,
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    top: 0,
  },
  frame22: {
    top: 36,
    height: 16,
    left: 0,
    overflow: "hidden",
  },
  frame19: {
    top: 10,
    left: 82,
    borderRadius: Border.br_5xs,
    height: 52,
  },
  frame18: {
    top: 817,
    left: -1,
    height: 73,
    position: "absolute",
    width: 400,
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
  },
  explanationGst: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default ExplanationGST;
