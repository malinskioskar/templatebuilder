import React from 'react';
import { StyledGeneralQuestion, StyledImage } from '../../styles';
import closeImage from '../removeIcon.png';

const GeneralQuestion = ({index, title, type, onClickDestroy, sectionIndex}) => {
  return (
    <StyledGeneralQuestion>
      <StyledImage onClick={()=> onClickDestroy(sectionIndex, index)}
        src={closeImage} 
      />
        TITLE:{title}-----TYPE:{type}
    </StyledGeneralQuestion>
  );
}


export default GeneralQuestion;
