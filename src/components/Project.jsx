import styles from '../styles/components/project.module.css'
import {Link} from 'react-router-dom'

export function Project(props){
    return(
        <div className={styles.item}>  
            <Link to={props.route} className={styles.project}>
                <img src={props.img} alt={props.name} className={styles.itemImage}/>
                <p>{props.name}</p>
            </Link>
        </div>
    )
}