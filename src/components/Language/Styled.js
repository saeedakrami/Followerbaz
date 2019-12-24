import styled from "styled-components";

const LangContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  max-width: 1140px;
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${props => (props.selected ? "#00C851" : "#ff4444")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 8px;
  @media (max-width: 792px) {
    width: 24px;
    height: 24px;
  }
`;

const Span = styled.span`
  color: #0f5485;
  font-size: 18px;
  @media (max-width: 792px) {
    font-size: 14px;
  }
`;

export { LangContainer, Icon, Span };
