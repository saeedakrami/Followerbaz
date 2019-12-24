import React from "react";
import { Score, Span } from "./Styled";
import { toFaNumber } from "../../utils/faNumberConvertor";

class ScoreDiv extends React.Component {
  render() {
    const { text, float, language, score } = this.props;
    return (
      <Score float={float}>
        <Span>{text}</Span>
        <Span>{language === "english" ? score : toFaNumber(score)}</Span>
      </Score>
    );
  }
}

export { ScoreDiv };
