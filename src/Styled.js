import styled, { css } from "styled-components";

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const Container = styled.div`
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 40px);
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  display: ${props => (props.grid === 0 ? "none" : "flex")};
  padding: ${props => (props.padding ? props.padding : "0")};
  ${props =>
    props.grid &&
    css`
      width: ${props =>
        props.grid === 1
          ? "8.33%"
          : props.grid === 2
          ? "16.66%"
          : props.grid === 2.5
          ? "20%"
          : props.grid === 3
          ? "25%"
          : props.grid === 4
          ? "33.33%"
          : props.grid === 5
          ? "41.66%"
          : props.grid === 6
          ? "50%"
          : props.grid === 7
          ? "58.33%"
          : props.grid === 8
          ? "66.66%"
          : props.grid === 9
          ? "75%"
          : props.grid === 10
          ? "83.33%"
          : props.grid === 11
          ? "91.66%"
          : props.grid === 12
          ? "100%"
          : "100%"};
    `};
  ${media.tablet`
display: ${props => (props.tabletGrid === 0 ? "none" : "flex")};
  ${props =>
    props.tabletGrid &&
    css`
      width: ${props =>
        props.tabletGrid === 1
          ? "8.33%"
          : props.tabletGrid === 2
          ? "16.66%"
          : props.tabletGrid === 3
          ? "25%"
          : props.tabletGrid === 4
          ? "33.33%"
          : props.tabletGrid === 5
          ? "41.66%"
          : props.tabletGrid === 6
          ? "50%"
          : props.tabletGrid === 7
          ? "58.33%"
          : props.tabletGrid === 8
          ? "66.66%"
          : props.tabletGrid === 9
          ? "75%"
          : props.tabletGrid === 10
          ? "83.33%"
          : props.tabletGrid === 11
          ? "91.66%"
          : props.tabletGrid === 12
          ? "100%"
          : "100%"};
    `}
  `}
  ${media.phone`
display: ${props => (props.phoneGrid === 0 ? "none" : "flex")};
  ${props =>
    props.phoneGrid &&
    css`
      width: ${props =>
        props.phoneGrid === 1
          ? "8.33%"
          : props.phoneGrid === 2
          ? "16.66%"
          : props.phoneGrid === 3
          ? "25%"
          : props.phoneGrid === 4
          ? "33.33%"
          : props.phoneGrid === 5
          ? "41.66%"
          : props.phoneGrid === 6
          ? "50%"
          : props.phoneGrid === 7
          ? "58.33%"
          : props.phoneGrid === 8
          ? "66.66%"
          : props.phoneGrid === 9
          ? "75%"
          : props.phoneGrid === 10
          ? "83.33%"
          : props.phoneGrid === 11
          ? "91.66%"
          : props.phoneGrid === 12
          ? "100%"
          : "100%"};
    `}
  `}

flex-wrap: wrap;
  flex-direction: column;
  @media (max-width: 792px) {
    align-items: center;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  flex-flow: ${props => (props.reverse ? "row-reverse wrap" : "row wrap")};
  width: 100%;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  @media (max-width: 792px) {
    width: 170px;
    height: 170px;
  }
`;

const FullContain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export { Container, Row, Column, Logo, FullContain };
