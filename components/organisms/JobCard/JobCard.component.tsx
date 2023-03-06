import React from 'react';
import { Grid } from '@mantine/core';
import JobDetailCard from '../../molecules/JobDetailCard/JobDetailCard.component';
import CompanyCard from '../../molecules/CompanyCard/CompanyCard.component';

interface JobCardProps {
  image: string;
  companyName: string;
  position: string;
  from: number;
  to: number | string;
  link: string;
  methodologies: string[];
  responsibilities: string[];
  technologies: string[];
  description: string;
}

export default function JobCard({
  image,
  companyName,
  position,
  from,
  to,
  link,
  methodologies,
  responsibilities,
  technologies,
  description,
}: JobCardProps) {
  return (
    <>
      <Grid.Col xs={3}>
        <CompanyCard
          image={image}
          link={link}
          company={companyName}
          position={position}
          from={from}
          to={to}
        />
      </Grid.Col>
      <Grid.Col xs={9}>
        <JobDetailCard
          methodologies={methodologies}
          responsibilities={responsibilities}
          technologies={technologies}
          description={description}
        />
      </Grid.Col>
    </>
  );
}
