import React from "react";
import { Container, Label } from "./Styled";

class Button extends React.Component {
  render() {
    const {
      backgroundColor,
      borderWidth,
      borderStyle,
      borderColor,
      borderRadius,
      height,
      width,
      backgroundHover,
      color,
      text,
      fontWeight,
      colorHover,
      onClick,
      mobileWidth,
      mobileHeight
    } = this.props;
    return (
      <Container
        backgroundColor={backgroundColor ? backgroundColor : "#ffffff"}
        borderWidth={borderWidth ? borderWidth : "1px"}
        borderStyle={borderStyle ? borderStyle : "solid"}
        borderColor={borderColor ? borderColor : "#000000"}
        borderRadius={borderRadius ? borderRadius : "0"}
        height={height ? height : "30px"}
        width={width ? width : "120px"}
        mobileHeight={mobileHeight ? mobileHeight : "20px"}
        mobileWidth={mobileWidth ? mobileWidth : "90px"}
        backgroundHover={backgroundHover ? backgroundHover : "#eeeeee"}
        onClick={onClick}
      >
        <Label
          color={color ? color : "#000000"}
          fontWeight={fontWeight ? fontWeight : "400"}
          colorHover={colorHover ? colorHover : color ? color : "#000000"}
        >
          {text}
        </Label>
      </Container>
    );
  }
}

export { Button };
