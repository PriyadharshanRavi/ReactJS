import React, {useState, useEffect} from 'react';

function Shop(){
	useEffect(() => {
		fetchItems();
	}, []);
	const fetchItems = async () => {
		const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
		const item = await data.json();
		console.log(item);
	}

	return(
		<div>
			<h1><center>Shop</center></h1><hr />
			<p>saksajskljasjlkjdlkajdklsjdkljadkjalksdjlkajsdkljaldjlkajdkljadl</p>
		</div>
	);
}

export default Shop;
