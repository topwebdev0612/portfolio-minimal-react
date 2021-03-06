// material
import {
  alpha,
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  Container,
  Typography,
  useMediaQuery
} from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/ic_design.svg',
    img: '/static/service/proto.png',
    title: 'Prototype design & Development',
    description:
      'We create a visualization and working prototype of the concept'
  },
  // {
  //   icon: '/static/icons/ic_code.svg',
  //   img: '/static/service/vr.png',
  //   title: 'AR & VR',
  //   description:
  //     'To get a good product, we need to explore different ideas and concepts. We provide a visual version of the concept. We create an easy accessible version of the concepts. We work together with our clients to discover new and unexplored opportunities. '
  // },
  {
    icon: '/static/brand/logo_single.svg',
    img: '/static/service/engineering.png',
    title: 'Engineering',
    description:
      'We provide a diverse list of engineering services and solutions. Mechanical engineering - Industrial engineering - Software engineering - Chemical engineering - Electrical Engineering.'
  },
  {
    icon: '/static/icons/ic_design.svg',
    img: '/static/service/manufacturing.png',
    title: 'Manufacturing',
    description:
      'We develop products and solutions in lined with what the market needs. We thoroughly test the products and solutions towards the target group to ensure the optimal result and improving the product.'
  },
  {
    icon: '/static/icons/ic_design.svg',
    img: '/static/service/iot.png',
    title: 'IOT',
    description:
      'Connecting products to your computer and phone is the future. We offer services, which facilitates the connection between the phone and computer and the products. '
  },
  {
    icon: '/static/icons/ic_design.svg',
    img: '/static/service/team.png',
    title: 'Recruitment and team management',
    description:
      'We provide recruitment of team members for an in-house design and development team, which can specialize in products the company, develops. We provide management of the development, to ensure the development are achieving optimal results.'
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const MotionStyle = styled('div')(() => ({
  height: '100%'
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    height: '100%',
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 1),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  // width: '100%',
  // height: '100%',
  margin: 'auto',
  marginBottom: theme.spacing(10),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 10, md: 25 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              gutterBottom
              variant="overline"
              align="center"
              sx={{ color: 'text.secondary', display: 'block' }}
            >
              Hannevig Solutions
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" align="center">
              Services
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={card.title} item xs={12} md={4}>
              <MotionStyle variants={varFadeInUp}>
                <CardStyle
                  className={
                    (index === 0 && 'cardLeft') || (index === 1 && 'cardCenter')
                  }
                >
                  {/* <CardMedia image={card.img} title="Paella dish" /> */}
                  <CardIconStyle
                    src={card.img}
                    alt={card.title}
                    sx={{
                      ...(index === 0 && {
                        filter: (theme) => shadowIcon(theme.palette.info.main)
                      }),
                      ...(index === 1 && {
                        filter: (theme) => shadowIcon(theme.palette.error.main)
                      })
                    }}
                  />
                  <Typography variant="h5" paragraph>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {card.description}
                  </Typography>
                </CardStyle>
              </MotionStyle>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
