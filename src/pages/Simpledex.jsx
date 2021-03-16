import styles from '../styles/pages/simpledex.module.css';
import simpledex from '../img/iconSquare.png'

export function Simpledex(){
    return(
        <div>
            <main className={styles.container}>
                <img src={simpledex} alt="Icone do Simpledex" className={styles.image}/> 
                <h1 className={styles.title}>Simpledex</h1>
               
            </main>
        </div>
    )
}