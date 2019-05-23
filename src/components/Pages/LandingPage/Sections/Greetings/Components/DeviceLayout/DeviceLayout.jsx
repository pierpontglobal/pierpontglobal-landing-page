import React from 'react';
import {Frame, DeviceIllustration} from './DeviceLayout.styles';

const DeviceLayout = (props) => {
  const scale = props.scale || 1;
  const src = props.src;
  switch (props.type) {
    case 'tablet':
      return (
        <Frame
          style={props.style}
          dimensions={{x: 512 * scale, y: 352 * scale}}
        >
          <DeviceIllustration target="tablet" src={src} />
        </Frame>
      );
    default:
      return (
        <Frame
          style={props.style}
          dimensions={{x: 267 * scale, y: 553 * scale}}
        >
          <DeviceIllustration target="phone" src={src} />
        </Frame>
      );
  }
};

export default DeviceLayout;
