import css from './FriendListItem.module.css';


export const FriendListItem = ({ avatar, name, isOnline, id }) => (
    
    <li key={id} className={css.item}>
        <span className={css.status} style={{ background: isOnline ? 'green': 'red'  }}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
</li>
)
