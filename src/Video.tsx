import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={MyComposition}
				durationInFrames={120}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
