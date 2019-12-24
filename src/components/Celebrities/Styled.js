import styled, { css } from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  transition: all 500ms;
  &.firstCeleb {
    ${props =>
      props.language === "persian" &&
      css`
        right: 0;
      `};
    ${props =>
      props.language === "english" &&
      css`
        left: 0;
      `};
  }
  &.secondCeleb {
    ${props =>
      props.language === "persian" &&
      css`
        right: 50%;
      `};
    ${props =>
      props.language === "english" &&
      css`
        left: 50%;
      `};
  }
  &.thiredCeleb {
    ${props =>
      props.language === "persian" &&
      css`
        right: 100%;
      `};
    ${props =>
      props.language === "english" &&
      css`
        left: 100%;
      `};
  }
  @media (max-width: 792px) {
    height: 50%;
    width: 100%;
    &.firstCeleb {
      left: 0;
      top: 0;
    }
    &.secondCeleb {
      left: 0;
      top: 50%;
    }
    &.thiredCeleb {
      left: 0;
      top: 100%;
    }
  }
`;

const CelebName = styled.div`
  font-size: 40px;
  color: #ffffff;
  position: absolute;
  font-weight: bold;
  margin-top: 50px;
  @media (max-width: 792px) {
    font-size: 24px;
    margin-top: -20px;
  }
`;

const CelebFollowers = styled.div`
  font-size: 50px;
  color: #ffd334;
  position: absolute;
  font-weight: bold;
  margin-top: 120px;
  @media (max-width: 792px) {
    font-size: 32px;
    margin-top: 30px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const Span = styled.div`
  font-size: 24px;
  color: #ffffff;
  position: absolute;
  @media (max-width: 792px) {
    font-size: 16px;
    margin-top: -50px;
  }
`;

const FullContain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  direction: ${props => (props.language === "english" ? "ltr" : "rtl")};
  overflow: hidden;
`;

const ButtonDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 160px;
  @media (max-width: 792px) {
    margin-top: 55px;
    flex-direction: row;
  }
`;

export {
  Container,
  CelebName,
  CelebFollowers,
  Image,
  Span,
  FullContain,
  ButtonDiv
};
