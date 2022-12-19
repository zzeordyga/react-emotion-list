import styled from '@emotion/styled';
import React, { ChangeEvent, useCallback, useContext } from 'react';
import {
  CenteredContainer,
  GradientContainer,
  SemiTransparentContainer,
  Flexbox,
} from '../components/Containers';
import { SubTitle, Title } from '../components/Typography';
import { Select } from '../components/Inputs/index';
import { Props } from '../types';
import { SearchBox } from '../components/Inputs/SearchBox';
import ProjectList from './components/ProjectList';
import { fontSizes } from '../components';
import { ProjectContextDispatch } from '../contexts/ProjectContext';
import { SortType } from '../types/project';

const TitleName = styled.span`
  font-weight: normal;
`;

const Header = styled.header<Props>`
  text-align: left;
  margin-bottom: 24px;

  @media only screen and (max-width: 540px) {
    margin: ${(props) => (props.margin ? props.margin : '0')};
  }
`;

export const Home = () => {
  const dispatch = useContext(ProjectContextDispatch);

  const sortList = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'sort',
      sort: parseInt(e.target.value),
    });
  }, []);

  return (
    <GradientContainer>
      <CenteredContainer>
        <Header margin={'0 24px'}>
          <Title>
            Hello, <TitleName>Ziggy!</TitleName>
          </Title>
          <SubTitle>Here are the projects available!</SubTitle>
        </Header>
        <section>
          <SemiTransparentContainer minHeight='80vh'>
            <Header>
              <Title fontSize={fontSizes.sm}>
                <Flexbox justifyContent='space-between' switchDirection={true} flexDirection='row'>
                  <SearchBox />
                  <Select
                    className='minimal'
                    onChange={sortList}
                    placeholder='Sort By'
                    defaultValue={-1}
                  >
                    <option value={SortType.Default}>Sort By</option>
                    <option value={SortType.Ascending}>Ascending (Created Date)</option>
                    <option value={SortType.Descending}>Descending (Created Date)</option>
                  </Select>
                </Flexbox>
              </Title>
            </Header>
            <ProjectList itemsPerPage={8} />
          </SemiTransparentContainer>
        </section>
      </CenteredContainer>
    </GradientContainer>
  );
};
