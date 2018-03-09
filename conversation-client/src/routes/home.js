import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/register.css';

//const Home = ({ data: { allUsers = [] } }) => allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);

class Home extends React.Component {
	render() {
	    return (
	    	<div className="container-fluid">
	    		<div className="row">
	    			<div className="col-md-2">Channel list</div>
	    			<div className="col-md-8">Main container</div>
	    		</div>
	    	</div>
	    );
	  }
}

const allUsersQuery = gql`
  {
    allUsers {
      id
      email
    }
  }
`;

//export default graphql(allUsersQuery)(Home);

export default graphql(allUsersQuery)(Home);