import styled from 'styled-components';

export const StyledButton = styled.div`
  display: block;
  width: 90%;
  padding: 18px 0;
  margin: 10px auto 0;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #9696b6;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const StyledTypeSelectionAnswer = styled(StyledButton)`
  margin: 24px auto 0;
  width: 100%;
  padding: 10px 0;
  background-color: #9696b6;
`;

export const StyledSaveAnswerButton = styled(StyledButton)`
  width: 50%;
  padding: 12px 0;
  background-color: #9696b6;
`;

export const StyledExportButton = styled(StyledButton)`
  width: 20%;
  background-color: #3f3f5a;
`;

export const StyledGreenButton = styled(StyledButton)`
  width: 30%;
  padding: 6px 0;
  background-color: #b4b4cb;
  margin: 12px auto 0;
`;

export const StyledTemplateTitle = styled.h2`
  padding-top: 16px;
  padding-bottom: 16px;
  display: inline-block;
  font-size: 20px;
  text-decoration: none;
  color: #aaa;
  transition: color 0.25s ease-in;
  &:hover {
    color: #777;
  }
`;

export const StyledSectionTitleText = styled.p`
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
  padding-bottom: 2px;
  padding: 6px 0;
  display: inline-block;
  font-size: 20px;
  text-decoration: none;
  color: #1f1f2d;
  transition: color 0.25s ease-in;
  &:hover {
    color: #777;
  }
`;

export const StyledQuestionTitleText = styled(StyledSectionTitleText)`
`;

export const StyledQuestionTitle = styled.span`
  padding-top: 4px;
  padding-bottom: 2px;
  display: block;
  font-size: 20px;
  text-decoration: none;
  color: #1f1f2d;
  font-family: inherit;
`;

export const StyledQuestionType = styled(StyledQuestionTitle)`
`;

export const StyledAnswerTitleType = styled(StyledQuestionTitle)`
  padding-top: 16px;
  font-size: 20px;
  color: #1f1f2d;
`;

export const StyledBoard = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 500px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
`;

export const StyledSectionPanel = styled(StyledBoard)`
  width: 80%;
  border-radius: 20px;
  padding-right: 32px;
  padding-left: 32px;
`;

export const StyledSection = styled(StyledBoard)`
  width: 100%;
  border-radius: 10px;
  background-color: #d1d1e0;
`;

export const StyledGeneralQuestion = styled.div`
  width: 100%;
  border-radius: 2px;
  background-color: #d1d1e0;
  border-color: #d2d2e0;
`;

export const StyledQuestionSelectionContainer = styled(StyledBoard)`
  width: 400px;
  border-radius: 5px;
  padding-right: 32px;
  padding-left: 32px;
  background-color: #d1d1e0;
`;

export const StyledInputText = styled.input`
  padding: 7px 0;
  width: 95%;
  font-family: inherit;
  font-size: 18px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const StyledQuestionText = styled(StyledInputText)`
`;

export const StyledAnswerBoolText = styled(StyledInputText)`
`;

export const StyledImage = styled.img`
  height: 30px;
  width: 30px;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
  padding-left: 90%;
  opacity: 0.75;
`;

export const StyledCloseImage = styled(StyledImage)`
  padding-left: 100%;
`;

export const StyledPreOutput = styled.pre`
    display: block;
    padding: 10px 30px;
    margin: 0;
    overflow: scroll;
    fontFamily: monospace;
`;

