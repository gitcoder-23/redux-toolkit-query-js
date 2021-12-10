import React from 'react';
import './Quotes.scss';
import { useGetRandomQuoteQuery } from '../services/QuoteService';

const Quotes = () => {
  // console.log('useGetRandomQuoteQuery', useGetRandomQuoteQuery());
  // get all quotes
  // Inside of the action function u can pass only two data
  // now polling started
  const { data, isError, isLoading, isSuccess, isFetching, refetch } =
    useGetRandomQuoteQuery(null, {
      pollingInterval: 3000, // interval timer set here if u want
    });
  return (
    <div className="wrapper">
      <div className="quote">
        {isLoading && <h3>Quote is coming! Please wait</h3>}
        {isError && <h3>Something wrong! Quote is not be displayed</h3>}
        {/* Conditional rendering */}
        {isSuccess && (
          <>
            <h4 className="quote__text">{data?.content}</h4>
            <p className="quote__author">{data?.author}</p>
          </>
        )}
        {/* Data refatching by click */}
        <button className="quote-button" onClick={refetch}>
          {isFetching ? (
            <i class="fas fa-spinner fa-spin"></i>
          ) : (
            <i class="fas fa-sync"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Quotes;
