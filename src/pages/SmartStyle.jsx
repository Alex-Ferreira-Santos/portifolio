import styles from '../styles/pages/proffy.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import artes from '../img/smartStyle/smartStyle.png';
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

export function SmartStyle(){
    return(
        <div>
            <main className={styles.container}>
                <div className={styles.description}>
                    <div className={styles.icon}>
                        <img src={artes} alt="Logo do Smart Style" className={styles.image}/> 
                        <div className={styles.buttons}>
                           <a href='https://github.com/Alex-Ferreira-Santos/e-commerce-de-moda' className={`${styles.install} ${styles.github}`} target='_blank' rel='noopener noreferrer'>Ver no Github</a> 
                        </div>
                        
                    </div>
                    <div className={styles.detail}>
                        <h1 className={styles.title}>Smart Style</h1>
                        <h3 className={styles.h3}>Um e-commerce de moda</h3>
                        <p>Smart Style foi uma atividade do meu curso que se tratava de criar um e-commerce de moda em <b>asp.net core mvc</b></p>
                        <p>Tive dificuldade na hora de colocar a função de favoritos e carrinho por ter feito com javascript e não em uma tabela no MySql</p>
                        <p className={styles.space}>Esse projeto foi desenvolvido em <b>asp.net core mvc</b> e foi aplicado também <b>bootstrap</b>, <b>AJAX</b>, <b>jquery</b>, <b>MySql</b> para as consultas.</p>
                        <h3 className={styles.h3}>As funcionalidades do site:</h3>
                        <ul className={styles.lista}>
                            <li>Ver e filtrar produtos</li>
                            <li>Inserir, atualizar, selecionar e atualizar dados dos produtos e usuários</li>
                            <li>Criar conta para autenticação</li>
                            <li>Conta adm e conta usuário</li>
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