import styles from '../styles/pages/artesDeLineh.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import artes from '../img/artes/logo.png';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2550 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 2550, min: 1024 },
      items: 5
    },
    desktop2: {
        breakpoint: { max: 1024, min: 768 },
        items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

export function ArtesDeLineh(){
    return(
        <div>
            <main className={styles.container}>
                <div className={styles.description}>
                    <div className={styles.icon}>
                        <img src={artes} alt="Logo do Artes de Lineh" className={styles.image}/> 
                        <div className={styles.buttons}>
                           <a href='#' className={styles.install}>Baixar Projeto</a>
                           <a href='https://github.com/Alex-Ferreira-Santos/primeiro-projeto-integrador' className={`${styles.install} ${styles.github}`} >Ver no Github</a> 
                        </div>
                        
                    </div>
                    <div className={styles.detail}>
                        <h1 className={styles.title}>Artes de Lineh</h1>
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
                <div className={styles.line}/>
                <h1 className={styles.imagens}>Imagens</h1> 
                <Carousel responsive={responsive} className={styles.carousel}>
                    <div></div>
                </Carousel>   
            </main>
        </div>
    )
}