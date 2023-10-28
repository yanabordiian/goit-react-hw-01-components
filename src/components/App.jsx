import css from './App.module.css';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/statistics-data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  const {
    avatar: userAvatar,
    username: userName,
    tag: userTag,
    location: userLocation,
    stats: userStats,
  } = user;


  return (
    <div className={css.app}>
      <Profile
        avatar={userAvatar}
        username={userName}
        tag={userTag}
        location={userLocation}
        stats={userStats} 
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
      
    </div>
  );
};
