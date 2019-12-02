import React from 'react';
import SectionsPanel from './sectionspanel/SectionsPanel';
import { StyledBoard } from '../styles';
import { SETTINGS } from '../utils/Settings';

const Board = ({listOfSections, onChange}) => {

  let panel;
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
    />
  return (
    <StyledBoard>
        {panel}
    </StyledBoard>
  );
}

export default Board;