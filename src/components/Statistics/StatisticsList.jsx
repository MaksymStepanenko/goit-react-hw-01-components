import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function StatisticsList({ stats }) {
  return (
    <ul className={css.list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
