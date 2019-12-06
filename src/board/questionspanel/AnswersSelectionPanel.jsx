import React, {useState}  from 'react';
import { StyledTypeSelectionAnswer, StyledSaveAnswerButton, StyledAnswerTitleType, StyledAnswerBoolText } from '../../styles';
import { SETTINGS } from '../../utils/Settings';
import { EVENTS } from '../../utils/Events';

const AnswersSelectionPanel = ({questionTypes, saveAnswers}) => {
  const [currentAnswerTypeSelection, setCurrentAnswerTypeSelection] = useState('');
  const [firstAnswer, setFirstAnswer] = useState('');
  const [secondAnswer, setSecondAnswer] = useState('');
  const [maxCharacters, setMaxCharacters] = useState(0);

  const handleChangeAnswerType = (type) => {
    setCurrentAnswerTypeSelection(type);
  }

  const checkWhatColor = (type) => {
    return type === currentAnswerTypeSelection ? 'grey' : 'white'
  }

  let typeSelectionAnswer;
  if (currentAnswerTypeSelection === '') {
    typeSelectionAnswer = 
    <div>
      {questionTypes.map(question => 
        <StyledTypeSelectionAnswer 
          key={question.type}
          colorValue={checkWhatColor(question.type)}
          onClick={() => handleChangeAnswerType(question.type)}
        >
            {question.type}
        </StyledTypeSelectionAnswer>
      )}
    </div>
  } else if (currentAnswerTypeSelection === 'boolean') {
    typeSelectionAnswer = 
    <div>
      <StyledAnswerBoolText type='text' 
          placeholder={SETTINGS.FIRST_ANSWER_PLACEHOLDER}
          onChange={(event) => {
            setFirstAnswer(event.target.value);
          }}
      />
      <StyledAnswerBoolText type='text' 
          placeholder={SETTINGS.SECOND_ANSWER_PLACEHOLDER}
          onChange={(event) => {
            setSecondAnswer(event.target.value);
          }}
      />
      <StyledSaveAnswerButton onClick={() => {
        saveAnswers(currentAnswerTypeSelection, firstAnswer, secondAnswer);
      }}>
        {EVENTS.SAVE_QUESTION}
      </StyledSaveAnswerButton>
    </div>
  } else if (currentAnswerTypeSelection === 'input') {
    typeSelectionAnswer = 
    <div>
      <StyledAnswerBoolText type='text' 
          placeholder={SETTINGS.MAX_CHARACTERS_ANSWER_PLACEHOLDER}
          onChange={(event) => {
            setMaxCharacters(event.target.value);
          }}
      />
      <StyledSaveAnswerButton onClick={() => {
        saveAnswers(currentAnswerTypeSelection, maxCharacters);
      }}>
        {EVENTS.SAVE_QUESTION}
      </StyledSaveAnswerButton>
    </div>
  }

  let selectAnswerTypeText;
  if(currentAnswerTypeSelection === '') {
    selectAnswerTypeText = 
    <StyledAnswerTitleType>
      {SETTINGS.SELECT_ANSWER_TYPE}
    </StyledAnswerTitleType>
  }

  return (
    <div>
        {selectAnswerTypeText}
        {typeSelectionAnswer}
    </div>
  );
}


export default AnswersSelectionPanel;