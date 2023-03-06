import { Text, Anchor, Grid, Container } from '@mantine/core';
import PageTitle from '../../atoms/PageTitle/PageTitle.component';

import useStyles from './Welcome.styles';
import JobCard from '../JobCard/JobCard.component';

const mockdata = {
  title: 'Murat Umutlu (MuuM)',
  text: 'A software developer with 10 years of experience, including 5 years of specialized experience in Front-end Development utilizing technologies such as TypeScript, React, Nextjs, and Redux. Skilled UI developer with proficiency in TypeScript, React, Redux, and Styled Components, allowing for creating visually appealing and high-performing user interfaces. ',
};

const jobCardMockData = [
  {
    image: 'https://bigsee.eu/wp-content/uploads/2021/06/01_1F.jpg',
    link: 'https://www.afiniti.com/',
    companyName: 'Afiniti',
    position: 'Lead / Senior Frontend Developer',
    from: 2021,
    to: 'Current',
    description:
      'As an experienced front-end developer, I have leveraged React, NextJS, and TypeScript to improve the web accessibility and user experience of multiple projects. I am skilled in implementing pixel-perfect responsive CSS, and integrating NextJS with Redux to improve performance and ensure smooth user experience. I have demonstrated leadership by successfully leading a team of developers in delivering a financial project, introducing agile methodologies and development best practices. I have astrong track record of identifying and resolving issues, testing scenarios, and preparing for deployment. In addition, I have been involved in a microfrontend-based project that supported the integration of third-party plugins developed with different frameworks, including Svelte, Vue, Angular, and React.',
    methodologies: ['Agile', 'Scrum', 'Domain Driven Design'],
    responsibilities: ['Front-End Development', 'Team Management', 'Responsive Web Design'],
    technologies: [
      'HTML5',
      'Micro Frontend Architecture',
      'React',
      'Redux',
      'NextJS',
      'Webpack',
      'CSS3',
      'Styled Components',
      'TypeScript',
      'SASS',
      'Jest',
      'Enzyme',
      'Cypress',
      'Git',
      'Jira',
      'Confluence',
      'Bitbucket',
    ],
  },
];

export function Welcome() {
  const { classes } = useStyles();
  const { title, text } = mockdata;

  return (
    <Container my="md">
      <Grid>
        <Grid.Col>
          <PageTitle text={title} />
        </Grid.Col>
        <Grid.Col xs={12}>
          <Text color="dimmed" align="justify" size="lg" className={classes.description} mb="xl">
            {text}
          </Text>
        </Grid.Col>
        {jobCardMockData.map((jobCardData) => (
          <JobCard {...jobCardData} />
        ))}
      </Grid>
    </Container>
  );
}
