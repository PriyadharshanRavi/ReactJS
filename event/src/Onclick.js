import React from 'react';

function handleOnClick(){
		console.log('leh');
	}

function Onclick(){
	return(
		<div className="root">
			<img src="https://images.pexels.com/photos/1226302/pexels-photo-1226302.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" />
			<br/><br/>
			<button onClick={handleOnClick}>click</button>
		</div>
	);
}


export default Onclick;