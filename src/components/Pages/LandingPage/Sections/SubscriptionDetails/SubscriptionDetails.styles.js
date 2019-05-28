import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  height: 100%;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainBox = styled.div`
  width: 50%;
  max-width: 500px;
  background: white;
  color: black;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 5px 5px 5px 5px;
  @media only screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const Title = styled.div`
  text-align: center;
  padding: 32px;
  color: ${props => props.color};
  border-bottom: solid 2px ${props => props.color}10;
  font-size: 16px;
  font-weight: 400;
`;

export const SecondaryBox = styled.div`
  width: 40%;
  max-width: 450px;
  background-image: linear-gradient(to bottom right, #14313d, #173753);
  color: white;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  border-radius: 0 5px 5px 0;
  @media only screen and (max-width: 768px) {
    width: 75%;
    border-radius: 0 0 5px 5px;
  }
`;

export const TextH1 = styled.div`
  font-size: 24px;
  font-weight: 200;
  text-align: center;
  padding: 32px;
`;

export const Currency = styled.div`
  font-size: 16px;
  height: 100%;
  align-self: flex-start;
  line-height: 2.3;
  width: 0;
  position: relative;
  ::before {
    content: "US$";
    position: absolute;
    right: 100%;
  }
`;

export const TextAccent = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 200;
  text-align: center;
  padding: 8px;
`;

export const Money = styled.div`
  position: relative;
  ::before {
    content: "00";
    position: absolute;
    left: 105%;
    top: 8px;
    font-size: 16px;
  }
  ::after {
    content: "/yr";
    position: absolute;
    left: 105%;
    bottom: 8px;
    font-size: 16px;
  }
`;

export const SubtitleText = styled.div`
  padding: 0 48px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  font-style: italic;
  color: ${props => props.color || "gray"};
`;

export const Features = styled.div`
  display: grid;
  padding: 48px 24px;
  grid-template-columns: 32px auto;
  grid-template-rows: auto auto auto;
  grid-row-gap: 24px;
  i {
    color: #777777;
  }
`;

export const BoxButton = styled.div`
  font-size: 16px !important;
  font-weight: 400;
  text-align: center;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  i {
    font-size: 16px !important;
    line-height: 2;
  }
`;

export const SubtleText = styled.div`
  padding: 0;
  font-weight: 200;
  font-size: 16px;
  color: #777777;
  line-height: 1.5;
`;

export const FeaturesBox = styled.div`
  width: 80%;
  height: 200px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  text-align: center;
  align-self: center;
  justify-self: center;
  margin: 24px 0;
  * {
    display: flex;
    align-self: center;
    justify-self: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: center;
    width: 100%;
    height: 100%;
    text-align: center;
    align-self: center;
    justify-self: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
`;

export const BoxButtonDark = styled.div`
  font-size: 16px !important;
  font-weight: 400;
  text-align: center;
  padding: 32px;
  background-color: #2c4962;
  cursor: pointer;
  i {
    font-size: 16px !important;
    line-height: 2;
  }
`;
