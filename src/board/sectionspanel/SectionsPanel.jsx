import React from 'react';
import ButtonAddSection from '../../buttons/ButtonAddSection';
import Section from '../sectionspanel/Section';

const SectionsPanel = ({listOfSections, onAddSection, onChangeSectionTitle}) => {
    
  return (
    <div>
      {listOfSections.map(section => 
        <Section
            key={section.id}
            index={section.id}
            title={section.title}
            onChangeSectionTitle={(sectionTitle, index) => {
              onChangeSectionTitle(sectionTitle, index)
            }}
        />
      )}
      <ButtonAddSection title={'Add New Section'} onAddSection={onAddSection}/>
    </div>
  );
}

export default SectionsPanel;

