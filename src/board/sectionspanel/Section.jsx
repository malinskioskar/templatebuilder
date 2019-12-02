import React from 'react';
import { StyledSection, StyledTitleText, StyledImage, StyledImageContainer } from '../../styles';
import closeImage from '../removeIcon.png';

const Section = ({index, title, onChangeSectionTitle, onClickDestroy}) => {
  return (
    <div>
        <StyledSection>
          <StyledImageContainer onClick={()=> onClickDestroy(index)}>
              <StyledImage 
                src={closeImage} 
              />
          </StyledImageContainer>
          <StyledTitleText 
              placeholder={title}
              onChange={(event) => {
                onChangeSectionTitle(event.target.value, index);
              }}
          />
        </StyledSection>
    </div>
  );
}

export default Section;