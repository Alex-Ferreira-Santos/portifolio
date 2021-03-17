import styles from '../styles/pages/artesDeLineh.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import artes from '../img/artes/logo.png';
import main from '../img/artes/main.png';
import produtos from '../img/artes/produtos.png';
import encomendas from '../img/artes/encomendas.png';
import login from '../img/artes/login.png';
import menu from '../img/artes/menu.png';
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

export function ArtesDeLineh(){
    return(
        <div>
            <main className={styles.container}>
                <div className={styles.description}>
                    <div className={styles.icon}>
                        <img src={artes} alt="Logo do Artes de Lineh" className={styles.image}/> 
                        <div className={styles.buttons}>
                           <a href='https://github.com/Alex-Ferreira-Santos/primeiro-projeto-integrador' className={`${styles.install} ${styles.github}`} target='_blank' rel='noopener noreferrer'>Ver no Github</a> 
                        </div>
                        
                    </div>
                    <div className={styles.detail}>
                        <h1 className={styles.title}>Artes de Lineh</h1>
                        <h3 className={styles.h3}>Um e-commerce de artes e produtos</h3>
                        <p>Artes de Lineh foi o primeiro projeto integrador do meu curso, e para isso eu criei um site que minha irmã queria para poder anunciar os produtos dela.</p>
                        <p className={styles.space}>Esse foi o primeiro projeto grande que eu fiz e fui aprimorando um pouco ao longo do tempo.</p>
                        <p className={styles.space}>Esse projeto foi desenvolvido em <b>asp.net core mvc</b> e foi aplicado também <b>bootstrap</b>, <b>jquery</b>, <b>MySql</b> para as consultas.</p>
                        <h3 className={styles.h3}>As funcionalidades do site:</h3>
                        <ul className={styles.lista}>
                            <li>Ver produtos e desenhos</li>
                            <li>Inserir, atualizar, selecionar e atualizar dados dos produtos e usuários</li>
                            <li>Criar conta para autenticação</li>
                            <li>Conta adm e conta usuário</li>
                            <li>Fazer encomendas para aparecer na listagem</li>
                        </ul>  
                    </div>
                </div>
                <div className={styles.line}/>
                <h1 className={styles.imagens}>Imagens</h1> 
                <Carousel responsive={responsive} className={styles.carousel}>
                    <CarouselItem img={main} alt='imagem 1' classNa={styles.img}/>
                    <CarouselItem img={produtos} alt='imagem 2' classNa={styles.img}/>
                    <CarouselItem img={encomendas} alt='imagem 3' classNa={styles.img}/>
                    <CarouselItem img={login} alt='imagem 4' classNa={styles.img}/>
                    <CarouselItem img={menu} alt='imagem 5' classNa={styles.img}/>
                </Carousel>   
            </main>
        </div>
    )
}