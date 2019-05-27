import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  & > h1 {
    font-weight: 100;
    font-size: 3.25rem;
  }
`;

const Img = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 84px;
  margin-bottom: 148px;
`;

const ImageBox = styled.div`
  width: 400px;
  height: auto;
  padding: 8px;
  margin: 12px;
`;

const ImgWrapper = styled.img`
  width: 336px;
  height: auto;
  padding: 16px;
`;
const ImageWrapperAdesa = styled.img`
  width: 386.4px;
  height: auto;
  padding: 16px;
`;

const Images = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionWrapperWithImageLeft = styled.div`
  margin-top: 32px;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: auto;
  position: relative;
  margin-bottom: 148px;
`;

const SectionWrapperWithImageRight = styled.div`
  margin-top: 32px;
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto;
  position: relative;
  margin-bottom: 148px;
  justify-items: end;
`;

const SectionTextContent = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: ${props => (props.index % 2 === 0) ? 'flex-end' : 'flex-start'};
`;

const SectionImage = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 200;
`;

const SectionImageGif = styled.img`
  width: 80%;
  height: auto;
  z-index: 200;
  opacity: 0;
  transform: ${props => (props.index % 2 === 0) ? 'translateX(-45px) translateY(35px) rotate(9deg)' : 'translateX(45px) translateY(55px) rotate(-9deg)'};
  box-shadow: ${props => (props.index % 2 === 0) ? '48px 48px 16px 0px rgb(0, 0, 0, 0.1)' : '-48px 48px 16px 0px rgb(0, 0, 0, 0.1)'};
  animation: appears 1s ease-in-out;
  -webkit-animation-fill-mode: forwards;
  
  @keyframes appears-image {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SectionTitle = styled.h1`
  font-weight: 200;
  font-size: 3.0rem;
  position: relative;
  animation: appears 0.8s ease 0.5s;
  opacity: 0;
  animation-fill-mode: forwards;

  @keyframes appears {
    0% {
      opacity: 0;
      right: -220px;
    }
    90% {
      opacity: 0.95;
      right: 0px;
    }
    100% {
      opacity: 1;
      right: '';
    }
  }
`;

const SectionParagraph = styled.div`
  width: 100%;
  padding-right: ${props => (props.index % 2 === 0) ? '0px' : '24px'};
  text-align: ${props => (props.index % 2 === 0) ? 'right' : 'left'};
  & > span {
    font-size: 1.25em;
    font-weight: 100;
    line-height: 36px;
  }
`;

const BackgroundStyle = styled.img`
  position: absolute;
  top: 0;
  left: ${props => (props.index % 2 === 0) ? '' : '-60px'};
  right: ${props => (props.index % 2 === 0) ? '-120px' : 'none'};
  z-index: 100;
  opacity: 0.08;
  background-size: 300px 100px;
  transform: ${props => (props.index % 2 === 0) ? 'rotate(180deg)' : 'none'};
`;

class MainSections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        { 
          id: 1,
          showTitle: false,
        },
        {
          id: 2,
          showTitle: false,
        },
        {
          id: 3,
          showTitle: false,
        },
      ]
    }
    this.searchListingSection = React.createRef();
  }

  componentDidMount = () => {
    this.createObserver();
  }

  createObserver = () => {
    // Intersection observer (JavaScript)
    if (window.IntersectionObserver) {
      
      // To observer elements
      this.searchListingSection = document.querySelector('#search-listing-section');
      this.placeBidSection = document.querySelector('#place-bid-section');
      this.deliverySection = document.querySelector('#delivery-section');

      // Observer configuration
      const options = {
        root: null, // document viewport as a trigger
        threshold: 0.30, // Execute callback on 30% of reveal
      };

      // Observer callback
      this.observer = new IntersectionObserver((entry) => {
        
        let sections = [...this.state.sections];

        if (entry[0].isIntersecting) {
          // console.log(entry[0]);
          console.log(entry[0].target);
          if (entry[0].target.id === 'search-listing-section') {
            sections[0].showTitle = true;
            console.log('Reache!!');
            console.log(entry[0].target);
            this.setState({
              sections
            }, () => {
              this.observer.unobserve(this.searchListingSection);
            })
          } else if (entry[0].target.id === 'place-bid-section') {
            sections[1].showTitle = true;
            this.setState({
              sections
            }, () => {
              this.observer.unobserve(this.placeBidSection);
            })
          } else if (entry[0].target.id === 'delivery-section') {
            sections[2].showTitle = true;
            this.setState({
              sections
            }, () => {
              this.observer.unobserve(this.deliverySection);
            })
          }
        }
      }, options);

      // Initialize observer on elements
      this.observer.observe(this.searchListingSection);
      this.observer.observe(this.placeBidSection);
      this.observer.observe(this.deliverySection);
    }
  }

  showTitle = (elementId) => {
    const element = document.querySelector(`#${elementId}`);
    element.style.WebkitAnimationName = "appears";
    
  }

  render() {
    const { sections } = this.state;
    return (
      <Wrapper>
        <Img>
          <Title>
            <h1>Featuring inventory from</h1>
          </Title>
          <Images>
            <ImageBox>
              <ImgWrapper src="/images/manheim.jpg" />
            </ImageBox>
            <ImageBox>
              <ImgWrapper src="/images/adesa.gif" />
            </ImageBox>
          </Images>
        </Img>
        <SectionWrapperWithImageLeft id="search-listing-section">
          <SectionImage>
            {
              !sections[0].showTitle ? null : (<SectionImageGif index={1} src="/images/mailchimp.gif" />)
            }
            <BackgroundStyle index={1} src="/images/background-style-colored.svg" />
          </SectionImage>
          <SectionTextContent index={1}>
            {
              sections[0].showTitle ? (
                <SectionTitle id="search-listing-title">
                  Search listings
                </SectionTitle>) : null
            }
            <SectionParagraph index={1}>
              <span>
              Our platform ties together thousands of listings, from dozens of Manheim Auction locations, giving you access to infinitely more vehicle options to buy from.
              </span>
            </SectionParagraph>
          </SectionTextContent>
        </SectionWrapperWithImageLeft>
        <SectionWrapperWithImageRight id="place-bid-section">
          <SectionTextContent index={2}>
            {
              sections[1].showTitle ? (
                <SectionTitle id="place-bid-title">
                  Place bids
                </SectionTitle>) : null
            }
            <SectionParagraph index={2}>
              <span>
                Bid on vehicles right from your computer. Using our provided pricing information and condition reports, you’ll have all the info you need to place well calculated bids.
              </span>
            </SectionParagraph>
          </SectionTextContent>
          <SectionImage>
            {
              !sections[1].showTitle ? null : (<SectionImageGif index={2} src="/images/mailchimp.gif" />)
            }
            <BackgroundStyle index={2} src="/images/background-style-colored.svg" />
          </SectionImage>
        </SectionWrapperWithImageRight>
        <SectionWrapperWithImageLeft id="delivery-section">
          <SectionImage>
          { 
              !sections[2].showTitle ? null : (<SectionImageGif index={3} src="/images/mailchimp.gif" />)
            }
            <BackgroundStyle index={3} src="/images/background-style-colored.svg" />
          </SectionImage>
          <SectionTextContent index={3}>
            {
              sections[2].showTitle ? (
                <SectionTitle id="delivery-title">
                  Delivery
                </SectionTitle>) : null
            }
            <SectionParagraph index={3}>
              <span>
                We handle the process of delivering the vehicles from the auction to your near port, while giving you tracking updates along the way. We will get you the best ground transport rates, shipping rates, as well as import customs and tax rates. With all invoices provided in real time.
              </span>
            </SectionParagraph>
          </SectionTextContent>
        </SectionWrapperWithImageLeft>
      </Wrapper>
    );
  }
}

export default MainSections;
