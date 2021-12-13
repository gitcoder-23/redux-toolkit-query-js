import { Button, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAddProductMutation } from '../services/ProductService';

const AddProducts = () => {
  const history = useHistory();
  const [data, setData] = useState({
    title: '',
    description: '',
  });

  // console.log('useAddProductMutation', useAddProductMutation());
  const [addProduct, { isLoading, isSuccess }] = useAddProductMutation();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(data);
    console.log('data', addProduct(data));

    // after submiting data
    setData({
      title: '',
      description: '',
    });
    // history.push('/crud');
  };
  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="title">Product Name:</label>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                class="form-control"
                id="title"
                // for disable at loading
                disabled={isLoading}
              />
            </div>
            <div class="form-group">
              <label for="description">Description:</label>
              <input
                type="text"
                name="description"
                value={data.description}
                onChange={handleChange}
                class="form-control"
                id="description"
                disabled={isLoading}
              />
            </div>
            <Button variant="contained" size="large" type="submit">
              Add Product
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
