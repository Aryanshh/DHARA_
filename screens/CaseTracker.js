import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import Frame13 from "../components/Frame13";
import { useNavigation } from "@react-navigation/native";
import Frame8 from "../components/Frame8";
import Frame10 from "../components/Frame10";
import Frame19 from "../components/Frame19";
import Frame20 from "../components/Frame20";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CaseTracker = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.caseTracker}>
      <View style={styles.frameLayout3}>
        <Frame13 />
        <Frame13 />
        <Pressable
          style={[styles.frame1, styles.frameLayout2]}
          onPress={() => navigation.navigate("CommunityForum")}
        >
          <View style={[styles.frame2, styles.frameLayout1]}>
            <View style={[styles.frame3, styles.frameLayout1]}>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame26.png")}
              />
            </View>
          </View>
          <View style={[styles.frame4, styles.frameLayout2]}>
            <Text style={styles.qa}>{`Q&A`}</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.createAScreenBasedOnTitle}>
        <Frame8 profile="Case Tracker" propLeft={96} />
        <View style={styles.frame5}>
          <View style={styles.frame6}>
            <Text style={[styles.monitorYourLegal, styles.recentUpdatesTypo]}>
              Monitor Your Legal Cases
            </Text>
          </View>
        </View>
        <View style={styles.frame7}>
          <View style={[styles.frame8, styles.framePosition2]}>
            <View style={[styles.frame9, styles.framePosition1]}>
              <View style={[styles.frame10, styles.framePosition1]}>
                <Frame10
                  frame={require("../assets/frame66.png")}
                  whatAreTheStepsToFileForD="Case 1: Ravi vs State of UP"
                  familyLaw="Status: In Progress"
                  upvote="View Details"
                  propHeight={225}
                  propLeft={16}
                  propHeight1={113}
                  propTop={125}
                  propLeft1={43}
                />
                <Frame10
                  frame={require("../assets/frame67.png")}
                  whatAreTheStepsToFileForD="Case 2: Nandita vs  Vaishnavi"
                  familyLaw="Status: Awaiting Trial"
                  upvote="View Details"
                  propHeight={225}
                  propLeft={232}
                  propHeight1={113}
                  propTop={125}
                  propLeft1={43}
                />
                <Frame10
                  frame={require("../assets/frame68.png")}
                  whatAreTheStepsToFileForD="Case 3: Wilson vs. Clark"
                  familyLaw="Status: Closed"
                  upvote="View Details"
                  propHeight={225}
                  propLeft={448}
                  propHeight1={113}
                  propTop={125}
                  propLeft1={43}
                />
              </View>
              <View style={[styles.frame11, styles.framePosition1]} />
            </View>
          </View>
        </View>
        <View style={[styles.frame12, styles.frameLayout]}>
          <View style={[styles.frame13, styles.framePosition]}>
            <Text style={[styles.recentUpdates, styles.recentUpdatesPosition]}>
              Recent Updates
            </Text>
          </View>
        </View>
        <Frame19
          frame={require("../assets/frame51.png")}
          raviVsStateOfUP="Ravi vs State of UP"
          newEvidenceSubmitted="New evidence submitted"
          hoursAgo="2 hours ago"
        />
        <Frame19
          frame={require("../assets/frame55.png")}
          raviVsStateOfUP="Nandita vs  Vaishnavi"
          newEvidenceSubmitted="Court date set for July 20"
          hoursAgo="1 day ago"
          propTop={511}
          propWidth={226}
          propWidth1={162}
          propWidth2={162}
          propWidth3={162}
          propLeft={325}
          propWidth4={59}
        />
        <Frame19
          frame={require("../assets/frame69.png")}
          raviVsStateOfUP="Nikhil vs Aiytri"
          newEvidenceSubmitted="Case closed successfully"
          hoursAgo="3 days ago"
          propTop={583}
          propWidth={226}
          propWidth1={162}
          propWidth2={162}
          propWidth3={162}
          propLeft={315}
          propWidth4={69}
        />
        <View style={[styles.frame14, styles.frameLayout]}>
          <View style={[styles.frame15, styles.framePosition]}>
            <Text style={[styles.recentUpdates, styles.recentUpdatesPosition]}>
              Your Lawyers
            </Text>
          </View>
        </View>
        <View style={styles.frame16}>
          <Frame20
            lawyerX="Lawyer X"
            specialistInFamilyLaw="Specialist in Family Law"
            frame={require("../assets/frame70.png")}
          />
          <Frame20
            lawyerX="Lawyer Y"
            specialistInFamilyLaw="Expert in Criminal Law"
            frame={require("../assets/frame71.png")}
            propTop={123}
          />
          <Frame20
            lawyerX="Lawyer Z"
            specialistInFamilyLaw="Corporate Law Advisor"
            frame={require("../assets/frame72.png")}
            propTop={234}
          />
        </View>
        <Pressable
          style={styles.frame17}
          onPress={() => navigation.navigate("LawyerPage")}
        >
          <View style={[styles.frame18, styles.framePosition2]}>
            <Text
              style={[styles.contactYourLawyer, styles.recentUpdatesPosition]}
            >
              Contact Your Lawyer
            </Text>
          </View>
        </Pressable>
        <View style={[styles.frame19, styles.frameLayout3]}>
          <View style={[styles.frame20, styles.frameLayout3]}>
            <Frame13 />
            <Frame13 />
            <Pressable
              style={[styles.frame1, styles.frameLayout2]}
              onPress={() => navigation.navigate("CommunityForum")}
            >
              <View style={[styles.frame2, styles.frameLayout1]}>
                <View style={[styles.frame3, styles.frameLayout1]}>
                  <Image
                    style={styles.frameIcon}
                    resizeMode="cover"
                    source={require("../assets/frame26.png")}
                  />
                </View>
              </View>
              <View style={[styles.frame4, styles.frameLayout2]}>
                <Text style={styles.qa}>{`Q&A`}</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout2: {
    width: 67,
    position: "absolute",
  },
  frameLayout1: {
    height: 32,
    width: 64,
    top: 0,
    position: "absolute",
  },
  recentUpdatesTypo: {
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    top: -1,
    left: 0,
  },
  framePosition2: {
    top: 12,
    position: "absolute",
  },
  framePosition1: {
    width: 664,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 55,
    left: 0,
    position: "absolute",
    width: 400,
  },
  framePosition: {
    height: 23,
    left: 16,
    top: 20,
    position: "absolute",
  },
  recentUpdatesPosition: {
    letterSpacing: 0,
    position: "absolute",
  },
  frameLayout3: {
    height: 73,
    width: 400,
  },
  frameIcon: {
    top: 6,
    left: 22,
    width: 20,
    height: 20,
    overflow: "hidden",
    position: "absolute",
  },
  frame3: {
    left: 0,
  },
  frame2: {
    left: 2,
  },
  qa: {
    left: 20,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    color: Color.colorMidnightblue_100,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  frame4: {
    top: 36,
    height: 16,
    overflow: "hidden",
    left: 0,
  },
  frame1: {
    top: 10,
    left: 82,
    borderRadius: Border.br_5xs,
    height: 52,
  },
  monitorYourLegal: {
    fontSize: FontSize.size_3xl,
    letterSpacing: -1,
    lineHeight: 28,
    position: "absolute",
  },
  frame6: {
    width: 253,
    height: 28,
    left: 16,
    top: 20,
    position: "absolute",
  },
  frame5: {
    top: 72,
    height: 60,
    left: 0,
    position: "absolute",
    width: 400,
  },
  frame10: {
    height: 225,
    top: 0,
  },
  frame11: {
    top: 225,
    height: 4,
  },
  frame9: {
    height: 229,
    top: 0,
  },
  frame8: {
    height: 229,
    overflow: "hidden",
    left: 0,
    width: 400,
  },
  frame7: {
    top: 132,
    height: 253,
    overflow: "hidden",
    left: 0,
    position: "absolute",
    width: 400,
  },
  recentUpdates: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    top: -1,
    left: 0,
  },
  frame13: {
    width: 130,
  },
  frame12: {
    top: 384,
  },
  frame15: {
    width: 109,
  },
  frame14: {
    top: 655,
  },
  frame16: {
    top: 709,
    height: 341,
    left: 0,
    position: "absolute",
    width: 400,
  },
  contactYourLawyer: {
    top: 8,
    left: 105,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  frame18: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    width: 368,
    height: 40,
    left: 16,
  },
  frame17: {
    top: 1050,
    height: 64,
    left: 0,
    position: "absolute",
    width: 400,
  },
  frame20: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame19: {
    top: 1115,
    left: 0,
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
    height: 1187,
    overflow: "hidden",
    width: 400,
  },
  caseTracker: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default CaseTracker;
