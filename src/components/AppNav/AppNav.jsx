import React, { useEffect, useState } from 'react';
import {
  Bar,
  Logo,
  LogoWrapper,
  ItemsContainer,
  BasicChangeableButton,
  UsefulLinks,
} from './AppNav.styles';
import { Link } from 'react-router-dom';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { Popover } from '@material-ui/core';

const AppNav = (props) => {
  const [color, setColor] = useState('transparent');
  const [logo, setLogo] = useState('/logos/light.svg');
  const [textColor, setTextColor] = useState('white');
  const [menuReference, setMenuReference] = useState(React.createRef());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setColor(window.pageYOffset > 32 ? props.color : color);
      setLogo(window.pageYOffset > 32 ? '/logos/dark.svg' : logo);
      setTextColor(window.pageYOffset > 32 ? '#3A3E43' : textColor);
    });
  }, []);

  const menuContent = (
    <>
      <a href="https://fe.ppg.hect.dev/support">
        <BasicChangeableButton textColor={'#3A3E43'}>
          Help
        </BasicChangeableButton>
      </a>
      <a href="https://fe.ppg.hect.dev/?signIn=true">
        <BasicChangeableButton textColor={'#3A3E43'}>
          Sign in <i className="material-icons">arrow_forward</i>
        </BasicChangeableButton>
      </a>
    </>
  );

  const usefulLinksDesktop = (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <a href="https://fe.ppg.hect.dev/support">
        <BasicChangeableButton textColor={textColor}>
          Help
      </BasicChangeableButton>
      </a>
      <a href="https://fe.ppg.hect.dev">
        <BasicChangeableButton textColor={textColor}>
          Sign in <i className="material-icons">arrow_forward</i>
        </BasicChangeableButton>
      </a>
    </div>
  );

  const usefulLinksMobile = (
    <>
      <BasicChangeableButton
        textColor={textColor}
        buttonRef={(node) => setMenuReference(node)}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <i className="material-icons">menu</i>
      </BasicChangeableButton>
      <Popover
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        anchorEl={menuReference}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {menuContent}
      </Popover>
    </>
  );

  const mobileView = useMediaQuery('(max-width:768px)');
  const usefulLinksContent = mobileView
    ? usefulLinksMobile
    : usefulLinksDesktop;

  return (
    <Bar background={color} id="navbar">
      <ItemsContainer>
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
        <UsefulLinks>{usefulLinksContent}</UsefulLinks>
      </ItemsContainer>
    </Bar>
  );
};

export default AppNav;
