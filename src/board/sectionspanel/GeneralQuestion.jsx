import React from 'react';
import { StyledGeneralQuestion } from '../../styles';

const GeneralQuestion = ({title, type}) => {
  return (
    <StyledGeneralQuestion>
        TITLE:{title}-----TYPE:{type}
    </StyledGeneralQuestion>
  );
}


export default GeneralQuestion;
