import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Frame22 from "../components/Frame22";
import Frame23 from "../components/Frame23";
import Frame24 from "../components/Frame24";
import Frame38 from "../components/Frame38";
import Frame7 from "../components/Frame7";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={[styles.home, styles.homeLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <Text
              style={[
                styles.welcomeToDharaContainer,
                styles.trendingArticlesClr,
              ]}
            >
              <Text style={styles.welcomeToTypo}>{`Welcome to `}</Text>
              <Text style={styles.dhara}>DHARA</Text>
            </Text>
          </View>
        </View>
        <Frame22 />
        <View style={[styles.frame2, styles.frameLayout]}>
          <View style={[styles.frame3, styles.framePosition]}>
            <Text style={[styles.trendingArticles, styles.welcomeToTypo]}>
              Trending Articles
            </Text>
          </View>
        </View>
        <Frame23 />
        <View style={[styles.frame4, styles.frameLayout]}>
          <View style={[styles.frame5, styles.framePosition]}>
            <Text style={[styles.trendingArticles, styles.welcomeToTypo]}>
              Access Legal Resources
            </Text>
          </View>
        </View>
        <Frame24 />
        <Frame38 />
        <Frame7 />
        <Image
          style={[styles.frameIcon, styles.homeLayout]}
          resizeMode="cover"
          source={require("../assets/frame20.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
  trendingArticlesClr: {
    color: Color.colorMidnightblue_200,
    letterSpacing: -1,
    position: "absolute",
  },
  frameLayout: {
    height: 60,
    width: 400,
    position: "absolute",
  },
  framePosition: {
    height: 28,
    left: 16,
    top: 20,
    position: "absolute",
  },
  welcomeToTypo: {
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
  },
  dhara: {
    fontFamily: FontFamily.samarkan,
  },
  welcomeToDharaContainer: {
    left: 21,
    fontSize: 28,
    lineHeight: 35,
    textAlign: "center",
    top: 0,
  },
  frame1: {
    width: 265,
    height: 35,
    left: 16,
    top: 20,
    position: "absolute",
  },
  frame: {
    top: 72,
    height: 67,
    width: 400,
    left: 0,
    position: "absolute",
  },
  trendingArticles: {
    top: -1,
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    letterSpacing: -1,
    position: "absolute",
    left: 0,
    fontFamily: FontFamily.publicSansBold,
    fontWeight: "700",
  },
  frame3: {
    width: 173,
  },
  frame2: {
    top: 399,
    left: 5,
  },
  frame5: {
    width: 241,
  },
  frame4: {
    top: 1468,
    left: 9,
  },
  frameIcon: {
    top: 1147,
    left: 32,
    width: 329,
    height: 196,
    position: "absolute",
  },
  frameParent: {
    left: -5,
    width: 409,
    top: 0,
    position: "absolute",
    height: 1875,
  },
  home: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1875,
  },
});

export default Home;
