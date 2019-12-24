import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
`;

const Span = styled.div`
  color: ${props => (props.color ? props.color : "#000000")};
  font-size: ${props => (props.fontSize ? props.fontSize : "20px")};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
`;

export { Container, Span, Image };
