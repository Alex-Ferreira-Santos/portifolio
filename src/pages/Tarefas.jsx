import styles from '../styles/pages/simpledex.module.css';
import tarefas from '../img/tarefas/tarefas.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {CarouselItem} from '../components/CarouselItem'
import main from '../img/tarefas/main.jpg';
import insert from '../img/tarefas/insert.jpg';
import edit from '../img/tarefas/edit.jpg';
import delet from '../img/tarefas/delete.jpg';
import apk from '../apk/Tarefas.apk'

const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1024 },
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

export function Tarefas(){
    return(
        <div>
            <main className={styles.container}>
            <div className={styles.description}>
                    <div className={styles.icon}>
                        <img src={tarefas} alt="Logo das Tarefas" className={styles.image} style={{backgroundColor:'white'}}/> 
                        <div className={styles.buttons}>
                            <a href={apk} download='Tarefas' className={styles.install}>Baixar</a> 
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <h1 className={styles.title}>Organizador de Tarefas</h1>
                        <p>Esse projeto é o segundo exercicio feito em react native</p>
                        <p className={styles.space}>O objetivo era um app de organização de tarefas</p>
                        <h3 className={styles.h3}>As funcionalidades do app:</h3>
                        <ul className={styles.lista}>
                            <li>criar uma tarefa</li>
                            <li>concluir tarefa</li>
                            <li>editar e excluir a tarefa</li>
                            <li>Checar se a tarefa está atrasada</li>
                        </ul>  
                    </div>
                </div>
                <div className={styles.line}/>
                <h1 className={styles.imagens}>Imagens</h1> 
                <Carousel responsive={responsive} className={styles.carousel}>
                    <CarouselItem img={main} alt='imagem 1' classNa={styles.img}/>
                    <CarouselItem img={insert} alt='imagem 2' classNa={styles.img}/>
                    <CarouselItem img={edit} alt='imagem 3' classNa={styles.img}/>
                    <CarouselItem img={delet} alt='imagem 4' classNa={styles.img}/>
                </Carousel>    
            </main>
        </div>
    )
}