import styled from "styled-components";
import { flash, up, zoom } from "./Keyframes";

const VSDiv = styled.div`
  height: ${props => (props.answer === null ? "70px" : "90px")};
  width: 90px;
  border-radius: 100%;
  background-color: #ffffff;
  text-align: center;
  font-weight: bold;
  padding-top: ${props => (props.answer === null ? "20px" : 0)};
  animation-name: ${flash};
  animation-duration: 0.5s;
  overflow: hidden;
  position: relative;
  @media (max-width: 792px) {
    height: ${props => (props.answer === null ? "45px" : "60px")};
    width: 60px;
    padding-top: ${props => (props.answer === null ? "15px" : 0)};
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

const VSSpan = styled.span`
  color: #000000;
  font-size: 32px;
  @media (max-width: 792px) {
    font-size: 20px;
  }
`;

const VSTrueDiv = styled.div`
  background-color: #00ff00;
  width: 90px;
  height: 90px;
  border-radius: 100%;
  position: absolute;
  animation-name: ${up};
  animation-duration: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 792px) {
    width: 60px;
    height: 60px;
  }
  &:before {
    content: "";
    width: 30px;
    height: 15px;
    border-left: 8px solid #ffffff;
    border-bottom: 8px solid #ffffff;
    transform: rotate(-45deg);
    margin-top: -10px;
    animation: ${zoom} 0.5s ease 0.5s forwards;
    opacity: 0;
    @media (max-width: 792px) {
      width: 20px;
      height: 10px;
      border-left: 6px solid #ffffff;
      border-bottom: 6px solid #ffffff;
    }
  }
`;

const VSFalseDiv = styled.div`
  background-color: #ff0000;
  width: 90px;
  height: 90px;
  overflow: hidden;
  position: absolute;
  animation-name: ${up};
  animation-duration: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 792px) {
    width: 60px;
    height: 60px;
  }
  &:before {
    content: "";
    width: 15px;
    height: 15px;
    border-right: 8px solid #ffffff;
    border-bottom: 8px solid #ffffff;
    transform: rotate(45deg);
    animation: ${zoom} 0.5s ease 0.5s forwards;
    opacity: 0;
    @media (max-width: 792px) {
      width: 10px;
      height: 10px;
      border-right: 6px solid #ffffff;
      border-bottom: 6px solid #ffffff;
    }
  }
  &:after {
    content: "";
    width: 15px;
    height: 15px;
    border-left: 8px solid #ffffff;
    border-top: 8px solid #ffffff;
    transform: rotate(45deg);
    animation: ${zoom} 0.5s ease 0.5s forwards;
    opacity: 0;
    @media (max-width: 792px) {
      width: 10px;
      height: 10px;
      border-left: 6px solid #ffffff;
      border-top: 6px solid #ffffff;
    }
  }
`;

const SVG = styled.svg`
  width: 90;
  height: 90;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotateX(-180deg);
  @media (max-width: 792px) {
    width: 60px;
    height: 60px;
  }
  & .circle {
    stroke-width: 10;
    stroke-dashoffset: -70.65;
    stroke: #00ff00;
    animation: strokeDash 10.5s linear forwards;
  }

  @keyframes strokeDash {
    0% {
      stroke-dasharray: 282.6, 0;
      stroke: #00ff00;
    }
    10% {
      stroke-dasharray: 282.6, 0;
      stroke: #00ff00;
    }
    55% {
      stroke: #ffff00;
    }
    85% {
      stroke: #ff9900;
    }
    100% {
      stroke-dasharray: 0, 282.6;
      stroke: #ff0000;
    }
  }
`;

export { Container, VSDiv, VSSpan, VSTrueDiv, VSFalseDiv, SVG };
