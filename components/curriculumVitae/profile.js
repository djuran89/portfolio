import { Animation } from "@/components/animations/animation";

function Profile() {
	const animation = {
		x: { from: 500, to: 0, duration: 400 },
		opacity: { from: 0, to: 1, duration: 400 },
		add: -100,
	};

	const profileAnimation = {
		x: { from: -500, to: 0, duration: 400 },
		opacity: { from: 0, to: 1, duration: 400 },
		add: -100,
	};

	return (
		<section className="h-1/2 my-outline flex justify-center items-stretch flex-col sm:flex-row py-1">
			<Animation className="w-full h-1/2 sm:w-1/2  flex items-end" animation={profileAnimation} rewards={false}>
				<img className="lg:-scale-x-100" src="/images/Profile-no-bg.png" alt="Profile image" />
			</Animation>

			<Animation className="w-full sm:w-1/2 flex flex-col  p-5" animation={animation} rewards={false}>
				<div>
					<div className="font-bold mb-2">INFO</div>
					<div className="font-light pb-2">
						<div>Name Aleksnadar Djuran</div>
						<div>Born on 18 June 1989</div>
						<div>From Novi Sad, Serbia</div>
					</div>
					<div className="contact">
						<div className="font-bold mb-2">CONTACT</div>
						<div className="contact__info font-light">
							<div>
								<img src="/images/icons/mail.png" alt="mail" className="filter__image inline-block w-5 h-auto mr-3" />
								<a href="mailto:djuran89@icloud.com" title="Send mail to djuran89@icloud.com">
									Email
								</a>
							</div>
							<div>
								<img src="/images/icons/facetime.png" alt="facetime" className="filter__image inline-block w-5 h-auto mr-3" />
								<a href="tel:+38165316252" title="Call on +38165316252">
									Facetime
								</a>
							</div>
							<div>
								<img src="/images/icons/messange.png" alt="messange" className="filter__image inline-block w-5 h-auto mr-3" />
								<a href="sms:+38165316252" title="Send SMS to +38165316252">
									Messange
								</a>
							</div>
							<div>
								<img src="/images/icons/whatsapp.png" alt="whatsapp" className="filter__image inline-block w-5 h-auto mr-3" />
								<a href="https://wa.me/+38165316252" title="+38165316252">
									WhatsApp
								</a>
							</div>
							<div>
								<img src="/images/icons/skype.png" alt="skype" className="filter__image inline-block w-5 h-auto mr-3" />
								<a href="skype:+38165316252" title="Call to djuran.aleksandar">
									Skype
								</a>
							</div>
							<div>
								<img src="/images/icons/github.png" alt="github" className="filter__image inline-block w-5 h-auto mr-3" />
								<a href="https://github.com/djuran89" title="Go my github">
									GitHub
								</a>
							</div>
						</div>
					</div>
				</div>
			</Animation>
		</section>
	);
}

export default Profile;
