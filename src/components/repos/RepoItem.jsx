import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const RepoItem = ({ repo }) => {
  return (
    <Card className='my-1'>
      <h3 className='m-2'>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </Card>
  );
};

RepoItem.propType = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
