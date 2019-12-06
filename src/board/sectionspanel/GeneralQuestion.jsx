import React from 'react';
import { StyledGeneralQuestion, StyledImage, StyledQuestionTitle, StyledQuestionType  } from '../../styles';
import closeImage from '../removeIcon.png';
import { SETTINGS } from '../../utils/Settings';

const GeneralQuestion = ({index, title, type, onClickDestroy, sectionIndex}) => {
  return (
    <StyledGeneralQuestion>
      <StyledImage onClick={()=> onClickDestroy(sectionIndex, index)}
        src={closeImage} 
      />
      <StyledQuestionTitle>{SETTINGS.QUESTION_TEXT_FOR_SECTION}{title}</StyledQuestionTitle>
      <StyledQuestionType>{SETTINGS.QUESTION_TYPE_FOR_SECTION}{type}</StyledQuestionType>
    </StyledGeneralQuestion>
  );
}


export default GeneralQuestion;
