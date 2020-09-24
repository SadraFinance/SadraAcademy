import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px ;
  

  display: grid;
  grid-template-columns: calc(100% - 300px) 280px;
  grid-auto-flow: row;
  grid-gap: 30px;

  @media (max-width: 780px) {
    padding: 24px;
    grid-template-columns: 100%;
  }
`;



export const Main = styled.main`
  height: 100%;
  padding-top: 36px;
  width: 100%;
  direction: rtl;

  display: flex;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 780px) {
    padding-top: 0;
  }
`;

export const Children = styled.div`
  width: 100%;
  max-width: calc(90% - 64px);
  padding-left: 64px;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding-left: 0;
    
  }
`;
