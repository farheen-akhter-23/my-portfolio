import { useState, createContext } from 'react';
import  {projectsData}  from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ projectId,children }) => {
	
	const project = projectsData.find((proj) => proj.id === projectId);
	console.log(projectId,project,"context")

	if (!project) return <div>Project not found</div>;

	return (
		<SingleProjectContext.Provider value={{ singleProjectData: project }}>
			{children}
		</SingleProjectContext.Provider>
	);

};

export default SingleProjectContext;
