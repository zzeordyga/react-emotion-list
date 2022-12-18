import styled from '@emotion/styled';
import React, { useContext } from 'react';
import {
  CenteredContainer,
  GradientContainer,
  SemiTransparentContainer,
  Flexbox,
  Card,
} from '../components/Containers';
import { SubTitle, Title } from '../components/Typography';
import { Select } from '../components/Inputs/index';
import { colors, fontSizes } from '../components/index';
import { Props } from '../types';
import { SearchBox } from '../components/Inputs/SearchBox';
import { ProjectContext, ProjectContextDispatch } from '../contexts/ProjectContext';

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
  const data = useContext(ProjectContext);
  const dispatch = useContext(ProjectContextDispatch);

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
                    onChange={() => console.log('Say something')}
                    placeholder='Sort By'
                  >
                    <option>Sort By</option>
                    <option value='2'>Yes</option>
                    <option value='3'>Yes</option>
                  </Select>
                </Flexbox>
              </Title>
            </Header>
            <Card backgroundColor={colors.neutral}>
              <span>Name</span>
              <span>Type</span>
              <span>Status</span>
              <span>Created At</span>
            </Card>
          </SemiTransparentContainer>
        </section>
      </CenteredContainer>
    </GradientContainer>
  );
};
