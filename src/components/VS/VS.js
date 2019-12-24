import React from "react";
import { Container, VSDiv, VSSpan, VSTrueDiv, VSFalseDiv, SVG } from "./Styled";

class VS extends React.Component {
  state = {
    interval: null
  };
  componentDidMount() {
    if (this.props.select === "Timing") {
      let interval = setInterval(this.increaseTime, 1000);
      this.setState({ interval });
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  increaseTime = () => {
    setTimeout(this.props.onLoad, 500);
  };

  render() {
    const { select, answer, time, timeAnswer } = this.props;
    console.log(timeAnswer);
    return select === "classic" ? (
      <Container>
        <VSDiv answer={answer}>
          {answer === null ? (
            <VSSpan>VS</VSSpan>
          ) : answer === true ? (
            <VSTrueDiv />
          ) : answer === false ? (
            <VSFalseDiv />
          ) : null}
        </VSDiv>
      </Container>
    ) : (
      <Container>
        <VSDiv answer={answer}>
          {answer === null ? (
            <React.Fragment>
              <VSSpan>{time}</VSSpan>
              <SVG viewBox="0 0 90 90">
                <circle
                  cx="45"
                  cy="45"
                  r="45"
                  fill="none"
                  className="circle"
                  style={{
                    animationPlayState: timeAnswer !== null ? "paused" : null
                  }}
                />
              </SVG>
            </React.Fragment>
          ) : answer === true ? (
            <VSTrueDiv />
          ) : answer === false ? (
            <VSFalseDiv />
          ) : null}
        </VSDiv>
      </Container>
    );
  }
}

export { VS };
