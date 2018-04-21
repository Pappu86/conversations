import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

import '../components-style/index.css';
import '../components-style/home.css';

import UserInfo from '../components/user-info';


const Messages = ({ data: { allUsers = [], ...options } }) => {
	const authToken = localStorage.getItem('token'),	
	 		users = [...allUsers],
	 		params=options.variables.params;

	let receiverId='';

	if(params && params.userId) receiverId=params.userId;

//console.log("authToken",authToken);
//console.log("users",users);
//console.log("receiverUserId", receiverId);

	const listItems = users.map((user, index) =>
		  <li key={index} userid={user.id}>
		  	<Link to={`/messages/${user.id}`}>{user.username}</Link>
		  </li>
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
	    			<div className="media d-none">
	    				<div className="align-self-start mr-2">+</div>
	    				<div className="media-body">Invite People</div>	    				
	    			</div>
	    		</div>
	    		<div className="main-container">
	    			<UserInfo receiverUserId={receiverId} />
	    			<div className="row messages-body">
						<div className="col-md-12"></div>
	    			</div>
	    			<div className="row chat-container">
						<div className="clearfix col-md-12">
							<div className="chat-box-container" contentEditable="true"></div>
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

export default graphql(allUsersQuery,{
  options: ownProps => ({ variables: { params: ownProps.match.params } }),
})(Messages);