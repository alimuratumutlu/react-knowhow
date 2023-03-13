import { JobDetailCard } from '@components';
import Experiences from '@data/Experiences';

const Resume = (
  <>
    {Experiences.map((jobCardData: any, index: number) => (
      <JobDetailCard key={index} {...jobCardData} />
    ))}
  </>
);

export default Resume;
