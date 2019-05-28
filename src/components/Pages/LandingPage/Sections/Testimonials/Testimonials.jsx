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

  @media only screen and (max-width: 1104px) and (min-width: 960px) {
    width: 85%
  }

  @media only screen and (max-width: 960px) and (min-width: 768px) {
    width: 95%
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
  margin-top: 32px;
  margin-bottom: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.div`
  margin: 8px;
  width: 60px;
  height: 6px;
  background-color: ${props => props.active ? '#7bdff2' : 'rgb(0, 0, 0, 0.4)'};
  cursor: pointer;
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

class Testimonials extends React.Component {
  state = {
    testimonials: [
      {
        id: 1,
        show: true,
        name: 'Jhon Doe',
        role: 'Car dealership owner',
        picture: '/images/smaple-user-1.png',
        message: 'Maecenas laoreet erat eros, vitae tempor augue pretium at. Proin nec luctus elit. Nunc sagittis nec mauris laoreet vehicula. Phasellus sodales nunc vel nisi ullamcorper feugiat. Etiam dictum neque vitae sem vulputate cursus.',
      },
      {
        id: 2,
        show: true,
        name: 'Pedro Almonte',
        role: 'Car dealership owner',
        picture: '/images/sample-user-2.jpg',
        message: 'Maecenas laoreet erat eros, vitae tempor augue pretium at. Proin nec luctus elit. Nunc sagittis nec mauris laoreet vehicula. Phasellus sodales nunc vel nisi ullamcorper feugiat. Etiam dictum neque vitae sem vulputate cursus.',
      },
      {
        id: 3,
        show: false,
        name: 'Marcos Berroa',
        role: 'Car dealership owner',
        picture: '/images/sample-user-3.jpeg',
        message: 'Maecenas laoreet erat eros, vitae tempor augue pretium at. Proin nec luctus elit. Nunc sagittis nec mauris laoreet vehicula. Phasellus sodales nunc vel nisi ullamcorper feugiat. Etiam dictum neque vitae sem vulputate cursus.',
      },
      {
        id: 4,
        show: false,
        name: 'Jose y Carlos Santana',
        role: 'Car dealership owner',
        picture: '/images/sample-user-4.jpg',
        message: 'Maecenas laoreet erat eros, vitae tempor augue pretium at. Proin nec luctus elit. Nunc sagittis nec mauris laoreet vehicula. Phasellus sodales nunc vel nisi ullamcorper feugiat. Etiam dictum neque vitae sem vulputate cursus.',
      },
    ],
  }

  nextTestimonials = (canExecute, indicatorIndex) => {
    if (canExecute) {
      console.log('Can execute!');
      let testimonials = [...this.state.testimonials];

      // Reset
      testimonials.forEach(t => {
        t.show = false;
      });

      // Calculate next group
      let nextGroup = indicatorIndex * 2;

      console.log('nextGroup >>>');
      console.log(nextGroup, testimonials);

      testimonials[nextGroup - 1].show = true;
      testimonials[nextGroup - 2].show = true;

      // Update testimonials
      this.setState({
        testimonials
      });
    }
  }

  render() {
    const { testimonials } = this.state;

    const howManyIndicators = Math.floor(testimonials.length / 2);

    console.log('Indicators COUNT >>> ');
    console.log(howManyIndicators);
    
    let indicators = [];
    for(let i = 0; i < howManyIndicators; i++) {
      const testimonial = testimonials[i + 1] || undefined;
  
      if (!!testimonial) {
        indicators[i] = {
          active: false,
        }; 
        if (testimonial.show) {
          indicators[i].active = true;
        }
      }
    }

    console.log('Indicators >>> ');
    console.log(indicators);

    return (
      <Wrapper>
        <SectionTitle>
          <span>
            What our clients say...
          </span>
        </SectionTitle>
        <Cards>
          {
            testimonials.map((t) => {
              if (t.show) {
                return (<Card key={ t.id } id={ t.id }>
                          <CardHeader>
                            <UserPhoto src={ t.picture } />
                            <UserName id={ t.id }>
                              <span>{ t.name }</span>
                            </UserName>
                            <UserRole id={ t.id }>
                              <span>{ t.role }</span>
                            </UserRole>
                          </CardHeader>
                          <CardBody id={t.id}>
                            <span>
                              { t.message }
                            </span>
                          </CardBody>
                        </Card>
                      );
              } else {
                return null;
              }
            })
          }
        </Cards>
        <CardsIndicator>
          {
            indicators.map((indicator, index) => (
              <Indicator active={ indicator.active } onClick={() => this.nextTestimonials( !indicator.active, index + 1 )} />
            )
          )}
        </CardsIndicator>
      </Wrapper>
    );
  }
};

export default Testimonials;
