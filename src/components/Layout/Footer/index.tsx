import { Box, Image } from '@mantine/core';

const LayoutFooter: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flex: '1',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        borderTop: '1px solid #eaeaea',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Box component="span" sx={{ height: '1rem', marginLeft: '1.5rem' }}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </Box>
      </a>
    </Box>
  );
};

export default LayoutFooter;
