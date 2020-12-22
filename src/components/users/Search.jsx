import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import GithubContext from './../../context/github/githubContext';
import AlertContext from './../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText([e.target.value]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'warning');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Control
        type='text'
        name='text'
        placeholder='Search user . . .'
        value={text}
        onChange={onChange}
        className='my-3'
      />
      <Button variant='dark' type='submit' className='btn btn-block my-3'>
        Search
      </Button>
      {githubContext.users.length > 0 && (
        <Button
          variant='light'
          className='btn btn-block my-3'
          onClick={githubContext.clearUsers}
        >
          Clear
        </Button>
      )}
    </Form>
  );
};

export default Search;
