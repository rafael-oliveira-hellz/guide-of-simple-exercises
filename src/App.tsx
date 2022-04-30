import './index.css';
import Javascript from "./assets/images/javascript.png";
import React from "./assets/images/react-banner.jpeg";
import Typescript from "./assets/images/javascript-vs-typescript.png";
import Node from "./assets/images/node.jpg";

function App() {

  return (
    <>
      <div className='container-fluid'>
        <div className="card" style={{ width: '75%', margin: 'auto' }}>
          <img src={Javascript} alt='Banner do Javascript' />
          <div className="card-body">
            <h2 className="card-title">Projetos em JavaScript puro</h2>
            <p className="card-text">A melhor maneira de aprender uma nova linguagem de programação é criando projetos.
              Eu criei uma lista de 40 projetos de tutoriais adequados para iniciantes em JavaScript puro, React, TypeScript e Node.
              Meu conselho é criar os projetos, dividí-los em partes e reconstruí-los à sua maneira. Experimente adicionar novos recursos ou usar métodos diferentes.
              Isso testará se você realmente aprendeu os conceitos ou não.
            </p>
          </div>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">Como criar um trocador de cores
              {/* <span><a href="#" className="card-link">Another link</a></span> */}
            </li>
            <li className="list-group-item">Como criar um contador</li>
            <li className="list-group-item">Como criar um carrossel de revisões</li>
            <li className="list-group-item">Como criar uma navbar responsiva</li>
            <li className="list-group-item">Como criar uma sidebar</li>
            <li className="list-group-item">Como criar um modal</li>
            <li className="list-group-item">Como criar uma página de perguntas frequentes</li>
            <li className="list-group-item">Como criar uma página de menu de restaurante</li>
            <li className="list-group-item">Como criar um segundo plano de vídeo</li>
            <li className="list-group-item">Como criar uma barra de navegação com rolagem</li>
            <li className="list-group-item">Como criar guias que exibem conteúdos diferentes</li>
            <li className="list-group-item">Como criar um relógio de contagem regressiva</li>
            <li className="list-group-item">Como criar seu próprio Lorem ipsum</li>
            <li className="list-group-item">Como criar uma lista de compras</li>
            <li className="list-group-item">Como criar um slider de imagens</li>
            <li className="list-group-item">Como criar um jogo de pedra, papel e tesoura</li>
            <li className="list-group-item">Como criar o jogo do Genius</li>
            <li className="list-group-item">Como criar um jogo de plataforma</li>
            <li className="list-group-item">Como criar o Doodle Jump</li>
            <li className="list-group-item">Como criar o Flappy Bird</li>
            <li className="list-group-item">Como criar um jogo de memória</li>
            <li className="list-group-item">Como criar um jogo de Whack-a-mole</li>
            <li className="list-group-item">Como criar um jogo de Ligue 4</li>
            <li className="list-group-item">Como criar o jogo da cobrinha</li>
            <li className="list-group-item">Como criar o jogo do Space Invaders</li>
            <li className="list-group-item">Como criar o jogo do Frogger</li>
            <li className="list-group-item">Como criar o jogo de Tetris</li>
          </ol>
        </div>


        <div className="card mt-5" style={{ width: '75%', margin: 'auto' }}>
          <img src={React} alt='Banner do React' />
          <div className="card-body">
            <h2 className="card-title">Projetos em React</h2>
            <p className="card-text">A melhor maneira de aprender uma nova linguagem de programação é criando projetos.
              Eu criei uma lista de 40 projetos de tutoriais adequados para iniciantes em JavaScript puro, React, TypeScript e Node.
              Meu conselho é criar os projetos, dividí-los em partes e reconstruí-los à sua maneira. Experimente adicionar novos recursos ou usar métodos diferentes.
              Isso testará se você realmente aprendeu os conceitos ou não.
            </p>
          </div>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">Como criar um jogo da velha usando React Hooks
              {/* <span><a href="#" className="card-link">Another link</a></span> */}
            </li>
            <li className="list-group-item">Como criar um jogo de Tetris usando React Hooks</li>
            <li className="list-group-item">Como criar um carrossel de revisões</li>
            <li className="list-group-item">Como criar um app de lembrete de aniversários</li>
            <li className="list-group-item">Como criar uma página de viagens</li>
            <li className="list-group-item">Como criar um accordion</li>
            <li className="list-group-item">Como criar guias para uma página de portfólio</li>
            <li className="list-group-item">Como criar um slider de revisões</li>
            <li className="list-group-item">Como criar um gerador de cores</li>
            <li className="list-group-item">Como criar uma página de menu de pagamentos do Stripe</li>
            <li className="list-group-item">Como criar uma página de carrinho de compras</li>
            <li className="list-group-item">Como criar uma página de busca de coquetéis</li>
          </ol>
        </div>

        <div className="card mt-5" style={{ width: '75%', margin: 'auto' }}>
          <img src={Typescript} alt='Banner do React' />
          <div className="card-body">
            <h2 className="card-title">Projetos em Typescript</h2>
            <p className="card-text">A melhor maneira de aprender uma nova linguagem de programação é criando projetos.
              Eu criei uma lista de 40 projetos de tutoriais adequados para iniciantes em JavaScript puro, React, TypeScript e Node.
              Meu conselho é criar os projetos, dividí-los em partes e reconstruí-los à sua maneira. Experimente adicionar novos recursos ou usar métodos diferentes.
              Isso testará se você realmente aprendeu os conceitos ou não.
            </p>
          </div>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">Como criar um jogo da velha usando React Hooks
              {/* <span><a href="#" className="card-link">Another link</a></span> */}
            </li>
            <li className="list-group-item">Como criar um app de perguntas e respostas com React e TypeScript</li>
            <li className="list-group-item">Como criar o jogo de Arkanoid com TypeScript</li>
          </ol>
        </div>

        <div className="card mt-5" style={{ width: '75%', margin: 'auto' }}>
          <img src={Node} alt='Banner do Node' />
          <div className="card-body">
            <h2 className="card-title">Projetos em Node</h2>
            <p className="card-text">A melhor maneira de aprender uma nova linguagem de programação é criando projetos.
              Eu criei uma lista de 40 projetos de tutoriais adequados para iniciantes em JavaScript puro, React, TypeScript e Node.
              Meu conselho é criar os projetos, dividí-los em partes e reconstruí-los à sua maneira. Experimente adicionar novos recursos ou usar métodos diferentes.
              Isso testará se você realmente aprendeu os conceitos ou não.
            </p>
          </div>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">Como criar uma API de CEP que busque qualquer CEP digitado no front e traga suas informações
              {/* <span><a href="#" className="card-link">Another link</a></span> */}
            </li>
            <li className="list-group-item">Como criar um CRUD de Usuário (Login, cadastro, edição e deleção)</li>
            <li className="list-group-item">Criar uma API de Login onde caso a pessoa seja usuário padrão ela irá ter acesso a uma rota menos privilegiada e caso ela seja admin terá acesso a outra rota que conterá mais features.</li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
