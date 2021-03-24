import React from 'react'

export const About = () => {
    return (
        <section id="about" className="vc_row pb-110" style={{backgroundColor: "#0a0b4e;"}}>
			<div className="container">

				<div className="row mb-120">

					<div className="lqd-column col-md-12 border-radius-4 pt-70 pb-90 bg-cover" style={{backgroundImage: "url(./assets/demo/bg/bg-19.jpg); margin-top: -12%;"}}>

						<div className="row">

							<div
								className="lqd-column col-lg-4 col-md-5 col-lg-offset-1 text-white"
								data-custom-animations="true"
								data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","startDelay":"500","delay":"30","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":45,"translateZ":-125,"rotateZ":-1,"opacity":0},"animations":{"translateY":0,"translateZ":0,"rotateZ":0,"opacity":1}}'>

								<h3 className="text-white">About me</h3>
								<p className="mb-60">My name is Eugenia, I’m a freelance Branding & Digital Designer based by the valley in New York. I also have major skills in motion graphics.</p>
								<ul className="social-icon scheme-white social-icon-md">
									<li> <a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
									<li> <a href="#" target="_blank"><i className="fa fa-medium"></i></a></li>
									<li> <a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
									<li> <a href="#" target="_blank"><i className="fa fa-pinterest"></i></a></li>
								</ul>

							</div>

							<div className="lqd-column col-md-4 col-md-offset-2 col-lg-3 col-lg-offset-3">

								<div className="liquid-counter liquid-counter-huge liquid-counter-xl text-white">

									<span className="liquid-counter-text liquid-text-top">More Than</span>
									<div className="liquid-counter-element text-primary" data-enable-counter="true" data-counter-options='{ "targetNumber": "7", "blurEffect": true }'>
										<span>7</span>
									</div>
									<span className="liquid-counter-text liquid-text-bottom">Years of experience</span>
								
								</div>

							</div>

						</div>


					</div>

				</div>

				<div className="row mb-70">

					<div className="lqd-column col-md-3 col-md-offset-1">

						<h6 className="mt-0 font-size-14 text-uppercase font-weight-bold ltr-sp-2 text-secondary">Awards</h6>

					</div>

					<div className="lqd-column col-md-7">

						<div className="row">

							<div
								className="lqd-column col-sm-6 text-white"
								data-custom-animations="true"
								data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":30,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

								<h4 className="text-white mt-0 mb-1">Opentech</h4>
								<p className="text-fade-white-04 mb-3">UI / UX contest winner with CloudPay</p>

								<h4 className="text-white mt-0 mb-1">Warephase</h4>
								<p className="text-fade-white-04 mb-3">Best of Animation with Zara</p>

								<h4 className="text-white mt-0 mb-1">Sumace</h4>
								<p className="text-fade-white-04 mb-3">Top week Featured design</p>

							</div>

							<div
								className="lqd-column col-sm-6 text-white"
								data-custom-animations="true"
								data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":30,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

								<h4 className="text-white mt-0 mb-1">Blackzim</h4>
								<p className="text-fade-white-04 mb-3">Design of the day with Biosock</p>

								<h4 className="text-white mt-0 mb-1">Ontomedia</h4>
								<p className="text-fade-white-04 mb-3">Top Level Certification with Fusion</p>

								<h4 className="text-white mt-0 mb-1">Doncon</h4>
								<p className="text-fade-white-04 mb-3">Top 10 best designers in the world</p>

							</div>

						</div>

					</div>

				</div>

				<div className="row">
					
					<div className="lqd-column col-md-3 col-md-offset-1">

						<h6 className="mt-0 font-size-14 text-uppercase font-weight-bold ltr-sp-2 text-secondary">Press</h6>

					</div>

					<div
						className="lqd-column col-md-7"
						data-custom-animations="true"
						data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":20,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

						<ul className="lqd-custom-menu reset-ul inline-nav">
							<li className="ml-0"><a href="#">Cancity,</a></li>
							<li className="ml-0"><a href="#">Treequote,</a></li>
							<li className="ml-0"><a href="#">Iselectrics,</a></li>
							<li className="ml-0"><a href="#">Plusstrip,</a></li>
							<li className="ml-0"><a href="#">Toughzap,</a></li>
							<li className="ml-0"><a href="#">Codehow,</a></li>
							<li className="ml-0"><a href="#">Zotware,</a></li>
							<li className="ml-0"><a href="#">Statholdings,</a></li>
						</ul>

					</div>

				</div>

			</div>
		</section>
    )
}

export default About;