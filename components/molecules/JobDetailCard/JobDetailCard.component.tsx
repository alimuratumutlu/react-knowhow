import { Card, Text, Group, Grid } from '@mantine/core';
import TechStackButton from '../TechStackButton/TechStackButton.component';

import useStyles from './JobDetailCard.styles';

interface jobDetailCardProps {
  methodologies: string[];
  responsibilities: string[];
  technologies: string[];
  description: string;
}

export default function JobDetailCard({
  methodologies,
  responsibilities,
  technologies,
  description,
}: jobDetailCardProps) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <div className={classes.body}>
          <Grid.Col xs={12}>
            <Text className={classes.title} size="lg" mb="md">
              Development Methodologies
            </Text>
            {methodologies?.map((methodology) => (
              <TechStackButton color="red.5" text={methodology} />
            ))}
            <TechStackButton color="red.5" text="Agile" />
            <TechStackButton color="red.5" text="Scrum" />
            <TechStackButton color="red.5" text="Domain Driven Design" />
            <TechStackButton color="red.5" text="CI/CD" />
          </Grid.Col>
          <Grid.Col xs={12}>
            <Text className={classes.title} size="lg" mt="xs" mb="md">
              Key Responsibilities
            </Text>
            {responsibilities?.map((responsibility) => (
              <TechStackButton color="green.5" text={responsibility} />
            ))}
            <TechStackButton color="cyan.5" text="Front-End Development" />
            <TechStackButton color="cyan.5" text="Team Management" />
            <TechStackButton color="cyan.5" text="Responsive Web Design" />
          </Grid.Col>
          <Grid.Col xs={12}>
            <Text className={classes.title} size="lg" mt="xs" mb="md">
              Tech Stack
            </Text>
            {technologies?.map((technology) => (
              <TechStackButton text={technology} />
            ))}
            <TechStackButton text="HTML5" />
            <TechStackButton text="Micro Frontend Architecture" />
            <TechStackButton text="React" />
            <TechStackButton text="Redux" />
            <TechStackButton text="NextJS" />
            <TechStackButton text="Webpack" />
            <TechStackButton text="NodeJS" />
            <TechStackButton text="TypeScript" />
            <TechStackButton text="Material UI" />
            <TechStackButton text="JavaScript" />
            <TechStackButton text="CSS" />
            <TechStackButton text="Web Applications" />
            <TechStackButton text="React Custom Hooks" />
            <TechStackButton text="Object-Oriented Programming (OOP)" />
          </Grid.Col>
          <Grid.Col xs={12}>
            <Text color="dimmed" align="justify" size="md" mx="auto" mb="xl">
              {description}
            </Text>
          </Grid.Col>
        </div>
      </Group>
    </Card>
  );
}
