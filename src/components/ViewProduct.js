import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { useGetAllProductByIdQuery } from '../services/ProductService';
import { Grid } from '@mui/material';
import ReactImageZoom from 'react-image-zoom';

const ViewProduct = (props) => {
  // console.log(props);
  const propsId = props.match.params.proId;
  // console.log('useGetAllProductByIdQuery', useGetAllProductByIdQuery(propsId));
  const { isError, isFetching, isSuccess, data } =
    useGetAllProductByIdQuery(propsId);

  const ImageProps = {
    height: 250,
    zoomWidth: 500,
    img: `${data?.image}`,
  };

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
      <div className="head-view">
        <h2>{data?.title}</h2>
        <Grid mt={3} container spacing={2}>
          <Grid item xs={4}>
            <ReactImageZoom {...ImageProps} />
          </Grid>
          <Grid item xs={8}>
            <p>
              <span style={{ fontWeight: 'bolder' }}>Description: </span>
              {data?.description}
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default ViewProduct;
