import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const UserInfo = ({ data: { getUser = {} }, receiverUserId }) => {
	const 	userInfo = {...getUser};

//console.log("userInfo",userInfo, "receiverUserId",receiverUserId);

	return (	    	
	    		<div className="row">
				<div className="col-md-12 messages-header">
					<div className="messages-header-left">
						<div className="channel-title">
							<h5>{userInfo.username}</h5>
							<small>
								<span className="title-items">
									<i className="fa fa-star-o"></i>
								</span>|
								<span className="title-items">Status</span>|
								<span className="title-items">{userInfo.email}</span>
							</small>
						</div>
					</div>
					<div className="messages-header-right">
						<div className="search-container">
							<input className="form-control" type="text" name="search" placeholder="Search" />
						</div>
					</div>
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
})(UserInfo);