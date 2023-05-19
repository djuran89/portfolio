import Summary from "@/components/curriculumVitae/summary";
import StartScreen from "@/components/curriculumVitae/startScreen";
import WorkPreview from "@/components/curriculumVitae/workPreview";
import Education from "@/components/curriculumVitae/education";
import Skills from "@/components/curriculumVitae/skills";
import Profile from "@/components/curriculumVitae/profile";

function Index() {
	return (
		<main className="container mx-auto">
			<StartScreen />
			<Summary />
			<WorkPreview />
			<Education />
			<Skills />
			<Profile />
		</main>
	);
}

export default Index;
