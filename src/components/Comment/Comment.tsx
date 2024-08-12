import { ThumbsUp, Trash } from 'phosphor-react';
import classes from './Comment.module.css';

export function Comment() {
  return (
    <div className={classes.comment}>
      <img src="https://github.com/pedrocarlos-ti.png" alt="Avatar" />

      <div className={classes.commentBox}>
        <div className={classes.commentContent}>
          <header>
            <div className={classes.authorAndTime}>
              <strong>Pedro Santos</strong>
              <time
                title="11 de Maio às 12:02"
                dateTime="2024-08-12 12:02:30"
                className={classes.date}
              >
                Publicado há 2 horas
              </time>
            </div>

            <button type="button" title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Pedro, parabéns 👏👏</p>
        </div>
        <footer>
          <button type="button">
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
