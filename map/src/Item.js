import React from 'react'

function Item(props){
	return(
		<div>
			<p>ID: {props.item.id}</p>
			<p>Name: {props.item.name}</p>
			<p>Position: {props.item.position}</p>
		</div>
	);
}

export default Item