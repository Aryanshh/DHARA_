import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Frame8 from "../components/Frame8";
import Frame10 from "../components/Frame10";
import Frame11 from "../components/Frame11";
import Frame18 from "../components/Frame18";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Templates = () => {
  return (
    <View style={styles.templates}>
      <View style={styles.createAScreenBasedOnTitle}>
        <Frame8 profile="Document Templates" propLeft={66} />
        <View style={[styles.frame, styles.framePosition2]}>
          <View style={[styles.frame1, styles.frameLayout]}>
            <Text style={[styles.accessALibrary, styles.accessALibraryTypo]}>
              Access a library of legal document templates
            </Text>
          </View>
        </View>
        <View style={[styles.frame2, styles.framePosition2]}>
          <View style={[styles.frame3, styles.framePosition1]}>
            <View style={[styles.frame4, styles.framePosition]}>
              <View style={[styles.frame5, styles.framePosition]}>
                <Frame10
                  whatAreTheStepsToFileForD="Contracts"
                  familyLaw="Business and personal contracts"
                  upvote="View Templates"
                  propHeight={312}
                  propLeft={16}
                  propHeight1={200}
                  propTop={212}
                  propLeft1={31}
                />
                <Frame11
                  frame={require("../assets/frame61.png")}
                  wills="Wills"
                  lastWillAndTestament="Last will and testament"
                />
                <Frame11
                  frame={require("../assets/frame62.png")}
                  wills="NDAs"
                  lastWillAndTestament="Non-disclosure agreements"
                  propLeft={448}
                />
              </View>
              <View style={[styles.frame6, styles.framePosition]} />
            </View>
          </View>
        </View>
        <View style={[styles.frame7, styles.frameLayout]}>
          <View style={styles.frame8}>
            <Text style={[styles.popularTemplates, styles.templatesPosition]}>
              Popular Templates
            </Text>
          </View>
        </View>
        <View style={[styles.frame9, styles.framePosition2]}>
          <Frame18
            frame={require("../assets/frame63.png")}
            employmentContract="Employment Contract"
            standardEmploymentAgreeme="Standard employment agreement"
          />
          <Frame18
            frame={require("../assets/frame64.png")}
            employmentContract="Lease Agreement"
            standardEmploymentAgreeme="Residential lease agreement"
            propTop={340}
          />
          <Frame18
            frame={require("../assets/frame65.png")}
            employmentContract="Power of Attorney"
            standardEmploymentAgreeme="Legal authorization document"
            propTop={668}
          />
        </View>
        <View style={[styles.frame10, styles.framePosition2]}>
          <View style={[styles.frame11, styles.framePosition1]}>
            <Text
              style={[styles.exploreAllTemplates, styles.templatesPosition]}
            >
              Explore All Templates
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition2: {
    left: 0,
    width: 400,
  },
  frameLayout: {
    height: 55,
    position: "absolute",
  },
  accessALibraryTypo: {
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    left: 0,
  },
  framePosition1: {
    top: 12,
    position: "absolute",
  },
  framePosition: {
    width: 664,
    left: 0,
    position: "absolute",
  },
  templatesPosition: {
    letterSpacing: 0,
    position: "absolute",
  },
  accessALibrary: {
    fontSize: FontSize.size_3xl,
    letterSpacing: -1,
    lineHeight: 28,
    width: 343,
    top: 0,
    position: "absolute",
  },
  frame1: {
    width: 368,
    left: 16,
    top: 20,
    height: 55,
  },
  frame: {
    top: 72,
    height: 87,
    position: "absolute",
  },
  frame5: {
    height: 312,
    top: 0,
  },
  frame6: {
    top: 312,
    height: 4,
  },
  frame4: {
    height: 316,
    top: 0,
  },
  frame3: {
    height: 316,
    left: 0,
    width: 400,
    overflow: "hidden",
  },
  frame2: {
    top: 159,
    height: 340,
    position: "absolute",
    overflow: "hidden",
  },
  popularTemplates: {
    top: -1,
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    left: 0,
  },
  frame8: {
    width: 153,
    height: 23,
    left: 16,
    top: 20,
    position: "absolute",
  },
  frame7: {
    top: 499,
    left: 0,
    width: 400,
  },
  frame9: {
    top: 554,
    height: 992,
    position: "absolute",
  },
  exploreAllTemplates: {
    top: 8,
    left: 100,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  frame11: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    height: 40,
    width: 368,
    left: 16,
  },
  frame10: {
    top: 1546,
    height: 64,
    position: "absolute",
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
    height: 1683,
    overflow: "hidden",
    width: 400,
  },
  templates: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default Templates;
