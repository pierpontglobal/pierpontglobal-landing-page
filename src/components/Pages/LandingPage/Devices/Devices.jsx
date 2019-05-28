import React from "react";
import { DeviceHolder } from "./Devices.styles";

import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import DeviceLayout from "../Sections/Greetings/Components/DeviceLayout/DeviceLayout";

const Devices = props => {
  const deviceHolder = (
    <DeviceHolder>
      <DeviceLayout
        style={{ justifySelf: "end", alignSelf: "end" }}
        scale={1}
        src="/images/TabletView.svg"
        type={"tablet"}
      />
      {/* <DeviceLayout
        style={{ justifySelf: "start", alignSelf: "end" }}
        scale={1}
        src="/images/PhoneView.svg"
        type={"phone"}
      /> */}
      <DeviceLayout
        style={{ justifySelf: "end", alignSelf: "start" }}
        scale={0.8}
        src="/images/PhoneView2.svg"
        type={"phone"}
      />
      {/* <DeviceLayout
        style={{ justifySelf: "start", alignSelf: "start" }}
        scale={1.3}
        src="/images/TabletView.svg"
        type={"tablet"}
      /> */}
    </DeviceHolder>
  );

  const mobileView = useMediaQuery("(max-width:768px)");

  return mobileView ? <></> : deviceHolder;
};

export default Devices;
