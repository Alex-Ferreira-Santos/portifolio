import styles from '../styles/components/stack.module.css'

export function Language(props){
    return (
        <div className={`${styles.containerLanguage} ${props.css} ${props.delay} ${props.show}`} onClick={()=>{
            props.set1(false)
            props.set2(props.tech)
            setTimeout(()=>{
                props.set1(true)
            })
            }} onMouseOver={()=>{
                props.set3('')
            }}>
            <div className={styles.center}>
                <img src={props.img} alt={props.name} className={styles.image}/>
                <p className={styles.lgn}>{props.name}</p>
            </div> 
        </div>
    )
}