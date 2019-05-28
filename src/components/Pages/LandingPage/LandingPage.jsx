import React from 'react';
import Greetings from './Sections/Greetings/Greetings';
import WhatWeDo from './Sections/WhatWeDo/WhatWeDo';
import Devices from './Devices/Devices';
import MainSections from './Sections/MainSections/MainSections';
import Footer from './Sections/Footer/Footer';
import Brands from './Sections/Brands/Brands';
import styled from 'styled-components';
import SubscriptionDetails from './Sections/SubscriptionDetails/SubscriptionDetails';

const BrandsWrapper = styled.div`
  width: 50%;
  height: auto;
  margin-top: 302px;
  margin-bottom: 102px;
  margin-left: auto;
  margin-right: auto;
`;

const LandingPage = (props) => (
  <div
    className="LandingPageWrapper"
    style={{overflow: 'hidden', position: 'relative'}}
  >
    <Greetings />
    <Devices />
    <MainSections />
    <BrandsWrapper>
      <Brands />
    </BrandsWrapper>
    <SubscriptionDetails />
    <Footer />
  </div>
);

export default LandingPage;
