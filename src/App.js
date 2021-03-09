import styles from './styles/app.module.css'

function App(){
  return(
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/64551315?s=400&u=adfdfb80343d3add6d596032d8ed8a6cd054f8f0&v=4" alt='avatar do github'/>
        <div>
          <h1>Alex Ferreira Santos</h1>
          <h2>Contato</h2>
          <p>Email: alexfstos2@gmail.com</p>
          <p>Github: <a href="https://github.com/Alex-Ferreira-Santos">Alex-Ferreira-Santos</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/alex-ferreira-santos-/">alex-ferreira-santos-</a></p>
        </div>
        
      </div>
      
    </div>
  )
}

export default App