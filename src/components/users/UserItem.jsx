import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='col-md-4 col-12'>
      <Card className='text-center my-1'>
        <img
          src={avatar_url}
          alt=''
          className='rounded-circle mx-auto mt-3'
          style={{ width: '200px' }}
        />
        <h3>{login}</h3>
        <div>
          <Link className='btn btn-dark mb-3' to={`/user/${login}`}>
            More
          </Link>
        </div>
      </Card>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
