import React from 'react';
import { StyledSection, StyledTitleText, StyledImage, StyledImageContainer } from '../../styles';
import closeImage from '../removeIcon.png';
import { SETTINGS } from '../../utils/Settings';
import Button from '../../buttons/Button';

const Section = ({index, title, isOpen, onChangeSectionTitle, onClickDestroy, onClickAddQuestion}) => {
  let addQuestionButton;
  if (isOpen) {
    addQuestionButton = 
    <Button 
      title={SETTINGS.addNewQuestion}
      onClick={() => {onClickAddQuestion(index)}}
      buttonType={SETTINGS.ADD_QUESTION_BUTTON_TYPE}
    />
  }
  return (
    <div>
        <StyledSection>
          <StyledImageContainer onClick={()=> onClickDestroy(index)}>
              <StyledImage 
                src={closeImage} 
              />
          </StyledImageContainer>
          <StyledTitleText 
              placeholder={title}
              onChange={(event) => {
                onChangeSectionTitle(event.target.value, index);
              }}
          />
        </StyledSection>
        {addQuestionButton}
    </div>
  );
}

export default Section;