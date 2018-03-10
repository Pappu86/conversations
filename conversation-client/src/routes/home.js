import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components-style/index.css';
import '../components-style/home.css';

//const Home = ({ data: { allUsers = [] } }) => allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);

class Home extends React.Component {


	render() {
	    return (
	    	<div className="container-fluid">
	    		<div className="left-panel">
	    			<div className="media">
	    				<div className="media-body">Md.Pappu Miahn</div>
	    			</div>
	    		</div>
	    		<div className="main-container">Main container</div>
	    	</div>
	    );
	  }
}

const allUsersQuery = gql`
  {
    allUsers {
      id
      email
      name
    }
  }
`;

//export default graphql(allUsersQuery)(Home);

export default graphql(allUsersQuery)(Home);