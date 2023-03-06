import { IconCalendarEvent } from '@tabler/icons';
import { Card, Text, Group, Center } from '@mantine/core';

import useStyles from './CompanyCard.styles';

interface companyCardProps {
  link: string;
  image: string;
  company: string;
  position: string;
  from: number;
  to: number | string;
}

export default function CompanyCard({
  image,
  company,
  position,
  from,
  to,
  link,
}: companyCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href={link}
      target="_blank"
    >
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="xl" className={classes.company} weight={500}>
            {company}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.position}>
              {position}
            </Text>

            <Group spacing="lg">
              <Center>
                <IconCalendarEvent size={16} stroke={1.5} color={theme.colors.dark[2]} />
                <Text size="sm" className={classes.bodyText}>
                  {from}
                </Text>
              </Center>
              <Center>
                <IconCalendarEvent size={16} stroke={1.5} color={theme.colors.dark[2]} />
                <Text size="sm" className={classes.bodyText}>
                  {to}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}
