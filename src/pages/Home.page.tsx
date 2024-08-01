import { Container, List, Stack } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';

import classes from './Home.page.module.css';

export function HomePage() {
  return (
    <Container size="lg" mt="lg">
      <Welcome />
      <Stack align="center" mt="md">
        <List type="ordered" spacing="md" classNames={classes}>
          <List.Item>
            API overview – overview of the most important Mantine styling and theming features
          </List.Item>
        </List>
      </Stack>
    </Container>
  );
}
