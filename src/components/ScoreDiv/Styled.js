import styled, { css } from "styled-components";

const Score = styled.div`
  position: absolute;
  bottom: 0;
  margin: 10px;
  ${props =>
    props.float === "left" &&
    css`
      left: 0;
    `};
  ${props =>
    props.float === "right" &&
    css`
      right: 0;
    `};
  @media (max-width: 792px) {
    top: 0;
  }
`;

const Span = styled.span`
  color: #ffffff;
  font-size: 32px;
  @media (max-width: 792px) {
    font-size: 14px;
  }
`;

export { Score, Span };
