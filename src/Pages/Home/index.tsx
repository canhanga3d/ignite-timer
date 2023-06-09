import { Play } from '@phosphor-icons/react';
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './style';

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            name="task"
            id="task"
            placeholder="Dê um nome para o seu serviço"
          />
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            name="timer"
            id="minutesAmount"
            placeholder="00"
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton
          type="submit"
          aria-label="botão para começar a o ciclo da tarefa"
        >
          <Play size={24} alt="ícone de play" aria-label="ícone de play" />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
};
