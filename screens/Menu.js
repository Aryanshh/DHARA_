import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Frame17 from "../components/Frame17";
import Frame31 from "../components/Frame31";
import Frame3 from "../components/Frame3";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <View style={styles.theUserInputWasINeedAPo}>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <Text style={styles.menu1}>Menu</Text>
          </View>
        </View>
        <Frame17
          frame={require("../assets/frame47.png")}
          home="Home"
          returnToTheMainDashboard="Return to the main dashboard"
          onFramePress={() => navigation.navigate("Home")}
        />
        <Frame17
          frame={require("../assets/frame48.png")}
          home="Chatbot"
          returnToTheMainDashboard="Solve you doubts with Vidhi"
          homeTop={204}
          frameWidth={318}
          propWidth={254}
          propWidth1={254}
          propWidth2={254}
          onFramePress={() => navigation.navigate("Chatbot")}
        />
        <Frame17
          frame={require("../assets/frame49.png")}
          home={`Q&A`}
          returnToTheMainDashboard="Get answers to your legal questions"
          homeTop={276}
          frameWidth={294}
          propWidth={230}
          propWidth1={230}
          propWidth2={230}
          onFramePress={() => navigation.navigate("CommunityForum")}
        />
        <Frame31 />
        <Pressable
          style={styles.frame2}
          onPress={() => navigation.navigate("Templates")}
        >
          <View style={[styles.frame3, styles.frameLayout1]}>
            <Image
              style={[styles.frameIcon, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/frame50.png")}
            />
            <View style={[styles.frame4, styles.frameLayout]}>
              <View style={[styles.frame5, styles.frameLayout]}>
                <Text
                  style={[
                    styles.documentTemplates,
                    styles.accessALibraryPosition,
                  ]}
                >
                  Document Templates
                </Text>
              </View>
              <View style={[styles.frame6, styles.frameLayout]}>
                <Text
                  style={[styles.accessALibrary, styles.accessALibraryPosition]}
                >
                  Access a library of legal document templates
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Frame17
          frame={require("../assets/frame51.png")}
          home="Subscription Plans"
          returnToTheMainDashboard="View and manage your subscription plans"
          homeTop={492}
          frameWidth={331}
          propWidth={267}
          propWidth1={267}
          propWidth2={267}
          onFramePress={() => navigation.navigate("Subscription")}
        />
        <Frame17
          frame={require("../assets/frame52.png")}
          home="Settings"
          returnToTheMainDashboard="Adjust your app preferences"
          homeTop={564}
          frameWidth={247}
          propWidth={183}
          propWidth1={183}
          propWidth2={183}
          onFramePress={() => navigation.navigate("Profile")}
        />
        <Frame3 propTop={3} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 48,
    position: "absolute",
  },
  framePosition: {
    top: 0,
    left: 0,
  },
  frameLayout: {
    width: 244,
    position: "absolute",
  },
  accessALibraryPosition: {
    fontFamily: FontFamily.publicSansRegular,
    top: 0,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    left: 0,
    position: "absolute",
  },
  menu1: {
    top: -1,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    lineHeight: 28,
    letterSpacing: -1,
    left: 0,
    position: "absolute",
  },
  frame1: {
    top: 20,
    width: 57,
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
    borderRadius: Border.br_3xs,
    width: 48,
    height: 48,
    position: "absolute",
  },
  documentTemplates: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
  },
  frame5: {
    height: 24,
    top: 0,
    left: 0,
  },
  accessALibrary: {
    fontSize: FontSize.size_sm,
    lineHeight: 28,
    letterSpacing: -1,
    fontFamily: FontFamily.publicSansRegular,
  },
  frame6: {
    top: 24,
    height: 20,
    left: 0,
  },
  frame4: {
    top: 2,
    left: 64,
    height: 44,
  },
  frame3: {
    top: 12,
    width: 308,
    left: 16,
  },
  frame2: {
    top: 420,
    height: 72,
    left: 0,
    position: "absolute",
    width: 400,
  },
  theUserInputWasINeedAPo: {
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
    height: 636,
    overflow: "hidden",
    width: 400,
  },
  menu: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default Menu;
