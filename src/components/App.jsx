import css from './App.module.css';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';


export const App = () => {
  const {
    avatar: userAvatar,
    username: userName,
    tag: userTag,
    location: userLocation,
    stats: userStats,
  } = user;


  return (
    <div>
      <Profile
        avatar={userAvatar}
        username={userName}
        tag={userTag}
        location={userLocation}
        stats={userStats} 
      />
      <Statistics/>
    </div>
  );
};
