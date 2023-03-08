import PostTemplate from '../templates/Post.template';

import JobDetailCard from '../components/molecules/JobDetailCard/JobDetailCard.component';

import Experiences from '../data/Experiences';
import PersonalData from '../data/PersonalData';
import ContactDetails from '../components/molecules/ContactDetails/ContactDetails.component';

export default function HomePage() {
  const { title } = PersonalData;

  return (
    <PostTemplate title={title}>
      <ContactDetails />
      {Experiences.map((jobCardData: any, index: number) => (
        <JobDetailCard key={index} {...jobCardData} />
      ))}
    </PostTemplate>
  );
}
