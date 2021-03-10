import styles from './styles/pages/app.module.css'
import './styles/global.css'

function App(){
  return(
    <div className={styles.main}>
      <div className={styles.container}>
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
      </div>
    </div>
  )
}

export default App