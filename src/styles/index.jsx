import styled from 'styled-components';

export const StyledSectionButton = styled.div(props => ({
    backgroundColor: 'red',
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