import React from 'react';
import { StyledSection, StyledTitleText, StyledImage, StyledImageContainer } from '../../styles';
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
        title={question.title}
        type={question.type}
      />
    )
  }
  return (
    <div>
        <StyledSection>
            <StyledImage onClick={()=> onClickDestroy(index)}
              src={closeImage} 
            />
          <StyledTitleText 
              placeholder={title}
              onChange={(event) => {
                onChangeSectionTitle(event.target.value, index);
              }}
          />
        </StyledSection>
        {listOfQuestions}
        {addQuestionButton}
    </div>
  );
}

export default Section;
