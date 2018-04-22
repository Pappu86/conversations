import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

import '../components-style/index.css';
import '../components-style/home.css';

import UserInfo from '../components/user-info';
import MessageBox from '../components/message-box';


const Messages = ({ data: { allUsers = [], ...options } }) => {
	const authToken = localStorage.getItem('token'),	
	 		users = [...allUsers],
	 		params=options.variables.params;

	let receiverId='';

	if(params && params.userId) receiverId=params.userId;

	const listItems = users.map((user, index) =>
		  <li key={index} userid={user.id}>
		  	<Link to={`/messages/${user.id}`}>{user.username}</Link>
		  </li>
		);

	console.log("authToken",authToken);

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
	    			{authToken?(
						<div className="media">	    				
	    					<div className="media-body">LOG OUT</div>	    				
	    				</div>
	    				):(<div></div>)}
	    		</div>
	    		<div className="main-container">
	    			<UserInfo receiverUserId={receiverId} />
	    			<div className="row messages-body">
						<div className="col-md-12"></div>
	    			</div>
	    			<MessageBox receiverUserId={receiverId} />
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