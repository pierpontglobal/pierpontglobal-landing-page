import React from 'react';
import {Stripes, StripeNode, Content, Text} from './Greetings.styles';
import {
  Section,
  Heading,
  TextBody,
  AccentButton,
  LightButton,
} from '../../LandingPage.styles';
import './Greetings.css';
import {Button} from '@material-ui/core';
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
      if ( showOnlyVideoInModal ) {
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
                width: '25%',
                height: '20vh',
                opacity: '0.3',
                background: '#45B7E5',
              }}
            />
            <StripeNode
              style={{
                left: '25%',
                width: '20%',
                height: '20vh',
                opacity: '0.1',
                background: '#05D5FF',
              }}
            />
            <StripeNode
              style={{
                left: '45%',
                width: '15%',
                height: '20vh',
                opacity: '0.1',
                background: '#575D90',
              }}
            />
            <StripeNode
              style={{
                bottom: '0',
                right: '0',
                width: '15%',
                height: '20vh',
                opacity: '0.4',
                background: '#C1F0DA',
              }}
            />
            <StripeNode
              style={{
                bottom: '0',
                left: '0',
                width: '15%',
                height: '20vh',
                opacity: '0.4',
                background: '#C1F0DA',
              }}
            />
          </Stripes>
          <Content>
            <Text>
              <Heading>La mejor manera de comprar carros para tu dealer</Heading>
              <TextBody style={{marginTop: '30px'}}>
                PierpontGlobal es una plataforma que permite a los dealers de
                República Dominicana participar en las subastas organizadas por
                Manheim.
              </TextBody>
    
              <div>
                <AccentButton style={{margin: '20px 20px 10px 0'}}>
                  Create account
                </AccentButton>
                <LightButton style={{margin: '20px 20px 10px 0'}} onClick={() => this.togglePromoVideo(true)}>
                  View promotion
                </LightButton>
              </div>
            </Text>
          </Content>
        </Section>
      </>
    );
  }
};

export default Greetings;
