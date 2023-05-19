import { forwardRef, cloneElement, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export const Typing = ({ className, text, duration = 0.4, delay = 0 }) => {
	const scrollTop = useSelector((state) => state.scrollTop);
	const myRef = useRef(null);
	const [calcStart, setCalcStart] = useState(null);

	useEffect(() => {
		if (!myRef.current) return;
		const { top } = myRef.current?.getBoundingClientRect();
		const { innerHeight } = window;
		setCalcStart(top - innerHeight + innerHeight / 3);
	}, [myRef]);

	const letter = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: duration } },
	};

	const sentence = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: { delay, delayChildren: delay + duration / 2, staggerChildren: (duration / 10) * 2 },
		},
	};

	if (calcStart !== null && scrollTop < calcStart) return <></>;
	return (
		<motion.div ref={myRef} className={className} variants={sentence} initial="hidden" animate="visible">
			{text.split("").map((char, index) => (
				<motion.span key={index} variants={letter}>
					{char}
				</motion.span>
			))}
		</motion.div>
	);
};

export const Highlight = ({ children }) => {
	const animation = {
		opacity: { from: 0.3, to: 1 },
		duration: 150,
		rewards: true,
	};

	return children.map((child, index) => (
		<Animation animation={animation} key={index}>
			{child}
		</Animation>
	));
};

export const Motion = ({ children, className = null, animation = null }) => {
	if (!animation) return children;
	const skipKeys = ["duration", "delay", "start", "rewards", "add"];
	const initial = {};
	const animate = {};
	let transition = { duration: animation.duration ? animation.duration / 1000 : 0.5, delay: animation.delay || 0 };
	Object.keys(animation).forEach((key) => {
		if (skipKeys.includes(key)) return;
		initial[key] = animation[key].from;
		animate[key] = animation[key].to;
	});

	return (
		<motion.div className={className} initial={initial} animate={animate} transition={transition}>
			{children}
		</motion.div>
	);
};

export const Animation = forwardRef(({ children, className = null, animation = null }, ref) => {
	if (!animation) return children;
	const skipKeys = ["duration", "delay", "start", "rewards", "add"];
	const [startAnimation, setStartAnimation] = useState(0);
	const scrollTop = useSelector((state) => state.scrollTop);
	const myRef = ref || useRef();
	const add = animation.add || 0;
	let calValue, style;

	useEffect(() => {
		if (!myRef?.current || scrollTop !== 0) return;
		const { top } = myRef.current?.getBoundingClientRect();
		const { innerHeight } = window;
		setStartAnimation(top - innerHeight + innerHeight / 3);
	}, [myRef, scrollTop]);

	for (const key of Object.keys(animation)) {
		if (skipKeys.includes(key)) continue;
		const start = animation.start >= 0 ? animation.start : startAnimation + add;
		const duration = animation.duration || 100;
		const rewards = animation.rewards || false;
		const startValue = animation[key].from;
		const endValue = animation[key].to;
		const currentPosition = scrollTop - start;
		calValue = startValue;

		if (currentPosition > 0) {
			if (rewards) {
				if (currentPosition < duration / 2) {
					calValue = startValue + (currentPosition / (duration / 2)) * (endValue - startValue);
				} else if (currentPosition >= duration / 2 && currentPosition < duration) {
					calValue = endValue - ((currentPosition - duration / 2) / (duration / 2)) * (endValue - startValue);
				} else {
					calValue = startValue;
				}
			} else {
				if (currentPosition < duration) {
					calValue = startValue + (currentPosition / duration) * (endValue - startValue);
				} else {
					calValue = endValue;
				}
			}
		}
		style = { ...style, ...getStyle(key, calValue) };
	}

	return cloneElement(children, { style, className, ref: myRef });
});

const getStyle = (key, value) => {
	switch (key) {
		case "scale":
			return { transform: `scale(${value})` };
		case "x":
			return { transform: `translateX(${value}px)` };
		default:
			return { [key]: value };
	}
};
