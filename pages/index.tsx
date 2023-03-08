import PostTemplate from '../templates/Post.template';

import JobDetailCard from '../components/molecules/JobDetailCard/JobDetailCard.component';
import Paragraph from '../components/atoms/Paragraph/Paragraph.component';

import Experiences from '../data/Experiences';
import PersonalData from '../data/PersonalData';

export default function HomePage() {
  const { title, text } = PersonalData;

  return (
    <PostTemplate title={title}>
      <Paragraph> {text} </Paragraph>
      {Experiences.map((jobCardData: any) => (
        <JobDetailCard {...jobCardData} />
      ))}
    </PostTemplate>
  );
}
