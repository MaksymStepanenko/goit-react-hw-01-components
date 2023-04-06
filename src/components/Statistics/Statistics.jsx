import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.wrapp}>
      {title && <h2 className={css.title}>{title}</h2>}
      <StatisticsList stats={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
