import styled from 'styled-components';

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 1rem 0px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    color: ${(props) => props.theme['gray-100']};
  }

  @media screen and (min-width: 700px) {
    padding: 5.6rem;
  }
`;
export const HistoryList = styled.div`
  width: 100%;
  overflow: auto;
  margin-top: 3.2rem;
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1.6rem;
      text-align: left;
      font-size: 1.4rem;
      line-height: 1.6;
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 2.4rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 2.4rem;
      }
    }
    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1.6rem;
      font-size: 1.4rem;
      line-height: 1.6;
      &:first-child {
        padding-left: 2.4rem;
        width: 45%;
      }
      &:last-child {
        padding-right: 2.4rem;
      }
    }
  }
`;
