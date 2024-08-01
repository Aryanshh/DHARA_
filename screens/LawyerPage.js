import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Frame9 from "../components/Frame9";
import Frame7 from "../components/Frame7";
import Frame25 from "../components/Frame25";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LawyerPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lawyerPage}>
      <View style={[styles.addVerticalScrool, styles.frame6ShadowBox]}>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <Text style={[styles.meetOurLawyers, styles.viewProfileTypo]}>
              Meet Our Lawyers
            </Text>
          </View>
        </View>
        <View style={styles.frame2}>
          <View style={styles.frame3}>
            <View style={[styles.frame4, styles.framePosition1]}>
              <View style={[styles.frame5, styles.frameLayout1]}>
                <View style={[styles.frame6, styles.frameLayout]}>
                  <Image
                    style={[styles.frameIcon, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame21.png")}
                  />
                  <View style={[styles.frame7, styles.frameLayout]}>
                    <View style={[styles.frame8, styles.framePosition]}>
                      <Text style={[styles.lawyerX, styles.lawyerXPosition]}>
                        Lawyer X
                      </Text>
                    </View>
                    <View style={[styles.frame9, styles.framePosition]}>
                      <Text
                        style={[
                          styles.specializationCorporateLaw,
                          styles.lawyerXPosition,
                        ]}
                      >
                        Specialization: Corporate Law
                      </Text>
                    </View>
                    <Pressable
                      style={[styles.frame10, styles.framePosition]}
                      onPress={() => navigation.navigate("LawyerProfile")}
                    >
                      <Text style={[styles.viewProfile, styles.lawyerXLayout]}>
                        View Profile
                      </Text>
                    </Pressable>
                  </View>
                </View>
                <Frame9
                  frame={require("../assets/frame22.png")}
                  lawyerY="Lawyer  Y"
                  specializationFamilyLaw="Specialization: Family Law"
                />
                <Frame9
                  frame={require("../assets/frame23.png")}
                  lawyerY="Michael Brown"
                  specializationFamilyLaw="Specialization: Criminal Law"
                  propLeft={528}
                />
                <Frame9
                  frame={require("../assets/frame24.png")}
                  lawyerY="Emily Davis"
                  specializationFamilyLaw="Specialization: Intellectual Property"
                  propLeft={784}
                />
              </View>
              <View style={[styles.frame11, styles.framePosition1]} />
            </View>
          </View>
        </View>
        <Frame7 propLeft={0} />
        <Frame25 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame6ShadowBox: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
  },
  viewProfileTypo: {
    textAlign: "center",
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  framePosition1: {
    width: 1040,
    left: 0,
    position: "absolute",
  },
  frameLayout1: {
    height: 432,
    top: 0,
  },
  frameLayout: {
    width: 240,
    position: "absolute",
  },
  framePosition: {
    width: 208,
    left: 16,
    position: "absolute",
  },
  lawyerXPosition: {
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  lawyerXLayout: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    color: Color.colorMidnightblue_200,
  },
  meetOurLawyers: {
    top: -1,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1,
    lineHeight: 28,
    color: Color.colorMidnightblue_200,
    textAlign: "center",
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    left: 0,
  },
  frame1: {
    top: 20,
    width: 182,
    height: 28,
    left: 16,
    position: "absolute",
  },
  frame: {
    top: 72,
    height: 60,
    left: 0,
    position: "absolute",
    width: 400,
  },
  frameIcon: {
    height: 320,
    top: 0,
    left: 0,
    overflow: "hidden",
    borderRadius: Border.br_xs,
    width: 240,
  },
  lawyerX: {
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    color: Color.colorMidnightblue_200,
  },
  frame8: {
    height: 20,
    top: 0,
    overflow: "hidden",
  },
  specializationCorporateLaw: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 16,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
  },
  frame9: {
    top: 24,
    height: 16,
    overflow: "hidden",
  },
  viewProfile: {
    top: 8,
    left: 64,
    textAlign: "center",
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    position: "absolute",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  frame10: {
    top: 52,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLinen,
    height: 36,
  },
  frame7: {
    top: 332,
    height: 100,
    left: 0,
  },
  frame6: {
    shadowRadius: 4,
    elevation: 4,
    height: 432,
    top: 0,
    left: 16,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
  },
  frame5: {
    width: 1040,
    left: 0,
    position: "absolute",
  },
  frame11: {
    top: 432,
    height: 4,
  },
  frame4: {
    top: 0,
    height: 436,
  },
  frame3: {
    top: 12,
    height: 436,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 400,
  },
  frame2: {
    top: 132,
    height: 460,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 400,
  },
  addVerticalScrool: {
    shadowRadius: 6,
    elevation: 6,
    height: 665,
    overflow: "hidden",
    width: 400,
  },
  lawyerPage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default LawyerPage;
