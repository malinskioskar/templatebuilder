import styled from 'styled-components';

export const StyledButton = styled.div(props => ({
    backgroundColor: 'red',
    width: 'auto',
}));

export const StyledGreenButton = styled.div(props => ({
    backgroundColor: 'green',
    width: 'auto',
}));

export const StyledBoard = styled.div(props => ({
    position: 'absolute',
    left:'100px',
    top:'100px',
    border: '2px solid grey',
  }));

export const StyledSection = styled.div(props => ({
    backgroundColor: 'blue',
    position:'relative',
    width:'300px',
    height:'auto',
    border: '5px solid grey',
}));

export const StyledTitleText = styled.input(props => ({
    padding: '0.5em',
    margin: '0.5em',
    width:'200px',
    color: 'palevioletred',
    background: 'papayawhip',
    border: '1px solid grey',
}));

export const StyledImageContainer = styled.div(props => ({

}));

export const StyledImage = styled.img(props => ({
    width:'15px',
    height:'15px',
    position:'relative'
}));

export const StyledQuestionSelectionContainer = styled.div(props => ({
    backgroundColor: 'orange',
    height: '300px',
    width: '300px',
}));

export const StyledQuestionText = styled.input(props => ({
    padding: '0.5em',
    margin: '0.5em',
    width:'200px',
    color: 'palevioletred',
    background: 'papayawhip',
    border: '1px solid grey',
}));

export const StyledSaveAnswerContainer = styled.button(props => ({
    backgroundColor: 'green',
}));

export const StyledTypeSelectionAnswer = styled.button(props => ({
    backgroundColor: `${props.colorValue}`,
    height: '20px',
    width: '300px',
}));

