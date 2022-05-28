import { createStyles } from '@mantine/core';

export const useCardStyles = createStyles((theme) => ({
  cardLink: {
    height: '100%',
    ':hover': {
      color: theme.colors[theme.primaryColor],
      borderColor: theme.colors[theme.primaryColor],
    },
  },
}));
