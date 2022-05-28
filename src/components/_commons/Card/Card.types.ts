import { CardProps as _CardProps } from '@mantine/core';

export type CardProps = {
  title: string;
  description: string;
  link: string;
} & Omit<_CardProps<'a'>, 'children'>;
