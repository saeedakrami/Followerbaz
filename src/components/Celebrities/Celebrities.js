import React from "react";
import {
  Container,
  CelebFollowers,
  CelebName,
  Image,
  Span,
  FullContain,
  ButtonDiv
} from "./Styled";
import { toFaNumber } from "../../utils/faNumberConvertor";
import { addCommasFormater } from "../../utils/addCommasFormater";
import CountUp from "react-countup";
import { Button } from "../Button";
import { ScoreDiv } from "../ScoreDiv";
import { Row, Column } from "../../Styled";

class Celebrities extends React.Component {
  state = {
    firstCelebNum: 0,
    secondCelebNum: 1,
    thiredCelebNum: 2,
    answer: null,
    classicScore: 0,
    classicHighscore: 0,
    timingScore: 0,
    timingHighscore: 0,
    startX: 0,
    gameOver: "no",
    newData: [],
    randData: [],
    loading: true
  };

  componentDidMount() {
    const { data } = this.props;
    const { newData, randData } = this.state;
    setTimeout(() => this.setState({ loading: false }), 500);
    data.map(item => newData.push(item));
    for (let i = 0; i < data.length; i++) {
      let randNum = Math.floor(Math.random() * newData.length);
      randData.push(newData[randNum]);
      newData.splice(randNum, 1);
      console.log(randData);
    }
  }

  higherClick = () => {
    const { firstCelebNum, secondCelebNum, randData } = this.state;
    if (
      randData[secondCelebNum].followers >= randData[firstCelebNum].followers
    ) {
      this.setState({ answer: true });
      setTimeout(this.props.onClick, 2000, true);
      this.props.onTimingClick(true);
      setTimeout(this.changeCeleb, 3000);
    } else {
      this.setState({ answer: false });
      setTimeout(this.props.onClick, 2000, false);
      this.props.onTimingClick(false);
      setTimeout(this.setHighscore, 3000);
    }
  };

  lowerClick = () => {
    const { firstCelebNum, secondCelebNum, randData } = this.state;
    if (
      randData[secondCelebNum].followers <= randData[firstCelebNum].followers
    ) {
      this.setState({ answer: true });
      setTimeout(this.props.onClick, 2000, true);
      this.props.onTimingClick(true);
      setTimeout(this.changeCeleb, 3000);
    } else {
      this.setState({ answer: false });
      setTimeout(this.props.onClick, 2000, false);
      this.props.onTimingClick(false);
      setTimeout(this.setHighscore, 3000);
    }
  };

  // changePosition = () => {
  //   document
  //     .getElementsByClassName("secondCeleb")[0]
  //     .setAttribute("style", "right: 0");
  //   document
  //     .getElementsByClassName("thiredCeleb")[0]
  //     .setAttribute("style", "right: 50%");
  //      document
  //        .getElementsByClassName("firstCeleb")[0]
  //        .setAttribute("style", "right: 100%");
  //   setTimeout(this.changeCeleb, 1000);
  // };

  changeCeleb = () => {
    const { select } = this.props;
    const {
      firstCelebNum,
      secondCelebNum,
      thiredCelebNum,
      classicScore,
      timingScore
    } = this.state;
    this.setState({
      firstCelebNum: firstCelebNum + 1,
      secondCelebNum: secondCelebNum + 1,
      thiredCelebNum: thiredCelebNum + 1,
      answer: null
    });
    this.props.onClick(null);
    this.props.onTimingClick(null);
    select === "Classic"
      ? this.setState({ classicScore: classicScore + 1 })
      : this.setState({ timingScore: timingScore + 1 });
  };

  setHighscore = () => {
    const {
      classicScore,
      classicHighscore,
      timingScore,
      timingHighscore
    } = this.state;
    const { select } = this.props;

    if (select === "Classic") {
      if (
        classicScore > classicHighscore &&
        classicScore > localStorage.getItem("classicHighscore")
      ) {
        this.setState({ classicHighscore: classicScore });
        localStorage.setItem("classicHighscore", classicScore);
      }
    } else {
      if (
        timingScore > timingHighscore &&
        timingScore > localStorage.getItem("timingHighscore")
      ) {
        this.setState({ timingHighscore: timingScore });
        localStorage.setItem("timingHighscore", timingScore);
      }
    }

    setTimeout(this.gameOver, 500);
  };

  gameOver = () => {
    this.props.gameOver();
  };

  render() {
    const {
      firstCelebNum,
      secondCelebNum,
      thiredCelebNum,
      answer,
      classicScore,
      classicHighscore,
      timingScore,
      timingHighscore,
      randData,
      loading
    } = this.state;
    const { language, select } = this.props;

    if (loading) {
      console.log(randData[0]);
      return null;
    }
    return (
      <FullContain language={language}>
        <Container className="firstCeleb" language={language}>
          <Image
            src={require(`../../images/Celebrities/${randData[firstCelebNum].pic}`)}
          />
          <Span>
            {language === "english" ? "Followers of" : "تعداد فالوورهای"}
          </Span>
          <CelebName>
            {language === "english"
              ? randData[firstCelebNum].enName
              : randData[firstCelebNum].faName}
          </CelebName>
          <CelebFollowers>
            {language === "english"
              ? addCommasFormater(randData[firstCelebNum].followers)
              : toFaNumber(
                  addCommasFormater(randData[firstCelebNum].followers)
                )}
          </CelebFollowers>
        </Container>
        <Container className="secondCeleb" language={language}>
          <Image
            src={require(`../../images/Celebrities/${randData[secondCelebNum].pic}`)}
          />
          <Span>
            {language === "english" ? "Followers of" : "تعداد فالوورهای"}
          </Span>
          <CelebName>
            {language === "english"
              ? randData[secondCelebNum].enName
              : randData[secondCelebNum].faName}
          </CelebName>

          {answer === null ? (
            <ButtonDiv>
              <Row reverse={language === "persian" ? true : false}>
                <Column
                  grid={6}
                  phoneGrid={12}
                  alignItems={language === "persian" ? "end" : "flex-end"}
                >
                  <Button
                    backgroundColor="transparent"
                    borderWidth="2px"
                    borderRadius="2.5rem"
                    borderColor="#ffffff"
                    width="134px"
                    height="55px"
                    mobileWidth="150px"
                    mobileHeight="37px"
                    backgroundHover="#218838"
                    text={language === "persian" ? "بیشتر" : "Higher"}
                    fontWeight="500"
                    color="#ffffff"
                    onClick={this.higherClick}
                  />
                </Column>
                <Column
                  grid={6}
                  phoneGrid={12}
                  alignItems={language === "persian" ? "flex-end" : "end"}
                >
                  <Button
                    backgroundColor="transparent"
                    borderWidth="2px"
                    borderRadius="2.5rem"
                    borderColor="#ffffff"
                    width="134px"
                    height="55px"
                    mobileWidth="150px"
                    mobileHeight="37px"
                    backgroundHover="#dc3545"
                    text={language === "persian" ? "کمتر" : "Lower"}
                    fontWeight="500"
                    color="#ffffff"
                    onClick={this.lowerClick}
                  />
                </Column>
              </Row>
            </ButtonDiv>
          ) : (
            <CelebFollowers>
              {language === "english" ? (
                <CountUp
                  end={randData[secondCelebNum].followers}
                  duration={1.5}
                  separator=","
                />
              ) : (
                <CountUp
                  end={randData[secondCelebNum].followers}
                  duration={1.5}
                  separator=","
                  formattingFn={num => toFaNumber(addCommasFormater(num))}
                />
              )}
            </CelebFollowers>
          )}
        </Container>
        <Container className="thiredCeleb" language={language}>
          <Image
            src={require(`../../images/Celebrities/${randData[thiredCelebNum].pic}`)}
          />
          <Span>
            {language === "english" ? "Followers of" : "تعداد فالوورهای"}
          </Span>
          <CelebName>
            {language === "english"
              ? randData[thiredCelebNum].enName
              : randData[thiredCelebNum].faName}
          </CelebName>

          {answer === null ? (
            <ButtonDiv>
              <Button
                backgroundColor="transparent"
                borderWidth="2px"
                borderRadius="2.5rem"
                borderColor="#ffffff"
                width="134px"
                height="55px"
                backgroundHover="#218838"
                text={language === "persian" ? "بیشتر" : "Higher"}
                fontWeight="500"
                color="#ffffff"
                onClick={this.higherClick}
              />
              <Button
                backgroundColor="transparent"
                borderWidth="2px"
                borderRadius="2.5rem"
                borderColor="#ffffff"
                width="134px"
                height="55px"
                backgroundHover="#dc3545"
                text={language === "persian" ? "کمتر" : "Lower"}
                fontWeight="500"
                color="#ffffff"
                onClick={this.lowerClick}
              />
            </ButtonDiv>
          ) : (
            <CelebFollowers>
              {language === "english" ? (
                <CountUp
                  end={randData[thiredCelebNum].followers}
                  duration={1.5}
                  separator=","
                />
              ) : (
                <CountUp
                  end={randData[thiredCelebNum].followers}
                  duration={1.5}
                  separator=","
                  formattingFn={num => toFaNumber(addCommasFormater(num))}
                />
              )}
            </CelebFollowers>
          )}
        </Container>
        {select === "Classic" ? (
          <React.Fragment>
            <ScoreDiv
              type="score"
              text={language === "persian" ? "امتیاز: " : "Score: "}
              float={language === "persian" ? "left" : "right"}
              language={language === "persian" ? "persian" : "english"}
              score={classicScore}
            />
            <ScoreDiv
              type="highscore"
              text={
                language === "persian" ? "بالاترین امتیاز: " : "High Score: "
              }
              float={language === "persian" ? "right" : "left"}
              language={language === "persian" ? "persian" : "english"}
              score={
                localStorage.getItem("classicHighscore")
                  ? localStorage.getItem("classicHighscore")
                  : classicHighscore
              }
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ScoreDiv
              type="score"
              text={language === "persian" ? "امتیاز: " : "Score: "}
              float={language === "persian" ? "left" : "right"}
              language={language === "persian" ? "persian" : "english"}
              score={timingScore}
            />
            <ScoreDiv
              type="highscore"
              text={
                language === "persian" ? "بالاترین امتیاز: " : "High Score: "
              }
              float={language === "persian" ? "right" : "left"}
              language={language === "persian" ? "persian" : "english"}
              score={
                localStorage.getItem("timingHighscore")
                  ? localStorage.getItem("timingHighscore")
                  : timingHighscore
              }
            />
          </React.Fragment>
        )}
      </FullContain>
    );
  }
}

export { Celebrities };
