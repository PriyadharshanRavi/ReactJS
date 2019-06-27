import React from 'react';

class Lyfcyc extends React.Component{
	constructor(){
		super()
		this.state={

		}
	}

	static getDerivedStateFromProps(props, state){
		// return the new, updated state based upon the props
	}

	getSnapshotBeforeUpdate(){
		//create a backup on current state before updating it
	}

	componentDidMount(){
		//default function to get data from an external API
	}

	shouldComponentUpdate(nextProps, nextState){
		//its like deciding whether to change the state or not. return true if you want to update, return false if not
	}

	componentWillUnmount(){
		//teardown to cleanup code before component disappears
		//(E.g. remove event listeners)
	}

	//componentWillReceiveProps(nextProps){
	//	  Receive props from other components. But it is deprecated after React 16
	//}

	//componentWillMount(){
	//	Making the react believe that component will mount. it also been deprecated after react 16
	//}

	//componentWillUpdate(){
	//	
	//}

	render(){
		return(
			<div className="root">
				<p>dsjkdsjaj</p>
			</div>
		);
	}
}


export default Lyfcyc;