import styles from '../styles/pages/simpledex.module.css';
import simpledex from '../img/simpledex/iconSquare.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../img/simpledex/foto-pt-1.jpg';
import img2 from '../img/simpledex/foto-pt-2.jpg';
import img3 from '../img/simpledex/foto-pt-3.jpg';
import img4 from '../img/simpledex/foto-pt-4.jpg';
import img5 from '../img/simpledex/foto-pt-5.jpg';
import img6 from '../img/simpledex/foto-pt-6.jpg';
import apk from '../apk/Simpledex.apk'

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

export function Simpledex(){
    return(
        <div>
            <main className={styles.container}>
                <div className={styles.description}>
                    <div className={styles.icon}>
                        <img src={simpledex} alt="Icone do Simpledex" className={styles.image}/> 
                        <a href={apk} download='Simpledex' className={styles.install}>Baixar</a>
                    </div>
                    <div className={styles.detail}>
                        <h1 className={styles.title}>Simpledex</h1>
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
                    <div style={{textAlign:'center'}}>
                        <img src={img1} alt="imagem 1" className={styles.img}/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={img2} alt="imagem 2" className={styles.img}/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={img3} alt="imagem 3" className={styles.img}/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={img4} alt="imagem 4" className={styles.img}/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={img5} alt="imagem 5" className={styles.img}/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={img6} alt="imagem 6" className={styles.img}/>
                    </div>
                </Carousel>    
            </main>
        </div>
    )
}