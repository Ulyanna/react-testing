import css from './Event.module.css';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { formatEventStart } from 'utils/formatEventStart';
import { formatEventDuration } from 'utils/formatEventDuration';
import { iconsSize } from 'constans/iconsSize';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formatedStart = formatEventStart(start);
  const formatDuration = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconsSize.sm} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={iconsSize.sm} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={iconsSize.sm} />
        {formatedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={iconsSize.sm} />
        {formatDuration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
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
