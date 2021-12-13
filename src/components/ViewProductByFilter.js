import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { useGetAllProductsQuery } from '../services/ProductService';
import { Grid } from '@mui/material';
import ReactImageZoom from 'react-image-zoom';

const ViewProductByFilter = ({ match }) => {
  // get single product from total product filter
  // to fast coming & fetch data
  const { data } = useGetAllProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((el) => el.id == match.params.proId),
    }),
  });

  const ImageProps = {
    height: 250,
    zoomWidth: 500,
    img: `${data?.image}`,
  };

  return (
    <>
      {data == undefined ? (
        <div className="spinner-Wrapper">
          <CircularProgress />
        </div>
      ) : (
        <>
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
        </>
      )}
    </>
  );

  // if (isFetching) {
  //   return (
  //     <div className="spinner-Wrapper">
  //       <CircularProgress />
  //     </div>
  //   );
  // }
  // if (isError) {
  //   return <p>Something wrong.</p>;
  // }
  // if (isSuccess) {
  //   return (
  //     <div className="head-view">
  //       <h2>{data?.title}</h2>
  //       <Grid mt={3} container spacing={2}>
  //         <Grid item xs={4}>
  //           <ReactImageZoom {...ImageProps} />
  //         </Grid>
  //         <Grid item xs={8}>
  //           <p>
  //             <span style={{ fontWeight: 'bolder' }}>Description: </span>
  //             {data?.description}
  //           </p>
  //         </Grid>
  //       </Grid>
  //     </div>
  //   );
  // }
};

export default ViewProductByFilter;
