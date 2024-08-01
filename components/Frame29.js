import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame29 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.frameLayout4]}>
          <View style={[styles.frame3, styles.framePosition]}>
            <View style={[styles.frame4, styles.framePosition]}>
              <View style={[styles.frame5, styles.frameLayout3]}>
                <View style={[styles.frame6, styles.frameBorder]}>
                  <Text style={styles.civilLaw}>Civil Law</Text>
                </View>
              </View>
              <View style={[styles.frame7, styles.frameLayout2]}>
                <View style={[styles.frame8, styles.frameLayout2]}>
                  <Text style={styles.civilLaw}>Criminal Law</Text>
                </View>
              </View>
              <View style={[styles.frame9, styles.frameLayout1]}>
                <View style={[styles.frame10, styles.frameLayout1]}>
                  <Text style={styles.civilLaw}>Family Law</Text>
                </View>
              </View>
              <View style={[styles.frame11, styles.frameLayout]}>
                <View style={[styles.frame12, styles.frameLayout]}>
                  <Text style={styles.civilLaw}>Corporate Law</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frame13, styles.frameLayout4]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout4: {
    width: 431,
    left: 0,
  },
  framePosition: {
    height: 32,
    top: 0,
    position: "absolute",
  },
  frameLayout3: {
    width: 76,
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
  frameLayout2: {
    width: 103,
    height: 32,
    top: 0,
    position: "absolute",
  },
  frameLayout1: {
    width: 91,
    height: 32,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 113,
    height: 32,
    top: 0,
    position: "absolute",
  },
  civilLaw: {
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
    width: 76,
    height: 32,
    top: 0,
    position: "absolute",
  },
  frame5: {
    left: 0,
    width: 76,
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
    left: 84,
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
    left: 195,
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
    left: 294,
  },
  frame4: {
    left: 12,
    width: 407,
  },
  frame3: {
    width: 431,
    left: 0,
  },
  frame13: {
    top: 32,
    height: 4,
    position: "absolute",
  },
  frame2: {
    top: 0,
    width: 431,
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
    top: 938,
    height: 60,
    overflow: "hidden",
    width: 400,
    left: 0,
    position: "absolute",
  },
});

export default Frame29;
