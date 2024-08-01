import { Title, Text, Stack } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Stack align="center" justify="center">
      <Title order={1} className={classes.title}>
        Welcome to Mantine!
      </Title>
      <Text maw="70%" className={classes.text}>
        This is a simple app created with Mantine, where you can find examples of how to use Mantine
        components, hooks, and themes.
      </Text>
    </Stack>
  );
}
