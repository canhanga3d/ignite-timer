import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;
  }
`;
export const FormContainer = styled.div`
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.8rem;
  font-weight: bold;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.8rem;
  @media screen and (min-width: 670px) {
    flex-direction: row;
  }
`;
const BaseInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  height: 2.5rem;
  font-weight: bold;
  font-size: 1.8rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  transition: border-bottom 0.8s ease-in-out;

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${(props) => props.theme['green-500']};
    transition: border-bottom 0.8s ease-in-out;
  }
  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
    text-align: center;
  }
`;
export const TaskInput = styled(BaseInput)`
  width: 100%;
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;
export const MinutesAmountInput = styled(BaseInput)`
  width: 6.5rem;
`;

export const CountdownContainer = styled.div`
  color: ${(props) => props.theme['gray-100']};
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  display: flex;

  gap: 0.5rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 0.5rem 0.1rem;
  }

  @media screen and (min-width: 670px) {
    font-size: 16rem;
    line-height: 12.8rem;
    gap: 1.6rem;
    span {
      padding: 3.2rem 1.6rem;
      background-color: ${(props) => props.theme['gray-700']};
    }
  }
`;
export const Separator = styled.div`
  color: ${(props) => props.theme['green-500']};
  overflow: hidden;
  width: 2rem;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 670px) {
    width: 6.4rem;
    padding: 3.2rem 0;
  }
`;
export const StartCountdownButton = styled.button`
  background: ${(props) => props.theme['green-500']};
  border: 1px solid ${(props) => props.theme['gray-100']};
  border-radius: 8px;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  gap: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.8s ease-in-out, color 0.8s ease-in-out,
    border 0.8s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media screen and (min-width: 1200px) {
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['green-500']};
    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      border: 1px solid ${(props) => props.theme['gray-100']};
      color: ${(props) => props.theme['white']};
      transition: background 0.8s ease-in-out, color 0.8s ease-in-out,
        border 0.8s ease-in-out;
    }
  }
`;
