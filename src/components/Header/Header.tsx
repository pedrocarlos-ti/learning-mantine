import classes from './Header.module.css';
import Logo from '@/assets/logo.svg';

export function Header() {
  return (
    <header className={classes.header}>
      <img src={Logo} alt="Company logo" />
    </header>
  );
}
