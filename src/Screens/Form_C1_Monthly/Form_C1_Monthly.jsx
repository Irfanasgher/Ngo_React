import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import LogoSection from '../../Components/LogoSection';
import ProgressBar from '../../Components/ProgressBar';
import MonthlyOneTime from '../../Components/MonthlyOneTime';
import SelectedProject from '../../Components/SelectedProject';
import Button from '../../Components/Button';

import './Form_C1_Monthly.scss';

const Form_C1_Monthly = () => {
	return (
		<div id='form-monthly'>
			<Row noGutters>
				<Col className='pl-0' md={5}>
					<LogoSection img={'/images/elephent.png'} />
				</Col>
				<Col className='px-5 mt-4' md={7}>
					<ProgressBar heading={'back to the selection'} percent={30} />
					<div className='d-flex justify-content-between align-items-center'>
						<SelectedProject />
						<Image src='/images/title-1.png' alt='section image' className='section-image' />
					</div>
					<hr />
					<MonthlyOneTime />
					<Button text={'Next'} to='/form_c1_contact' />
				</Col>
			</Row>
		</div>
	);
};

export default Form_C1_Monthly;
