import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Frame5 from "./Frame5";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame36 = () => {
  return (
    <View style={[styles.frame, styles.framePosition2]}>
      <View style={[styles.frame1, styles.framePosition2]}>
        <View style={[styles.frame2, styles.framePosition1]}>
          <View style={styles.frame3}>
            <View style={[styles.frame4, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/frame76.png")}
              />
              <View style={[styles.frame5, styles.frameLayout]}>
                <View style={[styles.frame6, styles.framePosition]}>
                  <Text style={[styles.theImpactOf, styles.thePosition]}>
                    The Impact of GDPR on Global Privacy Laws
                  </Text>
                </View>
                <View style={[styles.frame7, styles.framePosition]}>
                  <Text style={[styles.exploringTheGlobal, styles.thePosition]}>
                    Exploring the global influence of GDPR
                  </Text>
                </View>
              </View>
            </View>
            <Frame5
              frame={require("../assets/frame77.png")}
              intellectualPropertyRight="Intellectual Property Rights in the Digital Age"
              protectingIPInARapidlyEvo="Protecting IP in a rapidly evolving digital world"
            />
            <Frame5
              frame={require("../assets/frame78.png")}
              intellectualPropertyRight="Environmental Law: Key Cases and Statutes"
              protectingIPInARapidlyEvo="Important legal precedents in environmental protection"
              propLeft={448}
              propWidth={156}
              propWidth1={162}
            />
          </View>
          <View style={[styles.frame8, styles.framePosition1]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition2: {
    overflow: "hidden",
    left: 0,
  },
  framePosition1: {
    width: 664,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 200,
    position: "absolute",
  },
  framePosition: {
    width: 168,
    left: 16,
    position: "absolute",
  },
  thePosition: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    height: 113,
    borderRadius: Border.br_xs,
    width: 200,
    top: 0,
    overflow: "hidden",
    left: 0,
  },
  theImpactOf: {
    top: 2,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    color: Color.colorMidnightblue_200,
    width: 152,
  },
  frame6: {
    height: 40,
    top: 0,
  },
  exploringTheGlobal: {
    top: 1,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 16,
    fontFamily: FontFamily.publicSansRegular,
    color: Color.colorMidnightblue_100,
    width: 120,
  },
  frame7: {
    top: 44,
    height: 32,
  },
  frame5: {
    top: 125,
    height: 88,
    width: 200,
    left: 0,
  },
  frame4: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
    width: 200,
    top: 0,
    left: 16,
    height: 213,
  },
  frame3: {
    height: 213,
    width: 664,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame8: {
    top: 213,
    height: 4,
  },
  frame2: {
    top: 0,
    height: 217,
  },
  frame1: {
    top: 12,
    height: 217,
    width: 400,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 1367,
    height: 241,
    width: 400,
    position: "absolute",
    overflow: "hidden",
  },
});

export default Frame36;
