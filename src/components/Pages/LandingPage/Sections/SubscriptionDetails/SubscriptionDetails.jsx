import React from 'react';
import {Section} from '../../LandingPage.styles';
import {
  Wrapper,
  MainBox,
  SecondaryBox,
  Title,
  TextH1,
  TextAccent,
  Currency,
  Money,
  SubtitleText,
  Features,
  SubtleText,
  BoxButton,
  BoxButtonDark,
  FeaturesBox,
  SectionTitle,
} from './SubscriptionDetails.styles';
// import { Test } from './SubscriptionDetails.styles';

const SubscriptionDetails = (props) => {
  return (
    <Section style={{height: 'auto'}}>
      <SectionTitle>
        <span>
          Simple and transparent pricing
        </span>
      </SectionTitle>
      <Wrapper>
        <MainBox>
          <Title color="#173753">PPG USA ACCESS</Title>
          <TextH1>
            Access a platform with thousand of cars and participate on Manheim
            auctions
          </TextH1>
          <TextAccent>
            <Currency />
            <Money>495</Money>
          </TextAccent>
          <SubtitleText>+ 300.00 US$ per car you order</SubtitleText>
          <Features>
            <i className="material-icons">directions_car</i>
            <SubtleText>Get your inventory from the best place</SubtleText>
            <i className="material-icons">attach_money</i>
            <SubtleText>
              Get the best deals at the moment of transporting your vehicle
            </SubtleText>
            <i className="material-icons">trending_up</i>
            <SubtleText>Grow your business with us</SubtleText>
          </Features>
          <BoxButton>
            SUBSCRIBE TODAY <i className="material-icons">arrow_forward</i>
          </BoxButton>
        </MainBox>
        <SecondaryBox>
          <Title color="#ffffff">AMAZING FEATURES</Title>
          <TextH1>
            Gain advantages from the features our platform can offer
          </TextH1>
          <SubtitleText color={'rgba(255, 255, 255, 0.5)'}>
            Easy, quick and comfortable to use. Take your dealer to the next
            level a stand out from the competition.
          </SubtitleText>

          <FeaturesBox>
            <div>Big inventory</div>
            <div>Whole prices</div>
            <div>Post-Sale Inspections</div>
            <div>Autocheck</div>
          </FeaturesBox>

          <BoxButtonDark>
            CONTACT SUPPORT <i className="material-icons">arrow_forward</i>
          </BoxButtonDark>
        </SecondaryBox>
      </Wrapper>
    </Section>
  );
};

export default SubscriptionDetails;
