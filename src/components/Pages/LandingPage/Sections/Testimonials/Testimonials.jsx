import React from 'react';
import styled from 'styled-components';
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";

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
    font-size: 2.8rem;
    font-weight: 200;
    color: rgb(0, 0, 0, 1);
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
  justify-content: center;
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
  background: ${props => (props.cardId % 2 !== 0) ? 'radial-gradient(farthest-corner at 40px 40px, rgba(39, 105, 235, 0.7) 15%, rgba(98, 251, 252, 0.8) 100%)' : ''};
  margin: 8px;

  @keyframes remove-card {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.03;
    }
    100% {
      opacity: 0;
      transform: rotateY(180deg);
    }
  }

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

const CardHeader = styled.div`
  width: 100%;
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
    color: ${props => (props.cardId % 2 !== 0) ? 'white' : 'rgb(0, 0, 0, 0.6)'};
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 0px 8px 0px rgb(0, 0, 0, 0.08);
`;

const UserName = styled.div`
  padding: 8px;
  & > span {
    font-weight: 400;
    color: ${props => (props.cardId % 2 !== 0) ? 'white' : 'black'};
    text-shadow: ${props => (props.cardId % 2 !== 0) ? '0px 0px 4px rgb(0,0,0,0.3)' : ''};
  }
`;

const UserRole = styled.div`
  padding: 8px;
  & > span {
    font-weight: 100;
    color: ${props => (props.cardId % 2 !== 0) ? 'white' : 'black'};
    text-shadow: ${props => (props.cardId % 2 !== 0) ? '0px 0px 4px rgb(0,0,0,0.3)' : ''};
  }
`;

class Testimonials extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
      indicators: [],
    };
    this.quantityToShow = 2;
  }

  componentDidMount = () => {
    this.createIndicators();
  }

  createIndicators = () => {
    const { testimonials } = this.state;

    const howManyIndicators = Math.floor(testimonials.length / this.quantityToShow);
    
    let indicators = [];
    // Create indicators
    for(let i = 0; i < howManyIndicators; i++) {
      indicators.push({
        active: false,
        test: null,
      });
    }
    indicators[0].active = true;

    this.setState({
      indicators
    }, () => {
      window.addEventListener("resize", this.onResize());
    });
  }

  recreateIndicators = () => {
    const { testimonials } = this.state;

    const howManyIndicators = Math.floor(testimonials.length / this.quantityToShow);
    
    let indicators = [];
    // Create indicators
    for(let i = 0; i < howManyIndicators; i++) {
      indicators.push({
        active: false,
        test: null,
      });
    }
    indicators[0].active = true;

    return indicators;
  }

  onResize = () => {

    const isMobile = window.innerWidth < 768 ? true : false;
    if (isMobile) {
      this.quantityToShow = 1;
      let testimonials = [...this.state.testimonials];
      let indicators = this.recreateIndicators();
      testimonials.forEach(t => {
        t.show = false;
      });
      testimonials[0].show = true;
      
      this.setState({
        indicators,
        testimonials,
      });
    } else {
      this.quantityToShow = 2;
    }

  }

  nextTestimonials = (canExecute, indicatorIndex) => {
    if (canExecute) {

      // Animate cards to exit
      const cards = document.querySelectorAll('#showing-card');
      cards.forEach(card => {
        card.style.animation = "remove-card 0.8s";
      });
      
      // After exit animation.. Show the next ones
      setTimeout(() => {
        let testimonials = [...this.state.testimonials];
        let indicators = [...this.state.indicators];

        // Reset
        testimonials.forEach(t => {
          t.show = false;
        });
        indicators.forEach(i => {
          i.active = false;
        })

        // Calculate active indicator
        let loopTimes = indicatorIndex;
        let startGroupLoop = this.quantityToShow;
        let activeIndex = 0;
        for(let i = 0; i < loopTimes; i++) {
          activeIndex = Math.abs(this.quantityToShow - startGroupLoop);
          startGroupLoop++;
        }
        indicators[activeIndex].active = true;

        // Calculate next group
        let nextGroup = indicatorIndex * this.quantityToShow;

        if ( this.quantityToShow > 1 ) {
          testimonials[nextGroup - 1].show = true;
          testimonials[nextGroup - 2].show = true;
        } else {
          testimonials[nextGroup - 1].show = true;
        }

        // Update testimonials
        this.setState({
          testimonials,
          indicators
        });
      }, 500);
    }
  }

  showByOne = () => {
    this.quantityToShow = 1;
  }
  
  componentWillReceiveProps = (newProps) => {
    console.log(newProps);
  }

  render() {
    const { testimonials, indicators } = this.state;

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
                return (<Card key={ t.id } cardId={ t.id } id="showing-card" animationName={'appears-card'}>
                          <CardHeader>
                            <UserPhoto src={ t.picture } />
                            <UserName cardId={ t.id }>
                              <span>{ t.name }</span>
                            </UserName>
                            <UserRole cardId={ t.id }>
                              <span>{ t.role }</span>
                            </UserRole>
                          </CardHeader>
                          <CardBody cardId={t.id}>
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
