import styles from '../styles/components/project.module.css'

export function Project(props){
    return(
        <div className={styles.item}>  
            <a href="" className={styles.project}>
                <img src={props.img} alt={props.name} className={styles.itemImage}/>
                <p>{props.name}</p>
            </a>
        </div>
    )
}