import { Card, Text, Title, Group, Grid } from '@mantine/core';
import TechStackButton from '../TechStackButton/TechStackButton.component';
import CompanyLogo from '../CompanyLogo/CompanyLogo.component';
import Paragraph from '../../atoms/Paragraph/Paragraph.component';

import useStyles from './JobDetailCard.styles';

interface jobDetailCardProps {
  image: string;
  companyName: string;
  position: string;
  startDate: number;
  endDate: number | string;
  methodologies: string[];
  responsibilities: string[];
  technologies: string[];
  description: string;
}

export default function JobDetailCard({
  image,
  companyName,
  position,
  startDate,
  endDate,
  methodologies,
  responsibilities,
  technologies,
  description,
}: jobDetailCardProps) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p={0} className={classes.card} ml="sm" shadow="sm">
      <Group noWrap spacing={0}>
        <div className={classes.body}>
          <Grid.Col xs={12} xl={12}>
            <Group>
              <CompanyLogo image={image} company={companyName} />
              <Paragraph>
                <Title>{companyName}</Title>
                <strong>{position}</strong>
                <Text>
                  {startDate} -{endDate}
                </Text>
              </Paragraph>
            </Group>
          </Grid.Col>
          <Grid.Col xs={12} xl={12}>
            <Text className={classes.title} size="lg" mb="md">
              Development Methodologies
            </Text>
            {methodologies?.map((methodology, index) => (
              <TechStackButton key={index} color="red.7" text={methodology} />
            ))}
          </Grid.Col>
          <Grid.Col xs={12}>
            <Text className={classes.title} size="lg" mt="xs" mb="md">
              Key Responsibilities
            </Text>
            {responsibilities?.map((responsibility, index) => (
              <TechStackButton key={index} color="green.8" text={responsibility} />
            ))}
          </Grid.Col>
          <Grid.Col xs={12}>
            <Text className={classes.title} size="lg" mt="xs" mb="md">
              Tech Stack
            </Text>
            {technologies?.map((technology, index) => (
              <TechStackButton key={index} color="blue.8" text={technology} />
            ))}
          </Grid.Col>
          <Grid.Col xs={12}>
            <Text className={classes.title} size="lg" mt="xs" mb="md">
              Brief History
            </Text>
            <Text color="dimmed" align="justify" size="md" mx="auto" mb="xl">
              {description}
            </Text>
          </Grid.Col>
        </div>
      </Group>
    </Card>
  );
}
