import React from 'react';
import './ThankTrackAct.scss';
const ThankTrackAct = () => {
	return (
		<div id='thankTrackAct'>
			<h1 className='heading'>Placeholder for ThankYou-Title edited in the backend</h1>
			<p className='para'>
				Placeholder for ThankYou-Text edited in the backend.Placeholder for ThankYou-Text edited in the
				backend.Placeholder for ThankYou-Text edited in the backend.Placeholder for ThankYou-Text edited in the
				backend.
			</p>
			<div className='card px-3'>
				<div className='d-flex justify-content-between align-items-center h-100 w-100'>
					<p className='donation'>
						You can track and manage your donation at any <br /> time at TrackAct.org.{' '}
					</p>
					<h3 className='trackAct'>TrackAct</h3>
				</div>
			</div>
		</div>
	);
};
export default ThankTrackAct;
