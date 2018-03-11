import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components-style/index.css';
import '../components-style/home.css';

const user = ({ data: { allUsers = [] } }) => allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);

console.log("users",user.email);

class Home extends React.Component {

	render() {
	    return (
	    	<div className="container-fluid">
	    		<div className="left-panel">
	    			<div className="media profile-header">
	    				<div className="media-body">Md.Pappu Miahn</div>
	    			</div>
	    			<div className="media">
	    				<div className="media-body">Channels</div>
	    				<div className="align-self-start mr-3">+</div>
	    			</div>
	    			<div className="channels-list"></div>
					<div className="media">
	    				<div className="media-body">Direct Messages</div>
	    				<div className="align-self-start mr-3">+</div>
	    			</div>
	    			<div className="users-list"></div>
	    			<div className="media">
	    				<div className="align-self-start mr-2">+</div>
	    				<div className="media-body">Invite People</div>	    				
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
    }
  }
`;

//export default graphql(allUsersQuery)(Home);

export default graphql(allUsersQuery)(Home);