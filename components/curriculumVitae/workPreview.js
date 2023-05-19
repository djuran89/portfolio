import IPhone from "@/components/iPhone/iPhone";

function WorkPreview() {
	return (
		<section className="flex justify-center items-center min-h-screen lg:flex-row flex-col">
			<IPhone url="http://18.195.49.234" add={-500} />
			<IPhone url="http://18.195.49.234" add={-450} />
			<IPhone url="http://18.195.49.234" add={-400} />
			<IPhone url="http://18.195.49.234" add={-350} />
		</section>
	);
}

export default WorkPreview;
