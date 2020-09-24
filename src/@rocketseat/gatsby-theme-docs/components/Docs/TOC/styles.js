import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  order: 2;

  padding-top: 72px;
  max-height: calc(100vh - 72px);
  overflow-y: auto;
  width: 100%;
  max-width: 200px;

  @media (max-width: 1200px) {
    position: relative;
    top: auto;
    order: 0;
    max-width: 100%;
    margin-left: 0;
    padding-top: 0;
  }
`;

export const Container = styled.div`
  h2 {
    font-size: 14px;
    font-weight: bold;
    margin-top: 0rem;
    border: none;
    margin: 0 0 16px 0;
  }

  nav ul {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    li {
      margin-bottom: 12px;
      line-height: 1.1;

      a {
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        transition: all 0.4s;

        &:hover {
          font-weight: 500;

        }
      
      }
    }
  }

  @media (max-width: 1200px) {
    margin: 0 0 24px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(120, 117, 122, 0.2);
  }
`;
