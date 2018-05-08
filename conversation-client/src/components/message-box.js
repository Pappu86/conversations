import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const MessageBox = ({ data: { getUser = {} }, receiverUserId }) => {
	const authToken = localStorage.getItem('token'),
	userInfo = {...getUser};

	//console.log("authToken",authToken);
	console.log("receiverUserId",receiverUserId);


	const _messageSend = (e) => {	
	 let selector=	e.target;

		if(e.key === 'Enter'){
			let messageText=selector.textContent;
    		console.log("messageText", messageText);  		
  		}
	};

	return (	    	
    		<div className="row chat-container">
				<div className="clearfix col-md-12">
					<div className="chat-box-container" contentEditable="true" onKeyPress={_messageSend}></div>
				</div>
			</div>   	
	    );
};

const userQuery = gql`
   query ($id: Int!){
  	getUser(id:$id){
    	id
    	email
    	username
  	}
  }
`;

export default graphql(userQuery, {
  options: ownProps => ({ variables: { id: ownProps.receiverUserId } }),
})(MessageBox);