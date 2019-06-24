import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

const Wrapper = styled.div`
width: 100%;
height: 500px;
margin-top: 200px;
display: flex;
align-content: center;
align-items: center;
flex-direction: column;
overflow: hidden;
position: relative;
`;

const TextHolder = styled.div`
font-weight: 200;
font-size: 14px;
  font-style: italic;

@media only screen and (max-width: 425) {
    font-size: 3px;
  }
`;

const List = styled.ul`
width: 40%;
max-width: 576px;

@media only screen and (max-width: 1024px) {
    width: 60%
  }
  @media only screen and (max-width: 768px) {
    width: 80%
  }
`;

const Degrade = styled.div`
position: absolute;
bottom: -10px;
left: 0;
width: 100%;
height: 200px;
background-image: url(/images/degrade.svg);
background-position: bottom;
background-repeat: no-repeat;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 60px;

  & > span {
    font-size: 2.8rem;
    font-weight: 200;
  }
`;

const TestimonyAnimated = posed.li({});

const Testimony = styled(TestimonyAnimated)`
  background: white;
  margin-bottom: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 100%;
  align-content: center;
  align-items: center;
  height: 100px;
  border-radius: 8px;
  box-shadow: 0px 0px 16px 2px rgba(39,105,235,0.1);
`;

function rollDown(array) {
  var tempSection = array[array.length - 1]
  for (var i = 0; i < array.length; i++) {
    const currentSection = array[i];
    array[i] = tempSection;
    tempSection = currentSection;
  }
  return array;
}


export default function Testimonials() {
  const [position, setPosition] = useState(3);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      show: true,
      name: 'Carlos de la Paz',
      role: 'Car dealership owner',
      picture: '/images/smaple-user-1.png',
      message: 'I like the fact that in PPG I can buy directly without the need for other intermediaries, from start to finish the process was done in the same platform.',
    },
    {
      id: 2,
      show: true,
      name: 'Pedro Almonte',
      role: 'Car dealership owner',
      picture: '/images/sample-user-2.jpg',
      message: 'Customer service was great. People were very friendly and helpful. They were quick to have my car at the port. I would recommend Pierpont Global.',
    },
    {
      id: 3,
      show: false,
      name: 'Marcos Berroa',
      role: 'Car dealership owner',
      picture: '/images/sample-user-4.jpg',
      message: 'The process was nice and easy from start to finish, I had a great customer service. I would recommend Pierpont Global to everyone looking for cars.',
    }]);

  useEffect(() => {
    setInterval(() => {
      const newArray = rollDown(testimonials);
      setPosition(position => position + 1)
      setTestimonials(newArray);
    }, 10000)
  }, [])

  return <Wrapper>

    <Title>
      <span>
        What our clients say...
          </span>
    </Title>

    <List style={{
      listStyle: 'none'
    }}>
      <PoseGroup>
        {testimonials.map(item => <Testimony key={item.id}>
          <img src={item.picture} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
          <TextHolder>"{item.message}" — <span style={{ fontWeight: 700 }}>{item.name}</span> ({item.role})</TextHolder>
        </Testimony>)}
      </PoseGroup>
    </List>
    <Degrade src="/images/degrade.svg"></Degrade>
  </Wrapper>;
}
