import { Text, Anchor, Grid, Container } from '@mantine/core';
import PageTitle from '../../atoms/PageTitle/PageTitle.component';
import { ImageCard } from '../../molecules/ImageCard/ImageCard.component';
import { StatsRingCard } from '../../molecules/StatsRingCard/StatsRingCard.component';

import useStyles from './Welcome.styles';

const mockdata = {
  title: 'Murat Umutlu (MuuM)',
  text: `A software developer with 10 years of experience, including 5 years of specialized experience in Front-end Development utilizing technologies such as TypeScript, React, Nextjs, and Redux. Skilled UI developer with proficiency in TypeScript, React, Redux, and Styled Components, allowing for creating visually appealing and high-performing user interfaces.${(
    <Anchor href="https://mantine.dev/guides/next/" size="lg">
      this guide
    </Anchor>
  )}`,
};

const statMocData = {
  title: 'Project tasks',
  completed: 1887,
  total: 2334,
  stats: [
    {
      value: 447,
      label: 'Remaining',
    },
    {
      value: 76,
      label: 'In progress',
    },
  ],
};

export function Welcome() {
  const { classes } = useStyles();

  const { title, text } = mockdata;
  const { title: statTitle, completed, total, stats } = statMocData;

  return (
    <Container my="md">
      <Grid>
        <Grid.Col>
          <PageTitle text={title} />
        </Grid.Col>
        <Grid.Col xs={12}>
          <Text color="dimmed" align="justify" size="lg" className={classes.description}>
            {text}
          </Text>
        </Grid.Col>
        <Grid.Col xs={3}>
          <ImageCard
            image="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://mantine.dev/"
            title="Journey to Swiss"
            author="Robert Gluesticker"
            views={7847}
            comments={5}
          />
        </Grid.Col>
        <Grid.Col xs={3}>
          <ImageCard
            image="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://mantine.dev/"
            title="Journey to Swiss"
            author="Robert Gluesticker"
            views={7847}
            comments={5}
          />
        </Grid.Col>
        <Grid.Col xs={3}>
          <ImageCard
            image="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://mantine.dev/"
            title="Journey to Swiss"
            author="Robert Gluesticker"
            views={7847}
            comments={5}
          />
        </Grid.Col>
        <Grid.Col xs={3}>
          <ImageCard
            image="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="https://mantine.dev/"
            title="Journey to Swiss"
            author="Robert Gluesticker"
            views={7847}
            comments={5}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <StatsRingCard title={statTitle} completed={completed} total={total} stats={stats} />
        </Grid.Col>
        <Grid.Col xs={6}>
          <StatsRingCard title={statTitle} completed={completed} total={total} stats={stats} />
        </Grid.Col>
        <Grid.Col xs={8}>
          <Text color="dimmed" align="justify" size="lg" mx="auto" mt="xl">
            This starter Next.js project includes a minimal setup for server side rendering, if you
            want to learn more on Mantine + Next.js integration follow. This starter Next.js project
            includes a minimal setup for server side rendering, if you want to learn more on Mantine
            + Next.js integration follow.
            <Anchor href="https://mantine.dev/guides/next/" size="lg">
              this guide
            </Anchor>
            . To get started edit index.tsx file.
          </Text>
        </Grid.Col>
        <Grid.Col xs={4}>
          <Text color="dimmed" align="justify" size="lg" mx="auto" mt="xl">
            This starter Next.js project includes a minimal setup for server side rendering, if you
            want to learn more on Mantine + Next.js integration follow{' '}
            <Anchor href="https://mantine.dev/guides/next/" size="lg">
              this guide
            </Anchor>
            . To get started edit index.tsx file.
          </Text>
        </Grid.Col>
        <Grid.Col xs={3}>
          <Text color="dimmed" align="justify" size="lg" mx="auto" mt="xl">
            This starter Next.js project includes a minimal setup for server side rendering, if you
            want to learn more on Mantine + Next.js integration follow{' '}
            <Anchor href="https://mantine.dev/guides/next/" size="lg">
              this guide
            </Anchor>
            . To get started edit index.tsx file.
          </Text>
        </Grid.Col>
        <Grid.Col xs={3}>
          <Text color="dimmed" align="justify" size="lg" mx="auto" mt="xl">
            This starter Next.js project includes a minimal setup for server side rendering, if you
            want to learn more on Mantine + Next.js integration follow{' '}
            <Anchor href="https://mantine.dev/guides/next/" size="lg">
              this guide
            </Anchor>
            . To get started edit index.tsx file.
          </Text>
        </Grid.Col>
        <Grid.Col xs={6}>
          <Text color="dimmed" align="justify" size="lg" mx="auto" mt="xl">
            This starter Next.js project includes a minimal setup for server side rendering, if you
            want to learn more on Mantine + Next.js integration follow. This starter Next.js project
            includes a minimal setup for server side rendering, if you want to learn more on Mantine
            + Next.js integration follow.
            <Anchor href="https://mantine.dev/guides/next/" size="lg">
              this guide
            </Anchor>
            . To get started edit index.tsx file.
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
