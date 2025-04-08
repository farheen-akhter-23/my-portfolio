import { useCountUp } from 'react-countup';
import { useRef, useEffect } from 'react';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	const experienceRef = useRef(null);
	const feedbackRef = useRef(null);
	const projectsRef = useRef(null);
	// const githubStarsRef = useRef(null); // if needed later

	useCountUp({ ref: experienceRef, end: 7, duration: 1 });
	useCountUp({ ref: feedbackRef, end: 92, duration: 2 });
	useCountUp({ ref: projectsRef, end: 77, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span ref={experienceRef} />}
					measurement=""
				/>

				{/* <CounterItem
					title="Stars on GitHub"
					counter={<span ref={githubStarsRef} />}
					measurement="k+"
				/> */}

				<CounterItem
					title="Positive feedback"
					counter={<span ref={feedbackRef} />}
					measurement="%"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span ref={projectsRef} />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
