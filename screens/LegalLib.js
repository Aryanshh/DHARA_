import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Frame8 from "../components/Frame8";
import Frame12 from "../components/Frame12";
import Frame35 from "../components/Frame35";
import Frame18 from "../components/Frame18";
import Frame36 from "../components/Frame36";
import Frame38 from "../components/Frame38";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LegalLib = () => {
  return (
    <View style={styles.legalLib}>
      <View style={styles.createAScreenBasedOnTitle}>
        <Frame8 profile="Legal Library" propLeft={96} />
        <Frame12 searchForLegalQuestions="Search legal articles, statutes, and more..." />
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={[styles.frame1, styles.framePosition]}>
            <Text style={[styles.browseCategories, styles.framePosition1]}>
              Browse Categories
            </Text>
          </View>
        </View>
        <Frame35 />
        <View style={[styles.frame2, styles.frameLayout]}>
          <View style={[styles.frame3, styles.framePosition]}>
            <Text style={[styles.browseCategories, styles.framePosition1]}>
              Featured Resources
            </Text>
          </View>
        </View>
        <View style={[styles.frame4, styles.framePosition1]}>
          <Frame18
            frame={require("../assets/frame73.png")}
            employmentContract="Understanding Constitutional Law"
            standardEmploymentAgreeme="In-depth analysis of constitutional principles"
            propTop={12}
          />
          <Frame18
            frame={require("../assets/frame74.png")}
            employmentContract="Recent Supreme Court Decisions"
            standardEmploymentAgreeme="Summaries and implications of recent rulings"
            propTop={340}
          />
          <Frame18
            frame={require("../assets/frame75.png")}
            employmentContract="Corporate Law Essentials"
            standardEmploymentAgreeme="Key statutes and case studies for businesses"
            propTop={668}
          />
        </View>
        <View style={[styles.frame5, styles.frameLayout]}>
          <View style={[styles.frame6, styles.framePosition]}>
            <Text style={[styles.browseCategories, styles.framePosition1]}>
              Latest Articles
            </Text>
          </View>
        </View>
        <Frame36 />
        <View style={[styles.frame7, styles.framePosition1]}>
          <View style={styles.frame8}>
            <Text style={styles.exploreMoreResources}>
              Explore More Resources
            </Text>
          </View>
        </View>
        <View style={[styles.frame9, styles.framePosition1]}>
          <Frame38 propTop={-9} propLeft={1} propTop1={11} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
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
  framePosition1: {
    left: 0,
    position: "absolute",
  },
  browseCategories: {
    top: -1,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    color: Color.colorMidnightblue_200,
    textAlign: "left",
  },
  frame1: {
    width: 188,
  },
  frame: {
    top: 136,
  },
  frame3: {
    width: 200,
  },
  frame2: {
    top: 256,
  },
  frame4: {
    top: 315,
    height: 992,
    width: 400,
  },
  frame6: {
    width: 146,
  },
  frame5: {
    top: 1307,
  },
  exploreMoreResources: {
    top: 8,
    left: 91,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  frame8: {
    top: 12,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    width: 368,
    height: 40,
    left: 16,
    position: "absolute",
  },
  frame7: {
    top: 1607,
    height: 64,
    width: 400,
  },
  frame9: {
    top: 1674,
    height: 73,
    width: 400,
  },
  createAScreenBasedOnTitle: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    height: 1744,
    overflow: "hidden",
    width: 400,
  },
  legalLib: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default LegalLib;
