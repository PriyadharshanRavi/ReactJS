import React from 'react';

function Product(props){
	return(
		<div className="root">
			<p>ID: {props.product.id}</p>
			<p>Name: {props.product.name}</p>
			<p>$ {props.product.price}</p>
			<p>{props.product.description}</p>
			<hr/>
		</div>
	);
}

export default Product;