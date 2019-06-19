import React from "react";
import { Stripes, StripeNode, Content, Text } from "./Greetings.styles";
import {
  Section,
  Heading,
  TextBody,
  AccentButton,
  LightButton
} from "../../LandingPage.styles";
import "./Greetings.css";
import { Button } from "@material-ui/core";

const Greetings = props => {
  return (
    <Section>
      <ul className="circles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
      <Stripes>
        <StripeNode
          style={{
            width: "25%",
            height: "20vh",
            opacity: "0.3",
            background: "#45B7E5"
          }}
        />
        <StripeNode
          style={{
            left: "25%",
            width: "20%",
            height: "20vh",
            opacity: "0.1",
            background: "#05D5FF"
          }}
        />
        <StripeNode
          style={{
            left: "45%",
            width: "15%",
            height: "20vh",
            opacity: "0.1",
            background: "#575D90"
          }}
        />
        <StripeNode
          style={{
            bottom: "0",
            right: "0",
            width: "15%",
            height: "20vh",
            opacity: "0.4",
            background: "#C1F0DA"
          }}
        />
        <StripeNode
          style={{
            bottom: "0",
            left: "0",
            width: "15%",
            height: "20vh",
            opacity: "0.4",
            background: "#C1F0DA"
          }}
        />
      </Stripes>
      <Content>
        <Text>
          <Heading>La mejor manera de comprar carros para tu dealer</Heading>
          <TextBody style={{ marginTop: "30px" }}>
            PierpontGlobal es una plataforma que permite a los dealers de
            República Dominicana participar en las subastas organizadas por
            Manheim.
          </TextBody>

          <div>
            <AccentButton style={{ margin: "20px 20px 10px 0" }}>
              Create account
            </AccentButton>
            <LightButton style={{ margin: "20px 20px 10px 0" }}>
              Contact sales
            </LightButton>
          </div>
        </Text>
      </Content>
    </Section>
  );
};

export default Greetings;
