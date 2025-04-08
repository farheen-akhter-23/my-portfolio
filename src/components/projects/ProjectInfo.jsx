import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { FiClock, FiTag } from 'react-icons/fi';
import {projectsData} from "../../data/singleProjectData";

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	if (!singleProjectData) {
		return <p className="text-center mt-10">Project not found.</p>;
	}

	return (
		// projectsData.map((singleProjectData) => (
		<>
		<div>
						<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
							{singleProjectData.ProjectHeader.title}
						</p>
						<div className="flex">
							<div className="flex items-center mr-10">
								<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
								<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
									{singleProjectData.ProjectHeader.publishDate}
								</span>
							</div>
							<div className="flex items-center">
								<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
								<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
									{singleProjectData.ProjectHeader.tags}
								</span>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
							key={project.id}
						/>
					</div>
				);
			})}
		</div>
					<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				
			
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.ObjectivesDetails}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.Technologies[0].techs.join(
							', '
						)}
					</p>
				</div>
				{/* {singleProjectData.ProjectInfo.SocialSharing.map((social) => (
					<div className='mb-7'>
						
							<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-indigo-600 dark:text-indigo-400"
							>
							Source code
							</a>
					
					</div>
            	))} */}

				{/* Single project social sharing */}
				<div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{singleProjectData.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				{singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					);
				})}
			</div>
		</div>
		</>
		
	
		// ))
	)
}

export default ProjectInfo;
