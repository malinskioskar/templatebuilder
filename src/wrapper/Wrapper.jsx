import React, { useState } from 'react';
import Board from '../board/Board';
import { SETTINGS } from '../utils/Settings';
import Button from '../buttons/Button';

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

    const onAddQuestion = (payload) => {
        const newListOfSections = [...listOfSections];
        newListOfSections.map((section) => {
            if(section.id === currentSectionIndex) {
                if (payload.questionType === 'boolean') {
                    section.questions.push({
                        index: section.questions.length,
                        title: payload.questionText,
                        type: payload.questionType,
                        extraValues: payload.extraValues
                    });
                } else if (payload.questionType === 'input'){
                    section.questions.push({
                        index: section.questions.length,
                        title: payload.questionText,
                        type: payload.questionType,
                        extraValues: payload.extraValues
                    });
                }
                
            }
        });
        setListOfSections(newListOfSections);
        setCurrentVisualState('');
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

    const onClickSaveTemplate = () => {
        setCurrentVisualState('showOutput');
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
            case SETTINGS.SAVE_QUESTION:
                onAddQuestion(event.payload);
                break;
        }
    }

    let shouldWeShowSaveButton = false;
    if (listOfSections.length > 0) {
        listOfSections.map((section) => {
            if(section.questions.length > 0) {
                shouldWeShowSaveButton = true;
            }
        });
    }
    let output;
    let outputObject = [];
    if (currentVisualState === 'showOutput') {
        listOfSections.map((section) => {
            const questionsList = [];
            for (let i = 0; i < section.questions.length; i++) {
                const currentQuestion = section.questions[i];
                if (currentQuestion.type === 'boolean') {
                    questionsList.push({
                        type:currentQuestion.type,
                        question:currentQuestion.title,
                        answers:currentQuestion.extraValues
                    });
                } else if (currentQuestion.type === 'input') {
                    questionsList.push({
                        type:currentQuestion.type,
                        question:currentQuestion.title,
                        max_characters:currentQuestion.extraValues[0]
                    });
                }
                
            }
            outputObject.push({
                title:section.title,
                questions:questionsList
            });
        });
        output = <div>{JSON.stringify(outputObject)}</div>
    }
    let saveButton;
    if (shouldWeShowSaveButton && outputObject.length === 0) {
        saveButton = 
            <Button 
                title={SETTINGS.SAVE_TEMPLATE_BUTTON_TITLE}
                onClick={onClickSaveTemplate}
                buttonType={SETTINGS.SAVE_TEMPLATE_BUTTON_TYPE}
            />
    }

    let board;
    if(outputObject.length === 0) {
    board = 
        <Board 
            listOfSections = {listOfSections}
            currentVisualState = {currentVisualState}
            onChange={onChange}
        />
    }
    return (
        <div>
            {board}
            {saveButton}
            {output}
        </div>
    )
}
export default Wrapper;