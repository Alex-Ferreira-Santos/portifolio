import React,{useState} from 'react';
import styles from '../styles/pages/main.module.css'
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import csharp from '../img/csharp.png'
import sql from '../img/sql.png'
import php from '../img/php.png'
import python from '../img/python.png'

function Main(){
    const [showCode,setShowCode] = useState(false)
    const [code,setCode] = useState('')
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
            <h1 className={styles.tecnology}>Técnologias Dominadas</h1>
            <h2 className={styles.language}>Linguagens</h2>
            <div className={styles.row}>
                    <div className={`${styles.containerLanguage} ${styles.html}`} onClick={()=>{
                        setShowCode(true)
                        setCode('html')
                        }}>
                        <div className={styles.center}>
                            <img src={html} alt="html" className={styles.image}/>
                            <p className={styles.lgn}>HTML</p>
                        </div> 
                    </div>
                    
                    <div className={`${styles.containerLanguage} ${styles.css}`} onClick={()=>{
                        setShowCode(true)
                        setCode('css')
                    }}>
                        <div className={styles.center}>
                            <img src={css} alt="css" className={styles.image}/>
                            <p className={styles.lgn}>CSS</p>
                        </div>
                    </div>

                    <div className={`${styles.containerLanguage} ${styles.js}`} onClick={()=>{
                        setShowCode(true)
                        setCode('js')
                    }}>
                        <div className={styles.center}>
                            <img src={js} alt="js" className={styles.image}/>
                            <p className={styles.lgn}>Javascript</p>
                        </div>
                    </div>
            </div>
            
            {showCode && (                   
                <div className={styles.code}>
                    {code === 'html' && (
                       <div className={styles.languageCode}>
                        <h1 className={styles.languageName}>HTML</h1>
                        <pre className={styles.coding}>
                            {`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>`}</pre>
        <p className={styles.coding}>       &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"/&gt;</p>
        <p className={styles.coding}>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"/&gt;</p>
        <pre className={styles.coding}>
        {`    <title>Document</title>
    </head>
    <body>
        <h1>html</h1>                     
    </body>
</html>`}    
                        </pre>
                        </div> 
                    )}
                    {code === 'css' && (
                        <div className={styles.languageCode}>
                            <h1 className={styles.languageName}>CSS</h1>
                            <pre className={styles.coding}>
                        {`@media (max-width: 820px){
    .name{
        font-size: 2.4rem;
        color: var(--background);
        transition: .2s;
        transform: translateY(-300px);
        height: 40vh;
    }
    .name:hover{
        color: var(--background-hover);
    }
    #contact > p{
        font-size: 2em;
    }  
}`}
                            </pre>
                        </div> 
                    )}
                    {code === 'js' && (
                        <div className={styles.languageCode}>
                        <h1 className={styles.languageName}>Javascript</h1>
                        <pre className={styles.coding}>
                        {`
let seconds = 0
let array = []
const count = setInterval(()=>{
        seconds = seconds + 1
    },1000)
function stopCountDown(){
    clearInterval(count)
    return true
}
document.getElementById('timer')
    .addEventListerner('click',
stopCountDown)
fetch('https://pokeapi.co/api/v2/
pokemon?offset=0&limit=15')
    .then(response => response.json())
    .then(data => { array.push(data)}`}
                        
                        </pre>
                        </div> 
                    )}
                    
                </div>                        
            )}

            <div className={styles.row}>
                    <div className={`${styles.containerLanguage} ${styles.csharp}`} onClick={()=>{
                        setShowCode(true)
                        setCode('csharp')
                        }}>
                        <div className={styles.center}>
                            <img src={csharp} alt="c#" className={styles.image}/>
                            <p className={`${styles.lgn} ${styles.left}`}>C#</p>
                        </div> 
                    </div>
                    
                    <div className={`${styles.containerLanguage} ${styles.sql}`} onClick={()=>{
                        setShowCode(true)
                        setCode('sql')
                    }}>
                        <div className={styles.center}>
                            <img src={sql} alt="sql" className={styles.image}/>
                            <p className={styles.lgn}>SQL</p>
                        </div>
                    </div>

                    <div className={`${styles.containerLanguage} ${styles.php}`} onClick={()=>{
                        setShowCode(true)
                        setCode('php')
                    }}>
                        <div className={styles.center}>
                            <img src={php} alt="php" className={styles.image}/>
                            <p className={styles.lgn}>Sintaxe PHP</p>
                        </div>
                    </div>
            </div>

            {showCode && (                   
                <div className={styles.code}>
                    {code === 'csharp' && (
                       <div className={styles.languageCode}>
                        <h1 className={styles.languageName}>C#</h1>
                        <pre className={styles.coding}>
                            {`namespace Exemplo{
  class Program{
    static void Main(string[] args){
      do{
      Console.WriteLine('Qual seu nome?');
      string name = Console.ReadLine();
      Console.WriteLine('Quantos anos você tem?');
      int age = int.Parse(Console.ReadLine());
      Pessoa per = new Pessoa(name,age);
      List<Pessoa> list = new List<Pessoa>();
      list.Add(person);
      Console.WriteLine('Cadastrar mais alguem?')
      string answer = Console.ReadLine();
      }while(answer!='n');
      Console.WriteLine('Lista de pessoas:');
      foreach( person in list){
        Console.WriteLine(per.name+'|'+per.age)
      }
    }
  }
}`}    
                        </pre>
                        </div> 
                    )}
                    {code === 'sql' && (
                        <div className={styles.languageCode}>
                            <h1 className={styles.languageName}>SQL</h1>
                            <pre className={styles.coding}>
                        {`#MySql
CREATE DATABASE Exemplo

CREATE TABLE IF NOT EXISTS person(
    idExemplo INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT(11) NOT NULL,
)

INSERT INTO person(name,age) VALUES('Alex',18)

SELECT * FROM person WHERE idExemplo = 1

UPDATE person SET name='Alex F' WHERE idExemplo=1

DELETE FROM person WHERE idExemplo = 1

                        `}
                            </pre>
                        </div> 
                    )}
                    {code === 'php' && (
                        <div className={styles.languageCode}>
                        <h1 className={styles.languageName}>PHP</h1>
                        <pre className={styles.coding}>
                        {`<?php?>
require_once 'Exemplo.php';

class Person extends Exemplo{
    public function _construct($name,$age){
        $this->name = $name;
        $this->age = $age;
    }
    public $name;
    private $age;

    public function getName(){
        return $this->name;
    }

    public function setName($name){
        $this->name = $name;
    }
}   
$name = isset($_GET['name']);
$age = isset($_GET['age']);

$per[0] = new Person($name, $age);
$per[1] = new Person('Alex',18);

print_r($per);
                        
`}
                        
                        </pre>
                        </div> 
                    )}
                    
                </div>                        
            )}
            <div className={styles.row}>
                    <div className={`${styles.containerLanguage} ${styles.python}`} onClick={()=>{
                        setShowCode(true)
                        setCode('python')
                        }}>
                        <div className={styles.center}>
                            <img src={python} alt="python" className={styles.image}/>
                            <p className={styles.lgn}>Python básico</p>
                        </div> 
                    </div>
            </div>
            {showCode && (                   
                <div className={styles.code}>
                    {code === 'python' && (
                       <div className={styles.languageCode}>
                        <h1 className={styles.languageName}>Python</h1>
                        <pre className={styles.coding}>
                            {`import random

class Dados:
    def play(self):
        self.number = random.Randint(1,7)  
        return number
    
    pass

name = str(input('Qual seu nome?'))
print(f'bem vindo ao jogo {name}').strip()
goal = 100
while(option != 'STOP' or goal < 0):
    print('Escolha o que quer fazer')
    print('Para jogar os dados digite "D"')
    print('Para sair do jogo digite "STOP"')
    option = str(input('O que deseja fazer?: '))
    option = option.strip().upper()
    if(option == 'D'):
        dados = Dados()
        number = dados.play()
        print(f'O número tirado foi {number}')
        goal-=number
        print(f'Falta {goal} casas para acabar')
    elfi(option == 'STOP'):
        print('encerrando o jogo...')
        break
    else:
        print('digite uma opção valida')

print('Jogo encerrado!')
if(goal < 0):
    print('Parabêns você chegou até o final!!!')
                            `}    
                        </pre>
                        </div> 
                    )}          
                </div>                        
            )}
            
            </section>
        </main>
        </div>
    )
}

export default Main