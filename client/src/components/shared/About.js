import React from 'react';
import chris from './images/chris.jpg';
import somchay from './images/somchay.jpg';
import gabby from './images/gabby.jpg';

const About = () => {

	return(
		<>
		<h1>About DPL-DJ-APP</h1>
		<br />
		<p>
		This app is a React on Rails stack web application that connects to the Spotify API 
		to allow a room of people to add songs to a playlist to listen to together.
		</p>
		<br />
		<h1>Developers behind this app</h1>
		<br />
		<h3>Somchay Keomanivong</h3>
		<img className='img1' src={somchay} alt="Somchay" />
		<br />
		<p>About Somchay</p>
		<br />
		<h3>Gabriella Algecera</h3>
		<img className='img2' src={gabby} alt="Gabby" />
		<br />
		<p>About Gabriella</p>
		<br />
		<h3>Chris Anderson</h3>
		<img className='img3' src={chris} alt="Chris" />
		<br />
		<p>About Chris</p>
		<br />
	</>
	)
} 

export default About;