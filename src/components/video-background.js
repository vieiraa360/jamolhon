import React from 'react';

function VideoBackground() {
	return (
		<div className="video-background">
	<video autoPlay loop muted>
		<source src={"./assets/vid/Water.mp4"} type="video/mp4"/>
		</video>
	</div>
  );
}

export default VideoBackground;