import styles from '../styles/pages/proffy.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import moveIt from '../img/moveIt/move-it.png';
import home from '../img/smartStyle/home.png';
import products from '../img/smartStyle/products.png';
import login from '../img/smartStyle/login.png';
import homeLogged from '../img/smartStyle/homelogged.png';
import del from '../img/smartStyle/delete.png';
import carrinho from '../img/smartStyle/carrinho.png';
import {CarouselItem} from '../components/CarouselItem';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2550 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 2550, min: 1440 },
      items: 2
    },
    desktop2: {
        breakpoint: { max: 1440, min: 1185 },
        items: 2
    },
    desktop3: {
        breakpoint: { max: 1185, min: 768 },
        items: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

export function MoveIt(){
    return(
        <div>
            <main className={styles.container}>
                <div className={styles.description}>
                    <div className={styles.icon}>
                        <img src={moveIt} alt="Logo do Move.it" className={styles.image}/> 
                        <div className={styles.buttons}>
                           <a href='https://github.com/Alex-Ferreira-Santos/e-commerce-de-moda' className={`${styles.install} ${styles.github}`} target='_blank' rel='noopener noreferrer'>Ver no Github</a> 
                        </div>
                        
                    </div>
                    <div className={styles.detail}>
                        <h1 className={styles.title}>Move.it</h1>
                        <h3 className={styles.h3}>Uma plataforma para controle trabalho</h3>
                        <p>Move.it foi um projeto desenvolvido durante a NLW#4 feita em React</p>
                        <p className={styles.space}>A ideia do projeto era fazer uma plataforma onde a pessoa tem que fazer um exercício a cada 25 minutos para poder se manter saúdavel</p>
                        <h3 className={styles.h3}>As funcionalidades da plataforma:</h3>
                        <ul className={styles.lista}>
                            <li>Pegar avatar do GitHub</li>
                            <li>Gerar um desafio a cada 25 minutos</li>
                            <li>Desafios fisicos e com a visão</li>
                            <li>Passar de level</li>
                        </ul>  
                    </div>
                </div>
                <div className={styles.line}/>
                <h1 className={styles.imagens}>Imagens</h1> 
                <Carousel responsive={responsive} className={styles.carousel}>
                    <CarouselItem img={home} alt='imagem 1' classNa={styles.img}/>
                    <CarouselItem img={products} alt='imagem 2' classNa={styles.img}/>
                    <CarouselItem img={login} alt='imagem 3' classNa={styles.img}/>
                    <CarouselItem img={homeLogged} alt='imagem 4' classNa={styles.img}/>
                    <CarouselItem img={del} alt='imagem 5' classNa={styles.img}/>
                    <CarouselItem img={carrinho} alt='imagem 5' classNa={styles.img}/>
                </Carousel>   
            </main>
        </div>
    )
}