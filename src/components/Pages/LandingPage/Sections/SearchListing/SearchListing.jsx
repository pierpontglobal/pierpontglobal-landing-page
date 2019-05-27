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
  opacity: 0.8;
  transform: ${props => (props.index % 2 === 0) ? 'translateX(-45px) translateY(35px) rotate(9deg)' : 'translateX(45px) translateY(55px) rotate(-9deg)'};
  box-shadow: ${props => (props.index % 2 === 0) ? '48px 48px 16px 0px rgb(0, 0, 0, 0.1)' : '-48px 48px 16px 0px rgb(0, 0, 0, 0.1)'};
`;

const SectionTitle = styled.h1`
  font-weight: 100;
  font-size: 3.0rem;
`;

const SectionParagraph = styled.div`
  width: 100%;
  padding-right: ${props => (props.index % 2 === 0) ? '0px' : '24px'};
  text-align: ${props => (props.index % 2 === 0) ? 'right' : 'left'};
  & > span {
    font-size: 1.25em;
    font-weight: 100;
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

const SearchListing = () => {
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
      <SectionWrapperWithImageLeft>
        <SectionImage>
          <SectionImageGif index={1} src="/images/mailchimp.gif" />
          <BackgroundStyle index={1} src="/images/background-style-colored.svg" />
        </SectionImage>
        <SectionTextContent index={1}>
          <SectionTitle>
            Some awsome text
          </SectionTitle>
          <SectionParagraph index={1}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu efficitur ligula. Sed sagittis, sapien nec rhoncus scelerisque, erat augue pellentesque orci, sit amet ullamcorper mi augue in tellus. Praesent eu est vitae enim auctor eleifend. In pellentesque lobortis velit, sit amet ultricies arcu finibus id. Morbi et dignissim enim.
            </span>
          </SectionParagraph>
        </SectionTextContent>
      </SectionWrapperWithImageLeft>
      <SectionWrapperWithImageRight>
        <SectionTextContent index={2}>
          <SectionTitle>
            Some awsome text
          </SectionTitle>
          <SectionParagraph index={2}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu efficitur ligula. Sed sagittis, sapien nec rhoncus scelerisque, erat augue pellentesque orci, sit amet ullamcorper mi augue in tellus. Praesent eu est vitae enim auctor eleifend. In pellentesque lobortis velit, sit amet ultricies arcu finibus id. Morbi et dignissim enim.
            </span>
          </SectionParagraph>
        </SectionTextContent>
        <SectionImage>
          <SectionImageGif index={2} src="/images/mailchimp.gif" />
          <BackgroundStyle index={2} src="/images/background-style-colored.svg" />
        </SectionImage>
      </SectionWrapperWithImageRight>
      <SectionWrapperWithImageLeft>
        <SectionImage>
          <SectionImageGif index={3} src="/images/mailchimp.gif" />
          <BackgroundStyle index={3} src="/images/background-style-colored.svg" />
        </SectionImage>
        <SectionTextContent index={3}>
          <SectionTitle>
            Some awsome text
          </SectionTitle>
          <SectionParagraph index={3}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu efficitur ligula. Sed sagittis, sapien nec rhoncus scelerisque, erat augue pellentesque orci, sit amet ullamcorper mi augue in tellus. Praesent eu est vitae enim auctor eleifend. In pellentesque lobortis velit, sit amet ultricies arcu finibus id. Morbi et dignissim enim.
            </span>
          </SectionParagraph>
        </SectionTextContent>
      </SectionWrapperWithImageLeft>
    </Wrapper>
  );
};

export default SearchListing;
