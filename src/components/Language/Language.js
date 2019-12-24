import React from "react";
import { LangContainer, Icon, Span } from "./Styled";

class Language extends React.Component {
  state = {};
  render() {
    const {
      languages,
      englishClick,
      persianClick,
      englishSelected,
      persianSelected
    } = this.props;
    return (
      <LangContainer>
        {languages.map((item, i) => (
          <Icon
            onClick={item.language === "English" ? englishClick : persianClick}
            selected={
              item.language === "English" ? englishSelected : persianSelected
            }
            key={i}
          >
            <Span>{item.abbreviation}</Span>
          </Icon>
        ))}
      </LangContainer>
    );
  }
}

export { Language };
