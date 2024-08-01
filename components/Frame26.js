import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame26 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.frameLayout6]}>
          <View style={[styles.frame3, styles.framePosition]}>
            <View style={[styles.frame4, styles.framePosition]}>
              <View style={[styles.frame5, styles.frameLayout5]}>
                <View style={[styles.frame6, styles.frameBorder]}>
                  <Text style={styles.all}>All</Text>
                </View>
              </View>
              <View style={[styles.frame7, styles.frameLayout4]}>
                <View style={[styles.frame8, styles.frameLayout4]}>
                  <Text style={styles.all}>Family Law</Text>
                </View>
              </View>
              <View style={[styles.frame9, styles.frameLayout3]}>
                <View style={[styles.frame10, styles.frameLayout3]}>
                  <Text style={styles.all}>Criminal Law</Text>
                </View>
              </View>
              <View style={[styles.frame11, styles.frameLayout2]}>
                <View style={[styles.frame12, styles.frameLayout2]}>
                  <Text style={styles.all}>Corporate Law</Text>
                </View>
              </View>
              <View style={[styles.frame13, styles.frameLayout1]}>
                <View style={[styles.frame14, styles.frameLayout1]}>
                  <Text style={styles.all}>Property Law</Text>
                </View>
              </View>
              <View style={[styles.frame15, styles.frameLayout]}>
                <View style={[styles.frame16, styles.frameLayout]}>
                  <Text style={styles.all}>Tax Law</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frame17, styles.frameLayout6]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout6: {
    width: 584,
    left: 0,
  },
  framePosition: {
    height: 32,
    top: 0,
    position: "absolute",
  },
  frameLayout5: {
    width: 36,
    height: 32,
    top: 0,
    position: "absolute",
  },
  frameBorder: {
    borderWidth: 1,
    borderColor: Color.colorThistle,
    borderStyle: "solid",
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_xs,
    left: 0,
  },
  frameLayout4: {
    width: 91,
    height: 32,
    top: 0,
    position: "absolute",
  },
  frameLayout3: {
    width: 103,
    height: 32,
    top: 0,
    position: "absolute",
  },
  frameLayout2: {
    width: 113,
    height: 32,
    top: 0,
    position: "absolute",
  },
  frameLayout1: {
    width: 105,
    height: 32,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 71,
    height: 32,
    top: 0,
    position: "absolute",
  },
  all: {
    top: 9,
    left: 9,
    fontSize: FontSize.size_sm,
    lineHeight: 14,
    fontWeight: "500",
    fontFamily: FontFamily.publicSansMedium,
    color: Color.colorMidnightblue_200,
    textAlign: "left",
    position: "absolute",
  },
  frame6: {
    width: 36,
    height: 32,
    top: 0,
    position: "absolute",
  },
  frame5: {
    left: 0,
    width: 36,
  },
  frame8: {
    borderWidth: 1,
    borderColor: Color.colorThistle,
    borderStyle: "solid",
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_xs,
    left: 0,
  },
  frame7: {
    left: 45,
  },
  frame10: {
    borderWidth: 1,
    borderColor: Color.colorThistle,
    borderStyle: "solid",
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_xs,
    left: 0,
  },
  frame9: {
    left: 144,
  },
  frame12: {
    borderWidth: 1,
    borderColor: Color.colorThistle,
    borderStyle: "solid",
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_xs,
    left: 0,
  },
  frame11: {
    left: 254,
  },
  frame14: {
    borderWidth: 1,
    borderColor: Color.colorThistle,
    borderStyle: "solid",
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_xs,
    left: 0,
  },
  frame13: {
    left: 376,
  },
  frame16: {
    borderWidth: 1,
    borderColor: Color.colorThistle,
    borderStyle: "solid",
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_xs,
    left: 0,
  },
  frame15: {
    left: 489,
  },
  frame4: {
    left: 12,
    width: 560,
  },
  frame3: {
    width: 584,
    left: 0,
  },
  frame17: {
    top: 32,
    height: 4,
    position: "absolute",
  },
  frame2: {
    top: 0,
    width: 584,
    height: 36,
    position: "absolute",
  },
  frame1: {
    top: 12,
    height: 36,
    overflow: "hidden",
    width: 400,
    left: 0,
    position: "absolute",
  },
  frame: {
    top: 196,
    height: 60,
    overflow: "hidden",
    width: 400,
    left: 0,
    position: "absolute",
  },
});

export default Frame26;
