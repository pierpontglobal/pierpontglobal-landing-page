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
  margin-top: 48px;
  margin-bottom: 48px;
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

const MailchimpWrapper = styled.div`
  margin-top: 32px;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
`;

const MailchimpText = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
`;

const MailchimpImage = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MailchimpGif = styled.img`
  width: 80%;
  height: auto;
`;

const Mailtitle = styled.h1`
  font-weight: 100;
  font-size: 3.0rem;
`;

const MailParagrah = styled.div`
  width: 100%;
  padding-right: 24px;
  & > span {
    font-size: 1.25em;
    font-weight: 100;
  }
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
      <MailchimpWrapper>
        <MailchimpImage>
          <MailchimpGif src="/images/mailchimp.gif" />
        </MailchimpImage>
        <MailchimpText>
          <Mailtitle>
            Some awsome text
          </Mailtitle>
          <MailParagrah>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu efficitur ligula. Sed sagittis, sapien nec rhoncus scelerisque, erat augue pellentesque orci, sit amet ullamcorper mi augue in tellus. Praesent eu est vitae enim auctor eleifend. In pellentesque lobortis velit, sit amet ultricies arcu finibus id. Morbi et dignissim enim.
            </span>
          </MailParagrah>
        </MailchimpText>
      </MailchimpWrapper>
      <MailchimpWrapper>
        <MailchimpText>
          <Mailtitle>
            Some awsome text
          </Mailtitle>
          <MailParagrah>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu efficitur ligula. Sed sagittis, sapien nec rhoncus scelerisque, erat augue pellentesque orci, sit amet ullamcorper mi augue in tellus. Praesent eu est vitae enim auctor eleifend. In pellentesque lobortis velit, sit amet ultricies arcu finibus id. Morbi et dignissim enim.
            </span>
          </MailParagrah>
        </MailchimpText>
        <MailchimpImage>
          <MailchimpGif src="/images/mailchimp.gif" />
        </MailchimpImage>
      </MailchimpWrapper>
      <MailchimpWrapper>
        <MailchimpImage>
          <MailchimpGif src="/images/mailchimp.gif" />
        </MailchimpImage>
        <MailchimpText>
          <Mailtitle>
            Some awsome text
          </Mailtitle>
          <MailParagrah>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu efficitur ligula. Sed sagittis, sapien nec rhoncus scelerisque, erat augue pellentesque orci, sit amet ullamcorper mi augue in tellus. Praesent eu est vitae enim auctor eleifend. In pellentesque lobortis velit, sit amet ultricies arcu finibus id. Morbi et dignissim enim.
            </span>
          </MailParagrah>
        </MailchimpText>
      </MailchimpWrapper>
    </Wrapper>
  );
};

export default SearchListing;
