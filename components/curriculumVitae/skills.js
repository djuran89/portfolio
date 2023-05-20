import { Animation } from "../animations/animation";

function Skills() {
	const animation = {
		opacity: { from: 0, to: 1 },
		rewards: true,
		duration: 500,
	};
	return (
		<section className="pb-20">
			<Animation className="text-3xl pb-3 font-thin" animation={animation}>
				<div className="tracking-tighter">Technical Skills:</div>
			</Animation>
			<div className="text-xl flex gap-3 flex-col lg:pl-6 pl-0 tracking-tightest">
				<Animation className="text-xl pb3 font-thin" animation={animation}>
					<div>Languages: JavaScript, TypeScript, Python, Swift, Java, PHP</div>
				</Animation>
				<Animation className="text-xl pb3 font-thin" animation={animation}>
					<div>Markup Language: HTML5, CSS3, SASS, Bootstrap, Tailwind CSS</div>
				</Animation>
				<Animation className="text-xl pb3 font-thin" animation={animation}>
					<div>Frameworks: Node.js, Express.js, React, Next.js, React Native, Angular, Spring, Laravel</div>
				</Animation>
				<Animation className="text-xl pb3 font-thin" animation={animation}>
					<div>Databases: MySQL, MSSQL, PostgreSQL, MongoDB, Firebase</div>
				</Animation>
				<Animation className="text-xl pb3 font-thin" animation={animation}>
					<div>Tools: Git, AWS, Google Cloud, Azure, Nginx, OAuth 2.0, RESTfull API, GraphQL</div>
				</Animation>
				<Animation className="text-xl pb3 font-thin" animation={animation}>
					<div>Library: Socket.IO, JWT, Chart.js, bcrypt, Three.js, Moment, etc.</div>
				</Animation>
				<Animation className="text-xl pb3 font-thin" animation={animation}>
					<div>Design: UI/UX, Photoshop, Illustrator, Lightroom, Blender, Sketch, Figma</div>
				</Animation>
			</div>
		</section>
	);
}

export default Skills;
