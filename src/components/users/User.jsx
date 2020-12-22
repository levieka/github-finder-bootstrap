import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from './../layout/Spinner';
import Repos from './../repos/Repos';
import { Link } from 'react-router-dom';
import { Card, Table, Badge } from 'react-bootstrap';

import GithubContext from './../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, getUserRepos, loading, user, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to='/' className='btn btn-light btn-block mt-5 mb-3'>
          Back to Search
        </Link>

        <Card>
          <Card.Body>
            <div className='row'>
              <div className='col-12 col-md-4'>
                <div className='row my-1'>
                  <img
                    src={avatar_url}
                    className='rounded-circle mx-auto'
                    style={{ width: '200px' }}
                    alt={login}
                  />
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <h5 className='text-center'>{name}</h5>
                    <p className='text-center'>{location}</p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div className='row'>
                  <div className='col-12'>
                    <p>
                      <span className='h4'>Bio </span>
                      <span className='text-sm'>
                        Hireable:{' '}
                        {hireable ? (
                          <i className='fa fa-check text-success'></i>
                        ) : (
                          <i className='fas fa-times text-danger'></i>
                        )}
                      </span>
                    </p>
                    <p>{bio}</p>
                    <p>
                      <a href={html_url} className='btn btn-dark'>
                        Visit Github Profile
                      </a>
                    </p>
                    <Table borderless className='col-6'>
                      <tbody>
                        <tr>
                          <td>Username</td>
                          <td>:</td>
                          <td>{login}</td>
                        </tr>
                        <tr>
                          <td>Company</td>
                          <td>:</td>
                          <td>{company}</td>
                        </tr>
                        <tr>
                          <td>Website</td>
                          <td>:</td>
                          <td>{blog}</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Badge
                      variant='primary'
                      className='col-12 col-md-auto mx-1'
                    >
                      Followers : {followers}
                    </Badge>
                    <Badge
                      variant='secondary'
                      className='col-12 col-md-auto mx-1'
                    >
                      Following : {following}
                    </Badge>
                    <Badge
                      variant='success'
                      className='col-12 col-md-auto mx-1'
                    >
                      Public repos : {public_repos}
                    </Badge>
                    <Badge variant='dark' className='col-12 col-md-auto mx-1'>
                      Public gists : {public_gists}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;
