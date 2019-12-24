import React from "react";
import { Button } from "./components/Button";
import { Container, Row, Column, Logo } from "./Styled";
import { Language } from "./components/Language";
import FaIcon from "./images/FaIcon.png";
import Icon from "./images/Icon.png";
import { Celebrities } from "./components/Celebrities";
import { VS } from "./components/VS";
import { YourScore } from "./components/YourScore";

// ==================================================== CLASS ======================================================= //
class App extends React.Component {
  // ==================================================== STATE ======================================================= //
  state = {
    englishSelected: false,
    persianSelected: true,
    paging: "firstPage",
    data: require("./data.json"),
    answer: null,
    timeAnswer: null,
    score: 0,
    highscore: 0,
    gameOver: "no",
    time: 10
  };

  // ================================================== FUNCTIONS ===================================================== //
  answerClick = answer => {
    this.setState({ answer: answer });
    this.changeScore();
  };

  timingClick = answer => {
    this.setState({ timeAnswer: answer });
  };

  changeScore = () => {
    const { score, answer, paging } = this.state;
    if (answer) this.setState({ score: score + 1 });
    if (paging === "Timing") this.setState({ time: 10 });
  };

  handleGameOver = () => {
    if (this.state.score > 5) this.setState({ gameOver: "good" });
    else this.setState({ gameOver: "bad" });
  };

  timingLoad = () => {
    const { time, timeAnswer } = this.state;
    if (timeAnswer === null && time > 0) this.setState({ time: time - 1 });
    else if (time === 0) {
      this.setState({ answer: false });
      this.handleGameOver();
    } else if (timeAnswer !== null) {
      this.setState({ time: time });
    }
  };

  handlePlayAgainClick = paging => {
    this.setState({
      paging: paging,
      gameOver: "no",
      answer: null,
      timeAnswer: null,
      score: 0,
      time: 10
    });
  };

  handleBackMenuClick = () => {
    this.setState({
      paging: "firstPage",
      gameOver: "no",
      answer: null,
      timeAnswer: null,
      score: 0,
      time: 10
    });
  };

  // ==================================================== RENDER ======================================================= //
  render() {
    const {
      englishSelected,
      persianSelected,
      paging,
      data,
      answer,
      timeAnswer,
      gameOver,
      score,
      time
    } = this.state;
    // ================================================= FIRST PAGE ==================================================== //
    return paging === "firstPage" ? (
      <React.Fragment>
        <Language
          languages={[
            {
              language: "English",
              abbreviation: "EN"
            },
            {
              language: "Persian",
              abbreviation: "فا"
            }
          ]}
          englishClick={() =>
            this.setState({
              englishSelected: true,
              persianSelected: false
            })
          }
          persianClick={() =>
            this.setState({
              englishSelected: false,
              persianSelected: true
            })
          }
          englishSelected={englishSelected}
          persianSelected={persianSelected}
        />
        <Container>
          <Row>
            <Column grid={12}>
              <Logo src={persianSelected ? FaIcon : Icon} />
            </Column>
          </Row>
          <Row reverse={persianSelected ? true : false}>
            <Column
              grid={6}
              phoneGrid={12}
              alignItems={persianSelected ? "end" : "flex-end"}
            >
              <Button
                backgroundColor="#59ac51"
                borderWidth="0"
                borderRadius="2.5rem"
                width="200px"
                height="55px"
                mobileWidth="133px"
                mobileHeight="37px"
                backgroundHover="#79cc71"
                text={persianSelected ? "کلاسیک" : "Classic"}
                fontWeight="500"
                color="#ffffff"
                onClick={() => this.setState({ paging: "Classic" })}
              />
            </Column>
            <Column
              grid={6}
              phoneGrid={12}
              alignItems={persianSelected ? "flex-end" : "end"}
            >
              <Button
                backgroundColor="#59ac51"
                borderWidth="0"
                borderRadius="2.5rem"
                width="200px"
                height="55px"
                mobileWidth="133px"
                mobileHeight="37px"
                backgroundHover="#79cc71"
                text={persianSelected ? "زمان بندی" : "Beat the Clock"}
                fontWeight="500"
                color="#ffffff"
                onClick={() => this.setState({ paging: "Timing" })}
              />
            </Column>
          </Row>
        </Container>
      </React.Fragment>
    ) : // ==================================================== CLASSIC ======================================================= //
    paging === "Classic" ? (
      // ================================================= NOT GAME OVER ==================================================== //
      gameOver === "no" ? (
        <React.Fragment>
          <Celebrities
            data={data}
            language={persianSelected ? "persian" : "english"}
            onClick={this.answerClick}
            onTimingClick={this.timingClick}
            gameOver={this.handleGameOver}
            select="Classic"
          />
          <VS select="classic" answer={answer} />
        </React.Fragment>
      ) : // ================================================ GOOD GAME OVER =================================================== //
      gameOver === "good" ? (
        <YourScore
          score={score}
          language={persianSelected ? "persian" : "english"}
          src={require(`../src/images/Gif/good/good-${Math.floor(
            Math.random() * 4 + 1
          )}.gif`)}
          paging="Classic"
          backMenuClick={this.handleBackMenuClick}
          playAgainClick={this.handlePlayAgainClick}
        />
      ) : // ================================================ BAD GAME OVER =================================================== //
      gameOver === "bad" ? (
        <YourScore
          score={score}
          language={persianSelected ? "persian" : "english"}
          src={require(`../src/images/Gif/bad/bad-${Math.floor(
            Math.random() * 7 + 1
          )}.gif`)}
          paging="Classic"
          backMenuClick={this.handleBackMenuClick}
          playAgainClick={this.handlePlayAgainClick}
        />
      ) : null
    ) : // ==================================================== TIMING ======================================================= //
    paging === "Timing" ? (
      // ================================================= NOT GAME OVER ==================================================== //
      gameOver === "no" ? (
        <React.Fragment>
          <Celebrities
            data={data}
            language={persianSelected ? "persian" : "english"}
            onClick={this.answerClick}
            onTimingClick={this.timingClick}
            gameOver={this.handleGameOver}
            select="Timing"
          />
          <VS
            select="Timing"
            answer={answer}
            timeAnswer={timeAnswer}
            onLoad={this.timingLoad}
            time={time}
          />
        </React.Fragment>
      ) : // ================================================ GOOD GAME OVER =================================================== //
      gameOver === "good" ? (
        <YourScore
          score={score}
          language={persianSelected ? "persian" : "english"}
          src={require(`../src/images/Gif/good/good-${Math.floor(
            Math.random() * 4 + 1
          )}.gif`)}
          paging="Timing"
          backMenuClick={this.handleBackMenuClick}
          playAgainClick={this.handlePlayAgainClick}
        />
      ) : // ================================================ BAD GAME OVER =================================================== //
      gameOver === "bad" ? (
        <YourScore
          score={score}
          language={persianSelected ? "persian" : "english"}
          src={require(`../src/images/Gif/bad/bad-${Math.floor(
            Math.random() * 7 + 1
          )}.gif`)}
          paging="Timing"
          backMenuClick={this.handleBackMenuClick}
          playAgainClick={this.handlePlayAgainClick}
        />
      ) : null
    ) : null;
  }
}

export default App;
