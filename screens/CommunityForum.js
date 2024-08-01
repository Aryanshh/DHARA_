import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Frame12 from "../components/Frame12";
import Frame26 from "../components/Frame26";
import Frame10 from "../components/Frame10";
import Frame2 from "../components/Frame2";
import Frame7 from "../components/Frame7";
import Frame27 from "../components/Frame27";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CommunityForum = () => {
  return (
    <View style={styles.communityForum}>
      <View style={styles.theUserInputWasGiveAComm}>
        <Frame12 searchForLegalQuestions="Search for legal questions..." />
        <View style={[styles.frame, styles.frameLayout2]}>
          <View style={[styles.frame1, styles.framePosition7]}>
            <Text style={styles.communityQa}>{`Community Q&A`}</Text>
          </View>
        </View>
        <Frame26 />
        <View style={[styles.frame2, styles.framePosition8]}>
          <View style={[styles.frame3, styles.framePosition6]}>
            <View style={[styles.frame4, styles.framePosition4]}>
              <View style={[styles.frame5, styles.framePosition4]}>
                <Frame10
                  frame={require("../assets/frame28.png")}
                  whatAreTheStepsToFileForD="What are the steps to file for divorce?"
                  familyLaw="Family Law"
                  upvote="Upvote"
                />
                <Frame10
                  frame={require("../assets/frame29.png")}
                  whatAreTheStepsToFileForD="How to handle a DUI charge?"
                  familyLaw="Criminal Law"
                  upvote="Upvote"
                  propHeight={225}
                  propLeft={232}
                  propHeight1={113}
                  propTop={125}
                  propLeft1={61}
                />
                <Frame10
                  frame={require("../assets/frame30.png")}
                  whatAreTheStepsToFileForD="What are the legal requirements to start a business?"
                  familyLaw="Corporate Law"
                  upvote="Upvote"
                  propHeight={225}
                  propLeft={448}
                  propHeight1={113}
                  propTop={125}
                  propLeft1={61}
                />
              </View>
              <View style={[styles.frame6, styles.framePosition4]} />
            </View>
          </View>
        </View>
        <View style={[styles.frame7, styles.frameLayout2]}>
          <View style={[styles.frame8, styles.framePosition7]}>
            <Text style={styles.communityQa}>Live Chat</Text>
          </View>
        </View>
        <View style={[styles.frame9, styles.framePosition8]}>
          <Image
            style={[styles.frameIcon, styles.framePosition6]}
            resizeMode="cover"
            source={require("../assets/frame31.png")}
          />
          <View style={[styles.frame10, styles.framePosition3]}>
            <View style={[styles.frame11, styles.framePosition2]}>
              <View style={[styles.frame12, styles.framePosition1]}>
                <Text style={styles.user123}>User123</Text>
              </View>
              <View style={[styles.frame13, styles.frameLayout1]}>
                <Text style={styles.am}>10:30 AM</Text>
              </View>
            </View>
            <View style={[styles.frame14, styles.framePosition]}>
              <Text
                style={[styles.canSomeoneExplain, styles.whatAreThePosition]}
              >
                Can someone explain the process of filing for bankruptcy?
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame15, styles.frameLayout]}>
          <Image
            style={[styles.frameIcon, styles.framePosition6]}
            resizeMode="cover"
            source={require("../assets/frame32.png")}
          />
          <View style={[styles.frame16, styles.framePosition3]}>
            <View style={[styles.frame17, styles.framePosition2]}>
              <View style={[styles.frame18, styles.framePosition1]}>
                <Text style={styles.user123}>LawyerJane</Text>
              </View>
              <View style={[styles.frame19, styles.frameLayout1]}>
                <Text style={styles.am}>10:32 AM</Text>
              </View>
            </View>
            <View style={[styles.frame20, styles.framePosition]}>
              <Text style={[styles.user123SureI, styles.whatAreThePosition]}>
                @User123 Sure, I can help with that. The first step is to gather
                all your financial documents...
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame21, styles.framePosition8]}>
          <Image
            style={[styles.frameIcon, styles.framePosition6]}
            resizeMode="cover"
            source={require("../assets/frame33.png")}
          />
          <View style={[styles.frame10, styles.framePosition3]}>
            <View style={[styles.frame23, styles.framePosition2]}>
              <View style={[styles.frame24, styles.framePosition1]}>
                <Text style={styles.user123}>User456</Text>
              </View>
              <View style={[styles.frame25, styles.framePosition2]}>
                <Text style={styles.am}>10:35 AM</Text>
              </View>
            </View>
            <View style={[styles.frame14, styles.framePosition]}>
              <Text style={[styles.whatAreThe, styles.whatAreThePosition]}>
                What are the consequences of a breach of contract?
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame27, styles.frameLayout]}>
          <Image
            style={[styles.frameIcon, styles.framePosition6]}
            resizeMode="cover"
            source={require("../assets/frame34.png")}
          />
          <View style={[styles.frame16, styles.framePosition3]}>
            <View style={[styles.frame29, styles.framePosition2]}>
              <View style={[styles.frame30, styles.framePosition1]}>
                <Text style={styles.user123}>ExpertMike</Text>
              </View>
              <View style={[styles.frame31, styles.frameLayout1]}>
                <Text style={styles.am}>10:37 AM</Text>
              </View>
            </View>
            <View style={[styles.frame20, styles.framePosition]}>
              <Text
                style={[styles.user456ItDepends, styles.whatAreThePosition]}
              >
                @User456 It depends on the terms of the contract, but generally,
                you may be liable for damages...
              </Text>
            </View>
          </View>
        </View>
        <Frame2
          frame={require("../assets/frame35.png")}
          typeYourMessageHere="Type your question here..."
          propTop={1020}
        />
        <Frame7 propLeft={-2} />
        <Frame27 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout2: {
    height: 60,
    left: 0,
    position: "absolute",
    width: 400,
  },
  framePosition7: {
    height: 28,
    top: 20,
    left: 16,
    position: "absolute",
  },
  framePosition8: {
    position: "absolute",
    left: 0,
    width: 400,
  },
  framePosition6: {
    top: 12,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition4: {
    width: 664,
    left: 0,
    position: "absolute",
  },
  framePosition3: {
    width: 316,
    left: 68,
    top: 12,
    position: "absolute",
  },
  framePosition2: {
    height: 21,
    top: 0,
    position: "absolute",
  },
  framePosition1: {
    height: 20,
    top: 1,
    left: 0,
    position: "absolute",
  },
  frameLayout1: {
    width: 60,
    height: 21,
    top: 0,
    position: "absolute",
  },
  framePosition: {
    top: 29,
    width: 316,
    left: 0,
    position: "absolute",
  },
  whatAreThePosition: {
    lineHeight: 24,
    top: 2,
    fontFamily: FontFamily.publicSansRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 125,
    left: 0,
    position: "absolute",
    width: 400,
  },
  communityQa: {
    top: -1,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1,
    lineHeight: 28,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  frame1: {
    width: 169,
  },
  frame: {
    top: 136,
  },
  frame5: {
    height: 225,
    top: 0,
    width: 664,
  },
  frame6: {
    top: 225,
    height: 4,
  },
  frame4: {
    top: 0,
    width: 664,
    height: 229,
  },
  frame3: {
    height: 229,
    left: 0,
    width: 400,
  },
  frame2: {
    top: 256,
    height: 253,
    left: 0,
    overflow: "hidden",
  },
  frame8: {
    width: 92,
  },
  frame7: {
    top: 508,
  },
  frameIcon: {
    borderRadius: Border.br_9980xl,
    width: 40,
    height: 40,
    left: 16,
    top: 12,
  },
  user123: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    top: 0,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  frame12: {
    width: 63,
  },
  am: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.publicSansRegular,
    top: 0,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frame13: {
    left: 72,
  },
  frame11: {
    width: 132,
    left: 0,
  },
  canSomeoneExplain: {
    width: 311,
  },
  frame14: {
    height: 48,
  },
  frame10: {
    height: 77,
  },
  frame9: {
    top: 568,
    height: 101,
    left: 0,
  },
  frame18: {
    width: 90,
  },
  frame19: {
    left: 98,
  },
  frame17: {
    width: 158,
    left: 0,
  },
  user123SureI: {
    width: 298,
  },
  frame20: {
    height: 72,
  },
  frame16: {
    height: 101,
  },
  frame15: {
    top: 669,
  },
  frame24: {
    width: 68,
  },
  frame25: {
    left: 76,
    width: 61,
  },
  frame23: {
    width: 136,
    left: 0,
  },
  whatAreThe: {
    width: 312,
  },
  frame21: {
    top: 794,
    height: 101,
    left: 0,
  },
  frame30: {
    width: 89,
  },
  frame31: {
    left: 97,
  },
  frame29: {
    width: 157,
    left: 0,
  },
  user456ItDepends: {
    width: 306,
  },
  frame27: {
    top: 895,
  },
  theUserInputWasGiveAComm: {
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
    height: 1157,
    overflow: "hidden",
    width: 400,
  },
  communityForum: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default CommunityForum;
