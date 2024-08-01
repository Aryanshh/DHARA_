import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Frame15 from "../components/Frame15";
import Frame29 from "../components/Frame29";
import Frame30 from "../components/Frame30";
import Frame16 from "../components/Frame16";
import Frame7 from "../components/Frame7";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LawyerProfile = () => {
  return (
    <View style={styles.lawyerProfile}>
      <View style={styles.theUserInputWasGiveAPage}>
        <View style={[styles.frame, styles.framePosition2]}>
          <View style={styles.frame1}>
            <View style={[styles.frame2, styles.framePosition1]}>
              <Text style={[styles.lawyerX, styles.bioTypo]}>Lawyer X</Text>
            </View>
            <View style={[styles.frame3, styles.framePosition1]}>
              <Text style={styles.corporateLaw}>Corporate Law</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame4, styles.frameLayout]}>
          <View style={[styles.frame5, styles.framePosition]}>
            <Text style={[styles.bio, styles.bioTypo]}>Bio</Text>
          </View>
        </View>
        <View style={[styles.frame6, styles.framePosition2]}>
          <Text style={[styles.lawyerXIs, styles.lawyerXIsTypo]}>
            Lawyer X is a seasoned lawyer with over 15 years of experience in
            both civil and criminal law. He has a proven track record of
            successfully representing clients in complex legal matters.
          </Text>
        </View>
        <View style={[styles.frame7, styles.frameLayout]}>
          <View style={[styles.frame8, styles.framePosition]}>
            <Text style={[styles.bio, styles.bioTypo]}>Education</Text>
          </View>
        </View>
        <View style={[styles.frame9, styles.framePosition2]}>
          <Text style={[styles.harvardLawSchool, styles.lawyerXIsTypo]}>
            Harvard Law School, J.D., 2005
          </Text>
        </View>
        <View style={[styles.frame10, styles.framePosition2]}>
          <Text style={[styles.lawyerXIs, styles.lawyerXIsTypo]}>
            University of California, B.A. in Political Science, 2001
          </Text>
        </View>
        <View style={[styles.frame11, styles.frameLayout]}>
          <View style={[styles.frame12, styles.framePosition]}>
            <Text style={[styles.bio, styles.bioTypo]}>Experience</Text>
          </View>
        </View>
        <Frame15
          frame={require("../assets/frame38.png")}
          seniorPartnerAtDoeAssocia={`Senior Partner at Doe & Associates`}
          present="2015 - Present"
        />
        <Frame15
          frame={require("../assets/frame39.png")}
          seniorPartnerAtDoeAssocia="Assistant District Attorney"
          present="2008 - 2015"
          propTop={740}
          propWidth={259}
          propWidth1={195}
          propWidth2={195}
          propWidth3={195}
        />
        <Frame15
          frame={require("../assets/frame40.png")}
          seniorPartnerAtDoeAssocia="Legal Intern at Supreme Court"
          present="2005 - 2008"
          propTop={812}
          propWidth={289}
          propWidth1={225}
          propWidth2={225}
          propWidth3={225}
        />
        <View style={[styles.frame13, styles.frameLayout]}>
          <View style={[styles.frame14, styles.framePosition]}>
            <Text style={[styles.bio, styles.bioTypo]}>Specialty</Text>
          </View>
        </View>
        <Frame29 />
        <View style={[styles.frame15, styles.frameLayout]}>
          <View style={[styles.frame16, styles.framePosition]}>
            <Text
              style={[styles.bio, styles.bioTypo]}
            >{`Ratings & Reviews`}</Text>
          </View>
        </View>
        <Frame30 />
        <View style={[styles.frame17, styles.framePosition2]}>
          <Frame16
            march102023="March 10, 2023"
            frame={require("../assets/frame42.png")}
            lawyerXProvidedExceptiona="Lawyer X provided exceptional legal advice and representation. Highly recommend!"
          />
          <Frame16
            march102023="February 5, 2023"
            frame={require("../assets/frame45.png")}
            lawyerXProvidedExceptiona="Very professional and knowledgeable. Helped me win my case."
            propTop={208}
            propWidth={368}
          />
        </View>
        <View style={[styles.frame18, styles.framePosition2]}>
          <View style={[styles.frame19, styles.frame19Position]}>
            <Text style={[styles.connectNow, styles.frame19Position]}>
              Connect Now
            </Text>
          </View>
        </View>
        <Frame7 propLeft={-2} propTop={4} />
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame46.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition2: {
    left: 0,
    position: "absolute",
    width: 400,
  },
  framePosition1: {
    width: 368,
    left: 0,
    position: "absolute",
  },
  bioTypo: {
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    fontSize: FontSize.size_lg,
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
    top: 20,
    left: 16,
    position: "absolute",
  },
  lawyerXIsTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.publicSansRegular,
  },
  frame19Position: {
    top: 12,
    position: "absolute",
  },
  lawyerX: {
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.publicSansSemiBold,
    top: 0,
  },
  frame2: {
    height: 28,
    top: 0,
  },
  corporateLaw: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.publicSansRegular,
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame3: {
    top: 28,
    height: 20,
  },
  frame1: {
    top: 97,
    left: 57,
    height: 48,
    width: 368,
    position: "absolute",
  },
  frame: {
    top: 79,
    height: 216,
  },
  bio: {
    top: -1,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    letterSpacing: 0,
  },
  frame5: {
    width: 26,
  },
  frame4: {
    top: 288,
  },
  lawyerXIs: {
    width: 369,
    top: 4,
    fontSize: FontSize.size_base,
    left: 16,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    position: "absolute",
  },
  frame6: {
    top: 343,
    height: 112,
  },
  frame8: {
    width: 82,
  },
  frame7: {
    top: 455,
  },
  harvardLawSchool: {
    top: 4,
    fontSize: FontSize.size_base,
    left: 16,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    position: "absolute",
  },
  frame9: {
    top: 509,
    height: 40,
  },
  frame10: {
    top: 549,
    height: 64,
  },
  frame12: {
    width: 92,
  },
  frame11: {
    top: 613,
  },
  frame14: {
    width: 77,
  },
  frame13: {
    top: 884,
  },
  frame16: {
    width: 150,
  },
  frame15: {
    top: 998,
  },
  frame17: {
    top: 1279,
    height: 404,
  },
  connectNow: {
    left: 133,
    color: Color.colorWhite,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.publicSansRegular,
    letterSpacing: 0,
  },
  frame19: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    left: 16,
    top: 12,
    height: 48,
    width: 368,
  },
  frame18: {
    top: 1683,
    height: 72,
  },
  frameIcon: {
    top: 83,
    left: 190,
    width: 169,
    height: 224,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
  theUserInputWasGiveAPage: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    height: 1755,
    overflow: "hidden",
    width: 400,
    borderRadius: Border.br_xs,
  },
  lawyerProfile: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default LawyerProfile;
