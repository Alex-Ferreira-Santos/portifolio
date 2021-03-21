import styles from '../styles/components/certificate.module.css'

export function Certificate(props){
    return(
        <div className={styles.container}>
            <img src={props.img} alt={props.nome} className={styles.img}/>
        </div>
    )
}