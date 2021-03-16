import styles from '../styles/pages/simpledex.module.css';
import simpledex from '../img/iconSquare.png'

export function Simpledex(){
    return(
        <div>
            <main className={styles.container}>
                <img src={simpledex} alt="Icone do Simpledex" className={styles.image}/> 
                <div >
                  <h1 className={styles.title}>Simpledex</h1>
                    <div>
                        <h3 className={styles.h3}>Uma pokédex simples com dados de seus pokémons favoritos.</h3>
                        <p>Simpledex é uma pokédex feita por um fã criada para você poder ver os dados de todos os seus pokémons favoritos.</p>
                        <p>Na listagem de pokémons é possível filtrá-los por elemento para ser mais fácil de encontrar o pokémon desejado.</p>
                        <p className={styles.space}>O app contem um modo escuro para as pessoas que preferem.</p>
                        <h3 className={styles.h3}>A Simpledex contem:</h3>
                        <ul className={styles.lista}>
                            <li>Os elementos</li>
                            <li>Hp, ataque, defesa, ataque-especial, defesa-especial e velocidade inicial</li>
                            <li>As versões shiny</li>
                            <li>A lista de movimentos</li>
                            <li>O nome das habilidades</li>
                            <li>Até a altura e peso</li>
                        </ul>
                    </div>  
                </div>
            </main>
        </div>
    )
}