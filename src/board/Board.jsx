import React, {useState, useEffect} from 'react';
import SectionsPanel from './sectionspanel/SectionsPanel';
import QuestionsPanel from './questionspanel/QuestionsPanel';
import { StyledBoard, StyledTemplateTitle } from '../styles';
import { SETTINGS } from '../utils/Settings';
import { EVENTS } from '../utils/Events';

const Board = ({listOfSections, currentVisualState, onChange}) => {
  const [questionTypes, setQuestionTypes] = useState([]);
  
  async function fetchData() {
    const res = await fetch('question_types_response.json');
    res
        .json()
        .then(data => {
            setQuestionTypes(data);
        });
  }
  useEffect(() => {
      fetchData()
  }, []);

  let panel;
  if (currentVisualState === '') {
    panel = 
      <SectionsPanel 
        listOfSections={listOfSections}
        onAddSection={() => onChange(
          {
            name:EVENTS.ADD_SECTION,
            payload: {}
          }
        )}
        onChangeSectionTitle={(sectionTitle, indexClicked) => onChange(
          {
            name:EVENTS.CHANGE_SECTION_TITLE,
            payload: {
              sectionTitle,
              indexClicked
            }
          }
        )}
        onClickDestroy={(sectionIndex, questionIndex) => onChange(
          {
            name:EVENTS.CLICK_ON_DESTROY,
            payload: {
              sectionIndex,
              questionIndex
            }
          }
        )}
        onClickAddQuestion={(indexClicked) => onChange(
          {
            name:EVENTS.CLICK_ON_ADD_QUESTION,
            payload: {
              indexClicked
            }
          }
        )}
        
      />
    } else if (currentVisualState === SETTINGS.ADDING_QUESTION_STATE) {
      panel = 
        <QuestionsPanel 
          questionTypes={questionTypes}
          onDismissQuestion={() => onChange(
            {
              name:EVENTS.DISMISS_QUESTION_EVENT,
              payload: {}
            }
          )}
          onSaveQuestion={(questionText, questionType, extraValues) => onChange(
            {
              name:EVENTS.SAVE_QUESTION, 
              payload: {
                questionText,
                questionType,
                extraValues
              }
            }
          )}
        />
    }
  return (
    <StyledBoard>
        <StyledTemplateTitle>
          {SETTINGS.templateName}
        </StyledTemplateTitle>
        {panel}
    </StyledBoard>
  );
}

export default Board;