import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Copyright from './Copyright'

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Dream Tryout
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Powered by Gohtum 
      </Typography>
      <Copyright />
    </Box>
  )
}
