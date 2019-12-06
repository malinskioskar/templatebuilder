import React from 'react';
import Button from '../../buttons/Button';
import Section from '../sectionspanel/Section';
import { SETTINGS } from '../../utils/Settings';
import { StyledSectionPanel } from '../../styles';

const SectionsPanel = ({listOfSections, onAddSection, onChangeSectionTitle, onClickDestroy, onClickAddQuestion}) => {
  return (
    <div>
      <StyledSectionPanel>
        {listOfSections.map(section => 
          <Section
              key={section.id}
              index={section.id}
              title={section.title}
              isOpen={section.isOpen}
              questions={section.questions}
              onChangeSectionTitle={(sectionTitle, index) => {
                onChangeSectionTitle(sectionTitle, index)
              }}
              onClickDestroy={(sectionIndex, questionIndex) => {
                onClickDestroy(sectionIndex, questionIndex)
              }}
              onClickAddQuestion={indexClicked => {
                onClickAddQuestion(indexClicked)
              }}
          />
        )}
        <Button 
          title={SETTINGS.addNewSection}
          onClick={onAddSection}
          buttonType={SETTINGS.ADD_SECTION_BUTTON_TYPE}
        />
      </StyledSectionPanel>

    </div>
  );
}

export default SectionsPanel;

