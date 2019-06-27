import React from 'react';

class Header extends React.Component{
	render(){
		return(
			<p> Welcome, {this.props.username}!</p>
		)
	}
}

export default Header;