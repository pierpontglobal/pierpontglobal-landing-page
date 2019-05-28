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
  background: radial-gradient(farthest-corner at 40px 40px, #7bdff2 15%, #7358ff 100%);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.2;
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
`;

const Section = styled.div`
  width: 19vw;
  height: 100%;
  box-sizing: border-box;
  padding-top: 64px;
  margin-right: 32px;
`;

const LogoSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoreLinksSection = styled(Section)`
  display: flex;
  flex-direction: column;
`;

const InformationSection = styled(Section)`
  display: flex;
  flex-direction: column;
`;

const KeepInTouchSection = styled(Section)`
  display: flex;
  flex-direction: column;
`;

const AboutCompnaySection = styled(Section)`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.img`
  width: 220px;
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
`;

const SectionLinks = styled.ul`
  width: 100%;
  height: auto;
  list-style: none;
  margin-top: 32px;
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
`;

const FooterBottomBox = styled.div`
  width: 33%;
  height: 100%;
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
      color: rgb(115, 88, 255, 1);
    }
    box-shadow: 0px 4px 32px 12px rgb(0, 0, 0, 0.17);
  }
  & > span {
    color: rgb(115, 88, 255, 0.60);
    font-weight: 600;
    transition: all 0.4s;
  }
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Background />
        {/* <UpFooterStyle src="/images/up-footer-style.svg" /> */}
        <FooterContent>
          <FooterSections>
            <LogoSection>
              <LogoWrapper src="/logos/dark.png" />
              <SocialLinks>
                <SocialLink>
                  <i class="fab fa-facebook"></i>
                </SocialLink>
                <SocialLink>
                  <i class="fab fa-instagram"></i>
                </SocialLink>
                <SocialLink>
                  <i class="fas fa-envelope"></i>
                </SocialLink>
                <SocialLink>
                  <i class="fab fa-github"></i>
                </SocialLink>
              </SocialLinks>
            </LogoSection>
            <CoreLinksSection>
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
            </AboutCompnaySection>
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