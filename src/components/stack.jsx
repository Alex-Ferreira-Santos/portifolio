import React,{useState,useEffect} from 'react';
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import csharp from '../img/csharp.png'
import sql from '../img/sql.png'
import php from '../img/php.png'
import python from '../img/python.png'
import react from '../img/react.png'
import reactNative from '../img/reactNative.png'
import asp from '../img/asp.png'
import bootstrap from '../img/bootstrap.png'
import jquery from '../img/jquery.png'
import styles from '../styles/components/stack.module.css'
import { Language } from './Language';

export default function Stack(props){
    const [showCode,setShowCode] = useState(false)
    const [code,setCode] = useState('')
    const [showLanguage,setShowLanguage] = useState('')
    const [delay,setDelay] = useState('')
    const [delay1,setDelay1] = useState('')
    const [delay2,setDelay2] = useState('')
    const [delay3,setDelay3] = useState('')
    const [delay4,setDelay4] = useState('')
    const [delay5,setDelay5] = useState('')

    useEffect(()=>{
        if(props.height > 300){
            setDelay(styles.delay)
            setDelay1(styles.delay1)
            setDelay2(styles.delay2)
            setDelay3(styles.delay3)
            setDelay4(styles.delay4)
            setDelay5(styles.delay5)
            setShowLanguage(styles.show) 
        }
    },[props.height])

    return(
        <div>
        <div className={styles.row}>
                    <Language delay={delay} img={html} name="HTML" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay} tech='html' css={styles.html}/>
                    
                    <Language delay={delay1} img={css} name="CSS" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay1} tech='css' css={styles.css}/>

                    <Language delay={delay2} img={js} name="Javascript" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay2} tech='js' css={styles.js}/>
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
                    <Language delay={delay3} img={react} name="React" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay3} tech='react' css={styles.react}/>

                    <Language delay={delay4} img={reactNative} name="React-native" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay4} tech='react-native' css={styles.native}/>
                    
                    <Language delay={delay5} img={sql} name="SQL" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay5} tech='sql' css={styles.sql}/>

            </div>

            {showCode && (                   
                <div className={styles.code}>
                    {code === 'react' && (
                       <div className={styles.languageCode}>
                        <h1 className={styles.languageName}>React - Javascript</h1>
                        <pre className={styles.coding}>
                            {`import React,{useState,useEffect} from 'react'
import Header from './Header'
import styles from '../styles/Main.module.css

export function Main(){
    const [title,setTitle] = useState('Pagina 1')
    const [back,setBack] = useState(styles.white)
    const [init,setInit] = useState(0)
    const array = []

    useEffect(()=>{
        fetch('https://apiExemplo?init='{init}')
        .then(response=>response.json())
        .then(data=>array.push(data))
    },[title])

    return(
        <div className={back}>
            <Header/>
            <h1>{title}</h1>

            {array.map(item=>(
                <ul>
                    <li>{item.name}</li>
                    <li>{item.status}</li>
                    <li>{item.age}</li>
                </ul>
            ))}
            <button onClick={()=>{
                setTitle('Pagina 2')
                setInit(init+15)
            }}>Atualizar dados</button>

        </div>
    )
}`}    
                        </pre>
                        </div> 
                    )}
                    {code === 'react-native' && (
                       <div className={styles.languageCode}>
                        <h1 className={styles.languageName}>React-Native - Javascript</h1>
                        <pre className={styles.coding}>
                            {`import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Header from './Header'
import styles from '../styles/Main

class Main extends Component{
    constructor(){
        this.state = {
            age: 18
        }
        this.calcAge = this.calcAge.bind(this)
    }

    calcAge(){
        let data = new Date()
        this.setState({age:2003-data.getFullYear})
    }

    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <Text>Name: {this.props.name}</Text>
                <Text>Age: {this.state.age}</Text>
            </View>
        )
    }
}

export default Main

`}    
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
                </div>                        
            )}


            <h2 className={styles.subtitle}>Outras Tecnologias</h2>
            
            <div className={styles.row}>
                    <Language delay={delay} img={asp} name="asp.netcore mvc" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay} tech='asp' css={styles.asp}/>

                    <Language delay={delay1} img={csharp} name="C#" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay1} tech='csharp' css={styles.csharp}/>

                    <Language delay={delay2} img={php} name="Sintaxe PHP" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay2} tech='php' css={styles.php}/>
            </div>

            {showCode && (                   
                <div className={styles.code}>       
                    {code === 'asp' && (
                       <div className={styles.languageCode}>
                        <h1 className={styles.languageName}>Aps.netcore mvc - C#</h1>
                        <pre className={styles.coding}>
                            {`@model ViewModel
@{
    viewData['title'] = 'Lista';
    List<Produto> list = ViewModel.lista
}
<link rel="stylesheet" href="~/css/lista.css"/>
<div>
    @await Html.PartialAsync('_Header')
    @if(list.lenght == 0){
        <h1>Sem produtos na lista!</h1>
    }else{
        <h1>Listagem de Produtos: <h1>
        <ul>
            @foreach(Produto item in Model.lista){
                <div>
                    <li>Nome: @item.name</li>
                    <li>Preço: @item.price</li>
                </div>
            }
        </ul>
    }
    <a asp-action="HomePage" asp-controller="Home">Voltar</a>

<div>
                        `}    
                        </pre>
                        </div> 
                    )}
                    {code === 'csharp' && (
                       <div className={styles.languageCode}>
                        <h1 className={styles.languageName}>C#</h1>
                        <pre className={styles.coding}>
                            {`
using System;
namespace Exemplo{
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
                <Language delay={delay3} img={bootstrap} name="Bootstrap" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay3} tech='bootstrap' css={styles.bootstrap}/>

                <Language delay={delay4} img={jquery} name="Jquery" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay4} tech='jquery' css={styles.jquery}/>
                    
                <Language delay={delay5} img={python} name="Python básico" show={showLanguage} set1={setShowCode} set2={setCode} set3={setDelay5} tech='python' css={styles.python}/>


            </div>
            {showCode && (                   
                <div className={styles.code}>
                    {code === 'bootstrap' && (
                       <div className={styles.languageCode}>
                        <h1 className={styles.languageName}>Bootstrap - HTML</h1>
                        <pre className={styles.coding}>
                            {`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
  <link href="bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1 class="">Welcome<h1> 
    <button class="btn btn-primary">button<button>   
    <img src="#" alt='#' class="rounded"/>  
    <form>
      <div class="form-group">
        <label for="nome">Nome: </label>
        <input type="text" class="form-control">
      </div>
      <button class="btn btn-info">Enviar</button>
    </form>
</body>
</html>`}    
                        </pre>
                        </div> 
                    )} 
                {code === 'jquery' && (
                       <div className={styles.languageCode}>
                        <h1 className={styles.languageName}>Jquery - Javascript</h1>
                        <pre className={styles.coding}>
                            {`const name = $('#name').val()
const id = $('#id').val()                               
$('main').css({backgroundColor: red})                       
$('.button').on('click',()=>{
    $.post('/Carrinho',{id:id,name:name})                     
    .done(data=>{
        $('#curtidos').html(data)
    }).fail(err=>console.log(err))  
})                     
                 
$('#coletar').on('click',()=>{
    $.get(/Produtos?categoria='roupas')
    .done(data=>{
        $('.Produtos').html(data)
    }).fail(err=>console.log(err))
})
                        
                        
`}    
                        </pre>
                        </div> 
                    )}
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
        </div>
    )
}