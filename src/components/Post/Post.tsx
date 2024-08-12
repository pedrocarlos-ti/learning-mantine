import { Comment } from '../Comment/Comment';
import classes from './Post.module.css';

export function Post() {
  return (
    <article className={classes.post}>
      <header>
        <div className={classes.author}>
          <img
            className={classes.avatar}
            src="https://github.com/pedrocarlos-ti.png"
            alt="Author"
          />
          <div className={classes.authorInfo}>
            <strong>Pedro Santos</strong>
            <time>web developer</time>
          </div>
        </div>

        <time title="11 de Maio às 12:02" dateTime="2024-08-12 12:02:30" className={classes.date}>
          Publicado há 2 horas
        </time>
      </header>

      <div className={classes.content}>
        <p>Fala Galera !!!</p>
        <p>
          Acabei de lançar um novo curso de ReactJS, onde você vai aprender a criar aplicações web
          com a biblioteca mais popular do mercado.
        </p>
        <p>O curso é 100% gratuito e você pode se inscrever agora mesmo clicando no link abaixo:</p>

        <p>
          <a href="#" className={classes.link}>
            pedrosantos.dev
          </a>
        </p>

        <p>
          <a href="#" className={classes.link}>
            #novoprojeto
          </a>
          <a href="#" className={classes.link}>
            #nlw
          </a>
          <a href="#" className={classes.link}>
            #reactjs
          </a>
        </p>
      </div>

      <form className={classes.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <button type="submit">Comentário</button>
      </form>

      <div className={classes.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
