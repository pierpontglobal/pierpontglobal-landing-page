import React from "react";
import Greetings from "./Sections/Greetings/Greetings";
import WhatWeDo from "./Sections/WhatWeDo/WhatWeDo";
import Devices from "./Devices/Devices";
// import { Test } from "./LandingPage.styles";

const LandingPage = props => (
  <div
    className="LandingPageWrapper"
    style={{ overflow: "hidden", position: "relative" }}
  >
    <Greetings />
    <WhatWeDo />
    <Devices />
  </div>
);

export default LandingPage;
