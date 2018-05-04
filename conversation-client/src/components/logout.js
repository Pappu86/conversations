import React from 'react';

const Logout = ({}) => {
	const authToken = localStorage.getItem('token');

	console.log("authToken-qqqq",authToken);

	const _logOut = () => {
		localStorage.removeItem('token');
    	localStorage.removeItem('refreshToken');

	    try {
	      window.location.assign('/login');
	    } catch (err) {
	      return false;
	    }
	};

	return (
		<div>
			{authToken?(
				<div className="media">
					<div className="media-body" onClick={_logOut}>LOG OUT</div>	    				
	    		</div>
	    	):(<div></div>)}
		</div>
		);
};

export default (Logout);