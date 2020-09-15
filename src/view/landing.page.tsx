import React from "react";
import { Text, Image } from "react-native";

import logoDark from "../../assets/logoDark.png";
import logoLight from "../../assets/logoLight.png";
import { Container, Header, Tab, Tabs } from "native-base";
import WelcomeTab from "../components/WelcomeTab/Welcome.tab";
import { LandingPageStyle } from "./landing.page.style";

interface Props {}

function LandingPage(props: Props) {
  const {} = props;

  return (
    <Container>
      <Header hasTabs />
      <Tabs>
        <Tab heading="Start">
          <WelcomeTab logo={logoLight} />
        </Tab>
        <Tab heading="Scan">
          <Text>Dummy</Text>
        </Tab>
        <Tab heading="Authorize">
          <Text>Dummy</Text>
        </Tab>
        <Tab heading="Result">
          <Text>Dummy</Text>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default LandingPage;
