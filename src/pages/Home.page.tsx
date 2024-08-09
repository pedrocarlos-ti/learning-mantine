import { Container } from '@mantine/core';
import { Header } from '@/components/Header/Header';
import classes from './Home.module.css';
import { Sidebar } from '@/components/Sidebar/Sidebar';

export function HomePage() {
  return (
    <Container size="lg" mt="lg">
      <Header />

      <div className={classes.wrapper}>
        <Sidebar />
        <main>content</main>
      </div>
    </Container>
  );
}
