import Spline from 'typescript-cubic-spline';

export const processAudioAnalysis = (
	trackAnalysis: SpotifyApi.AudioAnalysisResponse
): number[] => {
	const volumeNormalized = trackAnalysis.segments.map((segment) => {
		return {
			time: segment.start,
			duration: segment.duration,
			loud: 1 - Math.min(Math.max(segment.loudness_max, -35), 0) / -35,
		};
	});

	const spline = new Spline(
		[
			...volumeNormalized.map((item) => item.time),
			trackAnalysis.track.duration,
		],
		[...volumeNormalized.map((item) => item.loud), 0]
	);

	const timeNormalized: number[] = [];
	const portion = trackAnalysis.track.duration / 101;

	// console.log(`Duration: ${trackAnalysis.track.duration}`);
	// for (let index = 0, current = 0; index < 100; index++) {
	// 	const desired = portion * index;
	// 	// console.log(desired);
	// 	while (
	// 		volumeNormalized.length - 1 > current &&
	// 		volumeNormalized[current + 1].time <= desired
	// 	) {
	// 		current += 1;
	// 	}
	// 	timeNormalized.push(volumeNormalized[current].loud);
	// }
	for (let index = 0; index < 100; index++) {
		timeNormalized.push(spline.at(portion * index));
	}

	console.log(timeNormalized);

	return timeNormalized;
};
