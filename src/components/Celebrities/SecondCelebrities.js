import React from "react";
import { Container, CelebFollowers, CelebName, Image, Span } from "./Styled";
import { toFaNumber } from "../../utils/faNumberConvertor";
import { addCommasFormater } from "../../utils/addCommasFormater";

class FirstCelebrities extends React.Component {
  state = { firstCeleb: {} };

  componentDidMount() {
    const { data } = this.props;
    let randNum = Math.floor(Math.random() * data.length);
    console.log(data[randNum]);
    this.setState({ firstCeleb: data[randNum] });
  }

  render() {
    const { firstCeleb } = this.state;
    const { language } = this.props;
    while (firstCeleb.pic === undefined) return null;
    return (
      <Container>
        <React.Fragment>
          <Image src={require(`../../images/Celebrities/${firstCeleb.pic}`)} />
          <Span>
            {language === "english" ? "Followers of" : "تعداد فالوورهای"}
          </Span>
          <CelebName>
            {language === "english" ? firstCeleb.enName : firstCeleb.faName}
          </CelebName>
          <CelebFollowers>
            {language === "english" ? (
              <CountUp
                end={firstCeleb.followers}
                duration={1.5}
                separator=","
              />
            ) : (
              <CountUp
                end={firstCeleb.followers}
                duration={1.5}
                separator=","
                formattingFn={num => toFaNumber(addCommasFormater(num))}
              />
            )}
          </CelebFollowers>
        </React.Fragment>
      </Container>
    );
  }
}

export { FirstCelebrities };
