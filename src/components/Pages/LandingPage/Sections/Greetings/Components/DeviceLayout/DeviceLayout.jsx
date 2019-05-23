import React from 'react';
import {Frame, DeviceIllustration} from './DeviceLayout.styles';

const DeviceLayout = (props) => {
  const scale = props.scale || 1;
  switch (props.type) {
    case 'tablet':
      return (
        <Frame
          style={props.style}
          dimensions={{x: 512 * scale, y: 352 * scale}}
        >
          <DeviceIllustration
            target="tablet"
            src="https://stripe.com/img/v3/home/app-illustrations/shopify.svg"
          />
        </Frame>
      );
    default:
      return (
        <Frame
          style={props.style}
          dimensions={{x: 267 * scale, y: 553 * scale}}
        >
          <DeviceIllustration
            target="phone"
            src="https://stripe.com/img/v3/home/app-illustrations/instacart.svg"
          />
        </Frame>
      );
  }
};

export default DeviceLayout;
