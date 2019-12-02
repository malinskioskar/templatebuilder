import React from 'react';
import { StyledSection, StyledTitleText } from '../../styles';

const Section = ({index, title, onChangeSectionTitle}) => {
  return (
    <div>
        <StyledSection>
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