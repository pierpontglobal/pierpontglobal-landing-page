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

  @media only screen and (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 8px;
    & > h1 {
      font-weight: 100;
      font-size: 1.75rem;
    }
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
  @media only screen and (max-width: 768px) {
    margin-top: 8px;
    margin-bottom: 48px;
  }
`;

const ImageBoxInner = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const ImageBox = styled.div`
  width: 400px;
  height: 180px;
  padding: 8px;
  margin: 12px;
  position: relative;
  background: transparent;
  overflow: visible;
  perspective: 1000px;
  cursor: pointer;

  &:hover {
    & > ${ImageBoxInner} {
      transform: rotateY(180deg);
    }
  }

  @media only screen and (max-width: 768px) {
    width: calc(100vw - 40px);
    height: 220px;
    margin: 0 auto;
  }
`;

const ImageBoxInnerFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const ImageBoxInnerBack = styled.div`
  position: absolute;
  width: 100%;
  backface-visibility: hidden;
  box-shadow: 0px 0px 16px 0px rgb(0, 0, 0, 0.05);
  transform: rotateY(180deg);

  @media only screen and (max-width: 768px) {
    margin-bottom: 64px;
  }
`;

const ImageBackTitle = styled.div`
  width: 100%;
  text-align: center;
  padding: 8px;
  margin-top: 8px;
  & > span {
    font-weight: 400;
    font-size: 1.35rem;
  }
  & > img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-size: cover;
  }
`;

const ImageBackText = styled.div`
  text-align: justify;
  padding: 8px;
  margin-top: 8px;
  padding: 16px;
  & > span {
    font-weight: 100;
    font-size: 1.05rem;
  }
`;

const WaveStyle = styled.img`
  position: absolute;
  top: 70px;
  left: -160px;
  z-index: 0.8;
  z-index: 100;
  opacity: 0.08;
`;

const WaveStyleRight = styled.img`
  position: absolute;
  top: 100px;
  right: -160px;
  z-index: 0.8;
  z-index: 100;
  opacity: 0.08;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
`;


const ImgWrapper = styled.img`
  width: 336px;
  height: auto;
  padding: 16px;
  z-index: 200;
  margin-top: 32px;

  @media only screen and (max-width: 768px) {
    width: 236px;
    margin-bottom: 80px;
  }
`;
const ImageWrapperAdesa = styled.img`
  width: 386.4px;
  height: auto;
  padding: 16px;
  z-index: 200;

  @media only screen and (max-width: 768px) {
    width: 286.4px;
  }
`;

const Images = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`;

const SectionWrapperWithImageLeft = styled.div`
  margin-top: 32px;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: auto;
  position: relative;
  margin-bottom: 148px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 40% 60%;
    margin-bottom: 48px;
  }
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

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 40% 60%;
    margin-bottom: 48px;
  }
`;

const SectionTextContent = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: ${props => (props.index % 2 === 0) ? 'flex-end' : 'flex-start'};
  margin-left: ${props => (props.index % 2 === 0) ? '0px' : '64px'};
  margin-right: ${props => (props.index % 2 === 0) ? '64px' : '0px'};
`;

const SectionImage = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 200;
  min-height: 220px;
`;

const SectionImageGif = styled.img`
  width: 100%;
  height: auto;
  z-index: 200;
  opacity: 0;
  transform: ${props => (props.index % 2 === 0) ? 'translateX(-45px) translateY(35px) rotate(0deg)' : 'translateX(45px) translateY(55px) rotate(0deg)'};
  box-shadow: ${props => (props.index % 2 === 0) ? '24px 24px 12px 0px rgb(0, 0, 0, 0.1)' : '-24px 24px 12px 0px rgb(0, 0, 0, 0.1)'};
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

  @media only screen and (max-width: 768px) {
    width: 80%;
    box-shadow: ${props => (props.index % 2 === 0) ? '4px 4px 4px 0px rgb(0, 0, 0, 0.1)' : '-4px 4px 4px 0px rgb(0, 0, 0, 0.1)'};
    transform: ${props => (props.index % 2 === 0) ? 'translateX(-15px) translateY(15px) rotate(0deg)' : 'translateX(15px) translateY(15px) rotate(0deg)'};
  }
`;

const SectionTitle = styled.h1`
  font-weight: 200;
  font-size: 3.0rem;
  position: relative;
  animation: appears 0.8s ease 0.8s;
  opacity: 0;
  animation-fill-mode: forwards;

  @media only screen and (max-width: 768px) {
    font-size: 2.4rem;
  }

  @keyframes appears {
    0% {
      opacity: 0;
      right: ${props => (props.index % 2 === 0) ? 'none' : '-220px'};
      left: ${props => (props.index % 2 === 0) ? '-220px' : 'none'};
    }
    90% {
      opacity: 0.95;
      right: ${props => (props.index % 2 === 0) ? 'none' : '0px'};
      left: ${props => (props.index % 2 === 0) ? '0px' : 'none'};
    }
    100% {
      opacity: 1;
      right: '';
      left: '';
    }
  }
`;

const SectionParagraph = styled.div`
  width: 100%;
  padding-right: ${props => (props.index % 2 === 0) ? '0px' : '24px'};
  text-align: ${props => (props.index % 2 === 0) ? 'right' : 'left'};
  opacity: 0;
  animation: appears-paragraph 0.4s ease-in-out 1.2s;
  animation-fill-mode: forwards;

  & > span {
    font-size: 1.25em;
    font-weight: 100;
    line-height: 36px;
  }

  @keyframes appears-paragraph {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const BackgroundStyle = styled.object`
  position: absolute;
  z-index: 100;
  opacity: 0.2;
  height: 170%;
  width: 170%;
  top: 0;
  left: ${props => (props.index % 2 === 0) ? '' : '-260px'};
  right: ${props => (props.index % 2 === 0) ? '-220px' : 'none'};
  transform: ${props => (props.index % 2 === 0) ? 'rotate(180deg)' : 'none'};

  @media only screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    left: ${props => (props.index % 2 === 0) ? '' : '-120px'};
    right: ${props => (props.index % 2 === 0) ? '-120px' : 'none'};
  }
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
      // this.deliverySection = document.querySelector('#delivery-section');

      // Observer configuration
      const options = {
        root: null, // document viewport as a trigger
        threshold: 0.20, // Execute callback on 20% of reveal
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
          } 
          // else if (entry[0].target.id === 'delivery-section') {
          //   sections[2].showTitle = true;
          //   this.setState({
          //     sections
          //   }, () => {
          //     this.observer.unobserve(this.deliverySection);
          //   })
          // }
        }
      }, options);

      // Initialize observer on elements
      this.observer.observe(this.searchListingSection);
      this.observer.observe(this.placeBidSection);
      // this.observer.observe(this.deliverySection);
    }
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
              <ImageBoxInner>
                <ImageBoxInnerFront>
                  <ImgWrapper src="/images/manheim.jpg" />
                </ImageBoxInnerFront>
                <ImageBoxInnerBack>
                  <ImageBackTitle>
                    <img src="/images/manheim-logotype.gif" />
                    {/* <span>Manheim</span> */}
                  </ImageBackTitle>
                  <ImageBackText>
                    <span>
                      North America’s leading provider of vehicle remarketing services, connecting buyers and sellers to the largest wholesale used vehicle marketplace and most extensive auction network.
                    </span>
                  </ImageBackText>
                </ImageBoxInnerBack>
              </ImageBoxInner>
            </ImageBox>
            <ImageBox>
              <ImageBoxInner>
                <ImageBoxInnerFront>
                  <ImageWrapperAdesa src="/images/adesa.gif" />
                </ImageBoxInnerFront>
                <ImageBoxInnerBack>
                  <ImageBackTitle>
                    <img src="/images/adesa-logotype.jpg" />
                    {/* <span>Adesa</span> */}
                  </ImageBackTitle>
                  <ImageBackText>
                    <span>
                      ADESA provides wholesale vehicle auction solutions to professional car buyers and sellers. Associated with the best partners in the auto remarketing industry to ensure you get the best experience and services out there.
                    </span>
                  </ImageBackText>
                </ImageBoxInnerBack>
              </ImageBoxInner>
            </ImageBox>
          </Images>
        </Img>
        <SectionWrapperWithImageLeft id="search-listing-section">
          <SectionImage>
            {
              !sections[0].showTitle ? null : (<SectionImageGif index={1} src="/gifs/search-listings-slower.gif" />)
            }
            <BackgroundStyle type="image/svg+xml" index={1} data="/images/background-style-colored-new.svg" />
          </SectionImage>
          <SectionTextContent index={1}>
            {
              sections[0].showTitle ? (
                <>
                  <SectionTitle index={1} id="search-listing-title">
                    Search listings
                  </SectionTitle>
                  <SectionParagraph index={1}>
                    <span>
                    Our platform ties together thousands of listings, from dozens of Manheim Auction locations, giving you access to infinitely more vehicle options to buy from.
                    </span>
                  </SectionParagraph>
                </>
              ) : null
            }
          </SectionTextContent>
        </SectionWrapperWithImageLeft>
        <SectionWrapperWithImageRight id="place-bid-section">
          <SectionTextContent index={2}>
            {
              sections[1].showTitle ? (
               <>
                 <SectionTitle index={2} id="place-bid-title">
                    Place bids
                  </SectionTitle>
                  <SectionParagraph index={2}>
                    <span>
                      Bid on vehicles right from your computer. Using our provided pricing information and condition reports, you’ll have all the info you need to place well calculated bids.
                    </span>
                  </SectionParagraph>
               </>
              ) : null
            }
          </SectionTextContent>
          <SectionImage>
            {
              !sections[1].showTitle ? null : (<SectionImageGif index={2} src="/gifs/place-bids.gif" />)
            }
            <BackgroundStyle type="image/svg+xml" index={2} data="/images/background-style-colored-new.svg" />
          </SectionImage>
        </SectionWrapperWithImageRight>
        {/* <SectionWrapperWithImageLeft id="delivery-section">
          <SectionImage>
          { 
              !sections[2].showTitle ? null : (<SectionImageGif index={3} src="/images/mailchimp.gif" />)
            }
            <BackgroundStyle index={3} src="/images/background-style-colored.svg" />
          </SectionImage>
          <SectionTextContent index={3}>
            {
              sections[2].showTitle ? (
                <>
                  <SectionTitle index={3} id="delivery-title">
                    Delivery
                  </SectionTitle>
                  <SectionParagraph index={3}>
                    <span>
                      We handle the process of delivering the vehicles from the auction to your near port, while giving you tracking updates along the way. We will get you the best ground transport rates, shipping rates, as well as import customs and tax rates. With all invoices provided in real time.
                    </span>
                  </SectionParagraph>
                </>
              ) : null
            }
          </SectionTextContent>
        </SectionWrapperWithImageLeft> */}
      </Wrapper>
    );
  }
}

export default MainSections;
