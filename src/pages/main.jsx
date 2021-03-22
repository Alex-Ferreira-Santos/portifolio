import React,{useEffect,useState} from 'react';
import styles from '../styles/pages/main.module.css'
import Stack from '../components/stack'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Project} from '../components/Project'

import simpledex from '../img/simpledex/iconSquare.png'
import logo from '../img/artes/logo.png'
import proffy from '../img/proffy/proffy.png'
import happy from '../img/happy/happy.png'
import smartStyle from '../img/smartStyle/smartStyle.png'
import cronometro from '../img/cronometro/cronometro.png'
import tarefas from '../img/tarefas/tarefas.png'
import moveIt from '../img/moveIt/move-it.png'
import bazzaar from '../img/bazzaar/bazzaar.png'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
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

function Main(){
    const [show,setShow] = useState('')
    const [showTec,setShowTec] = useState('')
    const [showEducation,setShowEducation] = useState('')
    const [showProject,setShowProject] = useState('')

    useEffect(()=>{
        setShow(styles.show)
        window.onscroll = () => ShowScroll()
    },[])

    function ShowScroll(){
        const height = document.documentElement.scrollTop
        if(height > 500){
            setShowTec(styles.show)
        }
        if(height > 800){
            setShowEducation(styles.show)
        }
        if(window.innerWidth > 425){
            if(height > 2100){
                setShowProject(styles.show)
            }
        }else{
            if(height > 1800){
                setShowProject(styles.show)
            }
        }
        
    }
        
    

    return(
        <div className={styles.main}>
        <main className={styles.container}>
            <div className={styles.profile}>
            <img src="https://avatars.githubusercontent.com/u/64551315?s=400&u=adfdfb80343d3add6d596032d8ed8a6cd054f8f0&v=4" alt='avatar do github' className={styles.img}/>
            <div className={styles.data}>
                <h1 className={styles.name}>Alex Ferreira Santos</h1>
                <h2 className={styles.contact}>Contato</h2>
                <p className={styles.midia}>Email: alexfstos2@gmail.com</p>
                <p className={styles.midia}>Github: <a href="https://github.com/Alex-Ferreira-Santos" target='_blank' rel='noopener noreferrer' className={styles.link}>Alex-Ferreira-Santos</a></p>
                <p className={styles.midia}>LinkedIn: <a href="https://www.linkedin.com/in/alex-ferreira-santos-/" target='_blank' rel='noopener noreferrer' className={styles.link}>alex-ferreira-santos-</a></p>
            </div>
            </div>
            <section className={`${styles.section} ${show}`}>
            <h1 className={styles.sobre}>Sobre</h1>
            <p className={styles.text}>Olá, me chamo Alex e desde cedo eu sempre gostei de técnologia, sempre tentava montar um robô nas minhas brincadeiras de infância, aos meus 14 anos eu fui descobrir o que era programação quando pesquisei no youtube “Aprender programação”, a primeira coisa que o youtube mostrou foi uma playlist de python do <a href="https://www.youtube.com/channel/UCrWvhVmt0Qac3HgsjQK62FQ" target='_blank' rel='noopener noreferrer' className={styles.link}>Curso em Video</a>, no qual eu sou grato dado o inicio por este mundo, a partir dai eu começei a estudar as linguagens básicas da web para ver como se fazia um site. Quando terminei a escola fui ir em busca do que fazer a partir dai, e então decidi entrar no curso de técnico de informatica para a internet do senac para poder trabalhar com técnologia, lá eu estou aprendendo diversas funcionalidades das linguagens e com isso já fiz alguns projetos, tanto para o curso tanto pessoal, você pode acompanhar meus conhecimentos e projetos com o resto da página, espero que goste.</p>
            </section>
            <section className={`${styles.section} ${showTec}`}>
            <h1 className={styles.title}>Técnologias Dominadas</h1>
            <h2 className={styles.subtitle}>Principal Stack</h2>
                <Stack/>
            </section>
            <section className={`${styles.section} ${showEducation}`}>
                <h1 className={styles.title}>Educação</h1>
                <h2 className={styles.subtitle}>Formação</h2>
                <div className={styles.school}>
                    <ul>
                        <p className={styles.listItem}>Ensino médio completo</p>
                        <p className={styles.listItem}>Cursando técnico em informática para a internet no Senac</p>
                    </ul> 
                </div>
                <h2 className={styles.subtitle}>Cursos</h2>
                <div className={styles.course}>
                    <div className={styles.institution}>
                        <h3 className={styles.listTitle}><a href="https://www.youtube.com/channel/UCrWvhVmt0Qac3HgsjQK62FQ" target='_blank' rel='noopener noreferrer' className={styles.link}>Curso em video</a></h3>
                        <p className={styles.dataInside}>Curso de Python3 básico</p>
                        <p className={styles.dataInside}>Curso de PHP para iniciantes</p>
                        <p className={styles.dataInside}>Curso de POO PHP</p>   
                        <p className={styles.dataInside}>Curso de HTML5</p> 
                        <p className={styles.dataInside}>Curso de Javascript</p> 
                        <p className={styles.dataInside}>Curso de Word 2016</p> 
                        <p className={styles.dataInside}>Curso de Excel 2016</p> 
                        <p className={styles.dataInside}>Curso de Git e GitHub</p> 
                    </div> 
                    <div className={styles.institution}>
                        <h3 className={styles.listTitle}><a href="https://www.ev.org.br/#cursos" target='_blank' rel='noopener noreferrer' className={styles.link}>Fundação Bradesco</a></h3> 
                        <p className={styles.dataInside}>HTML, CSS na prática</p>
                        <p className={styles.dataInside}>Inovando com CSS</p> 
                        <p className={styles.dataInside}>Introdução ao Javascript</p> 
                        <p className={styles.dataInside}>Linguagem de programação C# básico e avançado</p> 
                        <p className={styles.dataInside}>Linguagem de programação Java básico</p> 
                        <p className={styles.dataInside}>Microsoft Word 2016 básico, intermediario e avançado</p> 
                        <p className={styles.dataInside}>Microsoft Excel 2016 básico, intermediario e avançado</p> 
                    </div>                 
                    <div className={styles.institution}>
                        <h3 className={styles.listTitle}><a href="https://www.linkedin.com/learning/me" target='_blank' rel='noopener noreferrer' className={styles.link}>LinkedIn Learning</a></h3>
                        <p className={styles.dataInside}>HTML Essencial Learning</p> 
                        <p className={styles.dataInside}>Learning Python</p> 
                    </div>
                    <div className={styles.institution}>
                        <h3 className={styles.listTitle}><a href="https://rocketseat.com.br/" target='_blank' rel='noopener noreferrer' className={styles.link}>Rocketseat</a></h3>
                        <p className={styles.dataInside}>Curso de Javascript</p>
                        <p className={styles.dataInside}>Curso de ES6</p>
                        <p className={styles.dataInside}>Curso de Node.js</p>
                        <p className={styles.dataInside}>Curso de React.js</p>
                        <p className={styles.dataInside}>Curso de React Native</p>
                    </div>  
                </div>
                <h2 className={styles.subtitle}>Idiomas</h2>
                <div className={styles.school}>
                    <ul>
                        <p className={styles.listItem}>Português nativo</p>
                        <p className={styles.listItem}>Inglês intermediario</p>
                    </ul> 
                </div>
                
            </section>
            <section className={`${styles.section} ${showProject}`}>
                <h1>Projetos</h1>
                <div className={styles.carousel}>
                    <Carousel responsive={responsive}>
                        <Project img={simpledex} name='Simpledex' route='simpledex'/>
                        <Project img={logo} name='Artes de lineh' route='artesDeLineh'/>
                        <Project img={proffy} name='Proffy'route='proffy'/>
                        <Project img={happy} name='Happy' route='happy'/>
                        <Project img={smartStyle} name='Smart style' route='smartStyle'/>
                        <Project img={cronometro} name='Cronômetro' route='cronometro'/>
                        <Project img={tarefas} name='Tarefas' route='tarefas'/>
                        <Project img={moveIt} name='Move.it' route='moveIt'/>
                        <Project img={bazzaar} name='BAZZAAR' route='bazzaar'/>
                    </Carousel>
                </div>
            </section>
        </main>
        </div>
    )
}

export default Main