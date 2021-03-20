import styles from '../styles/pages/simpledex.module.css';
import cronometro from '../img/cronometro/cronometro.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {CarouselItem} from '../components/CarouselItem'
import main from '../img/cronometro/main.jpg';
import pause from '../img/cronometro/pause.jpg';
import save from '../img/cronometro/save.jpg';
import apk from '../apk/Cronometro.apk'

const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 768 },
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

export function Cronometro(){
    return(
        <div>
            <main className={styles.container}>
            <div className={styles.description}>
                    <div className={styles.icon}>
                        <img src={cronometro} alt="Logo do Cronômetro" className={styles.image} style={{backgroundColor:'white'}}/> 
                        <div className={styles.buttons}>
                            <a href={apk} download='Cronômetro' className={styles.install}>Baixar</a> 
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <h1 className={styles.title}>Cronômetro</h1>
                        <p>Esse projeto é o primeiro exercicio feito em react native</p>
                        <p className={styles.space}>A ideia era fazer um cronômetro onde podesse salvar o registro</p>
                        <h3 className={styles.h3}>As funcionalidades do app:</h3>
                        <ul className={styles.lista}>
                            <li>iniciar a contagem</li>
                            <li>pausar a contagem</li>
                            <li>salvar o ultimo registro</li>
                        </ul>  
                    </div>
                </div>
                <div className={styles.line}/>
                <h1 className={styles.imagens}>Imagens</h1> 
                <Carousel responsive={responsive} className={styles.carousel}>
                    <CarouselItem img={main} alt='imagem 1' classNa={styles.img}/>
                    <CarouselItem img={pause} alt='imagem 2' classNa={styles.img}/>
                    <CarouselItem img={save} alt='imagem 3' classNa={styles.img}/>
                </Carousel>    
            </main>
        </div>
    )
}