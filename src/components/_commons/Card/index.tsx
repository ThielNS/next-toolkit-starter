import { Card as _Card, Text, Title } from '@mantine/core';
import { CardProps } from './Card.types';
import { useCardStyles } from './styles';

/**
 * Go to the path in /src/core/configs/mantine/
 * to see Card default params
 */

const Card: React.FC<CardProps> = (props) => {
  const { title, description, link, ...cardProps } = props;

  const { classes } = useCardStyles();

  return (
    <_Card
      component="a"
      href={link}
      withBorder
      classNames={classes.cardLink}
      {...cardProps}
    >
      <Title order={2}>{title}</Title>
      <Text>{description}</Text>
    </_Card>
  );
};

export default Card;
