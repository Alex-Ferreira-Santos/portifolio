import React,{useState} from 'react';
import styles from '../styles/pages/main.module.css'
import html from '../img/html.png'

function Main(){
    const [showHtml,setShowHtml] = useState(false)
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
            <section className={styles.about}>
            <h1 className={styles.sobre}>Sobre</h1>
            <p className={styles.text}>Olá, me chamo Alex e desde cedo eu sempre gostei de técnologia, sempre tentava montar um robô nas minhas brincadeiras de infância, aos meus 14 anos eu fui descobrir o que era programação quando pesquisei no youtube “Aprender programação”, a primeira coisa que o youtube mostrou foi uma playlist de python do <a href="https://www.youtube.com/channel/UCrWvhVmt0Qac3HgsjQK62FQ" className={styles.link}>Curso em Video</a>, no qual eu sou grato dado o inicio por este mundo, a partir dai eu começei a estudar as linguagens básicas da web para ver como se fazia um site. Quando terminei a escola fui ir em busca do que fazer a partir dai, e então decidi entrar no curso de técnico de informatica para a internet do senac para poder trabalhar com técnologia, lá eu estou aprendendo diversas funcionalidades das linguagens e com isso já fiz alguns projetos, tanto para o curso tanto pessoal, você pode acompanhar meus conhecimentos e projetos com o resto da página, espero que goste.</p>
            </section>
            <section className={styles.about}>
            <h1 className={styles.tecnology}>Técnologias Dominadas</h1>
            <h2 className={styles.language}>Linguagens</h2>
            <div className={styles.row}>
                    <div className={styles.html} onClick={()=>{setShowHtml(true)}}>
                        <div className={styles.row}>
                            <img src={html} alt="html" className={styles.image}/>
                            <p className={styles.lgn}>HTML</p>
                        </div>
                        
                        {showHtml && (
                        <>
                            <p>Aparecendo</p>
                        </>
                        )}
                    </div>
                    <div className={styles.html}>
                        <img src={html} alt="html" className={styles.image}/>
                        <p className={styles.lgn}>HTML</p>
                    </div>
                    <div className={styles.html}>
                        <img src={html} alt="html" className={styles.image}/>
                        <p className={styles.lgn}>HTML</p>
                    </div>
            </div>
            
            </section>
        </main>
        </div>
    )
}

export default Main