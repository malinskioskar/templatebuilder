import React from 'react';
import SectionsPanel from './sectionspanel/SectionsPanel';
import QuestionsPanel from './questionspanel/QuestionsPanel';
import { StyledBoard } from '../styles';
import { SETTINGS } from '../utils/Settings';

const Board = ({listOfSections, currentVisualState, onChange}) => {

  let panel;
  if (currentVisualState === '') {
    panel = 
      <SectionsPanel 
        listOfSections={listOfSections}
        onAddSection={() => onChange(
          {
            name:SETTINGS.ADD_SECTION,
            payload: {}
          }
        )}
        onChangeSectionTitle={(sectionTitle, indexClicked) => onChange(
          {
            name:SETTINGS.CHANGE_SECTION_TITLE,
            payload: {
              sectionTitle,
              indexClicked
            }
          }
        )}
        onClickDestroy={(indexClicked) => onChange(
          {
            name:SETTINGS.CLICK_ON_DESTROY_SECTION,
            payload: {
              indexClicked
            }
          }
        )}
        onClickAddQuestion={(indexClicked) => onChange(
          {
            name:SETTINGS.CLICK_ON_ADD_QUESTION,
            payload: {
              indexClicked
            }
          }
        )}
        
      />
    } else if (currentVisualState === SETTINGS.ADDING_QUESTION_STATE) {
      panel = 
        <QuestionsPanel onDismissQuestion={() => onChange(
            {
              name:SETTINGS.DISMISS_QUESTION_EVENT,
              payload: {}
            }
          )}
        />
    }
  return (
    <StyledBoard>
        {panel}
    </StyledBoard>
  );
}

export default Board;