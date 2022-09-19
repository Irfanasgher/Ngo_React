import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import './ProjectTitleCard.scss';

const ProjectTitleCard = ({ item }) => {
	return (
		<div className='project-title-card'>
			<Link to={item.to}>
				<h1 className='title1' style={{ color: item.image ? '#fff' : '#000' }}>
					{item.title}{' '}
				</h1>
				{item.image ? <Image src={item.image} alt='title image' /> : ''}
			</Link>
		</div>
	);
};
export default ProjectTitleCard;
