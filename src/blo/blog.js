import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './Featuredpost';
import Main from './Man';
import Sidebar from './Sidebar';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Fashion Blogs', url: 'https://www.hellofashionblog.com/' },
  { title: 'Food Blogs', url: 'https://pinchofyum.com/garlic-basil-chicken-with-tomato-butter-sauce' },
  { title: 'Lifestyle Blogs', url: 'https://www.nomadicmatt.com/travel-blog/' },
  { title: 'Sports Blogs', url: 'https://detailed.com/sports-blogs/' },
  { title: 'Finance Blogs', url: 'https://www.startamomblog.com/what-is-a-lifestyle-blog/' },
  { title: 'Music Blogs', url: 'https://blog.feedspot.com/music_blogs/' },
  { title: 'Science Blogs', url: 'https://www.healthline.com/health/fitness-exercise/best-blogs-of-the-year#1' },
  { title: 'Health Blogs', url: 'https://www.under30experiences.com/blog/top-10-travel-bloggers-you-should-already-be-following' },
  { title: 'Fitness Blogs', url: 'https://www.healthline.com/health/fitness-exercise/best-blogs-of-the-year#1' },
  { title: 'Travel Blogs', url: 'https://www.under30experiences.com/blog/top-10-travel-bloggers-you-should-already-be-following' },
];

const mainFeaturedPost = {
  title: 'WE ARE CODINGMIND',
  description:" We design, build and maintain individual software and hardware projects for small and medium-sized enterprises.",
  image: 'http://www.codingmind.in/img/slider-one.jpg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'TRADENGINE.IO',
    date: 'July 2020',
    description:
      'Disruptive crypto-currency based merchant service platform aimed at mass adoption of cryptos.',
    image: 'http://www.codingmind.in/img/td-splash.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'BUNKPOINTS',
    date: 'july 2020',
    description:
      'An all in one Businesses and Users app for loyalty points strategies, enables every business to have a brand-based conversation with its customers.',
    image: 'http://www.codingmind.in/img/bp-splash.jpg',
    imageText: 'Image Text',
  },
];


const post="hello ";

const sidebar = {
  title: 'About',
  description:
    'We design, build and maintain individual software and hardware projects for small and medium-sized enterprises.',
  archives: [
    { title: 'Archive1', url: '#' },
    { title: 'Archive2', url: '#' },
    { title: 'Archive3', url: '#' },
    { title: 'Archive4', url: '#' },
    { title: 'Archive5', url: '#' },
    { title: 'Archive6', url: '#' },
   ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="My First Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Blog 1 "  post={post} />
            
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" style={{color:"white"}} description="a ghat valley company!" />
    </React.Fragment>
  );
}