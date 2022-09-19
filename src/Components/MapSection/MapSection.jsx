import React from 'react';

import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './MapSection.scss';

const MapSection = ({ img }) => {
	return (
		<div id='map-section'>
			<Link to='/'>
				<Image src='/images/logo.png' alt='logo image' className='logo-image' />
			</Link>
			{/* <Image src={img} alt='section image' className='section-image' /> */}
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19056.00545026664!2d-6.259338!3d53.343244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9b75976cbd%3A0xc23a96e8221139c!2s1%20Grafton%20Street%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1612991160838!5m2!1sen!2sus'
				width='100%'
				height='100%'
				frameborder='0'
				title='map'
				style={{ border: '0' }}
				allowfullscreen></iframe>
		</div>
	);
};
export default MapSection;
