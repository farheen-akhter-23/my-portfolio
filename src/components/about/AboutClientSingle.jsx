const AboutClientSingle = ({ title, image, description=[] }) => {

	return (
		<div className="mb-10">
			<p className="font-general-medium text-xl sm:text-xl mb-2 text-ternary-dark dark:text-ternary-light">
				{title}
			</p>
			<img
				src={image}
				className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-4"
				alt={title}
			/>
				  <ul className="space-y-2">
    {description.map((line, idx) => (
      <li
        key={idx}
        className="flex items-start text-sm sm:text-base text-gray-700 dark:text-ternary-light"
      >
        <span className="text-cyan-500 mr-2 mt-1">•</span>
        <span>{line}</span>
      </li>
    ))}
  </ul>
		</div>
	);
};

export default AboutClientSingle;
