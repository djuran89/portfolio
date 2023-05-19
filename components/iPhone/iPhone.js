import { useEffect, useRef } from "react";
import moment from "moment";

import { Animation } from "../animations/animation";

import style from "./iPhone.module.scss";
import Link from "next/link";

function IPhone({ url, add = 0 }) {
	const iphoneRef = useRef(null);
	const animation = {
		x: { from: 1000, to: 0 },
		opacity: { from: 0, to: 1 },
		duration: 400,
		add,
	};

	useEffect(() => {
		const isMobile = window.innerWidth < 768;
		const numberDevice = isMobile ? 1 : 4;
		const height = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--iphoneFrameHeight").replace("px", ""));
		const width = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--iphoneFrameWidth").replace("px", ""));
		const iphone = iphoneRef.current;
		const container = iphone.parentElement.parentElement;
		const containerWidth = container.offsetWidth;
		const caclWidth = containerWidth / numberDevice - 32;
		const calcHeight = (caclWidth / width) * height;
		iphone.style.width = `${caclWidth}px`;
		iphone.style.height = `${calcHeight}px`;
		console.log(caclWidth);

		container.style.flexDirection = isMobile ? "column" : "row";
		container.style.gap = isMobile ? "70px" : "0px";
	}, [iphoneRef]);

	return (
		<Animation className={style.iphoneHolder} animation={animation} ref={iphoneRef}>
			<div>
				<div className={style.iphone}>
					<div className={style.screen}>
						<div className={style.statusBar}>
							<div className={style.time}>{moment().format("HH:mm")}</div>
						</div>
						<div className={style.safeArea}>
							<iframe src={url} allowFullScreen />
						</div>
						<div className={style.bottomBar}>
							<div className={style.url}>
								<Link href={url} target="_blank">
									{url.replace("https://", "").replace("http://", "")}
								</Link>
							</div>
							<div className={style.homeButton} />
						</div>
					</div>
				</div>

				{/* <div className={style.reflection}></div> */}
			</div>
		</Animation>
	);
}

export default IPhone;
