import React, { useState, useEffect } from 'react';
import Board from '../board/Board';
import { SETTINGS } from '../utils/Settings';
import { EVENTS } from '../utils/Events';
import Button from '../buttons/Button';
import { StyledPreOutput } from '../styles';

const Wrapper = () => {
    //TO DO: ADD FUNCTIONALITY TO EDIT/REARANGE QUESTIONS YET
    const [currentVisualState, setCurrentVisualState] = useState('');
    const [listOfSections, setListOfSections] = useState([]);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(-1);

    const onAddSection = () => {
        const newSection = {
          id:Math.random(),
          title: SETTINGS.initialSectionText,
          isOpen: true, //TO DO: I added isOpen to allow for collapsing but no time to finalize this functionality yet
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
                        index: Math.random(),
                        title: payload.questionText,
                        type: payload.questionType,
                        extraValues: payload.extraValues
                    });
                } else if (payload.questionType === 'input'){
                    section.questions.push({
                        index: Math.random(),
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

    const onClickDestroySection = (sectionIndex) => {
        const newListOfSections = listOfSections.filter(
            (section) => {return section.id !== sectionIndex}
        );
        setListOfSections(newListOfSections);
    }

    const onClickDestroyQuestion = (sectionIndex, questionIndex) => {
        const sectionToChange = listOfSections.find(
            (section) => {return section.id === sectionIndex}
        );
        const newListOfQuestions = sectionToChange.questions.filter(
            (question) => {return question.index !== questionIndex}
        );

        const newListOfSections = [...listOfSections];
        newListOfSections.map((section) => {
            if(section.id === sectionToChange.id) {
                section.questions = newListOfQuestions;
            }
        });
        setListOfSections(newListOfSections);
    }
    

    
    const onClickSaveTemplate = () => {
        setCurrentVisualState('showOutput');
    }
    
    const onChange = (event) => {
        const eventName = event.name;
        switch(eventName) {
            case EVENTS.ADD_SECTION:
                onAddSection();
                break;
            case EVENTS.CHANGE_SECTION_TITLE:
                changeSectionTitle(event.payload.sectionTitle, event.payload.indexClicked)
                break;
            case EVENTS.CLICK_ON_DESTROY:
                if (event.payload.questionIndex === -1) {
                    onClickDestroySection(event.payload.sectionIndex)
                } else if (event.payload.questionIndex !== -1) {
                    onClickDestroyQuestion(event.payload.sectionIndex, event.payload.questionIndex)
                }
                break;
            case EVENTS.CLICK_ON_ADD_QUESTION:
                setCurrentSectionIndex(event.payload.indexClicked);
                setCurrentVisualState(SETTINGS.ADDING_QUESTION_STATE);
                break;
            case EVENTS.DISMISS_QUESTION_EVENT:
                setCurrentVisualState('');
                break;
            case EVENTS.SAVE_QUESTION:
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
        
        output = <StyledPreOutput>{JSON.stringify(outputObject, null, 4)}</StyledPreOutput>;
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
    useEffect(() => {
        onAddSection();
    }, []);
    return (
        <div>
            {board}
            {saveButton}
            {output}
        </div>
    )
}
export default Wrapper;