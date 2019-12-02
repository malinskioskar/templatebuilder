import React, { useState } from 'react';
import Board from '../board/Board';
import { SETTINGS } from '../utils/Settings';

const Wrapper = () => {
    const [currentVisualState, setCurrentVisualState] = useState('');
    const [listOfSections, setListOfSections] = useState([]);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(-1);

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

    const onClickDestroySection = (indexClicked) => {
        const newListOfSections = listOfSections.filter(
            (section) => {return section.id !== indexClicked}
        );
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
            case SETTINGS.CLICK_ON_DESTROY_SECTION:
                onClickDestroySection(event.payload.indexClicked)
                break;
            case SETTINGS.CLICK_ON_ADD_QUESTION:
                setCurrentSectionIndex(event.payload.indexClicked);
                setCurrentVisualState(SETTINGS.ADDING_QUESTION_STATE);
                break;
            case SETTINGS.DISMISS_QUESTION_EVENT:
                setCurrentVisualState('');
                break;
        }
    }

    return (
        <Board 
            listOfSections={listOfSections}
            currentVisualState = {currentVisualState}
            onChange={onChange}>
        </Board>
    )
}
export default Wrapper;