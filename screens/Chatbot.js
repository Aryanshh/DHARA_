import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Frame2 from "../components/Frame2";
import Frame21 from "../components/Frame21";
import Frame3 from "../components/Frame3";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Chatbot = () => {
  return (
    <View style={styles.chatbot}>
      <View style={[styles.frame, styles.framePosition4]}>
        <View style={styles.frame1}>
          <Text style={styles.chatbotScreen}>Chatbot Screen</Text>
        </View>
      </View>
      <View style={[styles.frame2, styles.frameLayout]}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
        <View style={[styles.frame3, styles.framePosition3]}>
          <View style={[styles.frame4, styles.framePosition2]}>
            <View style={[styles.frame5, styles.framePosition1]}>
              <Text style={styles.vidhi}>Vidhi</Text>
            </View>
            <View style={[styles.frame6, styles.framePosition2]}>
              <Text style={styles.am}>10:00 AM</Text>
            </View>
          </View>
          <View style={[styles.frame7, styles.framePosition]}>
            <Text style={[styles.helloHowCan, styles.canPosition]}>
              Hello! How can I assist you with your legal questions today?
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame8, styles.frameLayout]}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={[styles.frame3, styles.framePosition3]}>
          <View style={[styles.frame10, styles.framePosition2]}>
            <View style={[styles.frame11, styles.framePosition1]}>
              <Text style={styles.vidhi}>User</Text>
            </View>
            <View style={[styles.frame12, styles.framePosition2]}>
              <Text style={styles.am}>10:01 AM</Text>
            </View>
          </View>
          <View style={[styles.frame7, styles.framePosition]}>
            <Text style={[styles.canYouHelp, styles.canPosition]}>
              Can you help me understand the process of filing for bankruptcy?
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame14, styles.framePosition4]}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame2.png")}
        />
        <View style={[styles.frame15, styles.framePosition3]}>
          <View style={[styles.frame4, styles.framePosition2]}>
            <View style={[styles.frame5, styles.framePosition1]}>
              <Text style={styles.vidhi}>Vidhi</Text>
            </View>
            <View style={[styles.frame6, styles.framePosition2]}>
              <Text style={styles.am}>10:02 AM</Text>
            </View>
          </View>
          <View style={[styles.frame19, styles.framePosition]}>
            <Text style={[styles.sureFilingFor, styles.canPosition]}>
              Sure! Filing for bankruptcy involves several steps. First, you
              need to gather your financial documents. Then, you must complete
              credit counseling, file a petition, and attend a meeting of
              creditors. Would you like more details on any specific step?
            </Text>
          </View>
        </View>
      </View>
      <Frame2
        frame={require("../assets/frame3.png")}
        typeYourMessageHere="Type your message here..."
      />
      <Frame21 />
      <Frame3 />
      <Frame3 />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition4: {
    width: 400,
    position: "absolute",
    left: 0,
  },
  frameLayout: {
    height: 101,
    width: 400,
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
  framePosition: {
    top: 29,
    width: 316,
    left: 0,
    position: "absolute",
  },
  canPosition: {
    lineHeight: 24,
    top: 2,
    fontFamily: FontFamily.publicSansRegular,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.colorMidnightblue_200,
    left: 0,
    position: "absolute",
  },
  chatbotScreen: {
    top: -1,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1,
    lineHeight: 28,
    textAlign: "center",
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  frame1: {
    top: 20,
    width: 157,
    height: 28,
    left: 16,
    position: "absolute",
  },
  frame: {
    top: 72,
    height: 60,
  },
  frameIcon: {
    borderRadius: Border.br_9980xl,
    width: 40,
    height: 40,
    top: 12,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  vidhi: {
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_base,
    top: 0,
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  frame5: {
    width: 128,
  },
  am: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.publicSansRegular,
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame6: {
    left: 136,
    width: 60,
  },
  frame4: {
    width: 196,
    left: 0,
    height: 21,
    top: 0,
  },
  helloHowCan: {
    width: 311,
  },
  frame7: {
    height: 48,
  },
  frame3: {
    height: 77,
  },
  frame2: {
    top: 132,
  },
  frame11: {
    width: 36,
  },
  frame12: {
    left: 44,
    width: 57,
  },
  frame10: {
    width: 101,
    left: 0,
    height: 21,
    top: 0,
  },
  canYouHelp: {
    width: 303,
  },
  frame8: {
    top: 233,
  },
  sureFilingFor: {
    width: 312,
  },
  frame19: {
    height: 144,
  },
  frame15: {
    height: 173,
  },
  frame14: {
    top: 334,
    height: 197,
  },
  chatbot: {
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
    flex: 1,
    width: "100%",
    height: 668,
    overflow: "hidden",
  },
});

export default Chatbot;
