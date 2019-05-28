import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SectionTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 64px;
  & > span {
    font-size: 2.5rem;
    font-weight: 200;
    color: rgb(0, 0, 0, 0.75);
  }
  
  @media only screen and (max-width: 768px) {
    & > span {
      font-size: 1.8rem;
    }
    margin-bottom: 24px;
  }
`;

const Cards = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 16px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  } 
`;

const Card = styled.div`
  box-shadow: 0px 0px 8px 0px rgb(0, 0, 0, 0.1);
  height: 50vh;
  width: 50vh;
  display: grid;
  grid-template-rows: 45% 55%;
  box-sizing: border-box;
  background: ${props => (props.id % 2 !== 0) ? 'radial-gradient(farthest-corner at 40px 40px, #7358ff 15%, #7bdff2 100%)' : ''};
  margin: 8px;

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

const CardHeader = styled.div`
  width: 65%;
  height: 100%;
  padding: 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const CardBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 32px;
  box-sizing: border-box;
  text-align: justify;
  overflow: hidden;
  & > span {
    color: ${props => (props.id % 2 !== 0) ? 'white' : 'rgb(0, 0, 0, 0.6)'};
    line-height: 28px;
    ::after {
      content: '"';
    }
    ::before {
      content: '"';
    }
  }
`;

const CardsIndicator = styled.div`
  margin-top: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.div`
  margin: 8px;
  width: 60px;
  height: 6px;
  background-color: ${props => props.active ? '#7bdff2' : 'rgb(0, 0, 0, 0.4)'};
`;

const UserPhoto = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  box-shadow: 0px 0px 8px 0px rgb(0, 0, 0, 0.15);
`;

const UserName = styled.div`
  padding: 8px;
  & > span {
    font-weight: 400;
    color: ${props => (props.id % 2 !== 0) ? 'white' : 'black'};
    text-shadow: ${props => (props.id % 2 !== 0) ? '0px 0px 4px rgb(0,0,0,0.3)' : ''};
  }
`;

const UserRole = styled.div`
  padding: 8px;
  & > span {
    font-weight: 100;
    color: ${props => (props.id % 2 !== 0) ? 'white' : 'black'};
    text-shadow: ${props => (props.id % 2 !== 0) ? '0px 0px 4px rgb(0,0,0,0.3)' : ''};
  }
`;

const Testimonials = (props) => {
  return (
    <Wrapper>
      <SectionTitle>
        <span>
          What our clients say...
        </span>
      </SectionTitle>
      <Cards>
        <Card id={1}>
          <CardHeader>
            <UserPhoto src="/images/smaple-user-1.png" />
            <UserName id={1}>
              <span>Jhon Doe</span>
            </UserName>
            <UserRole id={1}>
              <span>Car dealership owner</span>
            </UserRole>
          </CardHeader>
          <CardBody id={1}>
            <span>
              Maecenas laoreet erat eros, vitae tempor augue pretium at. Proin nec luctus elit. Nunc sagittis nec mauris laoreet vehicula. Phasellus sodales nunc vel nisi ullamcorper feugiat. Etiam dictum neque vitae sem vulputate cursus.
            </span>
          </CardBody>
        </Card>
        <Card id={2}>
          <CardHeader>
            <UserPhoto src="/images/sample-user-2.jpg" />
            <UserName id={2}>
              <span>Luis Almonte</span>
            </UserName>
            <UserRole id={2}>
              <span>Car dealership owner</span>
            </UserRole>
          </CardHeader>
          <CardBody id={2}>
            <span>
              Maecenas laoreet erat eros, vitae tempor augue pretium at. Proin nec luctus elit. Nunc sagittis nec mauris laoreet vehicula. Phasellus sodales nunc vel nisi ullamcorper feugiat. Etiam dictum neque vitae sem vulputate cursus.
            </span>
          </CardBody>
        </Card>
      </Cards>
      <CardsIndicator>
        <Indicator active={true} />
        <Indicator active={false} />
        <Indicator active={false} />
      </CardsIndicator>
    </Wrapper>
  );
};

export default Testimonials;
