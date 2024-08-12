import { Container } from '@mantine/core';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Header } from '@/components/Header/Header';
import { Post } from '@/components/Post/Post';

import classes from './Home.module.css';

export function HomePage() {
  return (
    <Container size="lg" mt="lg">
      <Header />

      <div className={classes.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </Container>
  );
}
