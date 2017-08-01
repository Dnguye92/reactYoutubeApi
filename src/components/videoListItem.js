import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

	// doing the above is exactly the same as the comment below
	// this is saying the object has a property 'video', please grab that video and declare a new variable called 'video'
	// const video = props.video;
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</div>

		</li>
	);
};

export default VideoListItem;