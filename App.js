const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Landing from "./screens/Landing";
import Chatbot from "./screens/Chatbot";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import LawyerPage from "./screens/LawyerPage";
import CommunityForum from "./screens/CommunityForum";
import Frame from "./screens/Frame";
import SignUp from "./screens/SignUp";
import Subscription from "./screens/Subscription";
import LawyerProfile from "./screens/LawyerProfile";
import Menu from "./screens/Menu";
import Profile from "./screens/Profile";
import ExplanationBudget from "./screens/ExplanationBudget";
import ExplanationGST from "./screens/ExplanationGST";
import Templates from "./screens/Templates";
import ExplanationEnviro from "./screens/ExplanationEnviro";
import CaseTracker from "./screens/CaseTracker";
import LegalLib from "./screens/LegalLib";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chatbot"
              component={Chatbot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LawyerPage"
              component={LawyerPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CommunityForum"
              component={CommunityForum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Subscription"
              component={Subscription}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LawyerProfile"
              component={LawyerProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExplanationBudget"
              component={ExplanationBudget}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExplanationGST"
              component={ExplanationGST}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Templates"
              component={Templates}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExplanationEnviro"
              component={ExplanationEnviro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CaseTracker"
              component={CaseTracker}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LegalLib"
              component={LegalLib}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
