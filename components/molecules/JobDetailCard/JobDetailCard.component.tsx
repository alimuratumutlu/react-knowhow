import { Card, Text, Title, Group, Grid } from '@mantine/core';

import { CustomButton, CompanyLogo, Paragraph } from '@components';

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
    <Card withBorder radius="md" p={0} className={classes.card} shadow="sm">
      <Grid>
        <div className={classes.body}>
          <Grid.Col xs={12} xl={12}>
            <Group>
              <CompanyLogo image={image} company={companyName} />
              <Paragraph>
                <Title weight={600} size="h3">
                  {companyName}
                </Title>
                <Title weight={500} size="h5">
                  {position}
                </Title>
                <Title weight={300} size="h6">
                  {startDate} -{endDate}
                </Title>
              </Paragraph>
            </Group>
          </Grid.Col>
          <Grid.Col xs={12} xl={12}>
            <Text className={classes.title} size="lg" mb="md">
              Development Methodologies
            </Text>
            {methodologies?.map((methodology, index) => (
              <CustomButton key={index} color="red.7" text={methodology} />
            ))}
          </Grid.Col>
          <Grid.Col xs={12}>
            <Text className={classes.title} size="lg" mt="xs" mb="md">
              Key Responsibilities
            </Text>
            {responsibilities?.map((responsibility, index) => (
              <CustomButton key={index} color="green.8" text={responsibility} />
            ))}
          </Grid.Col>
          <Grid.Col xs={12}>
            <Text className={classes.title} size="lg" mt="xs" mb="md">
              Tech Stack
            </Text>
            {technologies?.map((technology, index) => (
              <CustomButton key={index} color="blue.8" text={technology} />
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
      </Grid>
    </Card>
  );
}
