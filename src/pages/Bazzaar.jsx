import styles from '../styles/pages/simpledex.module.css';
import bazzaar from '../img/bazzaar/bazzaar.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {CarouselItem} from '../components/CarouselItem'
import main from '../img/bazzaar/main.jpg';
import products from '../img/bazzaar/products.jpg';
import welcome from '../img/bazzaar/welcome.jpg';
import card from '../img/bazzaar/card.jpg';
import apk from '../apk/Bazzaar.apk'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2550 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 2550, min: 1024 },
      items: 4
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

export function Bazzaar(){
    return(
        <div>
            <main className={styles.container}>
            <div className={styles.description}>
                    <div className={styles.icon}>
                        <img src={bazzaar} alt="Logo do Bazzaar" className={styles.image}/> 
                        <div className={styles.buttons}>
                            <a href={apk} download='Bazzaar' className={styles.install}>Baixar</a> 
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <h1 className={styles.title}>Bazzaar</h1>
                        <p>Bazzaar foi um exercicio do curso que o objetivo era adaptar um site da web para mobile</p>
                        <p className={styles.space}>O projeto foi feito em react-native com react-navigation</p>
                        <h3 className={styles.h3}>As funcionalidades do app:</h3>
                        <ul className={styles.lista}>
                            <li>Navegação entre as abas</li>
                            <li>filtrar os produtos</li>
                        </ul>  
                    </div>
                </div>
                <div className={styles.line}/>
                <h1 className={styles.imagens}>Imagens</h1> 
                <Carousel responsive={responsive} className={styles.carousel}>
                    <CarouselItem img={main} alt='imagem 1' classNa={styles.img}/>
                    <CarouselItem img={products} alt='imagem 2' classNa={styles.img}/>
                    <CarouselItem img={welcome} alt='imagem 3' classNa={styles.img}/>
                    <CarouselItem img={card} alt='imagem 4' classNa={styles.img}/>
                </Carousel>    
            </main>
        </div>
    )
}