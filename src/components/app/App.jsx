import { PageTitle } from '../PageTitle/PageTitle';
import { EventBoard } from '../EventBoard/EventBoard';
import { Container } from './App.styled';
import { ThemeProvider } from '@emotion/react';
import events from '../../events';
import { theme } from '../../utils/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PageTitle text="Loren ipsum dolar 24h conference" />
        <EventBoard events={events} />
      </Container>
    </ThemeProvider>
  );
};
