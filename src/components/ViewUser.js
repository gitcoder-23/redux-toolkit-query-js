import { Button, Grid, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetSingleUserByIdQuery } from '../services/UsersService';

const ViewUser = ({ match }) => {
  // console.log('props->', props.match.params);
  // console.log('props-params->', match.params);
  // console.log(
  //   'useGetSingleUserByIdQuery',
  //   useGetSingleUserByIdQuery(match.params.userId)
  // );
  const { data, isError, isLoading, isSuccess } = useGetSingleUserByIdQuery(
    match.params.userId
  );
  // console.log('data->', data);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong.</p>;
  }
  if (isSuccess == true) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper sx={{ padding: 2 }}>
            <h1>{data?.name}</h1>
            <p>{data?.username}</p>
            <p>{data?.email}</p>
            <p>{data?.phone}</p>
            <p>{data?.address?.city}</p>
            <Button component={Link} to={`/`} variant="contained">
              Go Back
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
};

export default ViewUser;
