// this line is saying go find the React library that is installed as a dependency
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList';
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyD3RNFotFeraRWJytJRbkCPldujqFPPaSc';

// Create a new component that produces some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('dying');
	}

	videoSearch(term) {
		YTSearch({
			key: API_KEY,
			term: term
		}, (videos) => {
			console.log(videos);
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
			// if you have a property that has the same name as its value then you can use this ES6 syntax as above
		})
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

		return (
			<div>
				<SearchBar onSearchTermChange={ videoSearch }/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
				onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
				videos={ this.state.videos } />
			</div>
		);
	}
}

// Take this component's generated HTML and put it in the DOM
// .render() takes two arguments/parameters - 1st is the instance of the component you want to use and 2nd is the DOM node that you want to render your first argument to
ReactDOM.render(<App />, document.querySelector('.container-fluid'));
