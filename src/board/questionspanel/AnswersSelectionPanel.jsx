import React, {useState}  from 'react';
import { StyledTypeSelectionAnswer, StyledSaveAnswerContainer } from '../../styles';

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
      <input type='text' 
          placeholder={'First Answer'}
          onChange={(event) => {
            setFirstAnswer(event.target.value);
          }}
      />
      <input type='text' 
          placeholder={'Second Answer'}
          onChange={(event) => {
            setSecondAnswer(event.target.value);
          }}
      />
      <StyledSaveAnswerContainer onClick={() => {
        saveAnswers(currentAnswerTypeSelection, firstAnswer, secondAnswer);
      }}>
        SAVE
      </StyledSaveAnswerContainer>
    </div>
  } else if (currentAnswerTypeSelection === 'input') {
    typeSelectionAnswer = 
    <div>
      <input type='text' 
          placeholder={'Max Characters'}
          onChange={(event) => {
            setMaxCharacters(event.target.value);
          }}
      />
      <StyledSaveAnswerContainer onClick={() => {
        saveAnswers(currentAnswerTypeSelection, maxCharacters);
      }}>
        SAVE
      </StyledSaveAnswerContainer>
    </div>
  }
  return (
    <div>
        <div>SELECT ANSWER TYPE:</div>
        {typeSelectionAnswer}
    </div>
  );
}


export default AnswersSelectionPanel;