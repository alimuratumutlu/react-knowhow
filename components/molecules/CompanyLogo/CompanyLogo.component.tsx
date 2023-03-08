import Image from 'next/image';

import useStyles from './CompanyLogo.styles';

interface companyLogoProps {
  image: string;
  company: string;
}

export default function CompanyLogo({ image, company }: companyLogoProps) {
  const { classes } = useStyles();

  return (
    <Image
      src={image}
      alt={company}
      width={100}
      height={100}
      style={{ borderRadius: '50%', alignSelf: 'center' }}
      className={classes.image}
    />
  );
}
