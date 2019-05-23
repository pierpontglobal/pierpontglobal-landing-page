import styled from "styled-components";

export const Frame = styled.div`
  width: ${props => props.dimensions.x}px;
  height: ${props => props.dimensions.y}px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 38px;
  background: #fff;
  -webkit-box-shadow: inset 0 4px 7px 1px #fff,
    inset 0 -5px 20px rgba(173, 186, 204, 0.25), 0 2px 6px rgba(0, 21, 64, 0.14),
    0 10px 20px rgba(0, 21, 64, 0.05);
  box-shadow: inset 0 4px 7px 1px #fff,
    inset 0 -5px 20px rgba(173, 186, 204, 0.25), 0 2px 6px rgba(0, 21, 64, 0.14),
    0 10px 20px rgba(0, 21, 64, 0.05);
  margin: 20px;
`;

export const DeviceIllustration = styled.img`
  height: ${props => (props.target === "phone" ? "auto" : "95%")};
  width: ${props => (props.target === "phone" ? "95%" : "auto")};
`;
