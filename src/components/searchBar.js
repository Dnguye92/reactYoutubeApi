import React, { Component } from 'react';

// this line reads as - define a new class called SearchBar and give it all of the functionality from the React.Component Class
class SearchBar extends Component {
	// this is how we define state in a Class based Component
	constructor(props) {
		super(props);
	
		this.state= { term: '' };
	}

	// this is the syntax we use to define a method in a component
	render() {
		return (
			<div className="search-bar">
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	// typical naming convention for event handlers
	// on/handle - name of the element that the event is happening on - the type of event
}

export default SearchBar;