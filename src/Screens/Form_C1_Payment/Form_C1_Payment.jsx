import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import LogoSection from '../../Components/LogoSection';
import ProgressBar from '../../Components/ProgressBar';
import Payment from '../../Components/Payment';
import DonationFor from '../../Components/DonationFor';
// import Button from '../../Components/Button';

import './Form_C1_Payment.scss';

const Form_C1_Payment = () => {
	return (
		<div id='payment'>
			<Row noGutters>
				<Col className='pl-0' md={5}>
					<LogoSection img={'/images/elephent.png'} />
				</Col>
				<Col className='px-5 mt-4' md={7}>
					<ProgressBar heading={'back'} percent={90} />
					<div className='d-flex justify-content-between align-items-center'>
						<DonationFor />
						<Image src='/images/title-1.png' alt='section image' className='section-image' />
					</div>
					<hr />
					<Payment />
					{/* <Button text={'Pay now'} to='/form_c1_done' /> */}
				</Col>
			</Row>
		</div>
	);
};

export default Form_C1_Payment;
