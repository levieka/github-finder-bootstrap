import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <div className='row' style={{ marginTop: '20vh' }}>
        <div className='col-6 offset-3'>
          <h1 className='display-3'>Not Found!</h1>
          <p>The page your looking for does not exist.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
