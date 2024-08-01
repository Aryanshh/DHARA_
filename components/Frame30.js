import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame30 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={[styles.frame3, styles.framePosition2]}>
            <Text style={styles.text}>4.8</Text>
          </View>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame41.png")}
          />
          <View style={styles.frame4}>
            <Text style={[styles.text1, styles.textClr]}>150</Text>
            <Text style={[styles.reviews, styles.textClr]}>reviews</Text>
          </View>
        </View>
        <View style={[styles.frame5, styles.frameLayout6]}>
          <View style={[styles.frame6, styles.frameLayout6]}>
            <View style={[styles.frame7, styles.framePosition2]}>
              <Text style={[styles.text2, styles.textTypo]}>5</Text>
            </View>
            <View style={[styles.frame8, styles.frameLayout5]}>
              <View style={[styles.frame9, styles.framePosition]}>
                <View style={[styles.frame10, styles.frameBg]} />
              </View>
            </View>
            <View style={[styles.frame11, styles.framePosition2]}>
              <Text style={[styles.text3, styles.textTypo]}>100</Text>
              <Text style={[styles.text4, styles.textTypo]}>%</Text>
            </View>
          </View>
          <View style={[styles.frame12, styles.frameLayout6]}>
            <View style={[styles.frame7, styles.framePosition2]}>
              <Text style={[styles.text2, styles.textTypo]}>4</Text>
            </View>
            <View style={[styles.frame14, styles.frameLayout4]}>
              <View style={[styles.frame15, styles.frameLayout4]}>
                <View style={[styles.frame16, styles.frameLayout4]} />
              </View>
            </View>
            <View style={[styles.frame17, styles.framePosition2]}>
              <Text style={[styles.text3, styles.textTypo]}>30</Text>
              <Text style={[styles.text7, styles.textTypo]}>%</Text>
            </View>
          </View>
          <View style={[styles.frame18, styles.frameLayout6]}>
            <View style={[styles.frame7, styles.framePosition2]}>
              <Text style={[styles.text2, styles.textTypo]}>3</Text>
            </View>
            <View style={[styles.frame20, styles.frameLayout3]}>
              <View style={[styles.frame21, styles.frameLayout3]}>
                <View style={[styles.frame22, styles.frameLayout3]} />
              </View>
            </View>
            <View style={[styles.frame23, styles.framePosition2]}>
              <Text style={[styles.text3, styles.textTypo]}>15</Text>
              <Text style={[styles.text10, styles.textTypo]}>%</Text>
            </View>
          </View>
          <View style={[styles.frame24, styles.frameLayout6]}>
            <View style={[styles.frame7, styles.framePosition2]}>
              <Text style={[styles.text2, styles.textTypo]}>2</Text>
            </View>
            <View style={[styles.frame26, styles.frameLayout2]}>
              <View style={[styles.frame27, styles.frameLayout2]}>
                <View style={[styles.frame28, styles.frameLayout2]} />
              </View>
            </View>
            <View style={[styles.frame29, styles.frameLayout1]}>
              <Text style={[styles.text3, styles.textTypo]}>5</Text>
              <Text style={[styles.text13, styles.textTypo]}>%</Text>
            </View>
          </View>
          <View style={[styles.frame30, styles.frameLayout6]}>
            <View style={[styles.frame31, styles.framePosition2]}>
              <Text style={[styles.text2, styles.textTypo]}>1</Text>
            </View>
            <View style={[styles.frame32, styles.frameLayout]}>
              <View style={[styles.frame33, styles.frameLayout]}>
                <View style={[styles.frame34, styles.frameLayout]} />
              </View>
            </View>
            <View style={[styles.frame35, styles.frameLayout1]}>
              <Text style={[styles.text3, styles.textTypo]}>0</Text>
              <Text style={[styles.text13, styles.textTypo]}>%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition2: {
    top: 0,
    position: "absolute",
  },
  textClr: {
    color: Color.colorMidnightblue_100,
    textAlign: "left",
  },
  frameLayout6: {
    width: 186,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.publicSansMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  frameLayout5: {
    height: 10,
    width: 125,
    position: "absolute",
  },
  framePosition: {
    overflow: "hidden",
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_9980xl,
    top: 0,
    left: 0,
  },
  frameBg: {
    backgroundColor: Color.colorBlue,
    top: 0,
  },
  frameLayout4: {
    width: 131,
    height: 10,
    position: "absolute",
  },
  frameLayout3: {
    width: 133,
    height: 10,
    position: "absolute",
  },
  frameLayout2: {
    width: 140,
    height: 10,
    position: "absolute",
  },
  frameLayout1: {
    width: 22,
    height: 20,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 143,
    height: 10,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_29xl,
    lineHeight: 48,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    color: Color.colorMidnightblue_200,
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame3: {
    height: 48,
    width: 100,
    left: 0,
  },
  frameIcon: {
    top: 64,
    height: 20,
    width: 100,
    left: 0,
    position: "absolute",
  },
  text1: {
    fontFamily: FontFamily.publicSansRegular,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorMidnightblue_100,
    top: 0,
    position: "absolute",
    left: 0,
  },
  reviews: {
    left: 30,
    fontFamily: FontFamily.publicSansRegular,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorMidnightblue_100,
    top: 0,
    position: "absolute",
  },
  frame4: {
    top: 92,
    height: 28,
    width: 100,
    left: 0,
    position: "absolute",
  },
  frame2: {
    left: 25,
    height: 120,
    width: 100,
    top: 25,
    position: "absolute",
  },
  text2: {
    color: Color.colorDarkslategray,
    textAlign: "right",
    left: 0,
  },
  frame7: {
    width: 9,
    height: 20,
    left: 0,
  },
  frame10: {
    height: 10,
    width: 125,
    position: "absolute",
    left: 0,
  },
  frame9: {
    height: 10,
    width: 125,
    position: "absolute",
  },
  frame8: {
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9980xl,
    top: 5,
    left: 17,
  },
  text3: {
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    left: 0,
  },
  text4: {
    left: 23,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
  },
  frame11: {
    left: 150,
    width: 36,
    height: 20,
  },
  frame6: {
    top: 4,
    height: 20,
    left: 0,
  },
  frame16: {
    left: -91,
    backgroundColor: Color.colorBlue,
    top: 0,
  },
  frame15: {
    overflow: "hidden",
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_9980xl,
    top: 0,
    left: 0,
  },
  frame14: {
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9980xl,
    top: 5,
    left: 17,
  },
  text7: {
    left: 18,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
  },
  frame17: {
    left: 156,
    width: 30,
    height: 20,
  },
  frame12: {
    top: 36,
    height: 20,
    left: 0,
  },
  frame22: {
    left: -113,
    backgroundColor: Color.colorBlue,
    top: 0,
  },
  frame21: {
    overflow: "hidden",
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_9980xl,
    top: 0,
    left: 0,
  },
  frame20: {
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9980xl,
    top: 5,
    left: 17,
  },
  text10: {
    left: 15,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
  },
  frame23: {
    left: 158,
    width: 28,
    height: 20,
  },
  frame18: {
    top: 68,
    height: 20,
    left: 0,
  },
  frame28: {
    left: -133,
    backgroundColor: Color.colorBlue,
    top: 0,
  },
  frame27: {
    overflow: "hidden",
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_9980xl,
    top: 0,
    left: 0,
  },
  frame26: {
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9980xl,
    top: 5,
    left: 17,
  },
  text13: {
    left: 9,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
  },
  frame29: {
    left: 164,
  },
  frame24: {
    top: 100,
    height: 20,
    left: 0,
  },
  frame31: {
    width: 6,
    height: 20,
    left: 0,
  },
  frame34: {
    left: -143,
    backgroundColor: Color.colorBlue,
    top: 0,
  },
  frame33: {
    overflow: "hidden",
    backgroundColor: Color.colorLinen,
    borderRadius: Border.br_9980xl,
    top: 0,
    left: 0,
  },
  frame32: {
    left: 14,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9980xl,
    top: 5,
    width: 143,
  },
  frame35: {
    left: 165,
  },
  frame30: {
    top: 132,
    height: 20,
    left: 0,
  },
  frame5: {
    left: 157,
    height: 152,
    top: 25,
  },
  frame1: {
    top: 12,
    left: 16,
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: Color.colorThistle,
    borderWidth: 1,
    width: 368,
    height: 202,
    position: "absolute",
  },
  frame: {
    top: 1053,
    width: 400,
    height: 226,
    left: 0,
    position: "absolute",
  },
});

export default Frame30;
