import React from 'react';
import { Stripes, StripeNode, Content, Text, WorldMap } from './Greetings.styles';
import {
  Section,
  Heading,
  TextBody,
  AccentButton,
  LightButton,
} from '../../LandingPage.styles';
import './Greetings.css';
import { Button } from '@material-ui/core';
import IframeModal from '../../../../IframeModal/IframeModal';
import styled from 'styled-components';

class Greetings extends React.Component {

  state = {
    showVideo: false,
    videoHeight: '80%',
    videoWidth: '80%',
    showOnlyVideoInModal: false,
  }

  componentDidMount = () => {
    this.resizeVideoModal();
    window.addEventListener('resize', () => {
      this.resizeVideoModal();
    });
  }

  resizeVideoModal = () => {
    const { showOnlyVideoInModal, videoHeight } = this.state;
    if (window.innerWidth <= 768) {
      if (window.innerWidth <= 480) {
        if (videoHeight !== '160px') {
          this.setState({
            videoHeight: '160px',
            videoWidth: '95%',
            showOnlyVideoInModal: true,
          });
        }
      }
    } else {
      if (showOnlyVideoInModal) {
        this.setState({
          videoHeight: '80%',
          videoWidth: '80%',
          showOnlyVideoInModal: false,
        });
      }
    }
  }

  togglePromoVideo = (value) => {
    this.setState({
      showVideo: value,
    });
  }

  render() {
    const { showVideo, videoHeight, videoWidth, showOnlyVideoInModal } = this.state;
    return (
      <>
        <IframeModal open={showVideo} onlyChildren={showOnlyVideoInModal} src={'https://www.youtube.com/embed/XEcELW3hkuQ'} width={videoWidth} height={videoHeight} handleClose={() => this.togglePromoVideo(false)} />
        <Section>
          {/* <ul className="circles">
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
          </ul> */}
          <Stripes>
            {/* <StripeNode
              style={{
                width: '25%',
                height: '20vh',
                opacity: '0.3',
                background: '#62fbfc',
              }}
            /> */}
            {/* <StripeNode
              style={{
                left: '25%',
                width: '20%',
                height: '20vh',
                opacity: '0.1',
                background: '#37fbfb',
              }}
            /> */}
            {/* <StripeNode
              style={{
                left: '45%',
                width: '15%',
                height: '20vh',
                opacity: '0.1',
                background: '#1efafa',
              }}
            /> */}
            {/* <StripeNode
              style={{
                bottom: '0',
                right: '0',
                width: '15%',
                height: '20vh',
                opacity: '0.4',
                background: '#05fafa',
              }}
            /> */}
            {/* <StripeNode
              style={{
                bottom: '0',
                left: '0',
                width: '15%',
                height: '20vh',
                opacity: '0.4',
                background: '#05e1e1',
              }}
            /> */}
          </Stripes>
          <Content>
            <Text>
              <div style={{ zIndex: '200', position: 'absolute', top: '0', left: '0' }}>
                <Heading>Simplifying international wholesale vehicle purchases</Heading>
                <TextBody style={{ marginTop: '30px' }}>
                  Pierpont Global is a platform which provides licensed automotive dealers direct access to reputable US based auctions.
                </TextBody>

                <div>
                  <AccentButton style={{ margin: '20px 20px 10px 0' }}>
                    <span>
                      Create account
                    </span>
                  </AccentButton>
                  <LightButton style={{ margin: '20px 20px 10px 0' }} onClick={() => this.togglePromoVideo(true)}>
                    <span>
                      View promotion
                    </span>
                  </LightButton>
                </div>
              </div>
              <WorldMap type="image/svg+xml" data="/images/world-map-simple-colored.svg" />
            </Text>
          </Content>
        </Section>
      </>
    );
  }
};

export default Greetings;
