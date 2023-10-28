import css from './Statistics.module.css';
import { getRandomHexColor } from 'components/randomColor';

export const Statistics = ({ title, stats }) => (
    <section className={css.statistics}>
        {title ? <h2 className={css.title}>{title}</h2>: null}
  

        <ul className={css.statList}>
            
            {stats.map(item => (
                <li className={css.statItem}
                    key={item.id}
                    style={{ background: getRandomHexColor() }}
                >
                
                    <span className={css.label}>{item.label}</span>
                    <span className={css.percentage}>{item.percentage}%</span>
    </li>
            ))
            }


        </ul>
</section>
)

