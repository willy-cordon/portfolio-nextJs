import React from 'react'

const footer = () => {
    return (
        <footer id="contact" className="main-footer pt-80">

		<section className="pb-100">

			<div className="container">
				<div className="row">
	
					<div className="lqd-column col-md-3">
	
						<h6 className="mt-0 mb-1 font-size-14 text-uppercase font-weight-bold ltr-sp-2 text-secondary">Let’s make it happen</h6>
						<h2 className="mt-0 text-white font-size-2-5x lh-13">Let's create the future</h2>
						<p className="mb-60">We’re available for commissions and collaborations, and I’m excited to hear from you about new projects. </p>

						<ul className="social-icon scheme-white social-icon-md">
							<li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#" target="_blank"><i className="fa fa-behance"></i></a></li>
							<li><a href="#" target="_blank"><i className="fa fa-dribbble"></i></a></li>
						</ul>
	
					</div>

					<div className="col-md-8 col-md-offset-1">

						<div className="contact-form contact-form-inputs-sm contact-form-inputs-underlined contact-form-button-bordered contact-form-button-border-thick contact-form-button-md">
							<form action="assets/php/mailer.php" method="post" novalidate="novalidate">
								<div className="row">
									<div className="col-md-6">
										<input type="text" name="name" aria-required="true" aria-invalid="false" placeholder="First Name" required />
									</div>
									<div className="col-md-6">
										<input type="text" name="lname" aria-required="true" aria-invalid="false" placeholder="Last Name" required />
									</div>
									<div className="col-md-6">
										<input type="email" name="email" aria-required="true" aria-invalid="false" placeholder="Your email address" required />
									</div>
									<div className="col-md-6">
										<select name="country" aria-required="true" aria-invalid="false" required>
											<option value="">---</option>
											<option value="United States">United States</option>
											<option value="United Kingdom">United Kingdom</option>
											<option value="Italy">Italy</option>
											<option value="France">France</option>
											<option value="other">Other</option>
										</select>
									</div>
									<div className="col-md-12">
										<textarea cols="10" rows="4" name="message" aria-required="true" aria-invalid="false" placeholder="Message" required></textarea>
									</div>
									<div className="col-md-6">
										<p className="font-size-16 opacity-07"><em>We all know how important your information is. They are always safe with us.</em></p>
									</div>
									<div className="col-md-6 text-md-right">
										<input type="submit" value="SEND MESSAGE" className="font-size-14 ltr-sp-2" />
									</div>
								</div>
							</form>
							<div className="contact-form-result hidden"></div>
						</div>

					</div>
	
				</div>
			</div>

		</section>

		<section className="pt-35 pb-35" style={{backgroundColor:" #060742;"}}>
			<div className="container">
				<div className="row d-flex flex-wrap align-items-center">
	
					<div className="lqd-column col-md-4 text-center text-md-left mb-4 mb-md-0">
	
						<ul className="lqd-custom-menu reset-ul inline-nav font-size-14">
							<li><a href="#">Ave Guide</a></li>
							<li><a href="#">Support</a></li>
							<li><a href="#">Intergrations</a></li>
							<li><a href="#">Community</a></li>
						</ul>
	
					</div>

					<div className="lqd-column col-md-4 text-center mb-4 mb-md-0">

						<figure>
							<img src="./assets/img/logo/logo-light.svg" alt="Ave" />
						</figure>

					</div>
	
					<div className="lqd-column col-md-4 text-center text-md-right">

						<p className="my-0"><span style={{fontSize:" 15px;"}}>© 2019 Ave</span></p>

					</div>
	
				</div>
			</div>
		</section>
		
	</footer>
    )
}

export default footer;