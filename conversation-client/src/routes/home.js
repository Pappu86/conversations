import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import '../components-style/index.css';
import '../components-style/home.css';


//const Home = ({ data: { allUsers = [] } }) => allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);

//console.log("Users",allUsers);

const Home = ({ data: { allUsers = [] } }) => {
	const users = [...allUsers];

console.log("users",users);

	const listItems = users.map((user, index) =>
		  <li key={index} userid={user.id}>{user.username}</li>
		);

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
	    			<div className="users-list">
	    			<ul className="users">{listItems}</ul>
	    			</div>
	    			<div className="media">
	    				<div className="align-self-start mr-2">+</div>
	    				<div className="media-body">Invite People</div>	    				
	    			</div>
	    		</div>
	    		<div className="main-container">
	    			<div className="row">
	    				<div className="col-md-12 messages-header">
	    					<div className="messages-header-left">
	    						<div className="channel-title">
	    							<h5>Pappu</h5>
	    							<small><i className="fa fa-plus"></i></small>
	    						</div>
	    						<div className="channel-info"></div>
	    					</div>
	    					<div className="messages-header-right">Right</div>
	    				</div>
	    			</div>
	    		</div>
	    	</div>	    	
	    );
};

const allUsersQuery = gql`
  {
    allUsers {
      id
      email
      username      
    }
  }
`;

export default graphql(allUsersQuery)(Home);