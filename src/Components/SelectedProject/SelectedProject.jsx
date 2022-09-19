import React from 'react';
import './SelectedProject.scss';

const SelectedProject = () => {
	return (
		<div id='selectedProject'>
			<p className='selection'>Your selection</p>
			<h1 className='project-title'>Project title 1 (select in backend) </h1>
			<p className='come-here'>
				Here comes the project description (selected in backend). This is a placeholder full of content and
				surprises for our donors. This is a placeholder full of content and surprises for our donors.{' '}
			</p>
		</div>
	);
};
export default SelectedProject;
