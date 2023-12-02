import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import theme from '../styles/index';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

const defaultTheme = theme;

export default function Detail() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              プロジェクト1
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              インドの家庭料理を提供するカフェを提供したい
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h3" align="center" color="text.secondary" paragraph>
            プロジェクトの概要
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            このプロジェクトは、インドの家庭料理を提供するカフェを提供したいという夢を持つ社員が立ち上げたプロジェクトです。
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            このプロジェクトは、インドの家庭料理を提供するカフェを提供したいという夢を持つ社員が立ち上げたプロジェクトです。
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            このプロジェクトは、インドの家庭料理を提供するカフェを提供したいという夢を持つ社員が立ち上げたプロジェクトです。
          </Typography>
        </Container>
      </main>
    </ThemeProvider>
  );
}
