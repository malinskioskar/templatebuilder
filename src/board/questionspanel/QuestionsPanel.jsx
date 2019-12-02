import React from 'react';
import { StyledQuestionSelectionContainer, StyledImageContainer, StyledImage } from '../../styles';
import closeImage from '../removeIcon.png';

const QuestionsPanel = ({onDismissQuestion}) => {
   return (
    <StyledQuestionSelectionContainer> 
        <StyledImageContainer onClick={onDismissQuestion}>
            <StyledImage 
              src={closeImage} 
            />
        </StyledImageContainer>
      QUESTIONS_PANEL
    </StyledQuestionSelectionContainer>
  );
}


export default QuestionsPanel;