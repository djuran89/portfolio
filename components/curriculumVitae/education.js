import { Typing } from "../animations/animation";

function Education({ start }) {
	return (
		<section className="h-screen flex items-center tracking-tighter">
			<div>
				<Typing className="text-3xl pb-3 font-thin" text="Education:" duration={0.1} delay={0} start={start} />
				<div className="flex gap-3 flex-col lg:pl-6 pl-0">
					<Typing className={"text-xl pb3 font-thin"} text="Electrical Engineering School, Novi Sad" duration={0.2} delay={0.1} start={start} />
					<Typing
						className={"text-xl pb3 font-thin"}
						text="University of Technical Sciences, Novi Sad"
						duration={0.2}
						delay={0.7}
						start={start}
					/>
					<Typing
						className={"text-xl pb3 font-thin"}
						text="Aleph ICT Sertifikat Java web development"
						duration={0.2}
						delay={1.4}
						start={start}
					/>
				</div>
			</div>
		</section>
	);
}

export default Education;
