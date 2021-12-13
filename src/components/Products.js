import * as React from 'react';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useGetAllProductsQuery } from '../services/ProductService';

export const Products = () => {
  // console.log('useGetAllProductsQuery', useGetAllProductsQuery());
  const history = useHistory();
  const { isSuccess, isError, data, isFetching } = useGetAllProductsQuery();
  // for time setup 'isFetching'
  if (isFetching) {
    return (
      <div className="spinner-Wrapper">
        <CircularProgress />
      </div>
    );
  }
  if (isError) {
    return <p>Something wrong.</p>;
  }
  if (isSuccess) {
    return (
      <>
        <Grid container mt={3} spacing={2}>
          {data &&
            data?.map((allPro) => (
              <>
                {' '}
                <Grid item xs={4} key={allPro.id}>
                  <Card spacing={4} container sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt={allPro.title}
                      height="140"
                      image={allPro.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {allPro.title}
                      </Typography>
                      <Button
                        onClick={() =>
                          history.push(`/products/byfilter/${allPro?.id}`)
                        }
                      >
                        <PreviewIcon />
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        {allPro.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => history.push(`/products/${allPro?.id}`)}
                      >
                        <RemoveRedEyeIcon />
                      </Button>

                      <Button>
                        <EditIcon />
                      </Button>
                      <Button>
                        <DeleteIcon />
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            ))}
        </Grid>
      </>
    );
  }
};
