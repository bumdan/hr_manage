import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(6, 0),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="textSecondary">
              Super Juniors
            </Typography>
            <Typography variant="body2" color="textSecondary">
              © {new Date().getFullYear()} Super Juniors. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="textSecondary">
              Follow Us
            </Typography>
            <Link href="https://zcs.frontiir.net/#1" color="primary" sx={{ marginRight: 1 }}>
              <FacebookIcon fontSize="small" />
            </Link>
            <Link href="https://dreamlab.news/books/the-7-habits-of-highly-effective-people-2" color="primary" sx={{ marginRight: 1 }}>
              <TwitterIcon fontSize="small" />
            </Link>
            <Link href="https://github.com/" color="error">
              <InstagramIcon fontSize="small" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;