import classes from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export const Sidebar = () => (
  <aside className={classes.sidebar}>
    <img
      className={classes.cover}
      src="https://png.pngtree.com/thumb_back/fw800/background/20230926/pngtree-a-mountain-with-a-cloud-over-it-that-looks-like-a-image_13365286.jpg"
      alt="Background"
    />

    <div className={classes.profile}>
      <img
        className={classes.avatar}
        src="https://randomuser.me/api/portraits/lego/1.jpg"
        alt="User Profile"
      />
      <strong>Pedro Santos</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href="#">
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>
  </aside>
);
