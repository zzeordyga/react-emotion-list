import styled from '@emotion/styled';
import React from 'react';
import { defaultInputCss, Select } from '..';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const SearchInput = styled.input`
  ${defaultInputCss}

  border: 0px solid white;
  border-radius: 0 4px 4px 0;
  padding: 8px;
  width: 50%;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const SearchBox = () => {
  return (
    <Container>
      <Select borderRadius='4px 0 0 4px' className='minimal'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </Select>
      <SearchInput type='text' name='search' placeholder='Search projects here..' />
    </Container>
  );
};
