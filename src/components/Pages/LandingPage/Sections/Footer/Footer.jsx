/* eslint-disable require-jsdoc */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 148px;
  position: relative;
  background: transparent;
  z-index: 200;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  background: radial-gradient(farthest-corner at 40px 40px, #2769eb 15%, #62fbfc 100%);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.9;
`;

const UpFooterStyle = styled.img`
  position: relative;
  top: -12px;
  left: -132px;
  width: 140%;
  height: auto;
  padding: 0px;
  margin: 0px;
`;

const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 300;
`;

const FooterSections = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 64px;
  justify-content: center;
  align-items: flex-start;
  padding-top: 16px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  width: 19vw;
  height: 100%;
  box-sizing: border-box;
  padding-top: 64px;
  margin-right: 32px;

  @media only screen and (max-width: 768px) {
    width: 100vw;
    padding: 16px;
  }
`;

const LogoSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoreLinksSection = styled(Section)`
  display: flex;
  flex-direction: column;

  /* Due to our development need, I'll just hide this on mobile. The correct form is to toggle its content. */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const InformationSection = styled(Section)`
  display: flex;
  flex-direction: column;
  
  /* Due to our development need, I'll just hide this on mobile. The correct form is to toggle its content. */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const KeepInTouchSection = styled(Section)`
  display: flex;
  flex-direction: column;

  /* Due to our development need, I'll just hide this on mobile. The correct form is to toggle its content. */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const AboutCompnaySection = styled(Section)`
  display: flex;
  flex-direction: column;

  /* Due to our development need, I'll just hide this on mobile. The correct form is to toggle its content. */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const LogoWrapper = styled.img`
  width: 320px;
  height: auto;
  background-size: cover;
`;

const SectionTitle = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 16px;
  & > span {
    font-weight: 600;
  }
  &::before {
    content: '';
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #7bdff2;

    transform: rotate(33deg);
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const SectionLinks = styled.ul`
  width: 100%;
  height: auto;
  list-style: none;
  margin-top: 32px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    height: 0px;
  }
`;

const SectionLink = styled.li`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  & > span {
    color: rgb(0, 0, 0, 0.60);
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      text-decoration: underline;
      color: rgb(0, 0, 0, 0.95);
    }
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`;

const SocialLink = styled.div`
  margin: 8px;
  &:hover {
    cursor: pointer;
    & > svg {
    color: rgb(0, 0, 0, .95);
    }
  }
  & > svg {
    font-size: 1.4rem;
    color: rgb(0, 0, 0, .60);
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  height: 54px;
  box-shadow: 0px -4px 8px 0px rgb(0, 0, 0, 0.02);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 300;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 16px;
  }
`;

const FooterBottomBox = styled.div`
  width: 33%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const RighstReserved = styled(FooterBottomBox)`
  & > span {
    color: rgb(0, 0, 0, 0.60);
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionButtons = styled(FooterBottomBox)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrivacyLinks = styled(FooterBottomBox)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrivacyLink = styled.div`
  margin: 8px;
  &:hover {
    & > span {
      text-decoration: underline;
    }
  }
  & > span { 
    cursor: pointer;
    color: rgb(0, 0, 0, 0.60);
    transition: all 0.4s;
  }
`;

const ActionButton = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 32px 8px rgb(0, 0, 0, 0.1);
  padding: 16px 24px;
  margin-top: -54px;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    & > span {
      color: rgb(39, 105, 235, 1);
    }
    box-shadow: 0px 4px 32px 12px rgb(0, 0, 0, 0.17);
  }
  & > span {
    color: rgb(39, 105, 235, 0.60);
    font-weight: 600;
    transition: all 0.4s;
  }

  @media only screen and (max-width: 768px) {
    margin-top: -140px;
  }
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper id="footer">
        <Background />
        {/* <UpFooterStyle src="/images/up-footer-style.svg" /> */}
        <FooterContent>
          <FooterSections>
            <LogoSection>
              <LogoWrapper src="/logos/light.png" />
              <SocialLinks>
                <SocialLink onClick={() => window.location.href = 'https://www.facebook.com/Pierpont-Global-1900340546940761/' }>
                  <i class="fab fa-facebook"></i>
                </SocialLink>
                <SocialLink onClick={() => window.location.href = 'https://www.instagram.com/pierpontglobalrd/' }>
                  <i class="fab fa-instagram"></i>
                </SocialLink>
                <SocialLink onClick={() => window.location = 'mailto:support@pierpontglobal.com' }>
                  <i class="fas fa-envelope"></i>
                </SocialLink>
                <SocialLink onClick={() => window.location.href = 'https://github.com/pierpontglobal' }>
                  <i class="fab fa-github"></i>
                </SocialLink>
              </SocialLinks>
            </LogoSection>
            {/* <CoreLinksSection>
              <SectionTitle>
                <span>
                  Core Link
                </span>
              </SectionTitle>
              <SectionLinks>
                <SectionLink>
                  <span>Team Memeber</span>
                </SectionLink>
                <SectionLink>
                  <span>Pricing Plan</span>
                </SectionLink>
                <SectionLink>
                  <span>About Company</span>
                </SectionLink>
              </SectionLinks>
            </CoreLinksSection>
            <InformationSection>
              <SectionTitle>
                <span>
                  Information
                </span>
              </SectionTitle>
              <SectionLinks>
                <SectionLink>
                  <span>Team Memeber</span>
                </SectionLink>
                <SectionLink>
                  <span>Pricing Plan</span>
                </SectionLink>
                <SectionLink>
                  <span>About Company</span>
                </SectionLink>
              </SectionLinks>
            </InformationSection>
            <KeepInTouchSection>
              <SectionTitle>
                <span>
                  Stay in Loop
                </span>
              </SectionTitle>
              <SectionLinks>
                <SectionLink>
                  <span>Team Memeber</span>
                </SectionLink>
                <SectionLink>
                  <span>Pricing Plan</span>
                </SectionLink>
                <SectionLink>
                  <span>About Company</span>
                </SectionLink>
              </SectionLinks>
            </KeepInTouchSection>
            <AboutCompnaySection>
              <SectionTitle>
                <span>
                  About company
                </span>
              </SectionTitle>
              <SectionLinks>
                <SectionLink>
                  <span>Team Memeber</span>
                </SectionLink>
                <SectionLink>
                  <span>Pricing Plan</span>
                </SectionLink>
                <SectionLink>
                  <span>About Company</span>
                </SectionLink>
              </SectionLinks>
            </AboutCompnaySection> */}
          </FooterSections>
          
          <FooterBottom>
            <RighstReserved>
              <span>&copy; 2019 ALL RIGHTS RESEVED</span>
            </RighstReserved>
            <ActionButtons>
              <ActionButton>
                <span>PWA</span>
              </ActionButton>
              <ActionButton>
                <span>FAST & SECURE</span>
              </ActionButton>
            </ActionButtons>
            <PrivacyLinks>
              <PrivacyLink>
                <span>CONTACT</span>
              </PrivacyLink>
              <PrivacyLink>
                <span>PRIVACY</span>
              </PrivacyLink>
            </PrivacyLinks>
          </FooterBottom>
        </FooterContent>
      </Wrapper>
    );
  }
}

export default Footer;
