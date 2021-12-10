import React from 'react';
import { Grid, Paper, Button } from '@mui/material';
import { useGetAllUsersQuery } from '../services/UsersService';
import { Link } from 'react-router-dom';

const Users = () => {
  // console.log('useGetAllUsersQuery->', useGetAllUsersQuery());
  const { isError, isLoading, data, status } = useGetAllUsersQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong.</p>;
  }
  if (status == 'fulfilled') {
    return (
      <Grid spacing={4} container>
        {data &&
          data.map((allUsers, index) => (
            <Grid sm="3" item>
              <Paper sx={{ padding: 2 }}>
                <h4>{allUsers?.name}</h4>
                <p>{allUsers?.username}</p>
                <p>{allUsers?.email}</p>
                <Button
                  component={Link}
                  to={`users/${allUsers?.id}`}
                  variant="contained"
                >
                  View Profile
                </Button>
              </Paper>
            </Grid>
          ))}
      </Grid>
    );
  }
};

export default Users;
