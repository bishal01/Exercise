import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import whey from '../image/whey.jpeg'
import oats from '../image/oats.jpg'
import banana from '../image/banana.avif'
import peanut from '../image/peanat buttur.webp'
import { Box, Grid } from "@mui/material";


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));
  
const Food = () => {
    const [expanded, setExpanded] = React.useState(false);
    const cards = [
        {
          title: "Whey Protein",
          subheader: "September 14, 2024",
          image: whey,
          description:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        },
        {
          title: "Terai Banana",
          subheader: "March 10, 2024",
          image: banana,
          description:
            "Fluffy pancakes with syrup and fresh berries make the perfect breakfast or brunch!",
        },
        {
            title: "Original Peanut Jam",
            subheader: "March 10, 2024",
            image: peanut,
            description:
              "Fluffy pancakes with syrup and fresh berries make the perfect breakfast or brunch!",
          },
          {
            title: "Oats",
            subheader: "March 10, 2024",
            image: oats,
            description:
              "Fluffy pancakes with syrup and fresh berries make the perfect breakfast or brunch!",
          },
      ];

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
  return (
    <>
    <br/>
        <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2} justifyContent="center">
        {cards.map((card, index) => (
          <Grid
            item
            xs={12} // 1 card per row on mobile
            sm={6} // 2 cards per row on small to larger screens
            key={index}
          >
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {card.title[0]}
                  </Avatar>
                }
                title={card.title}
                subheader={card.subheader}
              />
              <CardMedia
                component="img"
                height="194"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
       
    </>
  )
}

export default Food
