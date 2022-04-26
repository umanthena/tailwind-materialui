import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import './card.css';

export const TestCard = () => {
  return (
    <Card className='shadow' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1589405858862-2ac9cbb41321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
        alt="mountain"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="p">
          <strong>Mountain</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! 
        Maiores et perferendis eaque, exercitationem praesentium nihil.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='button-style'>#photography</Button>
        <Button size="small" className='button-style'>#travel</Button>
        <Button size="small" className='button-style'>#winter</Button>
      </CardActions>
    </Card>
  );
}
