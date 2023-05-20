import { Typing, Motion, Animation } from "../animations/animation";

function StartScreen() {
	const animationScaleOut = {
		scale: { from: 1, to: 1.4, start: 0, duration: 300 },
		opacity: { from: 1, to: 0, start: 0, duration: 300 },
		start: 0,
		duration: 320,
	};

	const animationScaleIn = {
		scale: { from: 0.5, to: 1 },
		opacity: { from: 0, to: 1 },
		start: "auto",
		duration: 500,
	};

	return (
		<>
			<Animation animation={animationScaleOut} className={`h-screen fixed left-0 top-0 flex justify-center items-center flex-col`}>
				<section>
					<Motion className="text-8xl font-thin" animation={animationScaleIn}>
						Hi
					</Motion>
					<Typing className="lg:text-5xl text-4xl w-screen font-thin text-center" text="My name is Aleksandar" />
				</section>
			</Animation>
			<div className="h-screen"></div>
		</>
	);
}

export default StartScreen;
