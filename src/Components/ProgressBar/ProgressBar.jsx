import React from 'react';
import { useHistory } from 'react-router-dom';
import { Progress } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import './ProgressBar.scss';

const ProgressBar = ({ heading, percent }) => {
	const history = useHistory();
	return (
		<div id='progress'>
			<div className='d-flex justify-content-between align-items-center'>
				<p
					className='d-flex align-items-center arrow-heading'
					onClick={() => {
						history.goBack();
					}}>
					{' '}
					<LeftOutlined />
					{heading}
				</p>
				<div style={{ width: '30%' }}>
					<Progress percent={percent} />
				</div>
			</div>
			<hr />
		</div>
	);
};
export default ProgressBar;
