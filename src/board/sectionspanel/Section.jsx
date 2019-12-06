import React from 'react';
import { StyledSection, StyledInputText, StyledImage, StyledSectionTitleText } from '../../styles';
import closeImage from '../removeIcon.png';
import { SETTINGS } from '../../utils/Settings';
import Button from '../../buttons/Button';
import GeneralQuestion from './GeneralQuestion';

const Section = ({index, title, isOpen, questions, onChangeSectionTitle, onClickDestroy, onClickAddQuestion}) => {
  let addQuestionButton;
  let listOfQuestions;
  if (isOpen) {
    addQuestionButton = 
    <Button 
      title={SETTINGS.addNewQuestion}
      onClick={() => {onClickAddQuestion(index)}}
      buttonType={SETTINGS.ADD_QUESTION_BUTTON_TYPE}
    />
    listOfQuestions = questions.map(question => 
      <GeneralQuestion 
        key={question.index}
        index={question.index}
        title={question.title}
        type={question.type}
        sectionIndex={index}
        onClickDestroy={(sectionIndex, questionIndex) => onClickDestroy(sectionIndex, questionIndex)}
      />
    )
  }
  return (
    <div>
        <StyledSection>
          <StyledImage onClick={()=> onClickDestroy(index, -1)}
              src={closeImage} 
            />
          <StyledSectionTitleText>
            {SETTINGS.initialSectionTitle}
          </StyledSectionTitleText>
          <StyledInputText 
              placeholder={title}
              onChange={(event) => {
                onChangeSectionTitle(event.target.value, index);
              }}
          />
          {listOfQuestions}
          {addQuestionButton}
        </StyledSection>
        
    </div>
  );
}

export default Section;
