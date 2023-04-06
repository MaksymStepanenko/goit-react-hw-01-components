import Profile from './Profile/Profile';
import user from '../user.json';
import Statistics from './Statistics/Statistics';
import data from '../data.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import { Container } from './app.styled';

export const App = () => {
  return (
    <Container>
      {' '}
      <div>
        <h2>Profile</h2>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <h2>Statistics</h2>
        <Statistics title="Upload stats" stats={data} />
        <h2>Friend List</h2>
        <FriendList friends={friends} />
        <h2>Transactions History</h2>
        <TransactionHistory data={transactions} />
      </div>
    </Container>
  );
};