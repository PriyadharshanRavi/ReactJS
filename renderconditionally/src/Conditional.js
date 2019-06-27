import React from 'react';

function Conditional(props){
	if(props.isLogged === true ){
		return(
			<h1>hey you are logged in</h1>
		);
	}else{
		return(
			<h1>hey you are logged out</h1>
		);
	}
}

export default Conditional;