import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

const cursor: React.CSSProperties = {
	height: 60,
	width: 3,
	display: 'inline-block',
	backgroundColor: 'black',
	marginLeft: 4,
	marginTop: -4,
};

export const MyComposition = () => {
	const frame = useCurrentFrame();
	const text = 'Typewriter Effect';
	// A new character every 3 frames
	const charsShown = Math.floor(frame / 3);
	const textToShow = text.slice(0, charsShown);
	// Show the cursor while the text is typing, then start blinking
	const cursorShown =
		textToShow.length === text.length ? Math.floor(frame / 10) % 2 === 1 : true;

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					fontFamily: 'sans-serif',
					fontSize: 50,
				}}
			>
				{textToShow}
				<span
					style={{
						...cursor,
						verticalAlign: 'middle',
						opacity: Number(cursorShown),
					}}
				/>
			</div>
		</AbsoluteFill>
	);
};
