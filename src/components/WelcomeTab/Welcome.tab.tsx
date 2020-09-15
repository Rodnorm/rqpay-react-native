import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text } from "react-native";
interface Props {
  logo: any;
}

function WelcomeTab(props: Props) {
  const { logo } = props;

  return (
    <>
      <Image source={logo} style={{ width: 305, height: 159 }} />
      <Text>Swipe right to start</Text>
      <StatusBar style="auto" />
    </>
  );
}

export default WelcomeTab;
