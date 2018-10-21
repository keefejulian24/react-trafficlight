class TrafficLight extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			on : 'red'
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {this.changeLight();}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	changeLight() {
		switch(this.state.on) {
			case 'red':
				this.setState({on : 'green'});
				break;
			case 'yellow':
				this.setState({on : 'red'});
				break;
			case 'green':
				this.setState({on : 'yellow'});
				break;
		}

	}

	render() {
		return (
			<div>
				<Light color={(this.state.on === 'red') ? 'red' : 'black'} />
				<Light color={(this.state.on === 'yellow') ? 'yellow' : 'black'} />
				<Light color={(this.state.on === 'green') ? 'green' : 'black'} />
			</div>
		)
	}
}

class Light extends React.Component {
	render() {
		return(
			<div className='circle' style={{backgroundColor: this.props.color}}> </div>
		)
	}
}

ReactDOM.render(<TrafficLight />, document.getElementById('traffic-light'));