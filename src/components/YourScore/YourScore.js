import React from "react";
import { Container, Span, Image } from "./Styled";
import { toFaNumber } from "../../utils/faNumberConvertor";
import { Button } from "../Button";

class YourScore extends React.Component {
  state = {};

  backMenu = () => {
    this.props.backMenuClick();
  };

  playAgain = () => {
    this.props.playAgainClick(this.props.paging);
  };

  render() {
    const { language, score, src } = this.props;
    return (
      <Container>
        <Image src={src} />
        <Span color="#ffffff" fontSize="18px">
          {language === "persian" ? "امتیاز شما:" : "You Scored:"}
        </Span>
        <Span color="#ffd334" fontSize="32px">
          {language === "persian" ? toFaNumber(score) : score}
        </Span>
        <Button
          backgroundColor="transparent"
          borderWidth="2px"
          borderRadius="2.5rem"
          borderColor="#ffffff"
          width="200px"
          height="55px"
          mobileWidth="150px"
          mobileHeight="37px"
          backgroundHover="#ffffff"
          text={language === "persian" ? "بازگشت به منو" : "Back to Menu"}
          fontWeight="500"
          color="#ffffff"
          colorHover="#000000"
          onClick={this.backMenu}
        />
        <Button
          backgroundColor="transparent"
          borderWidth="2px"
          borderRadius="2.5rem"
          borderColor="#ffffff"
          width="200px"
          height="55px"
          mobileWidth="150px"
          mobileHeight="37px"
          backgroundHover="#ffffff"
          text={language === "persian" ? "بازی مجدد" : "Play Again"}
          fontWeight="500"
          color="#ffffff"
          colorHover="#000000"
          onClick={this.playAgain}
        />
      </Container>
    );
  }
}

export { YourScore };
