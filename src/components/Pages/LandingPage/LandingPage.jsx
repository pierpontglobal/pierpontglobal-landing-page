import React from "react";
import Greetings from "./Sections/Greetings/Greetings";
import WhatWeDo from "./Sections/WhatWeDo/WhatWeDo";
import Devices from "./Devices/Devices";
import SearchListing from "./Sections/SearchListing/SearchListing";

import { 
  Sections,
  SectionsTitle,
  SectionsContent,
  Title,
  Message,
  Gif,
  TitleMessage,
} from "./LandingPage.styles";

const LandingPage = props => (
  <div
    className="LandingPageWrapper"
    style={{ overflow: "hidden", position: "relative" }}
  >
    <Greetings />
    <Devices />
    <SearchListing />
  </div>
);

export default LandingPage;
