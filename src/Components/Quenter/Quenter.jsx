import React, { useState } from 'react';
import { Radio, Button } from 'antd';

import './Quenter.scss';

const Quenter = () => {
	const [count, setCount] = useState(1);
	return (
		<div id='quenter'>
			<h2 className='choose-amount mb-3'>
				Question (backend, for example: How many trees do you want to plant?)
			</h2>
			<div className='d-flex justify-content-between align-items-center' style={{ width: '180px' }}>
				<Button
					onClick={() => setCount(count - 1)}
					className='circle d-flex justify-content-center align-items-center'>
					-
				</Button>
				<h5 className='number'>{count}</h5>
				<Button
					onClick={() => setCount(count + 1)}
					className='circle d-flex justify-content-center align-items-center'>
					+
				</Button>
			</div>
			<div className='d-flex justify-content-center mt-3' style={{ width: '180px' }}>
				<p className='euro'>à 2 € </p>
			</div>
			<Radio.Group defaultValue='large' buttonStyle='solid' className='mt-3'>
				<Radio.Button value='large'>monthly</Radio.Button>
				<Radio.Button value='default'>one-time</Radio.Button>
			</Radio.Group>
		</div>
	);
};

export default Quenter;
