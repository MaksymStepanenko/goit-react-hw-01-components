import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionLineItem({ type, amount, currency }) {
  return (
    <tr>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
}

TransactionLineItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
