import { PageTitle } from '../components/PageTitle/PageTitle';
import { EventBoard } from '../components/EventBoard/EventBoard';
import events from '../events';

export const App = () => {
  return (
    <>
      <PageTitle text="Loren ipsum dolar 24h conference" />
      <EventBoard events={events} />
    </>
  );
};
