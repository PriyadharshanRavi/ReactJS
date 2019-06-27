import React from 'react';

function Joke(props){
	return(
		<div>
			<p>Question : {props.question}</p>
			<p>Answer : {props.answer} </p>
		</div>
	);
}

export default Joke;