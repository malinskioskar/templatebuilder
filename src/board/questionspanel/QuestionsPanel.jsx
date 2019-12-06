import React, {useState} from 'react';
import { StyledQuestionSelectionContainer, StyledCloseImage, StyledQuestionText, StyledQuestionTitleText } from '../../styles';
import closeImage from '../removeIcon.png';
import { SETTINGS } from '../../utils/Settings';
import AnswersSelectionPanel from './AnswersSelectionPanel';

const QuestionsPanel = ({questionTypes, onDismissQuestion, onSaveQuestion}) => {
   const [currentQuestionText, setCurrentQuestionText] = useState('');

   const saveAnswers = (type, ...rest) => {
    if (type === 'boolean') {
      onSaveQuestion(currentQuestionText, type, [rest[0],rest[1]]);
    } else if (type === 'input') {
      onSaveQuestion(currentQuestionText, type, [rest[0]]);
    }
  }

   return (
    <StyledQuestionSelectionContainer> 
        <StyledCloseImage onClick={onDismissQuestion}
            src={closeImage} 
        />
        <StyledQuestionTitleText>
            {SETTINGS.initialQuestionTitle}
        </StyledQuestionTitleText>
        <StyledQuestionText 
            placeholder={SETTINGS.QUESTION_PLACEHOLDER}                 
            onChange={(event) => {
                setCurrentQuestionText(event.target.value);
            }}
        />
        <AnswersSelectionPanel 
            questionTypes={questionTypes}
            saveAnswers={saveAnswers}
        />
    </StyledQuestionSelectionContainer>
  );
}


export default QuestionsPanel;