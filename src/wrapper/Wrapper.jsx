import React, { useState } from 'react';
import Board from '../board/Board';
import { SETTINGS } from '../utils/Settings';

const Wrapper = () => {
    const [listOfSections, setListOfSections] = useState([]);

    const onAddSection = () => {
        const newSection = {
          id:Math.random(),
          title: SETTINGS.initialSectionTitle,
          isOpen: true,
          questions:[],
        }
        const newListOfSections = [...listOfSections, newSection];
        setListOfSections(newListOfSections);
    }

    const changeSectionTitle = (sectionTitle, indexClicked) => {
        const newListOfSections = [...listOfSections];
        newListOfSections.map((section) => {
            if(section.id === indexClicked) {
                section.title = sectionTitle;
            }
        });
        setListOfSections(newListOfSections);
    }

    const onChange = (event) => {
        const eventName = event.name;
        switch(eventName) {
            case SETTINGS.ADD_SECTION:
                onAddSection();
                break;
            case SETTINGS.CHANGE_SECTION_TITLE:
                changeSectionTitle(event.payload.sectionTitle, event.payload.indexClicked)
                break;
        }
    }

    return (
        <Board 
            listOfSections={listOfSections}
            onChange={onChange}>
        </Board>
    )
}
export default Wrapper;