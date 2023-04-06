import PropTypes from 'prop-types';

import css from './FriendList.module.css';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={css[`${isOnline ? 'activ' : 'inactiv'}`]}></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
}

FriendsListItem.protTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
