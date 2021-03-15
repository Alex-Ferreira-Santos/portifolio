import React from 'react';
import styles from '../styles/pages/main.module.css'
import Stack from '../components/stack'
import icon from '../img/iconSquare.png'
import reactNative from '../img/reactNative.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

function Main(){
    return(
        <div className={styles.main}>
        <main className={styles.container}>
            <div className={styles.profile}>
            <img src="https://avatars.githubusercontent.com/u/64551315?s=400&u=adfdfb80343d3add6d596032d8ed8a6cd054f8f0&v=4" alt='avatar do github' className={styles.img}/>
            <div className={styles.data}>
                <h1 className={styles.name}>Alex Ferreira Santos</h1>
                <h2 className={styles.contact}>Contato</h2>
                <p className={styles.midia}>Email: alexfstos2@gmail.com</p>
                <p className={styles.midia}>Github: <a href="https://github.com/Alex-Ferreira-Santos" className={styles.link}>Alex-Ferreira-Santos</a></p>
                <p className={styles.midia}>LinkedIn: <a href="https://www.linkedin.com/in/alex-ferreira-santos-/" className={styles.link}>alex-ferreira-santos-</a></p>
            </div>
            </div>
            <section className={styles.section}>
            <h1 className={styles.sobre}>Sobre</h1>
            <p className={styles.text}>Olá, me chamo Alex e desde cedo eu sempre gostei de técnologia, sempre tentava montar um robô nas minhas brincadeiras de infância, aos meus 14 anos eu fui descobrir o que era programação quando pesquisei no youtube “Aprender programação”, a primeira coisa que o youtube mostrou foi uma playlist de python do <a href="https://www.youtube.com/channel/UCrWvhVmt0Qac3HgsjQK62FQ" className={styles.link}>Curso em Video</a>, no qual eu sou grato dado o inicio por este mundo, a partir dai eu começei a estudar as linguagens básicas da web para ver como se fazia um site. Quando terminei a escola fui ir em busca do que fazer a partir dai, e então decidi entrar no curso de técnico de informatica para a internet do senac para poder trabalhar com técnologia, lá eu estou aprendendo diversas funcionalidades das linguagens e com isso já fiz alguns projetos, tanto para o curso tanto pessoal, você pode acompanhar meus conhecimentos e projetos com o resto da página, espero que goste.</p>
            </section>
            <section className={styles.section}>
            <h1 className={styles.title}>Técnologias Dominadas</h1>
            <h2 className={styles.subtitle}>Linguagens</h2>
                <Stack/>
            </section>
            <section className={styles.section}>
                <h1 className={styles.title}>Educação</h1>
                <h2 className={styles.subtitle}>Formação</h2>
                <div className={styles.school}>
                    <ul>
                        <li className={styles.data}>Ensino médio completo</li>
                        <li className={styles.data}>Cursando técnico em informática para a internet no Senac</li>
                    </ul> 
                </div>
                <h2 className={styles.subtitle}>Idiomas</h2>
                <div className={styles.school}>
                    <ul>
                        <li className={styles.data}>Português nativo</li>
                        <li className={styles.data}>Inglês intermediario</li>
                    </ul> 
                </div>
                
            </section>
            <section className={styles.section}>
                <h1>Projetos</h1>
                <div className={styles.carousel}>
                    <Carousel responsive={responsive}>
                        
                            <div className={styles.item}>  
                                <a href="" className={styles.project}>
                                    <img src={icon} alt="react" className={styles.itemImage}/>
                                    <p>Simpledex</p>
                                </a>
                            </div>

                        
                        <div className={styles.item}>
                            <a href="" className={styles.project}>
                            <img src={icon} alt="react" className={styles.itemImage}/>
                            <p>Simpledex</p>
                            </a>
                        </div>
                        <div className={styles.item}>
                        <a href="" className={styles.project}>
                            <img src={icon} alt="react" className={styles.itemImage}/>
                            <p>Simpledex</p>
                            </a>
                        </div>
                        <div className={styles.item}>
                            <a href="" className={styles.project}>
                            <img src={icon} alt="react" className={styles.itemImage}/>
                            <p>Simpledex</p>
                            </a>
                        </div>
                    </Carousel>
                </div>
            </section>
        </main>
        </div>
    )
}

export default Main