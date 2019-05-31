import React, {Component} from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: block;
  position: absolute;
  background: #ffffff;
  z-index: 1000;
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(51,51,51,.2);
  bottom: 2.5rem;
  right: -5.5rem;
  max-width: 25rem;
  height: 320px;
  width: 400px;
`;

const RepShow = styled.div`
  display: block;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #ffffff;
  line-height: 2rem;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  text-align: center;
`;

const RepHeader = styled.div`
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 1rem;
  margin-bottom: 1rem; 
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: flex-end;
  background-color: #ffffff;
  line-height: 2rem;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  text-align: center;
  color: #2d333f;
`;

const RepBody = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 255px;
  width: 368px;
`;

const RepTxt = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
  height: 72px;
  width: 368px;
  color: #2d333f;
`;

const Form = styled.div`
  display: block;
  height: 183px;
  width:368px;
`;

const RepReason = styled.textarea`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 8px;
  height: 80px;
  width: 368px;
  overflow: auto;
  color: inherit;
  font: inherit;
  -webkit-appearance: textarea;
  background-color: white;
  -webkit-rtl-ordering: logical;
  flex-direction: column;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  border-width: 1px;
  border-style: solid;
  border-color: initial;
  border-image: initial;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-writing-mode: horizontal-tb !important; 
`;

const RepBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 1rem;
  padding-left: 1rem;
  height: 48px;
  width: 336px;
`;

const Btn1 = styled.button`
  -webkit-appearance: button;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
  font: inherit;
  margin: 0;
  align-items: flex-start;
  text-align: center;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  -webkit-writing-mode: horizontal-tb !important;
  width: 150px;
  margin-right: 16px;
  padding: .75rem 1rem;
  text-decoration: none;
  background-color: #da3743;
  color: #ffffff;
  border: none;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  border-radius: 2px;
  display: inline-block;
  box-sizing: border-box;
`;

const Btn2 = styled.button`
  -webkit-appearance: button;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
  font: inherit;
  margin: 0;
  align-items: flex-start;
  text-align: center;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  -webkit-writing-mode: horizontal-tb !important;
  width: 150px;
  margin-right: 16px;
  margin-right: 0;
  padding: calc(.75rem - 1px) calc(1rem - 1px);
  border: 1px solid #d8d9db;
  text-decoration: none;
  font-weight: 500;
  border-radius: 2px;
  color: #2d333f;
  display: inline-block;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 1rem;
  line-height: 1.5;
`;



class Report extends React.Component {

  render () {

    return (
 
      <Box>
        <RepShow>
          <RepHeader>Report this review as inappropriate?</RepHeader>
          <RepBody>
          <RepTxt>If you believe this review should be removed from OpenTable, please let us know and someone will investigate.</RepTxt>
            <Form action="/feedback/reviews/report" method="post">
              <RepReason name="reason" required="required" placeholder="Tell us why you find the review inappropriate"></RepReason>
              <RepBtn>
                <Btn1 type="submit">Report</Btn1>
                <Btn2 onClick={(e) => this.props.handleCancel(e)} >Cancel</Btn2>
              </RepBtn>
            </Form>
          </RepBody>
        </RepShow> 
      </Box>     
    )
  }
};

export default Report;