import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.user.age,
			name: props.user.name,
			link: props.initialLinkName
		};
	}

	onMakeOlder() {
		this.setState({
			age: ++this.state.age
		});
	}

	onMakeYounger() {
		this.setState({
			age: --this.state.age
		});
	}

	changeName() {
		this.props.change(this.state.link);
	}

	onHandleChange(event) {
		this.setState({
			link: event.target.value
		})
	}

	render () {
		return (
			<div>
				<p>My name is {this.state.name}</p>
				<p>My age is {this.state.age}</p>
				<hr/>
				<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make Me Older</button>
				<button onClick={() => this.onMakeYounger()} className="btn btn-danger">Make Me Younger</button>
				<hr/>
				<button onClick={this.props.greet} className="btn btn-info">Say Hello</button>
				<hr/>
				<input 
					type="text" 
					value={this.state.link}
					onChange={(event) => this.onHandleChange(event)}
				/>
				<button onClick={() => this.changeName()} className="btn btn-info">Change Link</button>
			</div>
		);
	}
}

// this is deprecated. Pull in proptype package from
Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	greet: React.PropTypes.func,
	link: React.PropTypes.string,
};