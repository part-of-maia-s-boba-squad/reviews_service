import React, {Component} from 'react';
import styled from 'styled-components';

const Toolbar = styled.div`
  height: 190px;
  width: 519px;
`;

const SortBy = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
  height: 24px;
  width: 519px;
`;

const DropDown = styled.div`
  width: 18rem;
  margin: 0.5rem 0;
  padding: 0;
  height: 38px;
  width: 288px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0.25rem;
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
  cursor: pointer;
  overflow: hidden;
  display: inline;
  position: relative;
  border-radius: 0;
  border: none;
`;

const Select = styled.select`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
  height: 30px;
  width: 278px;
  font-size: 0.875rem;
  border-radius: 2px;
  border: 1px solid #d8d9db;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {border: 2px solid #da3743;}
`;

const Keys = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  height: 108px;
  width: 519px;
`;

const KeyUnfiltered = styled.label`
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 1px solid #d8d9db;
  background: none;
  box-sizing: border-box;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: .125rem;
  height: 20px;
  width: 130px;
  &:hover {border: 2px solid #da3743;}
`;

const Rev1 = styled.span`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
  height: 20px;
  width: 130px;
`;

const Square = styled.input`
  &: before {
  content: " ";
  display: inherit;
  height: 1.125rem;
  width: 1.125rem;
  margin-right: 0.5rem;
  box-sizing: border-box;
  padding: 0;
  }
`;


class Sorting extends React.Component {

  render() { 

    return (
      <Toolbar>
        <SortBy>Sort by</SortBy>

        <DropDown>
          <Box>
            <Select onChange={(e) => this.props.handleChange(e)}>
              <option className="far fa-circle" name="Newest">Newest</option>
              <option name="Highest Rating">Highest Rating</option>
              <option name="Lowest Rating">Lowest Rating</option>
            </Select>
          </Box>
        </DropDown>
        <SortBy>Filters</SortBy>
        <Keys>
          <span className="key">
            <KeyUnfiltered>
              <Square type="checkbox"/>
              <Rev1>Good for groups</Rev1>
            </KeyUnfiltered>
          </span>

          <span className="key">
            <KeyUnfiltered>
              <Square type="checkbox"/>
              <Rev1>Calamari</Rev1>
            </KeyUnfiltered>
          </span>

          <span className="key">
            <KeyUnfiltered>
              <Square type="checkbox"/>
              <Rev1>Duck Entree</Rev1>
            </KeyUnfiltered>
          </span>

          <span className="key">
            <KeyUnfiltered>
              <Square type="checkbox"/>
              <Rev1>Dumplings</Rev1>
            </KeyUnfiltered>
          </span>
        </Keys>
      </Toolbar>
    )
  }
};
export default Sorting;