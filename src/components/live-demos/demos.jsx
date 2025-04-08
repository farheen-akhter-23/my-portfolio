import videosData from '../../data/videosData';


const DemosGrid = () => {
	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Live Demos
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 mb-6">
                {videosData.map((video) => (
                   <div key={video.id}>
                        <h3 className="text-lg font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
                            {video.title}
                        </h3>
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl mb-10 sm:mb-0">
                            <video
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={video.src}
                            />
                        </div>
                 </div>
            ))}
			</div>
		</section>
	);
};

export default DemosGrid;
