import { css } from '@emotion/css';
import styled from '@emotion/styled';
import React, { useCallback, useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { defaultInputCss } from '..';
import { colors, fontSizes } from '../..';
import { ProjectContextDispatch } from '../../../contexts/ProjectContext';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const SearchInput = styled.input`
  ${defaultInputCss}

  border: 0px solid white;
  border-radius: 4px;
  padding: 8px;
  padding-left: 32px;
  width: 90%;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const SearchBox = () => {
  const dispatch = useContext(ProjectContextDispatch);

  const filterData = useCallback((str: string) => {
    dispatch({
      type: 'filter',
      filter: str,
    });
  }, []);

  return (
    <Container>
      <FaSearch
        className={css`
          position: absolute;
          color: ${colors.neutral};
          padding: 8px;

          @media only screen and (max-width: 540px) {
            font-size: ${fontSizes.sm};
          }
        `}
      />
      {/* <Select maxWidth={'30%'} borderRadius='4px 0 0 4px' className='minimal' placeholder='Filters'>
        <option value=''>Ongoing Projects</option>
        <option value=''>Completed Projects</option>
        <option value=''>Shooting Educational Projects</option>
      </Select> */}
      <SearchInput
        type='text'
        name='search'
        placeholder='Search projects here..'
        onKeyDown={(e) => {
          if (e.key === 'Enter') filterData((e.target as HTMLTextAreaElement).value);
        }}
      />
    </Container>
  );
};
