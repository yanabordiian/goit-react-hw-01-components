import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => (
    <ul className={css.friendsList}>
        {friends.map(item => (
            <FriendListItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
                id={item.id}
            />
     ))}   
   </ul>
)