import styles from '../styles/pages/proffy.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import proffy from '../img/proffy/proffy.png';
import main from '../img/proffy/main.png';
import form from '../img/proffy/form.png';
import aulas from '../img/proffy/aulas.png';
import mainMobile from '../img/proffy/mainMobile.jpg';
import aulasMobile from '../img/proffy/aulasMobile.jpg';
import aulasFiltro from '../img/proffy/aulasFiltro.jpg';
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

export function Proffy(){
    return(
        <div>
            <main className={styles.container}>
                <div className={styles.description}>
                    <div className={styles.icon}>
                        <img src={proffy} alt="Logo da proffy" className={styles.image}/> 
                        <div className={styles.buttons}>
                           <a href='https://github.com/Alex-Ferreira-Santos/Proffy-Omnistack' className={`${styles.install} ${styles.github}`} target='_blank' rel='noopener noreferrer'>Ver no Github</a> 
                        </div>
                        
                    </div>
                    <div className={styles.detail}>
                        <h1 className={styles.title}>Proffy</h1>
                        <h3 className={styles.h3}>Uma plataforma de conexão entre alunos e professores</h3>
                        <p>Proffy foi um projeto full stack feito no evento NLW#2 da <a href="https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg" target='_blank' rel='noopener noreferrer'>Rocketseat</a></p>
                        <p className={styles.space}>Esse projeto teve a versão em <b>HTML, CSS, JS e SQLite</b> e outra versão em <b>React, React Native</b> e uma <b>API em Node</b>.</p>
                        <p className={styles.space}>A ideia do projeto era professores se cadastrarem com suas habilidades para alunos irem buscar seus conhecimentos com um professor diretamente.</p>
                        <h3 className={styles.h3}>As funcionalidades da plataforma:</h3>
                        <ul className={styles.lista}>
                            <li>Ver os professores</li>
                            <li>Cadastrar professores(apenas web)</li>
                            <li>Filtrar os porfessores</li>
                            <li>Adicionar aos favoritos(apenas mobile)</li>
                            <li>Entrar em contato com o professor por whatsapp</li>
                        </ul>  
                    </div>
                </div>
                <div className={styles.line}/>
                <h1 className={styles.imagens}>Imagens</h1> 
                <Carousel responsive={responsive} className={styles.carousel}>
                    <CarouselItem img={main} alt='imagem 1' classNa={styles.img}/>
                    <CarouselItem img={form} alt='imagem 2' classNa={styles.img}/>
                    <CarouselItem img={aulas} alt='imagem 3' classNa={styles.img}/>
                    <CarouselItem img={mainMobile} alt='imagem 4' classNa={styles.imgVertical}/>
                    <CarouselItem img={aulasMobile} alt='imagem 5' classNa={styles.imgVertical}/>
                    <CarouselItem img={aulasFiltro} alt='imagem 6' classNa={styles.imgVertical}/>
                </Carousel>   
            </main>
        </div>
    )
}