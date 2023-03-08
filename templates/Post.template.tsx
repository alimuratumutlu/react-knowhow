import { Grid, Container } from '@mantine/core';
import PageTitle from '../components/atoms/PageTitle/PageTitle.component';

interface postTemplateProps {
  title: string;
  children: React.ReactNode | React.ReactNode[] | string;
}

export default function PostTemplate({ title, children }: postTemplateProps) {
  return (
    <Container my="md">
      <Grid>
        <Grid.Col xs={12}>
          <PageTitle text={title} />
        </Grid.Col>
        <Grid.Col xs={12}>{children}</Grid.Col>
      </Grid>
    </Container>
  );
}
