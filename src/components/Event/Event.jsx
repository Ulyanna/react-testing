// import css from './Event.module.css';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { formatEventStart } from 'utils/formatEventStart';
import { formatEventDuration } from 'utils/formatEventDuration';
import { iconsSize } from 'constans/iconsSize';
import { Card, CardName, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formatedStart = formatEventStart(start);
  const formatDuration = formatEventDuration(start, end);
  return (
    <Card>
      <CardName>{name}</CardName>
      <Info>
        <FaMapMarkerAlt size={iconsSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconsSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconsSize.sm} />
        {formatedStart}
      </Info>
      <Info>
        <FaClock size={iconsSize.sm} />
        {formatDuration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

Event.prototype = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
