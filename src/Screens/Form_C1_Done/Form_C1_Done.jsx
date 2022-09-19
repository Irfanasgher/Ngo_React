import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LogoSection from '../../Components/LogoSection';
import ThankTrackAct from '../../Components/ThankTrackAct';

import './Form_C1_Done.scss';

const Form_C1_Done = () => {
	return (
		<div id='payment'>
			<Row noGutters>
				<Col className='pl-0' md={5}>
					<LogoSection img={'/images/elephent.png'} />
				</Col>
				<Col className='px-5' md={7}>
					<div className='d-flex justify-content-between align-items-center w-100 h-100'>
						<ThankTrackAct />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Form_C1_Done;
