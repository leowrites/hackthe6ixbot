import React from 'react';
import ChatBox from './ChatBox';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ChatBox />
      </Grid>
    </Grid>
  );
};

export default Home;
