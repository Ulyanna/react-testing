// import css from './EventBoard.module.css';
import PropTypes from 'prop-types';
import { Event } from '../Event/Event';
import { Board } from './EventBoard.styled';

export const EventBoard = ({ events }) => {
  return (
    <Board>
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </Board>
  );
};

EventBoard.prototype = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: {
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      },
    })
  ),
};
