import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Code, Container, Group, Text, Title } from '@mantine/core';
import { Card, Grid } from '@/components/_commons';
import { LayoutFooter } from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Box component="main">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Group style={{ height: '100vh' }}>
        <Container size="md" px="xl">
          <Title align="center">
            Welcome to <a href="https://nextjs.org">next-toolkit-starter!</a>
          </Title>

          <Text size="xl" align="center" py="xl">
            Get started by editing{' '}
            <Code sx={(theme) => ({ fontSize: theme.fontSizes.lg })}>
              src/pages/index.tsx
            </Code>
          </Text>

          <Card
            title="Get starter with next-toolkit-starter &rarr;"
            description="Find in-depth information about Next.js features and API."
            link="https://nextjs.org/docs"
            mb="xl"
            sx={(theme) => ({
              borderColor: theme.colors[theme.primaryColor],
              color: theme.colors[theme.primaryColor],
            })}
          />

          <Grid>
            <Card
              title="Documentation &rarr;"
              description="Find in-depth information about Next.js features and API."
              link="https://nextjs.org/docs"
            />
            <Card
              title="Learn &rarr;"
              description="Learn about Next.js in an interactive course with quizzes!"
              link="https://nextjs.org/learn"
            />
            <Card
              title="Examples &rarr;"
              description="Discover and deploy boilerplate example Next.js projects."
              link="https://nextjs.org/examples"
            />
            <Card
              title="Deploy &rarr;"
              description="Instantly deploy your Next.js site to a public URL with Vercel."
              link="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            />
          </Grid>
        </Container>
      </Group>

      <LayoutFooter />
    </Box>
  );
};

export default Home;
