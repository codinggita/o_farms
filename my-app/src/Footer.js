import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css";

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 6 }} className="footerbg">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Company
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Brand Center
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Blog
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Help center
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Discord Server
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Download
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  iOS
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Android
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  Windows
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  MacOS
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box sx={{ pt: 4, pb: 2 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © 2024 O-Farms. All Rights Reserved.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
          <IconButton href="#" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton href="#" color="inherit">
            <TwitterIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;