import styles from '../styles/pages/proffy.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import happy from '../img/happy/happy.png';
import home from '../img/happy/home.png';
import form from '../img/happy/form.png';
import mapa from '../img/happy/mapa.png';
import detail from '../img/happy/detail.png';
import mapaMobile from '../img/happy/mapaMobile.jpg';
import formMobile from '../img/happy/formMobile.jpg';
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

export function Happy(){
    return(
        <div>
            <main className={styles.container}>
                <div className={styles.description}>
                    <div className={styles.icon}>
                        <img src={happy} alt="Logo da proffy" className={styles.image}/> 
                        <div className={styles.buttons}>
                           <a href='https://github.com/Alex-Ferreira-Santos/Happy' className={`${styles.install} ${styles.github}`} target='_blank' rel='noopener noreferrer'>Ver no Github</a> 
                        </div>
                        
                    </div>
                    <div className={styles.detail}>
                        <h1 className={styles.title}>Happy</h1>
                        <h3 className={styles.h3}>Uma plataforma de conexão com orfanatos para doações</h3>
                        <p>Happy foi um projeto full stack feito no evento NLW#3 da <a href="https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg" target='_blank' rel='noopener noreferrer'>Rocketseat</a></p>
                        <p className={styles.space}>O projeto foi feito em <b>React, React Native</b> e uma <b>API em Node</b>.</p>
                        <p className={styles.space}>A ideia do projeto era orfanatos se cadastrarem para que pessoas podessem ver no mapa os orfanatos pertos de sua região para fazer doações.</p>
                        <h3 className={styles.h3}>As funcionalidades da plataforma:</h3>
                        <ul className={styles.lista}>
                            <li>Cadastrar orfanatos</li>
                            <li>Navegar pelo mapa</li>
                            <li>Entrar em contato com o orfanato por whatsapp</li>
                        </ul>  
                    </div>
                </div>
                <div className={styles.line}/>
                <h1 className={styles.imagens}>Imagens</h1> 
                <Carousel responsive={responsive} className={styles.carousel}>
                    <CarouselItem img={home} alt='imagem 1' classNa={styles.img}/>
                    <CarouselItem img={mapa} alt='imagem 3' classNa={styles.img}/>
                    <CarouselItem img={form} alt='imagem 2' classNa={styles.img}/>
                    <CarouselItem img={detail} alt='imagem 2' classNa={styles.img}/>
                    <CarouselItem img={mapaMobile} alt='imagem 4' classNa={styles.imgVertical}/>
                    <CarouselItem img={formMobile} alt='imagem 5' classNa={styles.imgVertical}/>
                </Carousel>   
            </main>
        </div>
    )
}