import React, { useEffect, useState } from "react";
import {
  Bar,
  Logo,
  ItemsContainer,
  BasicChangeableButton,
  UsefulLinks
} from "./AppNav.styles";
import { Link } from "react-router-dom";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import { Popover } from "@material-ui/core";

const AppNav = props => {
  const [color, setColor] = useState("transparent");
  const [logo, setLogo] = useState("/logos/light.png");
  const [textColor, setTextColor] = useState("white");
  const [menuReference, setMenuReference] = useState(React.createRef());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setColor(window.pageYOffset > 32 ? props.color : color);
      setLogo(window.pageYOffset > 32 ? "/logos/dark.png" : logo);
      setTextColor(window.pageYOffset > 32 ? "#3A3E43" : textColor);
    });
  }, []);

  const menuContent = (
    <>
      <Link to="/support">
        <BasicChangeableButton textColor={"#3A3E43"}>
          Support
        </BasicChangeableButton>
      </Link>
      <a href="https://app.pierpontglobal.com">
        <BasicChangeableButton textColor={"#3A3E43"}>
          Sign in <i className="material-icons">arrow_forward</i>
        </BasicChangeableButton>
      </a>
    </>
  );

  const usefulLinksDesktop = (
    <>
      <Link to="/support">
        <BasicChangeableButton textColor={textColor}>
          Support
        </BasicChangeableButton>
      </Link>
      <a href="https://app.pierpontglobal.com">
        <BasicChangeableButton textColor={textColor}>
          Sign in <i className="material-icons">arrow_forward</i>
        </BasicChangeableButton>
      </a>
    </>
  );

  const usefulLinksMobile = (
    <>
      <BasicChangeableButton
        textColor={textColor}
        buttonRef={node => setMenuReference(node)}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <i className="material-icons">dehaze</i>
      </BasicChangeableButton>
      <Popover
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        anchorEl={menuReference}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        {menuContent}
      </Popover>
    </>
  );

  const mobileView = useMediaQuery("(max-width:768px)");
  const usefulLinksContent = mobileView
    ? usefulLinksMobile
    : usefulLinksDesktop;

  return (
    <Bar background={color}>
      <ItemsContainer>
        <Logo src={logo} />
        <UsefulLinks>{usefulLinksContent}</UsefulLinks>
      </ItemsContainer>
    </Bar>
  );
};

export default AppNav;
