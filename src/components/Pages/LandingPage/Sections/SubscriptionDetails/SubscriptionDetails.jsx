import React from 'react';
import { Section } from '../../LandingPage.styles';
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

class SubscriptionDetails extends React.Component {
  state = {
    revealSecondaryBox: false,
  }

  componentDidMount = () => {
    this.createObserver();
  }

  createObserver = () => {
    // Intersection observer (JavaScript)
    if (window.IntersectionObserver) {

      // To observer elements
      this.secondaryBox = document.querySelector('#main-box');

      // Observer configuration
      const options = {
        root: null, // document viewport as a trigger
        threshold: 0.30, // Execute callback on 30% of reveal
      };

      // Observer callback
      this.observer = new IntersectionObserver((entry) => {


        if (entry[0].isIntersecting) {
          if (entry[0].target.id === 'main-box') {
            this.setState({
              revealSecondaryBox: true
            }, () => {
              this.observer.unobserve(this.secondaryBox);
            })
          }
        }
      }, options);

      // Initialize observer on elements
      this.observer.observe(this.secondaryBox);
    }
  }
  render() {
    const { revealSecondaryBox } = this.state;
    return (
      <Section style={{ height: '100vh' }}>
        <SectionTitle>
          <span>
            Simple and transparent pricing
          </span>
        </SectionTitle>
        <Wrapper>
          <MainBox id="main-box">
            <Title color="#173753">PPG USA ACCESS</Title>
            <TextH1>
              Dealer-only access to hundreds of reputable auction locations.
            </TextH1>
            <TextAccent>
              <Currency />
              <Money>495</Money>
            </TextAccent>
            <SubtitleText>+ $ 1,295.00 USD annual membership fee</SubtitleText>
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
              BECOME A MEMBER <i className="material-icons">arrow_forward</i>
            </BoxButton>
          </MainBox>
          {
            !revealSecondaryBox ? null : (
              <SecondaryBox id="secondary-box">
                <Title color="#ffffff">AMAZING FEATURES</Title>
                <TextH1>
                  Take advantage of the befits that our platform offers.
                </TextH1>
                <SubtitleText color={'rgba(255, 255, 255, 0.5)'}>
                  Easy, quick and comfortable to use. Take your dealer to the next
                  level a stand out from the competition.
                </SubtitleText>

                <FeaturesBox>
                  <div>Large inventory selection</div>
                  <div>Wholesale prices</div>
                  <div>Post-Sale Inspections</div>
                  <div>Autocheck</div>
                </FeaturesBox>

                <BoxButtonDark>
                  CONTACT SUPPORT <i className="material-icons">arrow_forward</i>
                </BoxButtonDark>
              </SecondaryBox>
            )
          }
        </Wrapper>
      </Section>
    );
  }
};

export default SubscriptionDetails;
