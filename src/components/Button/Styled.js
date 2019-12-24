import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 16px;
  display: inline-flex;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.borderColor};
  border-style: ${props => props.borderStyle};
  border-width: ${props => props.borderWidth};
  cursor: pointer;
  transition: 200ms all ease-in-out;
  z-index: 200;
  &:hover {
    background-color: ${props => props.backgroundHover};
  }
  @media (max-width: 792px) {
    width: ${props => props.mobileWidth};
    height: ${props => props.mobileHeight};
    margin: 8px;
  }
`;

const Label = styled.span`
  position: relative;
  display: flex;
  font-size: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  &:hover {
    color: ${props => props.colorHover};
  }
  @media (max-width: 792px) {
    font-size: 12px;
  }
`;

export { Container, Label };
