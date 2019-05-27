import React from "react";
import Greetings from "./Sections/Greetings/Greetings";
import WhatWeDo from "./Sections/WhatWeDo/WhatWeDo";
import Devices from "./Devices/Devices";
import MainSections from "./Sections/MainSections/MainSections";

const LandingPage = props => (
  <div
    className="LandingPageWrapper"
    style={{ overflow: "hidden", position: "relative" }}
  >
    <Greetings />
    <Devices />
    <MainSections />
  </div>
);


export default LandingPage;
