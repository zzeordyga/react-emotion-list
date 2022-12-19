import { css } from '@emotion/css';
import { number } from 'prop-types';
import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { colors, fontSizes } from '../../../components';
import { Card } from '../../../components/Containers';
import { LoadingSpinner } from '../../../components/Loading/Spinner';
import { ProjectContext } from '../../../contexts/ProjectContext';
import { Project } from '../../../types';
import { ProjectCard } from './ProjectCard';

const linkCss = css`
  min-width: 2vw;
  list-style: none;
  padding: 12px;
  background-color: ${colors.light};

  @media only screen and (max-width: 700px) {
    font-size: ${fontSizes.xs};
  }

  @media only screen and (max-width: 540px) {
    font-size: ${fontSizes.xxs};
  }
`;

const ProjectList = (props: { itemsPerPage: number }) => {
  const { data, loading } = useContext(ProjectContext);

  const [itemOffset, setItemOffset] = useState(0);

  const { itemsPerPage } = props;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = (data as Project[]).slice(itemOffset, endOffset);
  const pageCount = Math.ceil((data as Project[]).length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % (data as Project[]).length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div>
        <Card
          display='flex'
          justifyContent='space-evenly'
          backgroundColor={colors.secondary}
          color={colors.light}
          className={css`
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 4px;
            justify-content: center;
            align-items: center;

            & > * {
              text-align: center;
            }

            @media screen and (max-width: 540px) {
              & > * {
                margin-left: 16px;
              }
            }
          `}
        >
          <span>Name</span>
          <span>Type</span>
          <span>Status</span>
          <span>Created At</span>
        </Card>
        {loading ? (
          <LoadingSpinner />
        ) : (
          currentItems?.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
      <ReactPaginate
        breakLabel='...'
        nextLabel='Next'
        className={css`
          position: absolute;
          bottom: 20px;
          width: 80%;

          @media only screen and (max-width: 700px) {
            bottom: 10px;
          }

          @media only screen and (max-width: 600px) {
            /* width: 100%; */
            margin-top: 32px;
            position: relative;
            /* margin-left: 0; */
            display: flex;
            justify-content: center;
            text-align: center;
            /* justify-content: spa; */
          }
        `}
        pageClassName={css`
          display: inline-block;
        `}
        activeLinkClassName={css`
          background-color: ${colors.secondary};
        `}
        previousClassName={css`
          display: inline-block;
        `}
        previousLinkClassName={css`
          ${linkCss};
          border-radius: 4px 0 0 4px;

          @media only screen and (max-width: 500px) {
            /* position: absolute; */
            left: 0;
            bottom: 0;
            border-radius: 4px;
            font-size: ${fontSizes.xs};
            margin: 0 16px;
            padding: 8px;
          }
        `}
        nextClassName={css`
          display: inline-block;
        `}
        nextLinkClassName={css`
          ${linkCss}
          border-radius: 0 4px 4px 0;

          @media only screen and (max-width: 500px) {
            /* position: absolute; */
            /* right: 0%; */
            left: 68.5%;
            bottom: 0;
            border-radius: 4px;
            font-size: ${fontSizes.xs};
            margin: 0 16px;
            padding: 8px;
          }
        `}
        breakClassName={css`
          display: inline-block;

          @media only screen and (max-width: 500px) {
            display: none;
          }
        `}
        breakLinkClassName={css`
          ${linkCss}
        `}
        pageLinkClassName={css`
          ${linkCss}

          @media only screen and (max-width: 500px) {
            display: none;
          }
        `}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel='Previous'
      />
    </>
  );
};

export default ProjectList;

ProjectList.propTypes = {
  itemsPerPage: number,
};
