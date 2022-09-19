import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import MapSection from '../../Components/MapSection';
import ProgressBar from '../../Components/ProgressBar';
import Quenter from '../../Components/Quenter';
import SelectedProject from '../../Components/SelectedProject';
import Button from '../../Components/Button';

import './Form_C2_Monthly.scss';

const Form_C2_Monthly = () => {
	return (
		<div id='form-monthly'>
			<Row noGutters>
				<Col className='pl-0' md={5}>
					<MapSection img={'/images/elephent.png'} />
				</Col>
				<Col className='px-5 mt-4' md={7}>
					<ProgressBar heading={'back to the selection'} percent={30} />
					<div className='d-flex justify-content-between align-items-center'>
						<SelectedProject />
						<Image src='/images/title-2.png' alt='section image' className='section-image' />
					</div>
					<hr />
					<Quenter />
					<Button text={'Next'} to='/form_c1_contact' />
				</Col>
			</Row>
		</div>
	);
};

export default Form_C2_Monthly;
