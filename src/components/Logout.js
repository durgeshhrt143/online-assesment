import React from 'react';
import history from './history';

class Logout extends React.Component {

  componentWillMount() {
    localStorage.clear();
    history.push('/login');
  }

  render() {
    return(
      <div>
        <h3>Logout</h3>
      </div>
    )
  }
}

export default Logout;
