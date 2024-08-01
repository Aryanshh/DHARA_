import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame32 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.framePosition2]}>
          <View style={styles.frame3}>
            <View style={[styles.frame4, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/frame57.png")}
              />
              <View style={[styles.frame5, styles.framePosition1]}>
                <View style={styles.frame6}>
                  <Text style={styles.recentQuestion}>Recent Question</Text>
                </View>
                <View style={[styles.frame7, styles.framePosition]}>
                  <Text style={[styles.whatAreThe, styles.youNeedToTypo]}>
                    What are the steps to file a patent?
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frame8, styles.frameLayout]}>
              <Image
                style={[styles.frameIcon, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/frame58.png")}
              />
              <View style={[styles.frame9, styles.framePosition1]}>
                <View style={styles.frame6}>
                  <Text style={styles.recentQuestion}>Recent Answer</Text>
                </View>
                <View style={[styles.frame11, styles.framePosition]}>
                  <Text style={[styles.youNeedTo, styles.youNeedToTypo]}>
                    You need to prepare a detailed description of your
                    invention...
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frame12, styles.framePosition2]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition2: {
    width: 448,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 200,
    borderRadius: Border.br_xs,
    top: 0,
    position: "absolute",
  },
  framePosition1: {
    top: 125,
    width: 200,
    left: 0,
    position: "absolute",
  },
  framePosition: {
    top: 24,
    width: 168,
    left: 16,
    position: "absolute",
  },
  youNeedToTypo: {
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.publicSansRegular,
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    top: 1,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    height: 113,
    width: 200,
    borderRadius: Border.br_xs,
    overflow: "hidden",
    left: 0,
  },
  recentQuestion: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    color: Color.colorMidnightblue_200,
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame6: {
    height: 20,
    width: 168,
    left: 16,
    top: 0,
    position: "absolute",
  },
  whatAreThe: {
    width: 159,
  },
  frame7: {
    height: 32,
  },
  frame5: {
    height: 68,
  },
  frame4: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 200,
    borderRadius: Border.br_xs,
    height: 209,
    left: 16,
  },
  youNeedTo: {
    width: 162,
  },
  frame11: {
    height: 48,
  },
  frame9: {
    height: 84,
  },
  frame8: {
    left: 232,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 200,
    borderRadius: Border.br_xs,
    height: 209,
  },
  frame3: {
    height: 209,
    width: 448,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame12: {
    top: 209,
    height: 4,
  },
  frame2: {
    top: 0,
    width: 448,
    height: 213,
  },
  frame1: {
    top: 12,
    height: 213,
    overflow: "hidden",
    width: 400,
    left: 0,
    position: "absolute",
  },
  frame: {
    top: 787,
    height: 237,
    overflow: "hidden",
    width: 400,
    left: 0,
    position: "absolute",
  },
});

export default Frame32;
